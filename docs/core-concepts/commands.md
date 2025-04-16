---
sidebar_position: 2
title: Using Functions
---

# Using Functions in Solara.js

The core of creating command logic in Solara.js involves using special **functions** within the `code` property of your command files. These functions start with a dollar sign (`$`) and handle various tasks.

## Function Syntax

Functions are called like this:

1.  **Without Arguments:** `$functionName`
    *   Example: `$ping` (returns the bot's latency)

2.  **With Arguments:** `$functionName[argument1;argument2;argument3]`
    *   Arguments are separated by semicolons (`;`).
    *   Example: `$addField[Field Title;Some value here;true]` (adds an inline field to an embed)

## How Code Executes

When a command is triggered, Solara.js reads the `code` string from top to bottom:

1.  It looks for `$function` calls.
2.  When it finds one, it executes the function's internal logic.
3.  Functions can either:
    *   **Return Text:** Replace the `$function[...]` call with some text (e.g., `$authorTag` becomes `User#1234`).
    *   **Perform Actions:** Do something behind the scenes, like preparing an embed, setting a variable, or sending a message directly. These often return nothing (empty text).

## Building Replies

*   **Function Output:** Text returned by functions becomes part of the final message content.
*   **Plain Text:** Any text in your `code` that *isn't* part of a function call is also included.
*   **Implicit Sending:** If you don't use a specific sending function (like `$reply`), Solara.js gathers all the generated text and any prepared embed/components and tries to send them automatically at the end.
*   **Explicit Sending:** Functions like `$reply[...]`, `$sendMessage[...]`, or `$interactionReply[...]` send the message immediately with the content you provide (or the content built up so far).

## Examples

**1. Simple Text Reply:**

```javascript
// commands/greet.js
module.exports = {
  name: 'greet',
  code: `Hello there, $userTag!` // $authorTag returns the user's tag (e.g., User#1234)
};
// Bot automatically sends: "Hello there, User#1234!"
```

**2. Using Arguments and Sending:**

```javascript
// commands/say.js
module.exports = {
  name: 'say',
  code: `
    $reply[You told me to say: $message]
    $deleteCommand
  `
  // $message returns all text after the command name.
  // $reply[...] sends the message immediately.
  // $deleteCommand removes the user's triggering message.
};
// Usage: !say Hello -> Bot replies: "You told me to say: Hello"
```

**3. Building an Embed:**

Embed functions modify embed data behind the scenes. They don't usually return visible text.

```javascript
// commands/userinfo.js
module.exports = {
  name: 'userinfo',
  code: `
    $title[User Info for $username]      $comment[Sets the embed title]
    $description[ID: $authorID]          $comment[Sets the embed description]
    $color[Blue]                         $comment[Sets the embed color]
    $thumbnail[$authorAvatar]            $comment[Sets the embed thumbnail]
    $addField[Joined Server;$timeStamp[R;$memberJoinedDate]] $comment[Adds a field]

    $reply $comment[Sends the message with the built embed]
  `
  // $username, $authorID, $authorAvatar, $memberJoinedDate return user info.
  // $title, $description, $color, $thumbnail, $addField configure the embed.
  // $reply sends the resulting embed.
};
```

**4. Using Logic (`$if`):**

Functions can control the flow. `$if[condition;then;else]` executes different code based on a condition.

```javascript
// commands/levelcheck.js
module.exports = {
    name: 'levelcheck', // Command trigger name
    code: `
      // Set a temporary variable 'userLevel' to 15 for this example.
      // In a real bot, you'd likely fetch this from a database ($getUserVar, etc.).
      $let[userLevel;15]

      // $if checks a condition. Executes first part if true, second part if false.
      // Syntax: $if[condition; code_if_true; code_if_false]
      $if[$get[userLevel]>=10; // Condition: Check if the user's level is 10 or higher.

        // --- Code if True (level >= 10) ---
        // $get retrieves the variable's value for display.
        You are level $get[userLevel]! You have access to cool stuff!

      ; // Separator for true/false blocks

        // --- Code if False (level < 10) ---
        You are only level $get[userLevel]. Keep chatting!

      ] // End of $if
    `
};
```
