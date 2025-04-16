---
sidebar_position: 1
title: Function List
id: function-list
slug: /reference/function-list
---

# Function Reference

This page lists the built-in functions available in Solara.js, categorized for easier navigation.

**Note:** Arguments marked with `[]` are optional. Default values are often implied or noted within the description or brackets. Semicolons (`;`) separate arguments within function calls. Functions marked **[SECURITY RISK]** or **[DANGEROUS]** should be used with extreme caution. The **[OWNER ONLY]** tag is a *recommendation* for functions that pose risks or affect core bot settings; the library itself does not enforce owner-only execution unless configured separately.

## Core & Bot Info

*   `$applicationCommandCount`: Returns the number of registered global slash commands.
*   `$applicationCommandList`: Returns a semicolon-separated list of registered global slash command names.
*   `$applicationOwnerID`: Returns the user ID of the application owner.
*   `$botAvatar`: Returns the client user's (the bot's) avatar URL.
*   `$botGuildsCount`: Returns the number of guilds the bot is in.
*   `$botID`: Returns the client user's (the bot's) ID. Alias: `$clientID`.
*   `$botInviteURL[permissionBitfield or permName1;permName2...]`: Generates the bot's invite URL with specified permissions using either a bitfield number or permission names.
*   `$botLeave[guildID?]`: Makes the bot leave the current guild or a specified guild. **[Potentially Dangerous]**
*   `$botName`: Returns the client user's (the bot's) username.
*   `$botPing`: Returns the bot's websocket heartbeat ping in milliseconds. Alias: `$ping`.
*   `$botPresenceActivityName`: Returns the name of the bot's current primary activity. Requires Presence intent.
*   `$botPresenceActivityType`: Returns the type of the bot's current primary activity (e.g., Playing, Watching). Requires Presence intent.
*   `$botPresenceStatus`: Returns the bot's current presence status (online, idle, dnd, invisible). Requires Presence intent.
*   `$botTags`: Returns the client user's application tags as a semicolon-separated list.
*   `$botToken`: Returns a redacted bot token string. **[SECURITY RISK - OWNER ONLY]**
*   `$botTyping[channelID?]`: Makes the bot appear as typing in the current or specified channel. Duration is temporary.
*   `$botUsersCount`: Returns the total number of users the bot can see across all guilds.
*   `$changeBotAvatar[imageURL or buffer]`: Changes the bot's avatar. **[RATE LIMITED - OWNER ONLY]**
*   `$changeBotStatus[status;activityType;activityName;streamURL?]`: Changes the bot's presence (status, activity). Status: online/idle/dnd. Type: Playing/Watching/Listening/Competing. Optional streamURL for Streaming type.
*   `$changeBotUsername[newUsername]`: Changes the bot's username. **[RATE LIMITED - OWNER ONLY]**
*   `$clientID`: Returns the client user's (the bot's) ID. Alias for `$botID`.
*   `$developers`: Returns the list of Solara developers (p61s, iv.aylo).
*   `$djsVersion`: Returns the installed discord.js version.
*   `$isVerifiedBot`: Checks if the bot is verified by Discord. Returns true or false.
*   `$nodeVersion`: Returns the running Node.js version.
*   `$packageVersion`: Returns the current version of the Solara package.
*   `$ping`: Returns the bot's websocket heartbeat ping in milliseconds. Alias: `$botPing`.
*   `$shardCount`: Returns the total number of shards for the bot (usually 1 if not sharded).
*   `$shardID`: Returns the ID of the current shard (usually 0 if not sharded).
*   `$uptime[format?]`: Returns the bot's uptime. Optional format: ms/s/m/h/d/full (default: ms).

## System / OS Info

*   `$cpuCores`: Returns the number of logical CPU cores available.
*   `$cpuUsage`: Returns current process CPU usage percentage (approximate).
*   `$env[variableName]`: Gets an environment variable's value by name. **[SECURITY RISK - OWNER ONLY]**
*   `$osInfo[property?]`: Gets OS information. Property: hostname/type/platform/arch/release/uptime/totalmem/freemem. If no property, returns basic info.
*   `$platformArch`: Returns the OS platform architecture (e.g., 'x64'). Alias for `$osInfo[arch]`.
*   `$processID`: Returns the process ID (PID) of the bot application.
*   `$ramUsage`: Returns the current memory usage in megabytes (RSS).
*   `$restart`: Attempts to restart the bot process by spawning a new instance. **[DANGEROUS - OWNER ONLY]**
*   `$shutdown`: Shuts down the bot process completely. **[DANGEROUS - OWNER ONLY]**

## Message Sending & Basic Replies

*   `$channelSendMessage[channelID;content?;returnMsgID?]`: Sends message/embed/components to a specific channel ID. Uses context's built items if `content` is omitted. Set `returnMsgID` to true to optionally return the message ID.
*   `$reply[content?;returnMsgID?]`: Explicitly replies to the command message. Uses context's built embed/components/attachments if `content` is omitted. Set `returnMsgID` to true to optionally return the message ID. Stores sent message.
*   `$sendMessage[content?;returnMsgID?]`: Explicitly sends message/embed/components/attachments to the current channel. Uses context's built items if `content` is omitted. Set `returnMsgID` to true to optionally return the message ID. Stores sent message.

## Interaction Handling & Replies

*   `$autocompleteOptionName`: Returns the name of the focused option in an autocomplete interaction.
*   `$autocompleteOptionValue`: Returns the current value of the focused option in an autocomplete interaction.
*   `$deferReply[ephemeral?]`: Defers the initial reply to an interaction, showing a "thinking..." state. Necessary if processing takes >3 seconds. Set `ephemeral` to true for an ephemeral deferral.
*   `$ephemeral`: Marks the interaction response (when using `$interactionReply` or `$followUp`) as ephemeral. Use *before* the reply/defer/followUp function.
*   `$followUp[content?;ephemeral?;returnMsgID?]`: Sends a follow-up message after an interaction has already been replied to or deferred. Can be used multiple times. Uses context's built items if `content` is omitted. Set `ephemeral` to true for an ephemeral follow-up. Set `returnMsgID` to true (and ensure not ephemeral) to optionally return the message ID. Alias `$interactionFollowUp`.
*   `$getInteractionLocale`: Returns the locale string (e.g., 'en-US') of the interaction.
*   `$getInteractionSubcommand`: Returns the name of the used subcommand from a slash command interaction, if one was used. Returns empty string otherwise.
*   `$getInteractionSubcommandGroup`: Returns the name of the used subcommand group from a slash command interaction, if one was used. Returns empty string otherwise.
*   `$interactionChannelID`: Returns the ID of the channel where the interaction occurred.
*   `$interactionCustomID`: Returns the `customId` of the button, select menu, or modal that triggered the interaction. Returns error if not a component/modal interaction.
*   `$interactionFollowUp[content?;ephemeral?;returnMsgID?]`: Alias for `$followUp`.
*   `$interactionGuildID`: Returns the ID of the guild where the interaction occurred.
*   `$interactionID`: Returns the unique ID of the current interaction.
*   `$interactionOption[optionName]`: Gets the value of a slash command option by its name.
*   `$interactionReply[content?;ephemeral?;returnMsgID?]`: Replies *once* to a slash command, button, or select menu interaction. Fails if already replied/deferred. Uses context's built items if `content` is omitted. Set `ephemeral` to true for an ephemeral reply. Set `returnMsgID` to true (and ensure not ephemeral) to optionally return the message ID.
*   `$interactionResponseExists`: Checks if the interaction has been replied to or deferred. Returns true or false. Alias `$isReplied`.
*   `$interactionToken`: Returns the interaction's token. **[SECURITY RISK - OWNER ONLY]**
*   `$interactionUpdate[content?]`: Edits the *original message* associated with a component (button/select menu) interaction. Cannot be used for slash commands or modals. Uses context's built items if `content` is omitted.
*   `$interactionUserID`: Returns the ID of the user who initiated the interaction. Alias `$authorID` in interaction context.
*   `$interactionValues`: Returns the selected value(s) from a select menu interaction. If multiple values are selected, they are joined by a semicolon. Returns error if not a select menu interaction.
*   `$isAutocomplete`: Checks if the interaction is an autocomplete request. Returns true or false.
*   `$isButtonInteraction`: Checks if the interaction is a button click. Returns true or false.
*   `$isDeferred`: Checks if the interaction reply has been deferred. Returns true or false.
*   `$isEphemeral`: Checks if the interaction was deferred ephemerally (or marked via `$ephemeral`). Returns true or false.
*   `$isInteraction`: Returns true if the current context is an interaction, false otherwise.
*   `$isMessage`: Returns true if the current context is a message, false otherwise.
*   `$isModalSubmit`: Checks if the interaction is a modal submission. Returns true or false.
*   `$isReplied`: Checks if the interaction has been replied to (or deferred). Returns true or false. Alias for `$interactionResponseExists`.
*   `$isSelectMenuInteraction`: Checks if the interaction is any select menu type. Returns true or false.
*   `$respondAutocomplete[choicesJsonString]`: Responds to an autocomplete interaction with choices. `choicesJsonString` must be a JSON array of `{name: string, value: string}` objects (max 25).
*   `$slashCommandName`: Returns the name of the executed slash command. Returns error if not a slash command interaction.

## Modal Handling

*   `$addModal[customID;title;$addTextInputFunction1;$addTextInputFunctionN...]`: Builds modal data in the context. Requires one or more `$addTextInput` calls as subsequent arguments. Show the modal using an interaction response function (like `$interactionReply` used within a button handler, which implicitly shows the modal).
*   `$addTextInput[customID;label;style;required?;minLength?;maxLength?;placeholder?;value?]`: Defines a text input field *for use within `$addModal`*. Style: Short/Paragraph. Required: true/false. Returns the configuration object for the modal builder (do not use the return value directly).
*   `$modalComponentValue[fieldCustomId]`: Returns the text value submitted by the user for a specific text input field within a modal submit interaction. Alias for `$modalFieldValue`.
*   `$modalFieldValue[fieldCustomId]`: Returns the text value submitted by the user for a specific text input field (identified by its `customId`) within a modal submit interaction. Returns error if not a modal submit or field not found.

## Component Building

*   `$addActionRow[$componentFunction1;$componentFunctionN...]`: Conceptually groups component function calls (like `$addButton` or `$addSelectMenu`) into an action row. Order of calls matters.
*   `$addButton[customIDOrURL;label;style;disabled?;emoji?]`: Adds a button to the current message component row. Style: Primary/Secondary/Success/Danger/Link. Disabled: true.
*   `$addChannelSelectMenu[customID;placeholder;minValues=1?;maxValues=1?;channelTypesJson?;disabled?]`: Adds a channel select menu to the current message component row. `channelTypesJson` is a JSON array of channel type numbers (e.g., `[0, 5]` for text & announcement). Disabled: true.
*   `$addMentionableSelectMenu[customID;placeholder;minValues=1?;maxValues=1?;disabled?]`: Adds a user and role select menu to the current message component row. Disabled: true.
*   `$addRoleSelectMenu[customID;placeholder;minValues=1?;maxValues=1?;disabled?]`: Adds a role select menu to the current message component row. Disabled: true.
*   `$addSelectMenu[customID;placeholder;minValues=1?;maxValues=1?;disabled?]`: Adds a string select menu builder to the context. Use `$addSelectMenuOption` immediately after to add options to *this* menu.
*   `$addSelectMenuOption[label;value;description?;emoji?;default?]`: Adds an option to the *most recently added string select menu builder*. Must follow `$addSelectMenu`. Default: true/false. Alias: `$addSelectOption`.
*   `$addUserSelectMenu[customID;placeholder;minValues=1?;maxValues=1?;disabled?]`: Adds a user select menu to the current message component row. Disabled: true.
*   `$getComponentData[customID]`: Retrieves JSON data for a component by customID from the last message. **[Not Implemented Reliably]**

