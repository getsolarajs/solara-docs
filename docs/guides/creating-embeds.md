---
sidebar_position: 1
title: Creating Embeds
---

# Creating Embeds

Discord Embeds allow you to create richly formatted messages. Solara.js provides a set of functions to easily build embeds within your command's `code` block.

## How Embed Functions Work

Embed functions (`$title`, `$description`, `$addField`, etc.) generally **do not return visible text**. Instead, they modify an internal `embedData` object associated with the current command execution context.

When the command finishes, or when you call a sending function like `$reply` or `$interactionReply`, Solara.js checks this `embedData`. If it contains information (like a title or fields), it constructs a Discord Embed object and includes it in the message payload.

## Core Embed Functions

Here are the primary functions used to build an embed:

*   `$title[text]`: Sets the main title of the embed.
*   `$description[text]`: Sets the main body text of the embed. Supports Markdown.
*   `$color[hex code or color name]`: Sets the color accent on the left side. Accepts hex codes (e.g., `#FF0000`) or common color names (e.g., `Red`, `Blue`, `Green`, `Random`).
*   `$author[name;iconURL?;url?]`: Sets the author section at the top.
    *   `iconURL?`: Optional URL for a small image next to the author name.
    *   `url?`: Optional URL to link the author name to.
*   `$footer[text;iconURL?]`: Sets the footer section at the bottom.
    *   `iconURL?`: Optional URL for a small image next to the footer text.
*   `$addField[name;value;inline?]`: Adds a field to the embed. Embeds can have multiple fields.
    *   `name`: The title of the field.
    *   `value`: The content of the field. Supports Markdown.
    *   `inline?`: `true` allows this field to sit next to other inline fields (up to 3 per row). `false` (default) makes it take a full row.
*   `$timestamp[milliseconds?]`: Adds a timestamp, usually displayed near the footer.
    *   `milliseconds?`: Optional Unix timestamp (in milliseconds). Defaults to the current time if omitted. Often used with date functions like `$accountCreatedDate`.
*   `$thumbnail[url]`: Sets a small image in the top-right corner.
*   `$image[url]`: Sets a large image displayed below the embed content.

## Example: Building a User Info Embed

This command combines several embed functions to show user information:

```javascript title="commands/profile.js"
module.exports = {
  name: 'profile',
  description: 'Displays your profile information.',
  type: 'both', // Works as !profile and /profile
  code: `
    $author[$userTag;$authorAvatar;$authorAvatar] $comment[Author: User#1234, Icon: user avatar, Link: user avatar]
    $title[User Profile]
    $description[Here is some information about <@$authorID>.]
    $color[#7289DA] $comment[Discord Blurple]
    $thumbnail[$authorAvatar]

    $addField[User ID;$authorID;true] $comment[Inline field]
    $addField[Nickname;$nickname;true] $comment[Inline field]
    $addField[Is Bot?;$isBot[$authorID];true] $comment[Inline field]

    $addField[Account Created;$timeStamp[F;$accountCreatedDate]] $comment[Full timestamp, non-inline]
    $addField[Joined Server;$timeStamp[R;$memberJoinedDate]] $comment[Relative timestamp, non-inline]

    $footer[Requested by $username;$authorAvatar]
    $timestamp $comment[Add current time timestamp]

    $comment[Now, decide how to send based on trigger type]
    $if[$isInteraction;
        $interactionReply
    ;
        $reply
    ]
  `
};
```

**Result:** This code will generate a nicely formatted embed with the user's details, including their avatar as both the author icon and thumbnail, several fields (some inline), timestamps, and a footer. The final `$if` block ensures it's sent correctly whether triggered via prefix or slash command.

By combining these functions, you can create informative and visually appealing messages for your bot. Remember that these functions modify the embed state, and the actual embed is constructed and sent when a sending function is called or implicitly at the end of execution.