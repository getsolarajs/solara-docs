---
sidebar_position: 3
title: Handling Interactions
---

# Handling Interactions

Solara.js provides seamless ways to handle Discord Interactions beyond slash commands, including Button Clicks, Select Menu Choices, and Modal Submissions.

## The Core Idea

The process generally involves two steps:

1.  **Creating the Component/Modal:** Use specific Solara.js functions within a command's `code` to define the button, select menu, or modal you want to send to the user. Assign a unique `customId` to each component that needs a response.
2.  **Handling the Interaction:** Create a *separate* Solara.js command file where the `name` property **exactly matches** the `customId` you assigned, and set the `type` property to `button`, `selectMenu`, or `modalSubmit`. The `code` in this handler file will execute when the user interacts with that specific component.

## 1. Creating Components

Use these functions within a command's code block (e.g., inside a command triggered by `!ask` or `/poll`).

*   `$addButton[customIDOrURL;label;style;disabled?(true/false);emoji?]`: Adds a button.
    *   `customIDOrURL`: **Crucial.** Set a unique ID (e.g., `confirm_action`, `role_select_123`) if you want to handle the click. Use a URL (`https://...`) for link buttons.
    *   `label`: Text displayed on the button.
    *   `style`: `Primary` (blurple), `Secondary` (grey), `Success` (green), `Danger` (red), `Link` (grey, requires URL).
    *   `disabled?`: Optional `true` to disable the button initially.
    *   `emoji?`: Optional emoji to display on the button.
*   `$addSelectMenu[customID;placeholder;minValues?;maxValues?;disabled?]`: Adds a string select menu container. **Must be followed by `$addSelectOption` calls.**
    *   `customID`: **Crucial.** Unique ID for handling selections (e.g., `color_picker`, `ticket_reason`).
    *   `placeholder`: Greyed-out text shown before selection.
    *   `minValues?`: Minimum options to select (default: 1).
    *   `maxValues?`: Maximum options to select (default: 1).
    *   `disabled?`: Optional `true` to disable the menu.
*   `$addSelectOption[label;value;description?;emoji?;default?]`: Adds an option to the *most recently added* select menu.
    *   `label`: Text shown for the option.
    *   `value`: The actual value sent to your handler when selected.
    *   `description?`: Optional text shown below the label.
    *   `emoji?`: Optional emoji shown next to the label.
    *   `default?`: Optional `true` to pre-select this option.

*   `$addModal[...]`: (Not directly supported for *creation* via standard functions in this version. Modals are typically triggered by interactions like button clicks or commands, and their structure is defined differently, often via direct Discord.js methods within custom functions or potentially planned future Solara.js functions).

**Example: Sending Buttons**

```javascript title="commands/ask_confirm.js"
module.exports = {
  name: 'askconfirm',
  type: 'message',
  code: `
    Are you sure you want to proceed?
    $addButton[confirm_yes;Yes, Proceed;Success]
    $addButton[confirm_no;No, Cancel;Danger]
    $sendMessage
  ` // Explicitly send the message with buttons
};
```

## 2. Handling Interactions

Create new command files in your commands directory.

**Button Handler (`commands/confirm_yes.js`)**

```javascript title="commands/confirm_yes.js"
module.exports = {
  name: 'confirm_yes', // Matches the button's customId
  type: 'button',      // Specifies this handles a button click
  code: `
    $interactionUpdate[Okay, proceeding with the action!]
    $comment[Update the original message, disable buttons maybe later]
    $log[User $interactionUserID confirmed action.]
  `
};
```

**Select Menu Handler (`commands/color_picker.js`)**

```javascript title="commands/color_picker.js"
// Assuming a command previously sent a select menu with customId 'color_picker'
// and options like { label: 'Red', value: 'red_role_id' }
module.exports = {
  name: 'color_picker', // Matches the select menu's customId
  type: 'selectMenu',   // Specifies this handles a select menu choice
  code: `
    $let[selectedColorRole;$interactionValues] $comment[Gets the 'value' of the chosen option]
    $addRole[$interactionUserID;$get[selectedColorRole];Selected color role]
    $interactionUpdate[Gave you the color role!] $comment[Edit original message]
    $followUp[You selected role ID: $get[selectedColorRole];true] $comment[Send an ephemeral follow-up]
  `
};
```

**Modal Handler (`commands/feedback_submit.js`)**

```javascript title="commands/feedback_submit.js"
// Assuming an interaction (e.g., button click) triggered showing a modal
// with customId 'feedback_submit' and fields like 'rating' and 'comments'
module.exports = {
  name: 'feedback_submit', // Matches the modal's customId
  type: 'modalSubmit',    // Specifies this handles a modal submission
  code: `
    $let[userRating;$modalFieldValue[rating]]
    $let[userComments;$modalFieldValue[comments]]

    $log[Feedback received from $interactionUserID: Rating=$get[userRating], Comments=$get[userComments]]

    $interactionReply[Thank you for your feedback!;true] $comment[Send an ephemeral confirmation]
  `
};
```

## Accessing Interaction Data

Inside handler commands (`type: button/selectMenu/modalSubmit`), use these functions:

*   `$interactionUserID`: The ID of the user who interacted.
*   `$interactionCustomID`: The `customId` of the component that was interacted with (useful if one handler manages similar components).
*   `$interactionValues`: **(Select Menus Only)** Returns the selected `value`(s). If multiple values are selected, they are joined by semicolons (`;`).
*   `$modalFieldValue[fieldCustomId]`: **(Modal Submits Only)** Gets the value entered by the user into a specific text input field within the modal (identified by the field's `customId`).

## Responding to Interactions

You **must** respond to interactions to prevent them from showing an error state.

*   `$interactionReply[content;ephemeral?;returnMsgID?]`: Sends a *new* message reply to the interaction. Fails if already replied/deferred.
    *   `ephemeral?`: `true` makes the reply visible only to the interacting user.
*   `$interactionUpdate[content?]`: **(Components Only)** Edits the *original* message the button/select menu was attached to. Clears existing content/embeds/components unless you rebuild them in the code.
*   `$deferReply[ephemeral?]`: Acknowledges the interaction immediately (use if your code takes > 3 seconds). You *must* follow up later.
*   `$followUp[content;ephemeral?;returnMsgID?]`: Sends a new message after having used `$deferReply` or after an initial `$interactionReply`/`$interactionUpdate`.
*   `$ephemeral`: Use before `$deferReply` or `$interactionReply` to mark the response as ephemeral.

Handling interactions this way keeps your logic organized, associating specific code execution with specific user interface elements.