## Component Modifiers (Use after adding the component)

*   `$setButtonDisabled[disabled(true/false)]`: Sets the disabled state of the *last added button* in the current context.
*   `$setButtonEmoji[emoji]`: Sets the emoji of the *last added button* in the current context.
*   `$setButtonLabel[label]`: Sets the label of the *last added button* in the current context.
*   `$setButtonStyle[style]`: Sets the style (Primary/Secondary/Success/Danger/Link) of the *last added button* in the current context.

## Message Actions & Info

*   `$addReaction[messageID;emoji1;emoji2...]`: Adds one or more reactions to a specified message. Bot needs access to the emoji and permissions.
*   `$attachment[index=1?]`: Returns the URL of the attachment at the specified 1-based index from the triggering message.
*   `$awaitMessages[filterUserID;timeMs]`: Waits for a single message matching the `filterUserID` within `timeMs`. Returns the message content or empty if timed out. Basic implementation.
*   `$awaitReactions[messageID;timeMs;emoji1;emoji2...;maxUsers=1?;removeReaction?]`: Awaits reactions on a message. `emojis` are what to listen for. Returns collected reaction info (implementation specific). `removeReaction`: true/false. **[Basic Implementation]**
*   `$clear[amount;filterUserID?;pinned?]`: Bulk deletes a specified number of messages (2-100) in the current channel. Can optionally filter by `filterUserID` and ignore/only delete `pinned` messages (true/false). Requires Manage Messages permission.
*   `$clearReactions[messageID;emoji?]`: Removes all reactions or a specific `emoji`'s reactions from a specified message. Requires Manage Messages permission.
*   `$crosspostMessage[messageID;channelID?]`: Publishes (crossposts) a message in an announcement channel (`channelID` defaults to message's channel). Requires Manage Messages permission in the channel.
*   `$deleteIn[milliseconds]`: Deletes the last message sent via `$sendMessage` or `$reply` after a specified delay. **[Potentially unreliable, consider `$wait` + `$deleteMessageByID`]**
*   `$deleteMessageByID[messageID;channelID?;reason?]`: Deletes a specific message by its ID in the current or specified `channelID`. Requires Manage Messages if not own message.
*   `$editIn[milliseconds;newMessageContent?]`: Edits the last message sent via `$sendMessage` or `$reply` after a delay. Uses context's built items if `newMessageContent` is omitted. **[Potentially unreliable, consider `$wait` + `$editMessage`]**
*   `$editMessage[messageID;newContent?]`: Edits a specific message previously sent by the bot. Uses context's built items if `newContent` is omitted.
*   `$fetchMessage[messageID;channelID?]`: Fetches a message by ID from the specified channel (or current channel) to ensure it's cached. Returns the message ID if found.
*   `$findMessage[query;channelID?;limit=50?]`: Finds the first message ID containing the `query` text in a specified channel (or current). Searches backwards up to `limit`.
*   `$getMessageComponents[messageID]`: Returns the component structure (buttons, select menus) of a specific message as a JSON string.
*   `$getMessageEmbed[messageID;index=1?]`: Returns JSON string of a specific embed (by 1-based `index`) on a given message.
*   `$getMessageFlags[messageID]`: Returns a semicolon-separated list of message flag names (e.g., `CROSSPOSTED`, `EPHEMERAL`) for a specific message.
*   `$getMessageInteraction[messageID]`: Returns basic info (ID, Type, Name, UserID) if the specified message is an interaction response.
*   `$getMessageJumpURL[messageID;channelID?;guildID?]`: Returns the jump URL for a specific message. `channelID` and `guildID` default to the message's context.
*   `$getMessageReactions[messageID;emoji?;property=count/users?]`: Returns reaction count or a semicolon-separated list of user IDs for reactions on a message. Specify `property` ('count' or 'users'). If `emoji` is omitted, gets total reactions (count only).
*   `$isPinned[messageID?]`: Checks if the trigger message (or specified `messageID`) is pinned. Returns true or false.
*   `$isReplied[messageID?]`: Checks if the trigger message (or specified `messageID`) is a reply to another message. Returns true or false.
*   `$lastMessageID`: Returns the ID of the last message sent by `$sendMessage` or `$reply` in the current execution context.
*   `$lastMessageIDInChannel[channelID?]`: Returns the ID of the most recent message sent in the current or specified channel (relies on cache, may not be fully accurate). Alias `$LastMessageIDInChannel`.
*   `$message[index?]`: Returns the command arguments combined, or a specific argument by 1-based `index`. Alias for `$messageContent`.
*   `$messageArg[index]`: Returns the argument at the specified 1-based `index` from a prefix command.
*   `$messageArgs`: Returns semicolon-separated arguments from a prefix command.
*   `$messageAttachmentCount`: Returns the number of attachments on the triggering message.
*   `$messageAuthorObject`: Returns JSON string representing the author (`User`) object of the triggering message.
*   `$messageChannelID`: Returns the channel ID where the triggering message was sent. Alias for `$channelID` in message context.
*   `$messageContent[index?]`: Returns the raw content of the command arguments combined, or a specific argument by 1-based `index`.
*   `$messageData[property]`: Retrieves data about the last deleted message in the channel (basic snipe). Property: content/authorID/authorTag/timestamp/id.
*   `$messageEditedTimestamp`: Returns the timestamp (in ms) when the command message was last edited, or empty if not edited.
*   `$messageExists[messageID;channelID]`: Checks if a message with the given ID exists (can be fetched) in the specified channel. Returns true or false.
*   `$messageGuildID`: Returns the guild ID where the triggering message was sent. Alias for `$guildID` in message context.
*   `$messageID`: Returns the ID of the command message (if applicable).
*   `$messageReactionUsers[messageID;emoji]`: Returns semicolon-separated list of user IDs who reacted with a specific emoji on a message.
*   `$messageTimestamp`: Returns the creation timestamp (in ms) of the triggering message.
*   `$messageType`: Returns the type of the command message (e.g., Default, Reply).
*   `$messageURL`: Returns the jump URL of the command message (if applicable).
*   `$noMentionMessage`: Returns the command arguments (`$message`) without user/role/channel/everyone mentions.
*   `$pinMessage[messageID;reason?]`: Pins a specified message in its channel. Requires Manage Messages permission.
*   `$purgeUserMessages[userID;amount;channelID?;reason?]`: Purges up to `amount` (max 100) messages sent by a specific `userID` in a channel (`channelID` defaults to current). Requires Manage Messages.
*   `$removeReaction[messageID;emoji;userID=@me?]`: Removes a specific `emoji` reaction from a `messageID`, optionally specifying the `userID` (defaults to the bot). Alias `$removeReactionEmoji`. Requires Manage Messages if not own reaction removal.
*   `$removeReactionEmoji[messageID;emoji;userID=@me?]`: Alias for `$removeReaction`.
*   `$repliedMessageAuthor`: Returns the User ID of the author of the message being replied to (if the trigger message is a reply).
*   `$repliedMessageID`: Returns the ID of the message being replied to (if the trigger message is a reply).
*   `$suppressEmbeds[messageID;suppress(true/false)]`: Suppresses or unsuppresses embeds on the bot's own message. `suppress` should be true or false. Requires Manage Messages.
*   `$unpinMessage[messageID;reason?]`: Unpins a specified message in its channel. Requires Manage Messages permission.

## Embed Building

*   `$addEmptyField[inline?]`: Adds an empty field to the embed, useful for layout spacing. `inline`: true/false (defaults to false).
*   `$addField[name;value;inline?]`: Adds a field with a name and value to the embed. `inline`: true/false (defaults to false).
*   `$addTimestamp[milliseconds?]`: Adds a timestamp to the embed footer. Defaults to the current time if no millisecond timestamp is provided.
*   `$author[name;iconURL?;url?]`: Sets the embed author section with a name and optional icon URL and URL link.
*   `$color[hex code or color name]`: Sets the embed color using a hex code (e.g., `#FF0000`) or a standard color name (e.g., `Red`).
*   `$description[text]`: Sets the main text content of the embed description.
*   `$footer[text;iconURL?]`: Sets the embed footer section with text and an optional icon URL.
*   `$getEmbedJSON`: Returns the current embed data being built in the context as a JSON string.
*   `$image[url]`: Sets the main large image URL for the embed.
*   `$setEmbedJSON[jsonString]`: Replaces the current embed data being built in the context with data parsed from the provided valid embed JSON string.
*   `$setEmbedURL[url]`: Sets the URL that the embed title links to.
*   `$thumbnail[url]`: Sets the small thumbnail image URL for the embed.
*   `$title[text]`: Sets the title text of the embed.

## User/Member Info

*   `$accountCreatedDate[userID?]`: Returns the timestamp (in ms) when the author's or specified `userID`'s account was created.
*   `$activity[userID?]`: Returns the primary activity name for the specified user or author. Requires Presence intent. Alias for `$userActivityName`.
*   `$authorAvatar`: Returns the avatar URL of the user who triggered the command/interaction.
*   `$authorID`: Returns the ID of the user who triggered the command/interaction.
*   `$authorTag`: Returns the tag (Username or Username#Discriminator) of the command author.
*   `$boostingSince[memberID?]`: Returns the timestamp (in ms) when the author or specified `memberID` started boosting the server. Returns empty if not boosting.
*   `$canManageUser[targetUserID;managerMemberID?]`: Checks if member1 (`managerMemberID`, defaults to bot) can manage member2 (`targetUserID`) based on role hierarchy (kick/ban/timeout/roles). Returns true or false.
*   `$displayName[memberID?]`: Returns the display name (nickname if set, otherwise username) of the specified `memberID` or the author in the current guild.
*   `$fetchMember[userID]`: Fetches member data from the current guild by ID to ensure it's cached and returns the data as JSON string.
*   `$findUser[userMentionOrIDOrTag?]`: Tries to find a user ID from a mention, tag, username, or ID. Defaults to author if no argument.
*   `$hasAllRoles[memberID?;roleID1;roleID2...]`: Checks if the specified member (`memberID`, defaults to author) has all of the specified role IDs. Returns true or false.
*   `$hasAnyRole[memberID?;roleID1;roleID2...]`: Checks if the specified member (`memberID`, defaults to author) has at least one of the specified role IDs. Returns true or false.
*   `$hasRole[roleID;memberID?]`: Checks if the specified member (`memberID`, defaults to author) has a specific `roleID` in the current guild. Returns true or false.
*   `$highestRole[memberID?]`: Returns the ID of the highest positioned role of the specified member (`memberID`, defaults to author) in the current guild.
*   `$isBannable[userID]`: Checks if the specified `userID` is bannable by the bot in the current guild (based on hierarchy and permissions). Returns true or false.
*   `$isBooster[memberID?]`: Checks if the author or specified `memberID` is boosting the current server. Returns true or false. Alias `$isBoosting`.
*   `$isBoosting[memberID?]`: Alias for `$isBooster`.
*   `$isBot[userID?]`: Checks if the author or specified `userID` is a bot account. Returns true or false.
*   `$isKickable[memberID]`: Checks if the specified `memberID` is kickable by the bot in the current guild (based on hierarchy and permissions). Returns true or false.
*   `$isModeratable[memberID]`: Checks if the specified `memberID` is moderatable by the bot (timeoutable, etc.) based on hierarchy and permissions. Returns true or false.
*   `$isServerDeafened[memberID?]`: Checks if the specified member (`memberID`, defaults to author) is server deafened in voice. Returns true or false.
*   `$isServerMuted[memberID?]`: Checks if the specified member (`memberID`, defaults to author) is server muted in voice. Returns true or false.
*   `$isVoiceConnected[memberID?]`: Checks if the specified member (`memberID`, defaults to author) is connected to a voice channel in the guild. Returns true or false.
*   `$isVoiceDeafened[userID?]`: Checks if the specified user (`userID`, defaults to author) is locally voice deafened (by themselves). Returns true or false.
*   `$isVoiceMuted[userID?]`: Checks if the specified user (`userID`, defaults to author) is locally voice muted (by themselves). Returns true or false.
*   `$lowestRole[memberID?]`: Returns the ID of the lowest positioned role (excluding @everyone) of the specified member (`memberID`, defaults to author) in the current guild.
*   `$memberAvatar[memberID?]`: Returns the server-specific avatar URL of the author or specified `memberID`. Falls back to the user's global avatar if no server avatar is set.
*   `$memberExists[userID]`: Checks if a user with this ID is currently a member of the guild. Returns true or false. Alias for `$userExistsInGuild`.
*   `$memberFlags[memberID?]`: Returns semicolon-separated list of member flag names for the specified member (`memberID`, defaults to author).
*   `$memberHighestRoleObject[memberID?]`: Returns JSON string of the `Role` object representing the highest role of the specified member (`memberID`, defaults to author).
*   `$memberJoinedDate[memberID?]`: Returns the timestamp (in ms) when the author or specified `memberID` joined the server.
*   `$memberJoinPosition[memberID?]`: Gets the join position of a member relative to others (can be slow on large guilds). `memberID` defaults to author.
*   `$memberPermissions[memberID?;separator=;?]`: Returns a list of calculated guild-level permission names for the specified member (`memberID`, defaults to author), separated by `separator`.
*   `$memberTimeoutEndTimestamp[memberID?]`: Returns the timestamp (in ms) when the specified member's (`memberID`, defaults to author) timeout ends, or empty if not timed out.
*   `$modifyMember[memberID;optionsJson;reason?]`: Modifies member properties (e.g., `{ "nick": "New Nick", "roles": ["roleID1", "roleID2"] }`). **[Potentially Dangerous]** Requires relevant permissions.
*   `$nickname[memberID?]`: Returns the nickname of the command author or the specified `memberID` in the current guild. Returns username if no nickname.
*   `$searchMembers[query;limit=10?]`: Searches for members in the current guild by username or nickname. Returns a semicolon-separated list of matching member IDs, up to the `limit`.
*   `$setNickname[memberID;newNickname;reason?]`: Sets the nickname for a specified `memberID`. Use an empty string for `newNickname` to remove the nickname. Requires Manage Nicknames permission (or Modify Own Nickname if targeting self).
*   `$setUserRoles[memberID;roleID1;roleID2...;reason?]`: Sets a member's roles exactly to the provided list of role IDs (removes any other roles they had). Requires Manage Roles permission.
*   `$userAccentColor[userID?]`: Returns the user's profile accent color hex code (requires fetching user). Applies to specified `userID` or author.
*   `$userActivityDetails[userID?]`: Returns the details field of the user's primary activity (e.g., for Rich Presence). Requires Presence intent. `userID` defaults to author.
*   `$userActivityDuration[userID?;format?]`: Returns duration the user's activity has been running. Requires Presence intent. `userID` defaults to author. Format: f(ull), h, m, s, ms (default: ms).
*   `$userActivityEmoji[userID?]`: Returns the emoji string of the user's custom status activity, if any. Requires Presence intent. `userID` defaults to author.
*   `$userActivityName[userID?]`: Returns the name of the user's primary activity (e.g., game name, song title). Requires Presence intent. `userID` defaults to author. Alias: `$activity`.
*   `$userActivityState[userID?]`: Returns the state field of the user's primary activity (e.g., party status, artist name). Requires Presence intent. `userID` defaults to author.
*   `$userActivityType[userID?]`: Returns the type (Playing, Listening, Watching, Competing, Custom) of the user's primary activity. Requires Presence intent. `userID` defaults to author.
*   `$userAvatar[userID?]`: Returns the global avatar URL of the command author or the user specified by `userID`.
*   `$userBadges[userID?]`: Returns a semicolon-separated list of user flag names (badges) for the specified `userID` or the author.
*   `$userBanner[userID?]`: Returns the user's banner URL for the specified `userID` or the author (requires fetching user).
*   `$userExists[userID]`: Checks if a user with this ID exists globally (can be fetched by the bot). Returns true or false.
*   `$userExistsInGuild[userID]`: Checks if a user with this `userID` is currently a member of the guild. Returns true or false. Alias `$memberExists`.
*   `$userID[userMentionOrIDOrTag?]`: Returns the ID of the command author or the user specified by mention, ID, or tag.
*   `$userLanguage`: Returns the user's preferred language locale (e.g., 'en-US') from interaction context.
*   `$username[userID?]`: Returns the username (discriminator not included) of the command author or the user specified by `userID`.
*   `$userPermissions[scope=channel?;memberID?;separator=;?]`: Returns semicolon-separated list of the member's (`memberID` defaults to author) permissions in the specified context (`scope`: channel/guild, defaults to channel).
*   `$userRoles[memberID?;type=id/name?;separator=;?]`: Returns a list of role IDs (`type`='id') or names (`type`='name') for the specified member (`memberID`, defaults to author), separated by `separator`.
*   `$userStatus[userID?]`: Returns the presence status (online, idle, dnd, offline) of the specified `userID` or the author. Requires Presence intent.
*   `$userTag[userID?]`: Returns the tag (Username or Username#Discriminator) of the command author or the user specified by `userID`.
*   `$userVoiceChannelID[userID?]`: Returns the ID of the voice channel the specified user (`userID`, defaults to author) is currently in within this guild. Returns empty if not in a voice channel.

## Guild/Server Info

*   `$afkChannelID[guildID?]`: Returns the ID of the AFK channel for the current guild or specified `guildID`, if set.
*   `$afkTimeout[guildID?]`: Returns the AFK timeout (in seconds) for the current guild or specified `guildID`.
*   `$approximateMemberCount[guildID?]`: Returns the approximate member count from invite/widget data for the current or specified `guildID`.
*   `$approximatePresenceCount[guildID?]`: Returns the approximate online member count from invite/widget data for the current or specified `guildID`.
*   `$boostCount[guildID?]`: Returns the server boost (premium subscription) count for the current guild or the specified `guildID`.
*   `$boostLevel[guildID?]`: Returns the server boost level (0-3) for the current guild or the specified `guildID`.
*   `$botCount[guildID?]`: Returns the number of bot members in the current guild or the specified `guildID`.
*   `$categoryCount[guildID?]`: Returns the total number of category channels in the current guild or the specified `guildID`.
*   `$channelCount[guildID?]`: Returns the total number of channels (excluding categories) in the current guild or the specified `guildID`.
*   `$explicitContentFilter[guildID?]`: Returns the explicit content filter level name (e.g., DISABLED, MEMBERS_WITHOUT_ROLES) for the current guild or specified `guildID`.
*   `$guildAuditLog[actionType?;userID?;limit=10?;before?;after?]`: Fetches guild audit log entries as a JSON string, with optional filters (type number, user ID, entry ID). Requires View Audit Log permission.
*   `$guildFeatures[guildID?]`: Returns a semicolon-separated list of guild features (e.g., `COMMUNITY`, `VANITY_URL`) for the current guild or specified `guildID`.
*   `$guildID[guildID?]`: Returns the ID of the current guild or the specified `guildID`. Alias `$serverID`.
*   `$guildOwner[guildID?]`: Returns JSON string of the guild owner `User` object for the current or specified `guildID`.
*   `$guildVanityUses[guildID?]`: Returns the number of uses for the guild's vanity invite. Requires Manage Guild permission. `guildID` defaults to current.
*   `$guildWelcomeScreen[guildID?]`: Returns JSON string of the welcome screen configuration for the current or specified `guildID`. Requires Manage Guild permission.
*   `$humanCount[guildID?]`: Returns the number of human members (memberCount - botCount) in the current guild or the specified `guildID`.
*   `$maxMembers[guildID?]`: Returns the maximum number of members the current or specified `guildID` can have.
*   `$maxPresences[guildID?]`: Returns the maximum number of presences the current or specified `guildID` can support (usually null unless specified).
*   `$memberCount[guildID?]`: Returns the total member count of the current guild or the specified `guildID`.
*   `$mfaLevel[guildID?]`: Returns the MFA Level name (None or Elevated) for the current guild or specified `guildID`. Requires Manage Guild permission.
*   `$modifyGuild[guildID;optionsJson;reason?]`: Modifies various guild settings using a JSON object for `optionsJson` (e.g., `{ "name": "New Name", "afkTimeout": 300 }`). Requires appropriate permissions. `guildID` defaults to current.
*   `$publicUpdatesChannelID[guildID?]`: Returns the ID of the public updates channel (for community servers) for the current guild or specified `guildID`, if set.
*   `$roleCount[guildID?]`: Returns the total number of roles in the current or specified `guildID`.
*   `$rulesChannelID[guildID?]`: Returns the ID of the rules channel (for community servers) for the current guild or specified `guildID`, if set.
*   `$serverBanner[guildID?]`: Returns the server banner URL for the current guild or the specified `guildID`, if set.
*   `$serverBoosterRole[guildID?]`: Returns the ID of the booster role for the current guild or the specified `guildID`, if set.
*   `$serverCreationDate[guildID?]`: Returns the timestamp (in ms) when the current guild or the specified `guildID` was created.
*   `$serverEmojis[guildID?]`: Returns JSON array string of detailed custom emoji info (id, name, animated, roles) for the current or specified `guildID`.
*   `$serverIcon[guildID?]`: Returns the icon URL of the current guild or the specified `guildID`.
*   `$serverID[guildID?]`: Returns the ID of the current guild or the specified `guildID`. Alias `$guildID`.
*   `$serverLocale[guildID?]`: Returns the preferred locale string (e.g., `en-US`) for the current guild or specified `guildID`.
*   `$serverName[guildID?]`: Returns the name of the current guild or the specified `guildID`.
*   `$serverOwnerID[guildID?]`: Returns the user ID of the owner of the current guild or the specified `guildID`.
*   `$serverRoles[guildID?]`: Returns JSON array string of detailed role info (id, name, color, position, etc.) for the current or specified `guildID`.
*   `$serverVerificationLevel[guildID?]`: Returns the verification level name (None, Low, Medium, High, VeryHigh) of the current guild or specified `guildID`.
*   `$systemChannel[guildID?]`: Returns the ID of the system messages channel for the current guild or specified `guildID`, if set.
*   `$vanityURLCode[guildID?]`: Returns the guild's vanity invite code for the current or specified `guildID`, if set. Requires Manage Guild permission.

## Channel/Thread/Forum Info & Management

*   `$archiveThread[threadID?;reason?]`: Archives the current or specified `threadID`. Requires Send Messages permission (or Manage Threads if locked).
*   `$canManageChannel[channelID;memberID?]`: Checks if the bot (or specified `memberID`) can manage the specified `channelID` (e.g., edit name, topic, permissions). Returns true or false.
*   `$categoryID[channelID?]`: Returns the parent category ID of the current or specified `channelID`. Returns empty if no parent category.
*   `$channelExists[channelID]`: Checks if a channel with this ID exists (can be fetched) in the current guild. Returns true or false.
*   `$channelID[channelNameOrID?]`: Returns the ID of the channel found by name or ID in the current guild, or the current channel ID if no argument. Alias `$findChannel`.
*   `$channelIDs[type=text/voice/category/any?]`: Returns a semicolon-separated list of channel IDs in the current guild, optionally filtered by `type`.
*   `$channelMention[channelID?]`: Returns the channel mention string (`<#ID>`) for the current or specified `channelID`.
*   `$channelName[channelID?]`: Returns the name of the current or specified `channelID`.
*   `$channelNames[type=text/voice/category/any?]`: Returns a semicolon-separated list of channel names in the current guild, optionally filtered by `type`.
*   `$channelParentObject[channelID?]`: Returns JSON string of the parent `CategoryChannel` object for the current or specified `channelID`. Returns empty if no parent category.
*   `$channelPosition[channelID?]`: Returns the position of the current or specified `channelID` within its category or channel list type.
*   `$channelTopic[channelID?]`: Returns the topic of the current or specified text-based `channelID`.
*   `$channelType[channelID?]`: Returns the type name (e.g., `GUILD_TEXT`, `GUILD_VOICE`, `PUBLIC_THREAD`) of the current or specified `channelID`.
*   `$channelURL[channelID?]`: Returns the jump URL for the current or specified `channelID`.
*   `$createChannel[name;type=Text?;parentID?;optionsJson?;reason?]`: Creates a channel in the current guild. Type: Text/Voice/Category/etc. `optionsJson` can include permissions, topic, etc. Returns the new channel ID. Requires Manage Channels permission.
*   `$createThread[name;startMessageID?;type=Public?;autoArchiveDuration=Max?;optionsJson?;reason?]`: Creates a thread. Can start from `startMessageID` (in text/announcement channels) or in current channel (if forum/text). Type: Public/Private/Announcement. Duration: 60/1440/4320/10080(Max). `optionsJson` can include slowmode, invitable (for private). Returns the new thread ID. Requires Create Threads permissions.
*   `$deleteChannel[channelID;reason?]`: Deletes a channel in the current guild. Requires Manage Channels permission.
*   `$deleteThread[threadID?;reason?]`: Deletes the current or specified `threadID`. Requires Manage Threads permission (or be thread owner in some cases).
*   `$findChannel[channelNameOrID?]`: Tries to find a channel ID from a mention, name, or ID in the current guild. Defaults to current channel ID if no argument. Alias `$channelID`.
*   `$getChannelBotPerms[channelID?]`: Returns semicolon-separated list of the bot's calculated permissions in the current or specified `channelID`.
*   `$getChannelSlowmode[channelID?]`: Returns the slowmode delay (in seconds) for the current or specified text-based `channelID`. Alias `$getSlowmode`.
*   `$getChannelWebhooks[channelID?]`: Returns semicolon-separated list of webhook IDs the bot can see for the current or specified `channelID`. Requires Manage Webhooks permission.
*   `$getSlowmode[channelID?]`: Alias for `$getChannelSlowmode`.
*   `$isForum[channelID?]`: Checks if the current or specified `channelID` is a forum channel. Returns true or false.
*   `$isNsfw[channelID?]`: Checks if the current or specified `channelID` is marked as NSFW. Returns true or false.
*   `$isThread[channelID?]`: Checks if the current or specified `channelID` is a thread. Returns true or false.
*   `$lockThread[threadID?;reason?]`: Locks the current or specified `threadID` (only mods can send messages, except thread owner in private threads). Requires Manage Threads permission.
*   `$modifyChannel[channelID;optionsJson;reason?]`: Modifies channel properties using a JSON object for `optionsJson` (e.g., `{ "name": "new-name", "topic": "new topic" }`). Requires Manage Channels permission.
*   `$parentName[channelID?]`: Returns the parent category name of the current or specified `channelID`. Returns empty if no parent category.
*   `$setChannelName[channelID;newName;reason?]`: Changes the name of a specified `channelID`. Requires Manage Channels permission.
*   `$setChannelPerms[channelID;roleOrUserID;allowPerms;denyPerms;reason?]`: Sets permission overwrites for a role or user on a `channelID`. Provide `allow`/`denyPerms` as semicolon-separated permission names or bitfields (use '0' to deny/allow none). Requires Manage Roles permission within the channel.
*   `$setChannelPosition[channelID;newPosition;reason?]`: Sets the position of a `channelID` within its category/type. Requires Manage Channels permission.
*   `$setChannelTopic[channelID;newTopic;reason?]`: Changes the topic of a specified text-based `channelID`. Requires Manage Channels permission.
*   `$setSlowmode[seconds;channelID?;reason?]`: Sets the slowmode delay (0-21600 seconds) for the current or specified `channelID`. Requires Manage Channels permission. Alias `$setChannelSlowmode`.
*   `$threadName[threadID?]`: Returns the name of the current or specified `threadID`.
*   `$threadParentID[threadID?]`: Returns the parent channel ID of the current or specified `threadID`.
*   `$unarchiveThread[threadID?;reason?]`: Unarchives the current or specified `threadID`. Requires Send Messages permission (or Manage Threads if locked).
*   `$unlockThread[threadID?;reason?]`: Unlocks the current or specified `threadID`. Requires Manage Threads permission.

## Role Info & Management

*   `$addRole[memberID;roleID;reason?]`: Adds a `roleID` to a `memberID` in the current guild. Requires Manage Roles permission.
*   `$canManageRole[roleID;memberID?]`: Checks if the bot (or specified `memberID`) can manage the specified `roleID` based on hierarchy. Returns true or false.
*   `$compareRolePosition[roleID1;roleID2]`: Compares two roles' positions in the current guild. Returns >0 if `roleID1` is higher, <0 if `roleID2` is higher, 0 if equal.
*   `$createRole[name;color?;hoist?;mentionable?;permissions?;iconURL?;unicodeEmoji?;reason?]`: Creates a role in the current guild. `permissions` can be a bitfield or semicolon-separated names. Returns the new role ID. Requires Manage Roles permission.
*   `$deleteRole[roleID;reason?]`: Deletes a `roleID` in the current guild. Requires Manage Roles permission.
*   `$isHoisted[roleID]`: Checks if the specified `roleID` is hoisted (displayed separately in the member list). Returns true or false.
*   `$isManaged[roleID]`: Checks if the specified `roleID` is managed by an integration (e.g., bot role, boost role). Returns true or false.
*   `$isMentionable[roleID]`: Checks if the specified `roleID` can be mentioned by anyone. Returns true or false.
*   `$isRoleEditable[roleID]`: Checks if the specified `roleID` is editable by the bot (based on hierarchy). Returns true or false.
*   `$modifyRole[roleID;optionsJson;reason?]`: Modifies role properties using a JSON object for `optionsJson` (e.g., `{ "name": "New Name", "color": "#FF0000" }`). Requires Manage Roles permission.
*   `$removeRole[memberID;roleID;reason?]`: Removes a `roleID` from a `memberID` in the current guild. Requires Manage Roles permission.
*   `$resolveRoleID[roleNameOrMentionOrID]`: Tries to find a role ID from its name, mention, or ID in the current guild. Returns the ID if found, otherwise empty. Alias `$findRole`.
*   `$roleColor[roleID]`: Returns the hex color code of the specified `roleID` in the current guild.
*   `$roleExists[roleID]`: Checks if a role with the specified `roleID` exists in the current guild. Returns true or false.
*   `$roleMembersCount[roleID]`: Returns the number of members who have the specified `roleID` in the current guild.
*   `$roleMention[roleID]`: Returns the role mention string (`<@&ID>`) for the specified `roleID`.
*   `$roleName[roleID]`: Returns the name of the specified `roleID` in the current guild.
*   `$rolePosition[roleID]`: Returns the position of the specified `roleID` in the current guild's hierarchy.
*   `$setRoleColor[roleID;hexColor;reason?]`: Changes the color of a `roleID`. `hexColor` should be a valid hex code. Requires Manage Roles permission.
*   `$setRoleHoist[roleID;hoist(true/false);reason?]`: Sets whether the `roleID` is hoisted (displayed separately). Requires Manage Roles permission.
*   `$setRoleMentionable[roleID;mentionable(true/false);reason?]`: Sets whether the `roleID` can be mentioned by anyone. Requires Manage Roles permission.
*   `$setRoleName[roleID;newName;reason?]`: Changes the name of a `roleID`. Requires Manage Roles permission.
*   `$setRolePosition[roleID;newPosition;reason?]`: Changes the position of a `roleID` in the hierarchy. Requires Manage Roles permission.

## Emoji/Sticker Info & Management

*   `$addEmoji[imageURL;name;rolesJson?;reason?]`: Adds an emoji to the current guild. `imageURL` must be a direct link to an image. `rolesJson` is an optional JSON array of role IDs allowed to use it. Returns the new emoji string (`<:name:id>`). Requires Manage Emojis and Stickers permission.
*   `$addSticker[fileURLorPath;name;tags;description?;reason?]`: Adds a sticker to the current guild. `fileURLorPath` points to the sticker file (PNG, APNG, Lottie JSON). `tags` is a required related emoji tag. Returns the new sticker ID. Requires Manage Emojis and Stickers permission. **[SECURITY RISK - OWNER ONLY]** (If using file path)
*   `$cloneEmoji[emojiID or emoji;newName?;reason?]`: Clones an existing emoji (specified by ID or the full emoji string) to the current guild, optionally with a `newName`. Returns the new emoji string. Requires Manage Emojis and Stickers permission.
*   `$deleteEmoji[emojiID;reason?]`: Deletes a custom emoji by its ID from the current guild. Requires Manage Emojis and Stickers permission.
*   `$deleteSticker[stickerID;reason?]`: Deletes a guild sticker by its ID. Requires Manage Emojis and Stickers permission.
*   `$emojiExists[emojiID or full emoji]`: Checks if the custom emoji (specified by ID or the full emoji string) exists in the current guild or is usable by the bot. Returns true or false.
*   `$emojiList`: Returns a semicolon-separated list of custom emoji IDs from the current guild.
*   `$emojiURL[emojiID or full emoji]`: Returns the image URL of the custom emoji (specified by ID or the full emoji string).
*   `$getEmoji[emojiName or emojiID]`: Returns the full custom emoji string (`<:name:id>` or `<a:name:id>`) usable in messages, found by name or ID in the current guild.
*   `$modifyEmoji[emojiID;newName?;rolesJson?;reason?]`: Modifies an emoji's name or restricted roles (`rolesJson` is a JSON array of role IDs) in the current guild. Requires Manage Emojis and Stickers permission. Returns the modified emoji string.
*   `$modifySticker[stickerID;optionsJson;reason?]`: Modifies sticker properties (name, description, tags) using a JSON object for `optionsJson`. Requires Manage Emojis and Stickers permission. Returns the sticker ID.
*   `$stickerURL[stickerID]`: Returns the URL of the sticker image.

## Moderation Actions

*   `$auditLogReason[reasonText]`: Sets the reason for the *next* audit log action performed by the bot in this execution context. Must be called *before* the action function (e.g., `$ban`, `$kick`).
*   `$ban[userID;reason?;deleteMessageDays=0?]`: Bans a `userID` from the current guild. `deleteMessageDays` specifies message history purge (0-7 days). Requires Ban Members permission.
*   `$clearWarnings[userID]`: Clears all warnings for a `userID`. **[Requires warning system implementation]**
*   `$deafenMemberVoice[memberID;deafen(true/false);reason?]`: Server deafens (`deafen`=true) or un-deafens (`deafen`=false) a `memberID` in voice channels. Requires Deafen Members permission.
*   `$disconnectMemberVoice[memberID;reason?]`: Disconnects a specified `memberID` from their current voice channel. Requires Move Members permission.
*   `$getPruneCount[days;rolesJson?]`: Estimates the number of members that would be pruned based on inactivity `days` (1-30) and optional included role IDs (`rolesJson` is a JSON array). Requires Kick Members permission.
*   `$getWarnings[userID]`: Retrieves warnings for a `userID`. Returns a JSON array string. **[Requires warning system implementation]**
*   `$kick[memberID;reason?]`: Kicks a `memberID` from the current guild. Requires Kick Members permission.
*   `$muteMemberVoice[memberID;mute(true/false);reason?]`: Server mutes (`mute`=true) or un-mutes (`mute`=false) a `memberID` in voice channels. Requires Mute Members permission.
*   `$pruneMembers[days;computeCount?=false;rolesJson?;reason?]`: Prunes members inactive for a specified number of `days` (1-30). If `computeCount` is true, returns the estimated count instead of pruning. `rolesJson` is an optional JSON array of role IDs to include. Requires Kick Members permission. Returns number pruned or estimated count.
*   `$removeTimeout[memberID;reason?]`: Removes a timeout from a `memberID` in the current guild. Requires Moderate Members permission.
*   `$timeout[memberID;durationMs;reason?]`: Times out a `memberID` (prevents interaction/VC) for a specified `durationMs`. Max duration is 28 days (2419200000 ms). Requires Moderate Members permission.
*   `$unban[userID;reason?]`: Unbans a `userID` from the current guild. Requires Ban Members permission.
*   `$warnUser[userID;reason;moderatorID?]`: Records a warning for a `userID`. `moderatorID` defaults to author. **[Requires warning system implementation]**

## Permissions & Restrictions

*   `$botPermissions[scope=channel/guild?]`: Returns semicolon-separated list of the bot's calculated permission names in the specified `scope` (defaults to 'channel').
*   `$hasGuildPermission[permission1;permission2...;memberID?]`: Checks if a member (`memberID` defaults to author) has specific permission names (e.g., `KICK_MEMBERS`) at the GUILD level. Returns true or false.
*   `$hasPermission[permission1;permission2...;memberID?]`: Checks if a member (`memberID` defaults to author) has specific permission names in the calculated context (current channel permissions). Returns true or false. Alias `$hasPermissions`.
*   `$ignoreChannels[channelID1;channelID2...]`: Stops execution silently if the command/interaction is used in one of the specified `channelID`s.
*   `$ignoreRoles[roleID1;roleID2...]`: Stops execution silently if the author has *any* of the specified `roleID`s. Requires guild context.
*   `$ignoreUsers[userID1;userID2...]`: Stops execution silently if the author's ID is in the list.
*   `$onlyForIDs[id1;id2;...;errorMessage?]`: Restricts command usage to specified user IDs. Stops execution with `errorMessage` if check fails.
*   `$onlyForRoles[roleID1;roleID2...;errorMessage?]`: Restricts command usage to users with *at least one* of the specified `roleID`s. Stops execution with `errorMessage` if check fails. Requires guild context. Alias `$onlyRoles`.
*   `$onlyIf[condition;errorMessage?]`: Stops execution with `errorMessage` if the `condition` string evaluates to a false-like value (empty, "0", "false").
*   `$onlyPerms[permission1;permission2...;errorMessage?]`: Restricts command usage to users with *all* specified permission names in the current channel/guild context. Stops execution with `errorMessage` if check fails.

## Variables (Local, Global, User, Server)

*   `$appendVar[varName;valueToAppend;separator=;?;scope=local?]`: Appends `valueToAppend` to a variable (`varName`), optionally using a `separator`. `scope`: local/global.
*   `$decVar[varName;decrement=1?;scope=local?]`: Decrements a numeric variable (`varName`) by `decrement` (default 1). Initializes to `-decrement` if non-existent. `scope`: local/global.
*   `$deleteServerVar[varName]`: Deletes a variable (`varName`) associated with the current guild (server scope).
*   `$deleteUserVar[varName;userID;scope=global?]`: Deletes a variable (`varName`) associated with a specific `userID`. `scope`: global (across servers) / local (per server).
*   `$deleteVar[varName;scope=local?]`: Deletes a variable (`varName`) from the specified `scope` (local/global).
*   `$get[varName]`: Gets a temporary (local) variable's value from the current execution. Alias for `$getVar[varName;local]`.
*   `$getAllVars[scope=local?]`: Returns a JSON string representing all variables in the specified `scope` (local/global).
*   `$getServerVar[varName]`: Gets a variable (`varName`) associated with the current guild (server scope).
*   `$getUserVar[varName;userID;scope=global?]`: Gets a variable (`varName`) associated with a specific `userID`. `scope`: global (across servers) / local (per server).
*   `$getVar[varName;scope=local?]`: Gets a variable's value from the specified `scope` (local/global).
*   `$hasVar[varName;scope=local?]`: Checks if a variable (`varName`) exists in the specified `scope` (local/global). Returns true or false.
*   `$incVar[varName;increment=1?;scope=local?]`: Increments a numeric variable (`varName`) by `increment` (default 1). Initializes to `increment` if non-existent. `scope`: local/global.
*   `$let[varName;value]`: Sets a temporary (local) variable's value for the current execution. Alias for `$setVar[varName;value;local]`.
*   `$prependVar[varName;valueToPrepend;separator=;?;scope=local?]`: Prepends `valueToPrepend` to a variable (`varName`), optionally using a `separator`. `scope`: local/global.
*   `$setServerVar[varName;value]`: Sets a variable (`varName`) associated with the current guild (server scope).
*   `$setUserVar[varName;value;userID;scope=global?]`: Sets a variable (`varName`) associated with a specific `userID`. `scope`: global (across servers) / local (per server).
*   `$setVar[varName;value;scope=local?]`: Sets a variable's value in the specified `scope` (local/global).
*   `$varType[varName;scope=local?]`: Returns the internal JavaScript type string (e.g., 'string', 'number', 'boolean', 'object', 'undefined') of a variable (`varName`) in the specified `scope`.

## Utility & Control Flow

*   `$and[condition1;condition2...]`: Returns `true` if all provided conditions evaluate to true-like values, `false` otherwise.
*   `$case[matchValue;returnValue]`: Used within `$switch`. If `matchValue` equals the `$switch` value, the `$switch` returns `returnValue`.
*   `$catch[codeToRunOnError]`: Used within `$try`. Defines the Solara `codeToRunOnError` if the `$try` block encounters an error. Sets `$errorMsg` locally.
*   `$checkCondition[value1;operator;value2]`: Compares `value1` and `value2` using `operator` (e.g., `==`, `!=`, `>`, `<`, `>=`, `<=`, `includes`, `startsWith`, `endsWith`). Returns `true` or `false`.
*   `$commandInfo[property]`: Returns info about the currently executing command. Property: name/type/description/aliases.
*   `$commandTrigger`: Returns the trigger used for the command (name or alias for messages, command name for interactions).
*   `$comment[text...]`: Ignores the content within the brackets. Used for adding comments to Solara code. Any text inside is disregarded.
*   `$defaultCase[returnValue]`: Used within `$switch`. Defines the `returnValue` if no preceding `$case` matches.
*   `$define[word]`: Gets the definition of a `word` using dictionaryapi.dev. Returns JSON definition.
*   `$djsEval[javascriptCode]`: Executes raw JavaScript code using Node.js's `eval`. Provides context variables (`client`, `message`, etc.). **[DANGEROUS - SECURITY RISK - OWNER ONLY]** Alias `$eval`. Returns stringified result.
*   `$error[message]`: Immediately stops execution and sends the provided `message` as an error response (often ephemeral in interactions). Alias `$stopExecution`.
*   `$eval[javascriptCode]`: Alias for `$djsEval`. **[DANGEROUS - SECURITY RISK - OWNER ONLY]**
*   `$solaraEval[solaraCode]`: Parses and executes the input string as Solara code within the current context. **[SECURITY RISK - OWNER ONLY]** Returns the result of the parsed code.
*   `$evalFile[filePath]`: Reads and executes Solara code from a local file path. **[SECURITY RISK - OWNER ONLY]**
*   `$eventData[propertyName?]`: Gets raw data attached to the event context (e.g., used in event handlers like `guildMemberAdd`). If `propertyName` is provided, returns that specific property value.
*   `$forEach[code;item1;item2...]`: Executes the provided Solara `code` for each subsequent `item`. Sets temporary local variables `$forEachItem` (current item) and `$forEachIndex` (1-based) for each iteration.
*   `$functionExists[functionName]`: Checks if a Solara function exists (include the `$`). Returns true or false.
*   `$functionInfo[functionName]`: Fetches description and usage information for a specific Solara function (include the `$`).
*   `$getContextType`: Returns 'Message' or 'Interaction' indicating the type of the current execution context.
*   `$if[condition;then;else?]`: Conditional execution. Evaluates the `condition`. Executes `then` code if true-like, otherwise executes optional `else` code if provided.
*   `$log[value1;value2...]`: Logs the provided arguments to the bot's console.
*   `$loop[delayMs;code;iterations;stopOnError=true?]`: Executes Solara `code` repeatedly (`iterations` times) with a `delayMs` between executions. `stopOnError` controls if loop breaks on error.
*   `$not[condition]`: Reverses a boolean condition. Returns `true` if the condition is false-like, `false` otherwise.
*   `$or[condition1;condition2...]`: Returns `true` if at least one provided condition evaluates to a true-like value, `false` otherwise.
*   `$progressBar[currentValue;maxValue;length=10?;filledChar=█?;emptyChar=░?]`: Creates a text-based progress bar string.
*   `$randomText[item1;item2...]`: Returns one random item from the provided arguments (separated by semicolons).
*   `$randomUserID[guildID?;includeBots=false?]`: Returns a random user ID from the current or specified `guildID`. Set `includeBots` to true to include bots.
*   `$randomUUID`: Generates and returns a random UUID (Universally Unique Identifier).
*   `$repeat[times;delayMs;code;stopOnError=true?]`: Executes the Solara `code` asynchronously `times` number of times, waiting `delayMs` between each execution. `stopOnError` defaults to true. Returns nothing immediately.
*   `$search[query]`: Searches YouTube for a video using the `query`. Returns JSON string of the first result. **[Requires API Key/Setup]**
*   `$sleep[milliseconds]`: Pauses execution for a specified duration in `milliseconds`. Alias `$wait`.
*   `$stopExecution[message?]`: Immediately stops command execution silently. Optionally sends an error `message`. Alias for `$error`.
*   `$switch[value;$caseFunction1;$caseFunctionN...;$defaultCaseFunction?]`: Compares `value` to the `matchValue` in each subsequent `$case` function call. Returns the `returnValue` of the first matching `$case`. If none match, returns the value from the `$defaultCase` function call.
*   `$try[codeToTry;$catchFunction]`: Executes `codeToTry`. If an error occurs (except stop errors), it executes the `$catchFunction` call (setting `$errorMsg` locally with the error message). Returns the result of the successfully executed code block (either try or catch).
*   `$updateCommands`: Reloads all commands from the filesystem. **[OWNER ONLY]** **[Potentially Dangerous depending on implementation]**
*   `$wait[milliseconds]`: Pauses execution for a specified duration in `milliseconds`. Alias `$sleep`.

## Math

*   `$E`: Returns the value of Euler's number E (approx 2.718).
*   `$PI`: Returns the value of PI (approx 3.14159). Alias `$pi`.
*   `$abs[number]`: Returns the absolute value of a `number`.
*   `$calculate[expression]`: Evaluates a mathematical `expression` string (e.g., `2 * (3 + 4)`). **[SECURITY RISK]** (If expression is user-provided)
*   `$cbrt[number]`: Calculates the cube root of a `number`.
*   `$ceil[number]`: Rounds a `number` up to the nearest integer.
*   `$div[num1;num2...]`: Divides `num1` by `num2`, then the result by the next number, and so on.
*   `$floor[number]`: Rounds a `number` down to the nearest integer.
*   `$isEven[number]`: Checks if a `number` is even. Returns true or false.
*   `$isOdd[number]`: Checks if a `number` is odd. Returns true or false.
*   `$isPrime[number]`: Checks if a `number` is prime (basic check, may be slow for large numbers). Returns true or false.
*   `$max[num1;num2...]`: Returns the largest number from the provided list.
*   `$min[num1;num2...]`: Returns the smallest number from the provided list.
*   `$modulo[dividend;divisor]`: Returns the remainder of the division of `dividend` by `divisor`.
*   `$multi[num1;num2...]`: Calculates the product (multiplication) of the provided numbers.
*   `$ordinal[number]`: Returns the ordinal representation of a `number` (e.g., 1st, 2nd, 3rd, 4th). Alias `$toOrdinal`.
*   `$percent[value1;value2]`: Calculates what percentage `value1` is of `value2`.
*   `$pi`: Alias for `$PI`.
*   `$power[base;exponent]`: Calculates the `base` raised to the power of the `exponent`.
*   `$random[max]` or `$random[min;max]`: Returns a random integer between `min` (default 0) and `max` (inclusive).
*   `$randomFloat[min=0?;max=1?]`: Returns a random floating-point number between `min` (inclusive) and `max` (exclusive).
*   `$randomHexColor`: Generates a random 6-digit hex color code (e.g., `#RRGGBB`).
*   `$round[number]`: Rounds a `number` to the nearest integer.
*   `$roundTo[number;decimalPlaces]`: Rounds a `number` to a specific number of `decimalPlaces`.
*   `$sign[number]`: Returns the sign of a `number` (-1 for negative, 1 for positive, 0 for zero).
*   `$sqrt[number]`: Calculates the square root of a `number`.
*   `$sub[num1;num2...]`: Subtracts `num2` from `num1`, then subtracts the next number from the result, and so on.
*   `$sum[num1;num2...]`: Calculates the sum (addition) of the provided numbers.
*   `$toFixed[number;digits=0?]`: Formats a `number` using fixed-point notation with a specified number of decimal `digits`.
*   `$truncate[number]`: Removes the fractional part of a `number`, returning only the integer part.

## String Manipulation

*   `$bold[text]`: Formats `text` as bold using Markdown (`**text**`).
*   `$charCount[text;characterOrSubstring]`: Counts non-overlapping occurrences of a `characterOrSubstring` within the `text`.
*   `$charAt[text;index]`: Returns the character at the specified 0-based `index` within the `text`.
*   `$charToCode[text;index=0?]`: Returns the Unicode value (UTF-16 code unit) of the character at the specified `index` (default 0) in `text`.
*   `$codeBlock[text;language?]`: Formats `text` into a Markdown code block, optionally specifying the `language` (```lang\ntext\n```).
*   `$codeToChar[code1;code2...]`: Returns a string created from the specified sequence of Unicode values (UTF-16 code units).
*   `$cropText[text;maxLength;endChars?]`: Limits `text` to `maxLength`. If cropped and `endChars` is provided, appends `endChars` within the `maxLength`.
*   `$endsWith[text;search]`: Checks if `text` ends with the `search` string. Returns true or false.
*   `$escapeMarkdown[text]`: Escapes Discord markdown special characters (like `*`, `_`, `~`, `|`, `\`) in `text` by adding backslashes.
*   `$findNthOccurrence[text;search;occurrence]`: Finds the 0-based index of the Nth (`occurrence`) instance of a `search` substring within `text`.
*   `$hyperlink[text;url]`: Creates a Markdown formatted hyperlink (`[text](url)`).
*   `$includes[text;search]`: Checks if `text` contains the `search` string. Returns true or false.
*   `$indexOf[text;searchValue;fromIndex=0?]`: Returns the 0-based index of the first occurrence of `searchValue` within `text`, starting search from `fromIndex`. Returns -1 if not found.
*   `$inlineCode[text]`: Formats `text` into Markdown inline code using backticks (`` `text` ``).
*   `$isNumeric[text]`: Checks if `text` contains only numeric digits (0-9). Returns true or false.
*   `$italic[text]`: Formats `text` as italic using Markdown (`*text*` or `_text_`).
*   `$length[text]`: Returns the number of characters in the `text`.
*   `$letterCount[text]`: Counts the number of alphabetic characters (a-z, A-Z) in `text`.
*   `$padEnd[text;targetLength;padString=' '?]`: Pads the end of `text` with `padString` (default space) until it reaches `targetLength`.
*   `$padStart[text;targetLength;padString=' '?]`: Pads the start of `text` with `padString` (default space) until it reaches `targetLength`.
*   `$quote[text]`: Formats `text` as an inline Markdown quote (prepends `> ` to each line).
*   `$quoteBlock[text]`: Formats `text` as a Markdown block quote (prepends `>>> ` to the first line).
*   `$removeLinks[text]`: Attempts to remove URLs (http/https) from the `text`. Basic implementation.
*   `$repeatText[text;count]`: Repeats the `text` `count` times.
*   `$replaceAll[text;search;replace]`: Replaces all occurrences of the `search` string with the `replace` string within the `text`.
*   `$replaceText[text;search;replace;limit=-1?]`: Replaces occurrences of the `search` string with the `replace` string. `limit` sets the maximum number of replacements (-1 for all).
*   `$reverseText[text]`: Reverses the order of characters in the `text`.
*   `$sentenceCase[text]`: Converts `text` to sentence case (capitalizes the first letter, basic implementation).
*   `$slice[text;startIndex;endIndex?]`: Extracts a section of `text` from `startIndex` (0-based) up to (but not including) `endIndex`. Negative indices count from the end.
*   `$spoiler[text]`: Formats `text` as a spoiler using Markdown (`||text||`).
*   `$startsWith[text;search]`: Checks if `text` starts with the `search` string. Returns true or false.
*   `$strikethrough[text]`: Formats `text` as strikethrough using Markdown (`~~text~~`).
*   `$substring[text;startIndex;endIndex?]`: Returns a part of `text` between `startIndex` (inclusive) and `endIndex` (exclusive, optional).
*   `$textSplit[text;separator=;?]`: Splits `text` by a `separator` (default ';') and stores the result in a temporary local variable `textSplitResult` for use with `$splitText`. Returns the number of items.
*   `$splitText[index]`: Retrieves an item by 1-based `index` from the result of the last `$textSplit` call.
*   `$titleCase[text]`: Converts `text` to title case (capitalizes the first letter of each word, basic implementation).
*   `$toLowercase[text]`: Converts `text` to lowercase.
*   `$toUppercase[text]`: Converts `text` to uppercase.
*   `$trim[text]`: Removes whitespace from both ends of `text`.
*   `$trimEnd[text]`: Removes whitespace from the end (right side) of `text`.
*   `$trimStart[text]`: Removes whitespace from the beginning (left side) of `text`.
*   `$underline[text]`: Formats `text` as underlined using Markdown (`__text__`).
*   `$unescapeMarkdown[text]`: Basic attempt to remove backslash escapes before common markdown characters in `text`.
*   `$wordCount[text]`: Counts the number of words in `text` (based on space separation).

## List/Array (Semicolon Separated)

*   `$filterList[filterValue;item1;item2...]`: Returns only the items from the list (`item1;item2...`) that exactly match `filterValue`, joined by ';'.
*   `$findItem[searchItem;item1;item2...]`: Finds the first index (1-based) of `searchItem` in the list (`item1;item2...`). Returns -1 if not found.
*   `$findLastItem[searchItem;item1;item2...]`: Finds the last index (1-based) of `searchItem` in the list (`item1;item2...`). Returns -1 if not found.
*   `$itemCount[item1;item2...]`: Returns the total number of items provided as arguments. Alias: `$listLength`.
*   `$joinText[separator;item1;item2...]`: Joins the provided `item` arguments into a single string using the specified `separator`.
*   `$listChunk[chunkSize;item1;item2...]`: Splits the list (`item1;item2...`) into chunks of `chunkSize`. Returns a JSON array string of these chunks (arrays).
*   `$listContains[searchItem;item1;item2...]`: Checks if the list (`item1;item2...`) contains `searchItem`. Returns true or false. Alias `$ListContains`.
*   `$listContainsAll[list1Items;list2Items]`: Checks if list1 (provided as `list1Item1;list1Item2...`) contains all items from list2 (`list2Item1;list2Item2...`). Returns true or false.
*   `$listContainsAny[list1Items;list2Items]`: Checks if list1 (`list1Item1;list1Item2...`) contains at least one item from list2 (`list2Item1;list2Item2...`). Returns true or false.
*   `$listDifference[list1Items;list2Items]`: Returns items present in list1 (`list1Item1;list1Item2...`) but not in list2 (`list2Item1;list2Item2...`), joined by ';'.
*   `$listFlatten[list1;list2...]`: Flattens multiple lists (provided as `item1;item2...` for each list argument) into a single list joined by ';'.
*   `$listGetRandom[count;item1;item2...]`: Returns `count` random unique items from the list (`item1;item2...`), joined by ';'.
*   `$listInsert[index;itemToInsert;item1;item2...]`: Inserts `itemToInsert` at the specified 1-based `index` in the list (`item1;item2...`). Returns the new list joined by ';'.
*   `$listIntersection[list1Items;list2Items]`: Returns items common to both list1 (`list1Item1;list1Item2...`) and list2 (`list2Item1;list2Item2...`), joined by ';'.
*   `$listItem[index;item1;item2...]`: Returns the item at the specified 1-based `index` from the list provided as arguments (`item1;item2...`).
*   `$listLength[item1;item2...]`: Returns the total number of items provided as arguments. Alias for `$itemCount`.
*   `$listRemove[itemToRemove;item1;item2...]`: Removes the first occurrence of `itemToRemove` from the list (`item1;item2...`). Returns the new list joined by ';'.
*   `$listRemoveAll[itemToRemove;item1;item2...]`: Removes all occurrences of `itemToRemove` from the list (`item1;item2...`). Returns the new list joined by ';'.
*   `$listSlice[startIndex;endIndex?;item1;item2...]`: Returns a slice of the list items (`item1;item2...`) from `startIndex` (1-based) up to (but not including) `endIndex`. Returns the sliced list joined by ';'.
*   `$listUnion[list1Items;list2Items]`: Returns unique items from both list1 (`list1Item1;list1Item2...`) and list2 (`list2Item1;list2Item2...`) combined, joined by ';'.
*   `$popList[item1;item2...]`: Returns the last item from the list provided as arguments (`item1;item2...`).
*   `$removeContains[containsValue;item1;item2...]`: Returns the list (`item1;item2...`) excluding items that contain `containsValue` as a substring, joined by ';'.
*   `$removeDuplicates[item1;item2...]`: Returns only the unique items from the list provided as arguments (`item1;item2...`), joined by ';'. Order of first appearance is preserved.
*   `$reverseList[item1;item2...]`: Returns the provided item arguments (`item1;item2...`) in reverse order, joined by ';'.
*   `$shiftList[item1;item2...]`: Returns the first item from the list provided as arguments (`item1;item2...`).
*   `$sortAlphabetical[sortOrder(az/za);item1;item2...]`: Sorts the provided items (`item1;item2...`) alphabetically case-insensitive. `sortOrder`: 'az' (ascending) or 'za' (descending). Returns the sorted list joined by ';'. Alias for `$sortList` with alphabetical types.
*   `$sortList[sortType;item1;item2...]`: Sorts the provided items (`item1;item2...`) based on `sortType`: az/za (alphabetical asc/desc), numaz/numza or asc/desc (numerical asc/desc). Returns the sorted list joined by ';'.

## Time/Date

*   `$dateDiff[timestampMs1;timestampMs2]`: Calculates the absolute difference between two Unix timestamps (provided in milliseconds). Returns difference in ms.
*   `$day[timestampMs?]`: Returns the day of the month (1-31) in UTC for the given `timestampMs` (defaults to current time).
*   `$dayOfWeek[timestampMs?]`: Returns the day of the week (0 for Sunday, 6 for Saturday) in UTC for the given `timestampMs` (defaults to current time).
*   `$dayOfYear[timestampMs?]`: Returns the day of the year (1-366) in UTC for the given `timestampMs` (defaults to current time).
*   `$duration[ms]`: Formats `ms` (milliseconds) into a human-readable duration string (e.g., "1d 2h 30m").
*   `$formatDate[timestampMs?;optionsJson?;locale=en-US?]`: Formats a `timestampMs` (defaults to now) using Intl.DateTimeFormat. Provide formatting options via `optionsJson` (e.g., `{ "dateStyle": "full", "timeStyle": "short" }`) and an optional `locale`.
*   `$getMilliseconds[timestampMs?]`: Returns the millisecond part (0-999) of the date in UTC for `timestampMs` (defaults to current time).
*   `$hour[timestampMs?]`: Returns the hour (0-23) in UTC for the given `timestampMs` (defaults to current time).
*   `$isValidDate[dateString]`: Checks if the input `dateString` represents a valid date. Returns true or false.
*   `$minute[timestampMs?]`: Returns the minute (0-59) in UTC for the given `timestampMs` (defaults to current time).
*   `$month[timestampMs?]`: Returns the month (1-12) in UTC for the given `timestampMs` (defaults to current time).
*   `$now`: Returns the current Unix timestamp in milliseconds.
*   `$parseDate[dateString]`: Parses a `dateString` (e.g., "2023-10-27", "10/27/2023 14:30") into a Unix timestamp (ms). Accuracy depends on Node.js Date parser.
*   `$second[timestampMs?]`: Returns the second (0-59) in UTC for the given `timestampMs` (defaults to current time).
*   `$timeSince[timestampMs]`: Returns a human-readable duration string representing the time elapsed since `timestampMs`.
*   `$timeStamp[style?;timestampMs?]`: Returns a Discord timestamp string for embedding in messages. `style`: t, T, d, D, f (default), F, R. `timestampMs` defaults to current time.
*   `$timeUntil[timestampMs]`: Returns a human-readable duration string representing the time remaining until `timestampMs`.
*   `$toISOString[timestampMs?]`: Formats a `timestampMs` (defaults to now) as an ISO 8601 string (e.g., `2023-10-27T10:30:00.000Z`).
*   `$toUTCString[timestampMs?]`: Formats a `timestampMs` (defaults to now) as a human-readable UTC date string (e.g., `Fri, 27 Oct 2023 10:30:00 GMT`).
*   `$year[timestampMs?]`: Returns the full year (YYYY) in UTC for the given `timestampMs` (defaults to current time).

## Validation & Type Checking

*   `$isAlpha[text]`: Checks if `text` contains only alphabetic characters (a-z, A-Z). Returns true or false.
*   `$isAlphanumeric[text]`: Checks if `text` contains only alphanumeric characters (a-z, A-Z, 0-9). Returns true or false.
*   `$isBoolean[value]`: Checks if the provided `value` is exactly the string "true" or "false". Returns true or false.
*   `$isEmail[text]`: Performs a basic check if `text` resembles an email address using regex. Returns true or false.
*   `$isEmpty[text]`: Checks if the provided `text` is empty ("") or contains only whitespace characters. Returns true or false.
*   `$isNull[varName;scope?]`: Checks if the value of variable `varName` in `scope` is null or undefined. Returns true or false.
*   `$isNumber[text]`: Checks if the provided `text` represents a valid JavaScript number (integer or float). Returns true or false.
*   `$isNaNFunc[value]`: Checks if the provided `value` evaluates to NaN (Not-a-Number). Returns true or false.
*   `$isString[value]`: Checks if the provided `value`'s internal JavaScript type is 'string'. Returns true or false.
*   `$isUndefined[varName;scope?]`: Checks if the value of variable `varName` in `scope` is undefined. Returns true or false.
*   `$isURL[text]`: Performs a basic check if `text` looks like a URL (starts with http/https). Returns true or false.
*   `$isValidHex[hex code]`: Checks if the input string is a valid 3 or 6 digit hex color code (optionally starting with #). Returns true or false.
*   `$isValidInvite[inviteCode]`: Checks if an `inviteCode` is potentially valid using Discord's API. Returns true or false.
*   `$isValidJson[text]`: Checks if the input `text` can be parsed as valid JSON. Returns true or false.
*   `$toBoolean[value]`: Converts a `value` to the string 'true' or 'false' based on JavaScript truthiness rules (e.g., non-empty strings, non-zero numbers are true). Alias `$toBoolan`.
*   `$toNumber[value]`: Attempts to convert a `value` to a number. Returns the number as a string or an error message string on failure.
*   `$toString[value]`: Converts any `value` to its string representation.
*   `$typeOf[varName;scope?]`: Returns the internal JavaScript type string (e.g., 'string', 'number', 'boolean', 'object', 'undefined') of variable `varName` in `scope`.

## Web & Encoding

*   `$base64Decode[base64Text]`: Decodes Base64 encoded `base64Text`. Returns the original text or an error if invalid.
*   `$base64Encode[text]`: Encodes `text` into a Base64 string.
*   `$htmlEntitiesDecode[text]`: Decodes common HTML entities (e.g., `&` -> `&`, `<` -> `<`) in `text`.
*   `$htmlEntitiesEncode[text]`: Encodes characters like `<`, `>`, `&` to their HTML entity representations in `text`.
*   `$httpContentType[url]`: Gets the `Content-Type` header for a `url` (performs a HEAD request). **[SECURITY RISK]** (Avoid user input URLs)
*   `$httpHead[url]`: Performs an HTTP HEAD request to the `url` and returns headers as a JSON string. **[SECURITY RISK]** (Avoid user input URLs)
*   `$httpRequest[url;method=GET?;bodyJson?;headersJson?]`: Performs an HTTP request to the specified `url`. Optional arguments for `method`, JSON `bodyJson`, and JSON `headersJson`. Returns the response body as text. **[SECURITY RISK]** (Avoid user input URLs)
*   `$httpStatus[url]`: Gets the HTTP status code for a `url` (performs a GET request). **[SECURITY RISK]** (Avoid user input URLs)
*   `$json[keyPath?]`: Retrieves a value from the last parsed JSON object (using `$jsonParse` or `$parseJSON`) via `keyPath` (dot notation, e.g., `user.name`). No args returns the full JSON string.
*   `$jsonParse[jsonString]`: Parses a `jsonString` and stores the object internally for use with `$json[keyPath]`. Alias `$parseJSON`.
*   `$parseJSON[varName;jsonString]`: Parses `jsonString` and stores the resulting object/array in a local variable `varName`. Alias for `$jsonParse` with variable storage.
*   `$jsonToXml[jsonString]`: Converts a JSON string to an XML string representation. *(May require external library)*
*   `$stringifyJSON[varName;indent?]`: Converts a local variable (`varName`) containing an object or array back into a JSON string. `indent` specifies spaces for pretty-printing.
*   `$urlDecode[encodedText]`: Decodes URL-encoded text (`encodedText`) using `decodeURIComponent`.
*   `$urlEncode[text]`: Encodes `text` for use in URL components using `encodeURIComponent`.
*   `$xmlToJson[xmlString]`: Converts an XML string to a JSON string representation. *(May require external library)*

## File System (**Use with extreme caution! SECURITY RISK - OWNER ONLY**)

*   `$appendFile[filePath;content]`: Appends `content` to a local file specified by `filePath`. Creates the file if it doesn't exist. **[SECURITY RISK - OWNER ONLY]**
*   `$createDirectory[dirPath]`: Creates a directory at the local `dirPath` (including parent directories if needed). **[SECURITY RISK - OWNER ONLY]**
*   `$createFileAttachment[source;name?]`: Reads a local file (`source`=filePath) or uses text (`source`=textContent) and prepares it as an attachment. `name` sets the filename. Attaches to the next message sending function. **[SECURITY RISK - OWNER ONLY]**
*   `$deleteDirectory[dirPath;recursive?=false]`: Deletes a directory at `dirPath`. Requires `recursive`=true to delete non-empty directories. **[SECURITY RISK - OWNER ONLY]**
*   `$deleteFile[filePath]`: Deletes a file at the local `filePath`. **[SECURITY RISK - OWNER ONLY]**
*   `$fileExists[filePath]`: Returns `true` or `false` if the file or directory exists at the local `filePath`. **[SECURITY RISK - OWNER ONLY]**
*   `$getFileStats[filePath]`: Returns a JSON string with file statistics (size, mtimeMs, ctimeMs, isFile, isDirectory) for `filePath`. **[SECURITY RISK - OWNER ONLY]**
*   `$listFiles[dirPath]`: Returns a semicolon-separated list of file and directory names within the specified local `dirPath`. **[SECURITY RISK - OWNER ONLY]**
*   `$readFile[filePath]`: Reads content from a local file specified by `filePath`. Returns file content as text. **[SECURITY RISK - OWNER ONLY]**
*   `$writeFile[filePath;content]`: Writes `content` to a local file at `filePath`, overwriting existing content. Creates directories if needed. **[SECURITY RISK - OWNER ONLY]**

## Voice (Requires Player & Queue Implementation)

*   `$isVoiceConnected`: Returns `true` if the bot is currently connected to a voice channel in the current guild, `false` otherwise.
*   `$moveMemberVoice[memberID;channelID;reason?]`: Moves a specified `memberID` to another voice `channelID`. Requires Move Members permission.
*   `$voiceChannelID`: Returns the ID of the voice channel the bot is currently connected to in the current guild. Returns empty if not connected.
*   `$voiceGetVolume`: Gets the stored playback volume (0-200, default 100).
*   `$voiceJoin[channelID?]`: Makes the bot join the user's current voice channel or a specified `channelID`. Requires Connect and Speak permissions.
*   `$voiceLeave[guildID?]`: Makes the bot leave its current voice channel in the current or specified `guildID`.
*   `$voiceLoop[mode=none/track/queue?]`: Sets or gets the loop mode for the player. No argument returns the current mode.
*   `$voiceNowPlaying`: Returns the title of the currently playing song. Returns empty if nothing is playing.
*   `$voicePause`: Pauses the current audio playback. Requires bot to be playing.
*   `$voicePlay[youtubeCookie;queryOrURL]`: Plays audio from a `queryOrURL` (YouTube search/URL, SoundCloud URL, etc.) in the bot's current voice channel. Requires `youtubeCookie` setup for searches. Adds to queue if already playing. **[SECURITY RISK]** (Cookie usage may have privacy implications)
*   `$voiceQueueAdd[queryOrURL]`: Explicitly adds a song/URL (`queryOrURL`) to the queue.
*   `$voiceQueueClear`: Clears all tracks from the song queue (does not stop the current song).
*   `$voiceQueueList[limit=10?;separator=\n?]`: Returns the current queue as a list of titles, up to `limit`, separated by `separator`.
*   `$voiceQueueRemove[index]`: Removes a song from the queue by its 1-based `index`.
*   `$voiceResume`: Resumes paused audio playback. Requires bot to be paused.
*   `$voiceSetVolume[volume]`: Sets the playback volume (0-200). **[Note: Basic Implementation - May not affect perceived loudness linearly]**
*   `$voiceSkip`: Skips the currently playing song and plays the next one in the queue, if any.
*   `$voiceStop`: Stops playback completely and clears the entire queue.

## Stage Instances

*   `$createStageInstance[channelID;topic;privacyLevel=GUILD_ONLY?;sendStartNotification=false?;reason?]`: Creates a stage instance in a stage `channelID`. `privacyLevel`: GUILD_ONLY/PUBLIC. Requires Manage Channels, Mute Members, Move Members permissions. **[File not listed, assumed function]**
*   `$deleteStageInstance[channelID;reason?]`: Deletes a stage instance in the specified stage `channelID`. Requires Manage Channels, Mute Members, Move Members permissions. **[File not listed, assumed function]**
*   `$modifyStageInstance[channelID;topic?;privacyLevel?;reason?]`: Modifies a stage instance's properties like `topic` or `privacyLevel`. Requires Manage Channels, Mute Members, Move Members permissions. **[File not listed, assumed function]**
*   `$stageInstanceTopic[channelID;newTopic?]`: Gets or sets the topic of a stage instance in `channelID`. If `newTopic` is provided, it attempts to set it. Requires Manage Channels permission. **[File not listed, assumed function]**

## Guild Templates

*   `$createGuildTemplate[name;description?]`: Creates a guild template from the current guild's state. Returns the template code. Requires Manage Guild permission.
*   `$deleteGuildTemplate[code]`: Deletes a guild template created by the bot, identified by its `code`. Requires Manage Guild permission.
*   `$getGuildTemplate[code]`: Fetches and returns a JSON string with information about a public guild template identified by its `code`.
*   `$modifyGuildTemplate[code;optionsJson]`: Modifies a guild template's name or description using a JSON object for `optionsJson` (e.g., `{ "name": "New Name" }`). Requires Manage Guild permission. Returns the template code.
*   `$syncGuildTemplate[code]`: Syncs changes from the current guild's state to a template created by the bot, identified by its `code`. Requires Manage Guild permission. Returns the template code.

## Guild Management

*   `$createGuild[name;region?;iconURL?;verificationLevel?;defaultMessageNotifications?;explicitContentFilter?;systemChannelID?;rulesChannelID?]`: Creates a new guild where the bot is the owner. **[RATE LIMITED - DANGEROUS - OWNER ONLY]**
*   `$deleteGuild[guildID]`: Makes the bot leave the specified `guildID`. If the bot owns the guild, **THIS DELETES THE GUILD PERMANENTLY**. Use with extreme caution. **[DANGEROUS - OWNER ONLY]**

## Webhooks

*   `$createWebhook[channelID;name;avatarURL?;reason?]`: Creates a webhook in the specified `channelID`. Returns the new webhook ID. Requires Manage Webhooks permission.
*   `$deleteWebhook[webhookID_or_URL;reason?]`: Deletes a webhook using its ID or full URL. Requires Manage Webhooks permission.
*   `$hasWebhook[channelID?]`: Checks if the current or specified `channelID` has any webhooks the bot can see. Returns true or false. Requires Manage Webhooks permission.
*   `$modifyWebhook[webhookID_or_URL;optionsJson;reason?]`: Modifies webhook properties (name, avatar, channel) using a JSON object for `optionsJson`. Requires Manage Webhooks permission. Returns the webhook ID.
*   `$sendWebhookMessage[webhookID;webhookToken;content?;optionsJson?]`: Sends a message via webhook ID and Token. `optionsJson` can include username, avatar_url, embeds, components, etc.

## Invites

*   `$createInvite[channelID?;optionsJson?;reason?]`: Creates an invite for the current or specified `channelID`. `optionsJson` can control duration (seconds), maxUses, temporary membership, unique. Returns the invite code (e.g., `discord.gg/code`). Requires Create Instant Invite permission.
*   `$inviteInfo[inviteCode;property?]`: Fetches info about an `inviteCode`. `property`: guildID/guildName/channelID/channelName/inviterID/inviterTag/uses/maxUses/expiresTimestamp/code. Returns full JSON if `property` is omitted.

## Ticket System (Requires Implementation)

*   `$addMemberToTicket[userID;channelID?]`: Adds view/send permissions for `userID` to the ticket channel (`channelID` defaults to current). **[Requires ticket system setup]**
*   `$claimTicket[channelID?]`: Marks a ticket channel (`channelID` defaults to current) as claimed. **[Requires ticket system setup]**
*   `$closeTicket[channelID?;reason?]`: Closes/archives/deletes a ticket channel (`channelID` defaults to current). **[Requires ticket system setup]**
*   `$newTicket[topic;categoryID?;private(true)?;reason?]`: Creates a new ticket channel with `topic`. Specify `categoryID` and `private` status. Returns the new channel ID. **[Requires ticket system setup]**
*   `$removeMemberFromTicket[userID;channelID?]`: Removes view/send permissions for `userID` from the ticket channel (`channelID` defaults to current). **[Requires ticket system setup]**
*   `$unclaimTicket[channelID?]`: Marks a ticket channel (`channelID` defaults to current) as unclaimed. **[Requires ticket system setup]**

## Event Handling & Data

*   `$emitEvent[eventName;dataJson?]`: Emits a custom event with `eventName` and optional JSON `dataJson` payload for `$listenEvent`.
*   `$listenEvent[eventName;codeToRun]`: Listens for a custom event (`eventName`) and runs the specified Solara `codeToRun` when emitted. **[Requires Setup - Not fully implemented in base]**
*   `$deletedMessageContent`: Returns the content of the deleted message within a `messageDelete` event context.
*   `$newMemberAvatar`: Returns the new avatar URL of the member within a `guildMemberUpdate` (avatar change) event context.
*   `$newMessageContent`: Returns the new message content within a `messageUpdate` event context.
*   `$newRoleName`: Returns the name of the new/updated role within a `roleCreate` or `roleUpdate` event context.
*   `$newStateChannelID`: Returns the channel ID from the new voice state within a `voiceStateUpdate` event context (empty if disconnected).
*   `$oldMemberAvatar`: Returns the old avatar URL of the member within a `guildMemberUpdate` (avatar change) event context.
*   `$oldMessageContent`: Returns the old message content within a `messageUpdate` event context.
*   `$oldRoleName`: Returns the name of the old role state within a `roleUpdate` or `roleDelete` event context.
*   `$onStateChannelID`: Returns the channel ID from the old voice state within a `voiceStateUpdate` event context (empty if was disconnected). Alias `$oldStateChannelID`.
*   `$removedReactionEmoji`: Returns the identifier (unicode or `<:name:id>`) of the removed emoji within a `messageReactionRemove` event context.

## Caching (Simple In-Memory)

*   `$cacheClear`: Clears the entire simple in-memory cache used by `$cacheSet`/`$cacheGet`.
*   `$cacheDelete[key]`: Deletes a `key` from the simple in-memory cache.
*   `$cacheGet[key]`: Gets a value from the simple in-memory cache by `key`. Returns empty if not found or expired.
*   `$cacheHas[key]`: Checks if a `key` exists (and hasn't expired) in the simple in-memory cache. Returns true or false.
*   `$cacheSet[key;value;ttlSeconds?]`: Sets a `key`-`value` pair in the simple in-memory cache, optionally with a time-to-live (`ttlSeconds`).
*   `$cacheSize`: Returns the number of items currently in the simple in-memory cache.

## Database (Requires Implementation)

*   `$dbClear`: Clears the entire database. **[DANGEROUS]** **[Requires DB setup]**
*   `$dbDelete[key]`: Deletes a `key` from the database. **[Requires DB setup]**
*   `$dbGet[key]`: Gets a value from the database by `key`. **[Requires DB setup]**
*   `$dbHas[key]`: Checks if a `key` exists in the database. **[Requires DB setup]**
*   `$dbIncrement[key;amount=1?]`: Increments a numeric value associated with `key` in the database by `amount`. **[Requires DB setup]**
*   `$dbPush[key;value]`: Pushes a `value` onto an array stored under `key` in the database. **[Requires DB setup]**
*   `$dbSet[key;value]`: Sets a `key`-`value` pair in the database. **[Requires DB setup]**

## Giveaways

*   `$giveaway[duration;winnerCount;prize;requiredRoleID?]`: Starts a simple giveaway embedded message with reactions. `duration` (e.g., `1h30m`). `requiredRoleID` is optional. **[Requires giveaway system implementation]**

## Canvas / Image Manipulation (Requires `npm install canvas`)

*   `$attachCanvas[fileName=canvas.png?;quality?;compressionLevel?]`: Attaches the currently built canvas as an image file (`fileName`) to the response being built. `quality` (0-1 for JPEG), `compressionLevel` (0-9 for PNG).
*   `$captchaCard[captchaKey;backgroundURL?;borderColor?;overlayOpacity?]`: Generates a Captcha image using a `captchaKey` (obtained via `$captchaKey`). Options customize appearance. **[Requires setup]**
*   `$captchaKey[length=6?]`: Generates a random captcha key string of specified `length`.
*   `$canvasSize[property?]`: Returns the size (width;height) of the current canvas. Optional `property`: width/height.
*   `$canvasVersion`: Returns the installed `node-canvas` library version.
*   `$createCanvas[width;height]`: Creates a new canvas context with specified `width` and `height` for drawing. Clears previous canvas data.
*   `$drawImage[imageVarName;dx;dy;dw?;dh?;sx?;sy?;sw?;sh?]`: Draws an image (loaded via `$loadImage` into `imageVarName`) onto the canvas at destination `(dx, dy)`, optionally scaling to `dw`, `dh` or cropping from source `(sx, sy, sw, sh)`.
*   `$fillRect[x;y;width;height]`: Draws a filled rectangle on the canvas using the current `$fillStyle`.
*   `$fillStyle[color]`: Sets the fill color, gradient, or pattern for shapes and text. `color` can be hex, rgb, color name.
*   `$fillText[text;x;y;maxWidth?]`: Draws filled `text` on the canvas at `(x, y)` using current `$fillStyle` and `$font`. Optionally constrain width to `maxWidth`.
*   `$font[fontString]`: Sets the font style using a CSS font string (e.g., 'bold 40px Arial'). Requires font to be available or registered via `$registerFont`.
*   `$imageSize[imageVarName;property?]`: Returns the dimensions (width;height) of a loaded image variable (`imageVarName` from `$loadImage`). Optional `property`: width/height.
*   `$levelUpCard[username;oldLevel;newLevel;avatarURL?;backgroundURL?;borderColor?;avatarBorderColor?;overlayOpacity?]`: Generates a Level Up card image. **[Requires specific card generation setup]**
*   `$loadImage[urlOrPath;variableName]`: Loads an image from a `urlOrPath` and stores it internally, accessible via `variableName` for use in `$drawImage` or `$imageSize`. **[SECURITY RISK - OWNER ONLY]** (If using file path)
*   `$measureText[text]`: Measures the width of `text` based on the current `$font` settings. Returns width in pixels.
*   `$profileCard[userID;borderColor?]`: Generates a basic profile card image for `userID`. **[Requires specific card generation setup]**
*   `$rankCard[username;level;rank;currentXP;requiredXP;avatarURL?;backgroundURL?;status?;borderColor?;progressBarColor?]`: Generates a rank card image. **[Requires specific card generation setup]**
*   `$registerFont[fontPath;fontFamily]`: Registers a custom font from a local `fontPath` with a given `fontFamily` name for use on the canvas. **[SECURITY RISK - OWNER ONLY]**
*   `$spotifyCard[title;author;album;imageURL;startTimestampMs?;endTimestampMs?;blur?;overlayOpacity?]`: Generates a Spotify status card image based on provided track details. **[Requires specific card generation setup]**
*   `$strokeRect[x;y;width;height]`: Draws an outlined rectangle on the canvas using the current `$strokeStyle`.
*   `$strokeStyle[color]`: Sets the stroke color, gradient, or pattern for shape and text outlines. `color` can be hex, rgb, color name.
*   `$strokeText[text;x;y;maxWidth?]`: Draws the outline of `text` on the canvas at `(x, y)` using current `$strokeStyle` and `$font`. Optionally constrain width to `maxWidth`.
*   `$textAlign[alignment]`: Sets text alignment for `$fillText`/`$strokeText`. `alignment`: left/right/center/start/end.
*   `$textBaseline[baseline]`: Sets the vertical text baseline alignment. `baseline`: top/hanging/middle/alphabetic/ideographic/bottom.
*   `$welcomeCard[title;description;avatarURL?;backgroundURL?;borderColor?;avatarBorderColor?;overlayOpacity?]`: Generates a welcome card image and attaches it. **[Requires specific card generation setup]**

## External APIs / Miscellaneous

*   `$lyrics[geniusApiKey;songTitle;artist]`: Fetches lyrics for a `songTitle` by `artist` using the Genius API (requires `geniusApiKey`). **[Requires API Key Setup]**
*   `$uritomp3[query]`: Finds a streamable audio URL for a search `query` (used internally by `$voicePlay`). Not intended for direct download. **[Implementation Detail]**
