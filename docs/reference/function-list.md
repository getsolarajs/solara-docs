---
sidebar_position: 1
title: Function List
id: function-list
slug: /reference/function-list
---

# Function Reference

This page lists the built-in functions available in Solara.js, categorized for easier navigation.

**Note:** Arguments marked with `?` are optional. Default values are often implied or noted. Semicolons (`;`) separate arguments within brackets `[]`. Functions marked **[SECURITY RISK]** or **[DANGEROUS]** should still be used with extreme caution. Functions derived from filenames might have slightly different names or parameters than listed; refer to specific function documentation if available.

## Core & Bot Info

*   `$applicationCommandCount`: Returns the number of registered global slash commands.
*   `$applicationCommandList`: Returns a semicolon-separated list of registered global slash command names.
*   `$applicationOwnerID`: Returns the user ID of the application owner.
*   `$botAvatar`: Returns the bot's avatar URL.
*   `$botGuildsCount`: Returns the number of guilds the bot is in.
*   `$botID`: Returns the bot's user ID. Alias: `$clientID`.
*   `$botInviteURL[permissionBitfield or permName1;permName2...?]`: Generates the bot's invite URL with specified permissions using either a bitfield number or permission names.
*   `$botLeave[guildID]`: Makes the bot leave the specified guild.
*   `$botName`: Returns the bot's username.
*   `$botPing`: Returns websocket ping in milliseconds. Alias: `$ping`.
*   `$botPresenceActivityName`: Returns the name of the bot's current primary activity.
*   `$botPresenceActivityType`: Returns the type of the bot's current primary activity (like Playing, Watching, etc.).
*   `$botPresenceStatus`: Returns the bot's current presence status (like online, idle, etc.).
*   `$botTags`: Returns semicolon-separated application tags.
*   `$botToken`: Returns redacted bot token string.
*   `$botTyping[channelID?]`: Makes the bot start typing in the current or specified channel. Duration is limited.
*   `$botUsersCount`: Returns the total number of users the bot can see in its cache.
*   `$changeBotAvatar[imageURL]`: Changes bot avatar using the provided image URL. **[Rate Limited]**
*   `$changeBotStatus[status;activityType;activityName;streamURL?]`: Changes bot presence using the specified status, activity type, activity name, and optional stream URL for streaming status.
*   `$changeBotUsername[newUsername]`: Changes bot username to the provided name. **[Rate Limited]**
*   `$getClientData[property]`: Gets a client configuration property by its name. *(May be specific to certain setups)*
*   `$isVerifiedBot`: Checks if the bot is verified (returns true or false).
*   `$ping`: Returns websocket ping in milliseconds. Alias: `$botPing`.
*   `$shardCount`: Returns the total number of shards for the bot (usually 1 if not sharded).
*   `$shardID`: Returns the ID of the current shard (usually 0 if not sharded).
*   `$uptime`: Returns the bot's uptime in milliseconds.

## Message Sending & Basic Replies

*   `$channelSendMessage[channelID;content?;returnMsgID?]`: Sends message/embed/components to a specific channel. Uses context's built items if `content` is omitted. Set `returnMsgID` to true to optionally return the message ID.
*   `$reply[content?]`: Replies to the triggering message. Uses context's built embed/components/attachments if `content` is omitted. Returns message ID. Stores sent message.
*   `$sendMessage[content?]`: Sends message/embed/components explicitly. Uses context's built embed/components/attachments if `content` is omitted. Returns message ID. Stores sent message.

## Interaction Handling & Replies

*   `$autocompleteOptionName`: Returns the name of the focused option in an autocomplete interaction. Alias `$autocompleteOptoinName`.
*   `$autocompleteOptionValue`: Returns the current value of the focused option in an autocomplete interaction.
*   `$deferReply[ephemeral?]`: Defers the initial reply to an interaction, showing a "thinking..." state. Necessary if processing takes longer than Discord's time limit. Use `$followUp` afterwards. Set `ephemeral` to true for an ephemeral deferral. Returns nothing.
*   `$ephemeral`: Marks the interaction response (when using `$interactionReply` or implicit sending) as ephemeral. Use *before* the reply/defer function. Returns nothing.
*   `$followUp[content?;ephemeral?;returnMsgID?]`: Sends a follow-up message after an interaction has already been replied to or deferred. Can be used multiple times. Sends current embed/components/attachments. Set `ephemeral` to true for an ephemeral follow-up. Set `returnMsgID` to true to optionally return the message ID. Alias `$interactionFollowUp`.
*   `$getInteractionLocale`: Returns the locale string of the interaction.
*   `$getInteractionSubcommand`: Returns the name of the used subcommand from a slash command interaction, if one was used. Returns empty string otherwise. Alias `$getInteractionSubcommands`.
*   `$getInteractionSubcommandGroup`: Returns the name of the used subcommand group from a slash command interaction, if one was used. Returns empty string otherwise.
*   `$interactionChannelID`: Returns the ID of the channel where the interaction occurred.
*   `$interactionCustomID`: Returns the `customId` of the button, select menu, or modal that triggered the interaction. Returns error if not a component/modal interaction.
*   `$interactionGuildID`: Returns the ID of the guild where the interaction occurred.
*   `$interactionID`: Returns the unique ID of the current interaction.
*   `$interactionOption[optionName]`: Gets the value of a slash command option by its name.
*   `$interactionReply[content?;ephemeral?;returnMsgID?]`: Replies *once* to a slash command, button, or select menu interaction. Fails if already replied/deferred. Sends current embed/components/attachments. Set `ephemeral` to true for an ephemeral reply. Set `returnMsgID` to true and ensure it's not ephemeral to optionally return the message ID.
*   `$interactionResponseExists`: Checks if the interaction has been replied to or deferred (returns true or false). Alias `$interactionResponseExits`.
*   `$interactionToken`: Returns the interaction's token. **[SECURITY RISK - Do not expose]**
*   `$interactionUpdate[content?]`: Edits the *original message* associated with a component (button/select menu) interaction. Cannot be used for slash commands or modals. Clears existing message content unless new items are built first. Uses context's built items if `content` is omitted. Returns nothing.
*   `$interactionUserID`: Returns the ID of the user who initiated the interaction. Alias `$authorID` in interaction context.
*   `$interactionValues`: Returns the selected value(s) from a select menu interaction. If multiple values are selected, they are joined by a semicolon. Returns error if not a select menu interaction.
*   `$isAutocomplete`: Checks if the interaction is an autocomplete request (returns true or false).
*   `$isButtonInteraction`: Checks if the interaction is a button click (returns true or false).
*   `$isEphemeral`: Returns `true` if the interaction was deferred ephemerally. *(Note: Cannot reliably detect if a non-deferred reply was made ephemeral).*
*   `$isInteraction`: Returns `true` if the current context is an interaction, `false` otherwise.
*   `$isMessage`: Returns `true` if the current context is a message, `false` otherwise.
*   `$isModalSubmit`: Checks if the interaction is a modal submission (returns true or false).
*   `$isSelectMenuInteraction`: Checks if the interaction is any select menu type (returns true or false).
*   `$respondAutocomplete[choicesJsonString]`: Responds to an autocomplete interaction with choices. The `choicesJsonString` must be a JSON array of name/value objects (max 25).
*   `$slashCommandName`: Returns the name of the executed slash command. Returns error if not a slash command interaction.

## Modal Handling

*   `$addModal[customID;title;$addTextInputFunction1;$addTextInputFunctionN...]`: Builds a modal object in the execution context. The `customID` identifies the modal submission. `title` is the modal title. Subsequent arguments must be `$addTextInput` function calls. Returns nothing.
*   `$addTextInput[customID;label;style(Short/Paragraph);required?;minLength?;maxLength?;placeholder?;value?]`: *Used only inside `$addModal`*. Defines a text input field for the modal. `required` is true/false. `style` is Short or Paragraph. Returns an error if used outside `$addModal`.
*   `$interactionShowModal`: Shows the modal previously built using `$addModal` as the response to the current interaction. Fails if already replied/deferred or not a suitable interaction type. Returns nothing.
*   `$modalFieldValue[fieldCustomId]`: Returns the text value submitted by the user for a specific text input field (identified by its `customId`) within a modal submit interaction. Returns error if not a modal submit or field not found. Alias `$modalComponentValue`.

## Component Building

*   `$addActionRow[$componentFunction1;$componentFunctionN...]`: Groups component function calls (like `$addButton` or `$addSelectMenu`) into an action row.
*   `$addButton[customIDOrURL;label;style;disabled?;emoji?]`: Adds button data to the execution context. The `style` argument determines the button's appearance (Primary, Secondary, etc.) and if it's a link or interaction button. Returns nothing.
*   `$addChannelSelectMenu[customID;placeholder;minValues?;maxValues?;channelTypesJson?;disabled?]`: Adds channel select menu JSON data to context. `channelTypesJson` restricts selectable channel types using a JSON array of numbers. `disabled` is true or false.
*   `$addMentionableSelectMenu[customID;placeholder;minValues?;maxValues?;disabled?]`: Adds a select menu for users and roles to context. `disabled` is true or false.
*   `$addRoleSelectMenu[customID;placeholder;minValues?;maxValues?;disabled?]`: Adds role select menu JSON data to context. `disabled` is true or false.
*   `$addSelectMenu[customID;placeholder;minValues=1?;maxValues=1?;disabled?]`: Adds string select menu data to context. Use `$addSelectMenuOption` immediately after to add options to *this* menu. Returns nothing.
*   `$addSelectMenuOption[label;value;description?;emoji?;default?]`: Adds an option to the *most recently added* select menu builder in the context. Must follow `$addSelectMenu`. `default` is true or false. Returns nothing. Alias: `$addSelectOption`.
*   `$addUserSelectMenu[customID;placeholder;minValues?;maxValues?;disabled?]`: Adds user select menu JSON data to context. `disabled` is true or false.
*   `$getComponentData[customID]`: Retrieves data associated with a component (implementation specific).

## Component Modifiers

*   `$setButtonDisabled[index;disabled(true/false)]`: Sets the disabled state for the button at the specified 1-based `index` in the last added action row.
*   `$setButtonEmoji[index;emoji]`: Sets the emoji for the button at the specified 1-based `index` in the last added action row.
*   `$setButtonLabel[index;label]`: Sets the label for the button at the specified 1-based `index` in the last added action row.
*   `$setButtonStyle[index;style]`: Sets the style for the button at the specified 1-based `index` in the last added action row.

## Message Actions & Info

*   `$addReaction[messageID;emoji1;emoji2...]`: Adds one or more reactions to a specified message.
*   `$attachment[index=1?]`: Returns the URL of the attachment at the specified 1-based index from the triggering message. Alias `$attachement`.
*   `$clear[amount;filterUserID?;pinned?]`: Bulk deletes a specified number of messages (up to 100) in the current channel. Can optionally filter by user ID and ignore pinned messages.
*   `$clearReactions[messageID;emoji?]`: Removes all reactions or a specific emoji's reactions from a specified message.
*   `$crosspostMessage[messageID;channelID?]`: Publishes (crossposts) a message in an announcement channel. Requires applicable permissions.
*   `$deletecommand`: Deletes the triggering message (if the context is a message command).
*   `$deleteIn[milliseconds]`: Deletes the last message sent via `$sendMessage` or `$reply` after a specified delay in milliseconds. *(Consider using `$wait` + `$editMessage` instead for reliability)*.
*   `$editIn[milliseconds;newMessageContent?]`: Edits the last sent message after a specified delay in milliseconds. *(Consider using `$wait` + `$editMessage` instead for reliability)*.
*   `$editMessage[messageID;newContent?]`: Edits a specific bot message identified by its ID. Uses the current embed/components/attachments from context if `newContent` is omitted.
*   `$fetchMessage[messageID;channelID?]`: Fetches a message by ID from the specified channel (or current channel if omitted) to ensure it's cached. Returns the message ID.
*   `$findMessage[query;channelID?;limit=50?]`: Finds the first message ID containing the query text in a specified channel (or current). Searches backwards from the present up to a limit.
*   `$getMessageComponents[messageID]`: Returns the component structure (buttons, select menus) of a specific message as a JSON string.
*   `$getMessageData[type;property;channelID?;index=1?]`: Gets cached data for deleted or edited messages. Specify `type` (deleted/edited) and `property` (content, authorid, etc.). *(Potentially Unreliable)* Alias `$messageData`.
*   `$getMessageEmbed[messageID;index=1?]`: Returns JSON string of a specific embed (by 1-based index) on a given message.
*   `$getMessageFlags[messageID]`: Returns a semicolon-separated list of message flag names for a specific message.
*   `$getMessageInteraction[messageID]`: Returns basic interaction info (ID, Type, Name, UserID) if the specified message is an interaction response. Alias `$getMessageInteractions`.
*   `$getMessageJumpURL[messageID;channelID?;guildID?]`: Returns the jump URL for a specific message.
*   `$getMessageReactions[messageID;emoji?;property=count/users?]`: Returns reaction count or a semicolon-separated list of user IDs for reactions on a message. Specify the `property` as 'count' or 'users'.
*   `$isPinned[messageID?]`: Checks if the trigger message (or specified message) is pinned (returns true or false).
*   `$lastMessageID`: Returns the ID of the last message sent via `$sendMessage` or `$reply` in the current execution context.
*   `$messageArg[index]`: Returns the argument at the specified 1-based index from a prefix command.
*   `$messageArgs`: Returns semicolon-separated arguments from a prefix command.
*   `$messageAttachmentCount`: Returns the number of attachments on the triggering message.
*   `$messageContent`: Returns the raw content of the triggering message. Alias `$message`.
*   `$messageEditedTimestamp`: Returns the timestamp (in milliseconds) when the trigger message was last edited, or empty if not edited.
*   `$messageExists[messageID;channelID]`: Checks if a message with the given ID exists in the specified channel (returns true or false).
*   `$messageID`: Returns the triggering message ID (if applicable, e.g., from message context).
*   `$messageType`: Returns the type of the triggering message.
*   `$messageURL`: Returns the jump URL of the triggering message.
*   `$noMentionMessage`: Returns the message content with standard Discord mentions (user, role, channel) removed.
*   `$pinMessage[messageID]`: Pins a specified message in the current channel.
*   `$removeReaction[messageID;emoji;userID=@me?]`: Removes reaction(s) from a message. Use `@me` for `userID` to target the bot.
*   `$repliedMessageAuthor`: Returns the User ID of the author of the message being replied to (if the trigger message is a reply).
*   `$repliedMessageID`: Returns the ID of the message being replied to (if the trigger message is a reply).
*   `$suppressEmbeds[messageID;suppress(true/false)]`: Suppresses or unsuppresses embeds on the bot's own message. `suppress` should be true or false.
*   `$unpinMessage[messageID]`: Unpins a specified message in the current channel.

## Embed Building

*   `$addEmptyField[inline?]`: Adds an empty field to the embed, useful for layout spacing. `inline` is true or false.
*   `$addField[name;value;inline?]`: Adds a field with a name and value to the embed. `inline` is true or false.
*   `$author[name;iconURL?;url?]`: Sets the embed author section with a name and optional icon URL and URL link.
*   `$color[hex code or color name]`: Sets the embed color using a hex code or a standard color name.
*   `$description[text]`: Sets the main text content of the embed description.
*   `$footer[text;iconURL?]`: Sets the embed footer section with text and an optional icon URL.
*   `$getEmbedJSON`: Returns the current embed data being built in the context as a JSON string. Alias `$getEmbedJson`.
*   `$image[url]`: Sets the main large image URL for the embed.
*   `$setEmbedJSON[jsonString]`: Replaces the current embed data being built in the context with data parsed from the provided JSON string.
*   `$setEmbedURL[url]`: Sets the URL that the embed title links to. Alias `$setEmbedUrl`.
*   `$thumbnail[url]`: Sets the small thumbnail image URL for the embed.
*   `$addTimestamp[milliseconds?]`: Adds a timestamp to the embed footer. Defaults to the current time if no millisecond timestamp is provided. Alias `$addtimestamp`.
*   `$title[text]`: Sets the title text of the embed.

## User/Member Info

*   `$accountCreatedDate[userID?]`: Returns the account creation timestamp (in milliseconds) for the specified user or the author.
*   `$activity[userID?]`: Returns the primary activity name for the specified user or author. Requires Presence intent.
*   `$authorAvatar`: Returns the avatar URL of the user who triggered the command/interaction.
*   `$authorID`: Returns the ID of the user who triggered the command/interaction.
*   `$authorTag`: Returns the tag (like Username#Discriminator or just Username) of the user who triggered the command/interaction.
*   `$boostingSince[memberID?]`: Returns the timestamp (in milliseconds) when the specified member or the author started boosting the server.
*   `$canManageUser[targetUserID;managerMemberID?]`: Checks if the manager (or bot if omitted) can manage the target user based on role hierarchy (returns true or false).
*   `$fetchMember[userID]`: Fetches a member from the current guild by ID to ensure their data is cached. Returns the member ID.
*   `$hasAllRoles[memberID?;roleID1;roleID2...]`: Checks if the specified member or the author has all of the specified roles (returns true or false).
*   `$hasAnyRole[memberID?;roleID1;roleID2...]`: Checks if the specified member or the author has at least one of the specified roles (returns true or false).
*   `$hasRole[roleID;memberID?]`: Checks if the specified member or the author has a specific role (returns true or false).
*   `$highestRole[memberID?]`: Returns the ID of the highest positioned role of the specified member or the author.
*   `$isBannable[userID]`: Checks if the specified user is bannable by the bot (returns true or false).
*   `$isBooster[memberID?]`: Checks if the specified member or the author is boosting the server (returns true or false). Alias `$isBoosting`.
*   `$isBoosting[memberID?]`: Checks if the specified member or the author is boosting the server (returns true or false).
*   `$isBot[userID?]`: Checks if the specified user or the author is a bot (returns true or false).
*   `$isKickable[memberID]`: Checks if the specified member is kickable by the bot (returns true or false).
*   `$isModeratable[memberID]`: Checks if the specified member is moderatable (timeout, set nickname, etc.) by the bot (returns true or false).
*   `$isServerDeafened[memberID?]`: Checks if the specified member or the author is server deafened in voice (returns true or false).
*   `$isServerMuted[memberID?]`: Checks if the specified member or the author is server muted in voice (returns true or false).
*   `$isVoiceDeafened[userID?]`: Checks if the specified user or the author is locally voice deafened (returns true or false).
*   `$isVoiceMuted[userID?]`: Checks if the specified user or the author is locally voice muted (returns true or false).
*   `$lowestRole[memberID?]`: Returns the ID of the lowest positioned role (excluding @everyone) of the specified member or the author.
*   `$memberAvatar[memberID?]`: Returns the server-specific avatar URL for the specified member or the author, if set; otherwise returns the user's main avatar URL.
*   `$memberExists[userID]`: Alias for `$userExistsInGuild`. Checks if a user with this ID is currently a member of the guild (returns true or false).
*   `$memberFlags[memberID?]`: Returns a semicolon-separated list of member flag names for the specified member or the author.
*   `$memberJoinedDate[memberID?]`: Returns the timestamp (in milliseconds) when the specified member or the author joined the server.
*   `$memberPermissions[memberID?]`: Returns a semicolon-separated list of calculated guild-level permission names for the specified member or the author.
*   `$memberTimeoutEndTimestamp[memberID?]`: Returns the timestamp (in milliseconds) when the specified member's or the author's timeout ends, or empty if not timed out.
*   `$modifyMember[memberID;optionsJson;reason?]`: Modifies member properties (like nickname, roles, mute, deaf, channel) using a JSON object for options. **[Potentially Dangerous]**
*   `$nickname[memberID?]`: Returns the server nickname of the specified member or the author (falls back to username if no nickname). Alias `$displayName`.
*   `$searchMembers[query;limit=10?]`: Searches for members in the current guild by username or nickname. Returns a semicolon-separated list of matching member IDs, up to the limit.
*   `$userAccentColor[userID?]`: Returns the user's profile accent color hex code (requires fetching user). Applies to specified user or author.
*   `$userActivity[userID?]`: Returns the user's primary activity details as a formatted string (implementation specific). Requires Presence Intent.
*   `$userActivityDetails[userID?]`: Returns the details field of the user's primary activity. Requires Presence Intent. Applies to specified user or author.
*   `$userActivityName[userID?]`: Returns the name of the user's primary activity. Requires Presence Intent. Applies to specified user or author.
*   `$userActivityState[userID?]`: Returns the state field of the user's primary activity. Requires Presence Intent. Applies to specified user or author.
*   `$userActivityType[userID?]`: Returns the type (like Playing, Listening, etc.) of the user's primary activity. Requires Presence Intent. Applies to specified user or author.
*   `$userAvatar[userID?]`: Returns the avatar URL of the specified user or the author.
*   `$userBadges[userID?]`: Returns a semicolon-separated list of user flag names (badges) for the specified user or the author.
*   `$userBanner[userID?]`: Returns the user's banner URL for the specified user or the author (requires fetching user).
*   `$userExists[userID]`: Checks if a user with this ID exists globally (based on cache, returns true or false).
*   `$userExistsInGuild[userID]`: Checks if a user with this ID is currently a member of the guild (returns true or false). Alias `$memberExists`.
*   `$userID[userID?]`: Returns the User ID of the specified user or the author. Alias `$findUser`.
*   `$userLanguage`: Returns the user's preferred locale string from interaction context.
*   `$username[userID?]`: Returns the username of the specified user or the author.
*   `$userRoles[memberID?;type=id/name?]`: Returns a semicolon-separated list of role IDs (`type=id`) or names (`type=name`) for the specified member or the author.
*   `$userStatus[userID?]`: Returns the user's presence status (like online, idle, etc.). Requires Presence Intent. Applies to specified user or author.
*   `$userTag[userID?]`: Returns the tag (like Username#Discriminator or just Username) of the specified user or the author.
*   `$userVoiceChannelID[userID?]`: Returns the ID of the voice channel the specified user or the author is currently in within this guild.

## Guild/Server Info

*   `$afkChannelID[guildID?]`: Returns the ID of the AFK channel, if set.
*   `$afkTimeout[guildID?]`: Returns the AFK timeout in seconds.
*   `$boostCount[guildID?]`: Returns the server boost (premium subscription) count.
*   `$boostLevel[guildID?]`: Returns the server boost level.
*   `$botCount[guildID?]`: Returns the bot count of the current or specified guild.
*   `$categoryCount[guildID?]`: Returns the category channel count.
*   `$channelCount[guildID?;type?]`: Returns channel count. Optional `type` filters by channel type name.
*   `$explicitContentFilter[guildID?]`: Returns explicit content filter level name.
*   `$guildFeatures[guildID?]`: Returns a semicolon-separated list of guild features.
*   `$guildID[guildID?]`: Returns the ID of the current or specified guild. Alias `$serverID`.
*   `$humanCount[guildID?]`: Returns the human count (memberCount - botCount) of the current or specified guild.
*   `$memberCount[guildID?]`: Returns the total member count of the current or specified guild.
*   `$mfaLevel[guildID?]`: Returns MFA level name (None or Elevated). Requires `ManageGuild` permission.
*   `$modifyGuild[guildID;optionsJson;reason?]`: Modifies various guild settings using a JSON object for options. Requires appropriate permissions. Alias `$modifyGuilds`.
*   `$publicUpdatesChannelID[guildID?]`: Returns the ID of the public updates channel, if set for community servers.
*   `$roleCount`: Returns the role count of the current guild.
*   `$rulesChannelID[guildID?]`: Returns the ID of the rules channel, if set for community servers.
*   `$serverBanner[guildID?]`: Returns the server banner URL, if set.
*   `$serverBoosterRole[guildID?]`: Returns the booster role ID, if set.
*   `$serverCreationDate[guildID?]`: Returns the guild creation timestamp in milliseconds.
*   `$serverIcon[guildID?]`: Returns the icon URL of the current or specified guild.
*   `$serverLocale[guildID?]`: Returns the preferred server locale string.
*   `$serverName[guildID?]`: Returns the name of the current or specified guild.
*   `$serverOwnerID[guildID?]`: Returns the owner's user ID of the current or specified guild.
*   `$serverVerificationLevel[guildID?]`: Returns the verification level name.
*   `$systemChannel[guildID?]`: Returns the system messages channel ID, if set.
*   `$vanityURLCode[guildID?]`: Returns the guild's vanity invite code, if set.

## Channel/Thread/Forum Info & Management

*   `$archiveThread[threadID?;reason?]`: Archives a thread.
*   `$categoryID[channelID?]`: Returns the parent category ID of the current or specified channel.
*   `$channelExists[channelID]`: Returns `true` or `false` if a channel with this ID exists in the guild.
*   `$channelID[channelID?]`: Returns the ID of the current or specified channel. Alias `$findChannel`.
*   `$channelIDs[type=any?]`: Returns a semicolon-separated list of channel IDs in the current guild, optionally filtered by `type`.
*   `$channelMention[channelID?]`: Returns the channel mention string for use in messages.
*   `$channelName[channelID?]`: Returns the name of the current or specified channel.
*   `$channelNames[type=any?]`: Returns a semicolon-separated list of channel names in the current guild, optionally filtered by `type`.
*   `$channelPosition[channelID?]`: Returns the position of the channel in the channel list.
*   `$channelTopic[channelID?]`: Returns the topic of the current or specified text/forum channel.
*   `$channelType[channelID?]`: Returns the type of the current or specified channel.
*   `$channelURL[channelID?]`: Returns the jump URL for the channel.
*   `$createChannel[name;type=Text?;parentID?;reason?]`: Creates a channel. Specify the channel `type` (Text, Voice, Category, etc.). Returns the new channel ID.
*   `$createThread[name;startMessageID?;type=Public?;autoArchiveDuration=Max?;reason?]`: Creates a thread attached to `startMessageID` or in the current channel. Specify the `type` (Public, Private, Announcement) and `autoArchiveDuration`. Returns the new thread ID.
*   `$deleteChannel[channelID;reason?]`: Deletes a channel.
*   `$deleteThread[threadID?;reason?]`: Deletes a thread.
*   `$getChannelSlowmode[channelID?]`: Returns the slowmode delay in seconds for the current or specified channel. Alias `$getSlowmode`.
*   `$getChannelWebhooks[channelID?]`: Returns a JSON list string of webhooks for a specific channel.
*   `$isForum[channelID?]`: Returns `true` or `false` if the channel is a forum.
*   `$isNsfw[channelID?]`: Returns `true` or `false` if the channel is marked as NSFW.
*   `$isThread[channelID?]`: Returns `true` or `false` if the channel is a thread.
*   `$lastMessageIDInChannel[channelID?]`: Returns the ID of the last message sent in the channel (relies on cache, may not be accurate).
*   `$lockThread[threadID?;reason?]`: Locks a thread (only mods can send messages, except thread creator in private threads).
*   `$modifyChannel[channelID;optionsJson;reason?]`: Modifies various channel properties using a JSON object for options.
*   `$parentName[channelID?]`: Returns the parent category name of the current or specified channel.
*   `$setChannelName[channelID;newName;reason?]`: Renames a channel.
*   `$setChannelPerms[channelID;targetID;allowPerms?;denyPerms?;type=role/member?;reason?]`: Sets permission overwrites for a role or member in a channel. Provide `allow`/`denyPerms` as semicolon-separated permission names or bitfields. Specify the `type` as role or member. Clears unspecified permissions.
*   `$setChannelSlowmode[seconds;channelID?;reason?]`: Sets channel slowmode in seconds. Alias `$setSlowmode`.
*   `$setChannelTopic[channelID;newTopic;reason?]`: Sets a channel's topic.
*   `$threadName[threadID?]`: Returns the name of a thread.
*   `$threadParentID[threadID?]`: Returns the parent channel/forum ID of a thread.
*   `$unarchiveThread[threadID?;reason?]`: Unarchives a thread.
*   `$unlockThread[threadID?;reason?]`: Unlocks a thread.
*   `$useChannel[channelID]`: Attempts to change the channel context for subsequent functions. *(Experimental/Unreliable)*

## Role Info & Management

*   `$compareRolePosition[roleID1;roleID2]`: Returns a number indicating the position difference: positive if role1 is higher, negative if role2 is higher, 0 if same.
*   `$createRole[name;color?;hoist?;mentionable?;permissions?;iconURL?;unicodeEmoji?;reason?]`: Creates a role with the specified properties. Returns the new role ID.
*   `$deleteRole[roleID;reason?]`: Deletes a role.
*   `$isHoisted[roleID]`: Returns `true` or `false` if the role is displayed separately in the member list.
*   `$isManaged[roleID]`: Returns `true` or `false` if the role is managed by an integration.
*   `$isMentionable[roleID]`: Returns `true` or `false` if the role can be mentioned by anyone.
*   `$isRoleEditable[roleID]`: Returns `true` or `false` if the bot can edit the role (based on hierarchy).
*   `$modifyRole[roleID;optionsJson;reason?]`: Modifies role properties using a JSON object for options.
*   `$resolveRoleID[roleNameOrMentionOrID]`: Tries to find a role ID from its name, mention, or ID. Returns the ID if found.
*   `$roleColor[roleID]`: Returns the hex color code of the role.
*   `$roleExists[roleID]`: Returns `true` or `false` if the role exists in the current guild.
*   `$roleMembersCount[roleID]`: Returns the number of members who have the specified role.
*   `$roleMention[roleID]`: Returns the role mention string for use in messages.
*   `$roleName[roleID]`: Returns the name of the role.
*   `$rolePosition[roleID]`: Returns the position of the role in the hierarchy.
*   `$setRoleColor[roleID;hexColor;reason?]`: Sets a role's color using a hex color code.
*   `$setRoleName[roleID;newName;reason?]`: Renames a role.
*   `$setRolePosition[roleID;newPosition;reason?]`: Sets a role's position in the hierarchy.

## Emoji/Sticker Info & Management

*   `$addEmoji[imageURL;name;rolesJson?;reason?]`: Adds an emoji to the current server. `rolesJson` is an optional JSON array of role IDs allowed to use it. Returns the new emoji string.
*   `$addSticker[fileURLorPath;name;tags;description?;reason?]`: Adds a sticker to the current server. `tags` is required. Returns the new sticker ID. **[File Path access is SECURITY RISK]**
*   `$cloneEmoji[emojiID or emoji;newName?;reason?]`: Clones an existing emoji (specified by ID or the emoji itself) to the current server, optionally with a new name. Returns the new emoji string.
*   `$deleteEmoji[emojiID;reason?]`: Deletes a custom emoji by its ID.
*   `$deleteSticker[stickerID;reason?]`: Deletes a guild sticker by its ID.
*   `$emojiExists[emojiID or full emoji]`: Returns `true` or `false` if the custom emoji (specified by ID or the emoji itself) exists in the guild.
*   `$emojiList`: Returns a semicolon-separated list of custom emoji IDs in the current guild.
*   `$emojiURL[emojiID or full emoji]`: Returns the URL of the custom emoji image (specified by ID or the emoji itself).
*   `$getEmoji[emojiName or emojiID]`: Returns the full custom emoji string usable in messages, found by name or ID.
*   `$modifyEmoji[emojiID;newName?;rolesJson?;reason?]`: Modifies an emoji's name or restricted roles using an optional JSON array for `rolesJson`. Returns the modified emoji string.
*   `$modifySticker[stickerID;optionsJson;reason?]`: Modifies sticker properties (name, description, tags) using a JSON object for options. Returns the sticker ID.
*   `$stickerURL[stickerID]`: Returns the URL of the sticker image.

## Moderation Actions

*   `$auditLogReason[reasonText]`: Sets the reason for the audit log entry for the current action being performed by the bot. Must be called before the action function.
*   `$ban[userID;reason?;deleteMessageDays=0?]`: Bans a user from the server. `deleteMessageDays` specifies the number of days of message history to purge.
*   `$clearWarnings[userID;warnID?]`: Clears all or a specific warning (by ID) for a user.
*   `$deafenMemberVoice[memberID;deafen?=true;reason?]`: Server deafens or undeafens a member in voice channels. `deafen` defaults to true.
*   `$getPruneCount[days;rolesJson?]`: Estimates the number of members that would be pruned based on inactivity days and optional included role IDs. `rolesJson` is a JSON array.
*   `$getWarnings[userID]`: Retrieves warnings for a user. Returns a JSON string or similar structured data.
*   `$kick[memberID;reason?]`: Kicks a member from the server.
*   `$muteMemberVoice[memberID;mute?=true;reason?]`: Server mutes or unmutes a member in voice channels. `mute` defaults to true.
*   `$pruneMembers[days;computeCount?=false;rolesJson?;reason?]`: Prunes members inactive for a specified number of `days`. If `computeCount` is true, returns the estimated count instead of pruning. `rolesJson` is an optional JSON array of role IDs to include in the prune.
*   `$removeTimeout[memberID;reason?]`: Removes a member's timeout.
*   `$timeout[memberID;durationMs;reason?]`: Times out a member (prevents interaction/VC) for a specified duration in milliseconds. Max duration is 28 days.
*   `$unban[userID;reason?]`: Unbans a user from the server.
*   `$warnUser[userID;reason;moderatorID?]`: Records a warning for a user.

## Role & User Assignment

*   `$addRole[memberID;roleID;reason?]`: Adds a role to a member.
*   `$removeRole[memberID;roleID;reason?]`: Removes a role from a member.
*   `$setUserRoles[memberID;roleID1;roleIDN...;reason?]`: Sets a member's roles exactly to the provided list of role IDs (removes any other roles they had).

## Permissions & Restrictions

*   `$botPermissions[scope=channel?]`: Returns a semicolon-separated list of the bot's calculated permission names in the specified scope ('channel' or 'guild'). Alias `$getChannelBotPerms`.
*   `$canManageChannel[channelID;memberID=@me?]`: Returns `true` or `false` if the bot (or specified member) can manage the channel based on relevant permissions.
*   `$canManageRole[roleID;memberID=@me?]`: Checks if the bot (or specified member) can manage the specified role based on hierarchy (returns true or false).
*   `$hasGuildPermission[perm1;perm2...;memberID=@me?]`: Checks if the member (or bot if `@me`) has all specified permission names at the GUILD level (returns true or false).
*   `$hasPermission[perm1;perm2...;memberID=@me?]`: Returns `true` or `false` if the member (or bot if `@me`) has all specified permission names in the calculated context (channel OR guild). Alias `$hasPermissions`.
*   `$ignoreChannels[channelID1;channelIDN...]`: Stops execution silently if the command is used in one of the specified channels.
*   `$ignoreRoles[roleID1;roleIDN...]`: Stops execution silently if the author has *any* of the specified roles. Requires guild context.
*   `$ignoreUsers[userID1;userIDN...]`: Stops execution silently if the author's ID is in the list.
*   `$onlyForIDs[id1;idN...;errorMessage?]`: Stops execution with an error message if the author's ID is not in the list.
*   `$onlyIf[condition;errorMessage?]`: Stops execution with an error message if the `condition` string evaluates to a false-like value.
*   `$onlyPerms[perm1;permN...;errorMessage?]`: Stops execution with an error message if the author lacks *all* specified permission names in the current channel/guild context.
*   `$onlyRoles[roleID1;roleIDN...;errorMessage?]`: Stops execution with an error message if the author doesn't have *at least one* of the specified roles. Requires guild context. Alias `$onlyForRoles`.
*   `$userPermissions[memberID?]`: Returns a semicolon-separated list of the member's (or author's) calculated permission names in the guild.

## Variables (Local, Global, User, Server)

*   `$appendVar[varName;valueToAppend;separator=;?;scope=local?]`: Appends a value to a string or list variable, optionally using a separator. Specify `scope` as 'local' or 'global'.
*   `$decVar[varName;decrement=1?;scope=local?]`: Decrements a numeric variable by the specified amount (default 1). Specify `scope` as 'local' or 'global'. Initializes to negative decrement value if non-existent.
*   `$deleteServerVar[varName]`: Deletes a server-specific (guild) variable.
*   `$deleteUserVar[varName;userID=@me?;scope=global?]`: Deletes a user-specific variable. Specify `scope` as 'global' or 'local' (guild-specific user data).
*   `$deleteVar[varName;scope=local?]`: Deletes a variable from the specified scope ('local' or 'global').
*   `$get[varName]`: Gets a local variable. Alias for `$getVar[varName;local]`.
*   `$getAllVars[scope=local?]`: Returns a JSON string representing all variables in the specified scope ('local' or 'global').
*   `$getServerVar[varName]`: Gets a server-specific (guild) variable.
*   `$getUserVar[varName;userID=@me?;scope=global?]`: Gets a user-specific variable. Specify `scope` as 'global' or 'local' (guild-specific user data).
*   `$getVar[varName;scope=local?]`: Gets a variable from the specified scope ('local' or 'global').
*   `$hasVar[varName;scope=local?]`: Returns `true` or `false` if a variable exists in the specified scope ('local' or 'global').
*   `$incVar[varName;increment=1?;scope=local?]`: Increments a numeric variable by the specified amount (default 1). Specify `scope` as 'local' or 'global'. Initializes to increment value if non-existent.
*   `$let[varName;value]`: Sets a local variable. Alias for `$setVar[varName;value;local]`.
*   `$prependVar[varName;valueToPrepend;separator=;?;scope=local?]`: Prepends a value to a string or list variable, optionally using a separator. Specify `scope` as 'local' or 'global'.
*   `$setServerVar[varName;value]`: Sets a server-specific (guild) variable.
*   `$setUserVar[varName;value;userID=@me?;scope=global?]`: Sets a user-specific variable. Specify `scope` as 'global' or 'local' (guild-specific user data).
*   `$setVar[varName;value;scope=local?]`: Sets a variable in the specified scope ('local' or 'global').
*   `$varType[varName;scope=local?]`: Returns the internal JavaScript type string (like 'string', 'number', 'object') of a variable in the specified scope ('local' or 'global').

## Utility & Control Flow

*   `$and[cond1;condN...]`: Returns `true` if all provided conditions evaluate to true-like values.
*   `$awaitMessages[filterCode;maxMessages;timeMs;channelID?]`: Waits for messages matching criteria defined by `filterCode` (Solara code returning true/false). Stops after `maxMessages` or `timeMs`.
*   `$awaitReactions[filterCode;maxReactions;timeMs;messageID?]`: Waits for reactions matching criteria defined by `filterCode` (Solara code returning true/false). Stops after `maxReactions` or `timeMs`.
*   `$solaraEval[solaraCode]`: Parses and executes the input string as Solara code within the current context. Returns the result of the parsed code. Alias `$solaraEval`.
*   `$case[match;then]`: Defines a case for use within a `$switch` block. Matches the `match` value against the `$switch` value.
*   `$catch[errorCode]`: Defines the code block to run if the corresponding `$try` block encounters an error. Used within `$try`.
*   `$checkCondition[val1;op;val2]`: Compares two values using a specified operator (`==`, `!=`, `>`, `<`, `>=`, `<=`). Returns `true` or `false`.
*   `$commandInfo[commandName;property]`: Returns information about a specific command, such as its usage, description, or aliases.
*   `$commandTrigger`: Returns the trigger word or command name that invoked the current execution.
*   `$comment[text...]`: Ignored by the interpreter. Useful for adding comments to your code; any text inside is disregarded.
*   `$defaultCase[default]`: Defines the default return value within a `$switch` block if no `$case` matches.
*   `$djsEval[javascriptCode]`: Executes raw JavaScript code using Node.js's `eval`. Provides context variables like `client`, `message`, `interaction`. **[EXTREMELY DANGEROUS]** Alias `$eval`. Returns the stringified result.
*   `$error[message]`: Immediately stops execution and sends the provided message as an error response (often ephemeral in interactions). Alias `$stopExecution`.
*   `$evalFile[filePath]`: Reads and executes Solara code from a local file path. **[SECURITY RISK]**
*   `$forEach[code;item1;itemN...]`: Executes the provided Solara `code` for each subsequent `item` argument. Sets temporary local variables `$forEachItem` and `$forEachIndex` (1-based) for each iteration.
*   `$functionExists[functionName]`: Checks if a function with the given name exists (returns true or false).
*   `$getContextType`: Returns 'Message' or 'Interaction' indicating the type of the current execution context.
*   `$hyperlink[text;url]`: Creates a Markdown formatted hyperlink.
*   `$if[condition;then;else?]`: Conditional execution. Evaluates the `condition`. Executes `then` code if true-like, otherwise executes optional `else` code if provided.
*   `$log[value1;valueN...]`: Logs the provided arguments to the bot's console.
*   `$not[condition]`: Returns the opposite boolean value (`true` or `false`) of the condition's truthiness.
*   `$or[cond1;condN...]`: Returns `true` if at least one provided condition evaluates to a true-like value.
*   `$progressBar[currentValue;maxValue;length=10?;emptyChar?;fillChar?]`: Creates a text-based progress bar string.
*   `$randomText[text1;textN...]`: Returns one of the provided text arguments randomly.
*   `$randomUserID`: Returns a random user ID from the bot's cache.
*   `$repeat[times;delayMs;code;stopOnError=true?]`: Executes the Solara `code` asynchronously a specified number of `times`, waiting `delayMs` between each execution. Minimum delay and maximum iterations may apply. `stopOnError` defaults to true. Returns nothing immediately.
*   `$switch[value;$caseFunction1;$caseFunctionN...;$defaultCaseFunction?]`: Compares `value` to the `match` argument in each subsequent `$case` function call. Returns the `then` value of the first matching `$case`. If none match, returns the value from the `$defaultCase` function call.
*   `$toBoolean[value]`: Converts a value to the string 'true' or 'false' based on JavaScript truthiness rules. Alias `$toBoolan`.
*   `$toNumber[value]`: Attempts to convert a value to a number. Returns the number as a string or an error message string on failure.
*   `$toString[value]`: Converts any value to its string representation.
*   `$try[codeToTry;$catchFunction]`: Executes `codeToTry`. If an error occurs (except specific stop errors), it executes the `$catchFunction` call (setting `$errorMsg` locally). Returns the result of the successfully executed code block (either try or catch).
*   `$typeOf[valueOrVarName;scope?]`: Returns the internal JavaScript type string (like 'string', 'number', 'object', 'undefined') of a value or variable from the specified scope.
*   `$updateCommands`: Reloads commands and events from disk/source.

## Math

*   `$E`: Returns the value of Euler's number E.
*   `$PI`: Returns the value of PI. Alias `$pi`.
*   `$abs[number]`: Returns the absolute value of a number.
*   `$cbrt[number]`: Returns the cube root of a number.
*   `$ceil[number]`: Rounds a number up to the nearest integer.
*   `$div[num1;num2...]`: Returns the result of dividing the first number by subsequent numbers.
*   `$floor[number]`: Rounds a number down to the nearest integer.
*   `$isNumber[text]`: Returns `true` or `false` if the provided text represents a valid JavaScript number.
*   `$isNaNFunc[value]`: Returns `true` or `false` if the value evaluates to NaN (Not-a-Number).
*   `$max[num1;numN...]`: Returns the largest number from the provided list.
*   `$min[num1;numN...]`: Returns the smallest number from the provided list.
*   `$modulo[dividend;divisor]`: Returns the remainder of the division of dividend by divisor.
*   `$multi[num1;numN...]`: Returns the product of the provided numbers.
*   `$percent[value1;value2]`: Calculates what percentage value1 is of value2.
*   `$power[base;exponent]`: Returns the base raised to the power of the exponent.
*   `$random[max]` or `$random[min;max]`: Returns a random integer within the specified range (inclusive). If only max is provided, min defaults to 0.
*   `$randomFloat[min=0?;max=1?]`: Returns a random floating-point number between min (inclusive) and max (exclusive).
*   `$round[number]`: Rounds a number to the nearest integer.
*   `$roundTo[number;decimalPlaces]`: Rounds a number to a specific number of decimal places.
*   `$sqrt[number]`: Returns the square root of a number.
*   `$sub[num1;numN...]`: Returns the result of subtracting subsequent numbers from the first number.
*   `$sum[num1;numN...]`: Returns the sum of the provided numbers.
*   `$toFixed[number;digits=0?]`: Formats a number using fixed-point notation with a specified number of decimal digits.

## String Manipulation

*   `$bold[text]`: Formats text as bold using Markdown.
*   `$charCount[text;charOrSubstring]`: Counts non-overlapping occurrences of a character or substring within the text.
*   `$charAt[text;index]`: Returns the character at the specified 0-based index within the text.
*   `$charToCode[text;index=0?]`: Returns the Unicode value (UTF-16 code unit) of the character at the specified index (default 0).
*   `$codeBlock[text;language?]`: Formats text into a Markdown code block, optionally specifying the language.
*   `$codeToChar[code1;codeN...]`: Returns a string created from the specified Unicode values (UTF-16 code units).
*   `$endsWith[text;search]`: Returns `true` or `false` if the text ends with the search string.
*   `$escapeMarkdown[text]`: Escapes Markdown special characters within the text by adding backslashes.
*   `$includes[text;search]`: Returns `true` or `false` if the text contains the search string.
*   `$indexOf[text;searchValue;fromIndex=0?]`: Returns the 0-based index of the first occurrence of `searchValue` within the text, starting from `fromIndex` (default 0). Returns -1 if not found.
*   `$inlineCode[text]`: Formats text into Markdown inline code using backticks.
*   `$isBoolean[value]`: Returns `true` if the value is exactly the string "true" or "false".
*   `$isEmpty[text]`: Returns `true` if the text is empty ("") or contains only whitespace characters, `false` otherwise.
*   `$isString[valueOrVarName;scope?]`: Returns `true` if the value or variable's internal type is 'string'.
*   `$italic[text]`: Formats text as italic using Markdown.
*   `$length[text]`: Returns the number of characters in the text.
*   `$padEnd[text;targetLength;padString=' '?]`: Pads the end of the text with `padString` (default space) until it reaches `targetLength`.
*   `$padStart[text;targetLength;padString=' '?]`: Pads the start of the text with `padString` (default space) until it reaches `targetLength`.
*   `$quote[text]`: Formats text as an inline Markdown quote (prepends `> ` to each line).
*   `$quoteBlock[text]`: Formats text as a Markdown block quote (prepends `>>> ` to the first line).
*   `$replaceAll[text;search;replace]`: Replaces all occurrences of the `search` string with the `replace` string within the text.
*   `$replaceText[text;search;replace;limit=-1?]`: Replaces occurrences of the `search` string with the `replace` string. `limit` sets the maximum number of replacements (-1 for all).
*   `$slice[text;startIndex;endIndex?]`: Extracts a section of the text using 0-based indices. Negative indices count from the end. `endIndex` is optional and exclusive.
*   `$spoiler[text]`: Formats text as a spoiler using Markdown.
*   `$startsWith[text;search]`: Returns `true` or `false` if the text starts with the search string.
*   `$strikethrough[text]`: Formats text as strikethrough using Markdown.
*   `$stringifyJson[varName;scope?]`: Converts a variable (expected to be an object or array) from the specified scope into a JSON string.
*   `$substring[text;startIndex;endIndex?]`: Returns a substring between the specified indices (start inclusive, optional end exclusive).
*   `$titleCase[text]`: Converts text to title case (capitalizes the first letter of each word using a basic implementation).
*   `$toLowercase[text]`: Converts text to lowercase.
*   `$toUppercase[text]`: Converts text to uppercase.
*   `$trim[text]`: Removes whitespace from both ends of the text.
*   `$trimEnd[text]`: Removes whitespace from the end of the text.
*   `$trimStart[text]`: Removes whitespace from the start of the text.
*   `$underline[text]`: Formats text as underlined using Markdown.
*   `$unescapeMarkdown[text]`: Performs basic removal of backslash escapes before common Markdown characters.

## List/Array (Semicolon Separated)

*   `$filterList[value;item1;itemN...]`: Returns only the items from the list that exactly match the provided `value`, joined by ';'.
*   `$findItem[searchItem;item1;itemN...]`: Returns the 1-based index of the first item in the list that exactly matches `searchItem`, or -1 if not found.
*   `$findLastItem[searchItem;item1;itemN...]`: Returns the 1-based index of the last item in the list that exactly matches `searchItem`, or -1 if not found.
*   `$itemCount[item1;itemN...]`: Returns the total number of items provided as arguments. Alias: `$listLength`.
*   `$joinText[separator;item1;itemN...]`: Joins the provided item arguments into a single string using the specified separator.
*   `$listContains[searchItem;item1;itemN...]`: Returns `true` or `false` if the list contains an item that exactly matches `searchItem`. Alias `$ListContains`.
*   `$listItem[index;item1;itemN...]`: Returns the item at the specified 1-based index from the list provided as arguments.
*   `$listLength[item1;itemN...]`: Returns the total number of items provided as arguments. Alias for `$itemCount`.
*   `$popList[item1;itemN...]`: Returns the last item from the list provided as arguments.
*   `$removeContains[containsValue;item1;itemN...]`: Returns the list (joined by ';') excluding items that contain `containsValue` as a substring.
*   `$removeDuplicates[item1;itemN...]`: Returns only the unique items from the list provided as arguments, joined by ';'. Order of first appearance is preserved.
*   `$reverseList[item1;itemN...]`: Returns the provided item arguments in reverse order, joined by ';'.
*   `$shiftList[item1;itemN...]`: Returns the first item from the list provided as arguments.
*   `$sortAlphabetical[order;item1;itemN...]`: Sorts the provided items alphabetically case-insensitive. Specify `order` as 'az' or 'za'. Returns the sorted list joined by ';'. Alias for `$sortList` with alphabetical types.
*   `$sortList[type;item1;itemN...]`: Sorts the provided items based on the specified `type` (alphabetical or numerical, ascending or descending). Returns the sorted list joined by ';'.
*   `$splitText[text;separator=;?]`: Splits the input text by the specified separator (default ';') and returns the resulting items joined by ';'.

## Time/Date

*   `$dateDiff[ts1;ts2]`: Returns the absolute difference between two Unix timestamps (provided in milliseconds).
*   `$day[ts?]`: Returns the day of the month (1-31) in UTC for the given timestamp (ms). Defaults to the current time.
*   `$dayOfWeek[ts?]`: Returns the day of the week (0 for Sunday, 6 for Saturday) in UTC for the given timestamp (ms). Defaults to the current time.
*   `$dayOfYear[ts?]`: Returns the day of the year (1-366) in UTC for the given timestamp (ms). Defaults to the current time.
*   `$formatDate[ts?;optionsJson?;locale=en-US?]`: Formats a timestamp (ms) using Intl.DateTimeFormat. Provide formatting options via `optionsJson` and an optional `locale`. Defaults to current time and 'en-US' locale.
*   `$hour[ts?]`: Returns the hour (0-23) in UTC for the given timestamp (ms). Defaults to the current time.
*   `$minute[ts?]`: Returns the minute (0-59) in UTC for the given timestamp (ms). Defaults to the current time.
*   `$month[ts?]`: Returns the month (1-12) in UTC for the given timestamp (ms). Defaults to the current time.
*   `$now`: Returns the current Unix timestamp in milliseconds.
*   `$second[ts?]`: Returns the second (0-59) in UTC for the given timestamp (ms). Defaults to the current time.
*   `$timeStamp[style?;timestampMs?]`: Returns a Discord timestamp string. Specify the `style` (t, T, d, D, f, F, R) for formatting. Defaults to style 'f'. Provide `timestampMs` or defaults to the current time. Alias `$timestamp`.
*   `$year[ts?]`: Returns the full year (YYYY) in UTC for the given timestamp (ms). Defaults to the current time.

## Web & Encoding

*   `$base64Decode[base64Text]`: Decodes Base64 encoded text. Returns the original text or an error if invalid.
*   `$base64Encode[text]`: Encodes text to a Base64 string.
*   `$httpRequest[url;method=GET?;bodyJson?;headersJson?]`: Performs an HTTP request to the specified URL. Optional arguments for method, JSON body, and JSON headers. Returns the response body as text. **[SECURITY RISK]**
*   `$isValidHex[hex code]`: Returns `true` or `false` if the input string is a valid 3 or 6 digit hex color code (optionally starting with #).
*   `$isValidJson[text]`: Returns `true` or `false` if the input text can be parsed as valid JSON.
*   `$jsonParse[jsonString;path?]`: Parses a JSON string. If `path` is provided using object dot notation or array bracket notation, it returns the value at that path. If `path` is omitted, returns the whole parsed object/array. Alias `$parseJson`.
*   `$jsonToXml[jsonString]`: Attempts to convert a JSON string to an XML string representation. *(May require external library)*
*   `$urlDecode[encodedText]`: Decodes URL-encoded text (percent-encoding).
*   `$urlEncode[text]`: Encodes text for use in URL components using percent-encoding.
*   `$xmlToJson[xmlString]`: Attempts to convert an XML string to a JSON string representation. *(May require external library)*

## File System (Use with extreme caution!)

*   `$appendFile[filePath;content]`: Appends content to a local file specified by the path. Creates the file if it doesn't exist. **[SECURITY RISK]**
*   `$createDirectory[dirPath]`: Creates a directory at the local path (including parent directories if needed). **[SECURITY RISK]**
*   `$createFileAttachment[source;name?]`: Reads a local file (if `source` is a file path) or uses text (if `source` is text content) and prepares it as an attachment for the *next* message sending function. `name` sets the attachment filename. **[File Path access is SECURITY RISK]**
*   `$deleteDirectory[dirPath;recursive?=false]`: Deletes a directory specified by the path. Requires `recursive` to be set to true to delete non-empty directories. **[SECURITY RISK]**
*   `$deleteFile[filePath]`: Deletes a file at the local path. **[SECURITY RISK]**
*   `$fileExists[filePath]`: Returns `true` or `false` if the file or directory exists at the local path. **[SECURITY RISK]**
*   `$getFileStats[filePath]`: Returns a JSON string with file statistics (like size, modification time, creation time, isFile, isDirectory) for a local path. **[SECURITY RISK]**
*   `$listFiles[dirPath]`: Returns a semicolon-separated list of file and directory names within the specified local directory path. **[SECURITY RISK]**
*   `$readFile[filePath]`: Reads content from a local file specified by the path. **[SECURITY RISK]**
*   `$writeFile[filePath;content]`: Writes content to a local file specified by the path, overwriting existing content. **[SECURITY RISK]**

## Voice (Basic - Requires Player Setup)

*   `$disconnectMemberVoice[memberID;reason?]`: Disconnects a specified member from their current voice channel.
*   `$isVoiceConnected`: Returns `true` or `false` if the bot is currently connected to a voice channel in the guild.
*   `$moveMemberVoice[memberID;channelID;reason?]`: Moves a specified member to another voice channel.
*   `$voiceChannelID`: Returns the ID of the voice channel the bot is currently connected to in the guild.
*   `$voiceGetVolume`: Gets the internal player volume setting.
*   `$voiceJoin[channelID?]`: Joins the voice channel of the user triggering the command, or the specified channel ID.
*   `$voiceLeave[guildID?]`: Leaves the current voice channel in the specified or current guild.
*   `$voiceLoop[mode?]`: Sets or gets the loop mode for the player. Valid modes depend on the player setup (e.g., none, track, queue). No argument returns the current mode. Alias `$loop`.
*   `$voiceNowPlaying[formatString?]`: Returns formatted string or details of the currently playing track, based on the optional format string.
*   `$voicePause`: Pauses the current playback.
*   `$voicePlay[queryOrURL]`: Plays audio from a URL or searches platforms for the query and adds it to the queue.
*   `$voiceQueueAdd[queryOrURL]`: Explicitly adds audio from a URL or search query to the queue. Alias for `$voicePlay`.
*   `$voiceQueueClear`: Clears all tracks from the queue, excluding the currently playing one.
*   `$voiceQueueList[limit=10?;separator=\n?;formatString?]`: Returns a formatted string of the upcoming tracks in the queue, up to the specified limit, using the given separator and format string.
*   `$voiceQueueRemove[index]`: Removes a track from the queue by its 1-based index.
*   `$voiceResume`: Resumes the paused playback.
*   `$voiceSetVolume[volume]`: Sets the internal player volume to a specified level.
*   `$voiceSkip`: Skips the currently playing track and plays the next one in the queue, if any.
*   `$voiceStop`: Stops playback completely and clears the entire queue.

## Stage Instances

*   `$createStageInstance[channelID;topic;privacyLevel=GUILD_ONLY?;sendStartNotification=false?;reason?]`: Creates a stage instance in a stage channel. `privacyLevel` can be GUILD_ONLY (default) or PUBLIC. Requires relevant permissions.
*   `$deleteStageInstance[channelID;reason?]`: Deletes a stage instance in the specified stage channel. Requires relevant permissions.
*   `$modifyStageInstance[channelID;topic?;privacyLevel?;reason?]`: Modifies a stage instance's properties like topic or privacy level. Requires relevant permissions.
*   `$stageInstanceTopic[channelID;newTopic?]`: Gets or sets the topic of a stage instance. If `newTopic` is provided, it attempts to set it. Requires relevant permissions.

## Guild Templates

*   `$createGuildTemplate[name;description?]`: Creates a guild template from the current guild's state. Requires `ManageGuild` permission. Returns the template code.
*   `$deleteGuildTemplate[code]`: Deletes a guild template created by the bot, identified by its code. Requires `ManageGuild` permission.
*   `$getGuildTemplate[code]`: Fetches and returns a JSON string with information about a public guild template identified by its code.
*   `$modifyGuildTemplate[code;optionsJson]`: Modifies a guild template's name or description using a JSON object for options. Requires `ManageGuild` permission. Returns the template code.
*   `$syncGuildTemplate[code]`: Syncs changes from the current guild's state to a template created by the bot, identified by its code. Requires `ManageGuild` permission. Returns the template code.

## Guild Management

*   `$createGuild[name;region?;iconURL?;options?]`: Creates a new guild where the bot is the owner. Requires specific bot flags and is heavily rate-limited. `options` could cover further settings.
*   `$deleteGuild[guildID]`: Makes the bot leave the specified guild. If the bot owns the guild, **THIS DELETES THE GUILD PERMANENTLY**. Use with extreme caution. **[DANGEROUS]**

## Webhooks

*   `$createWebhook[channelID;name;avatarURL?;reason?]`: Creates a webhook in the specified channel. Requires `ManageWebhooks` permission. Returns the new webhook ID.
*   `$deleteWebhook[webhookID_or_URL;reason?]`: Deletes a webhook using its ID or full URL. Requires `ManageWebhooks` permission.
*   `$modifyWebhook[webhookID_or_URL;optionsJson;reason?]`: Modifies webhook properties (like name, avatar, channel) using a JSON object for options. Requires `ManageWebhooks` permission. Returns the webhook ID.
*   `$sendWebhookMessage[webhookID_or_URL;webhookToken?;content?;optionsJson?]`: Sends a message using a webhook ID and optional token (can be extracted from URL if provided). `optionsJson` can include username, avatar_url, embeds, components, etc. Requires the full webhook URL or the ID and token.

## Invites

*   `$inviteInfo[inviteCode;property?]`: Fetches data about an invite code. Can request a specific `property` (like guildID, inviterID, uses, etc.) or returns the full JSON object if `property` is omitted.

## Ticket System

*   `$addMemberToTicket[userID;channelID?]`: Adds view/send permissions for a specified user to the ticket channel (current or specified).
*   `$claimTicket[channelID?;claimerUserID=@me?;options?]`: Marks a ticket channel as claimed, often involving a message or role change. `options` allows custom data.
*   `$closeTicket[channelID?;reason?;options?]`: Closes and typically deletes the ticket channel (current or specified). `options` allows custom data.
*   `$newTicket[topic?;categoryID?;private?=true;reason?;options?]`: Creates a new ticket channel, often named based on the user and topic. Specify category and privacy. `options` allows custom data. Returns the new channel ID.
*   `$removeMemberFromTicket[userID;channelID?;options?]`: Removes view/send permissions for a specified user from the ticket channel (current or specified). `options` allows custom data.
*   `$unclaimTicket[channelID?;claimerUserID=@me?;options?]`: Marks a ticket channel as unclaimed. `options` allows custom data.

## Event Handling

*   `$emitEvent[eventName;dataJson?;options?]`: Emits a custom event with a name and optional JSON data payload and custom options.
*   `$listenEvent[eventName;codeToRun;options?]`: Listens for a custom event by name and runs the specified Solara code when the event is emitted. `options` allows configuration.

## Caching

*   `$cacheClear[options?]`: Clears the entire cache used by these functions, or parts based on `options`.
*   `$cacheDelete[key;options?]`: Deletes a value from the cache by its key, with optional `options`.
*   `$cacheGet[key;options?]`: Retrieves a value from the cache by its key, with optional `options`.
*   `$cacheHas[key;options?]`: Checks if a key exists in the cache (returns true or false), with optional `options`.
*   `$cacheSet[key;value;ttlSeconds?;options?]`: Stores a key-value pair in the cache with an optional time-to-live in seconds and custom `options`.

## Database

*   `$dbClear[table?;options?]`: Clears a specific table or the entire database, with optional implementation-specific `options`. **[DANGEROUS]**
*   `$dbDelete[key;table?;options?]`: Deletes a key-value pair from the specified database table, with optional `options`.
*   `$dbGet[key;table?;options?]`: Retrieves a value from the specified database table by its key, with optional `options`.
*   `$dbHas[key;table?;options?]`: Checks if a key exists in the specified database table (returns true or false), with optional `options`.
*   `$dbIncrement[key;amount?;table?;options?]`: Increments a numeric value in the specified database table by the given amount, with optional `options`.
*   `$dbPush[key;value;table?;options?]`: Pushes a value onto an array stored under a key in the specified database table, with optional `options`.
*   `$dbSet[key;value;table?;options?]`: Stores a key-value pair in the specified database table, with optional `options`.

## Giveaways

*   `$giveaway[duration;winnerCount;prize;[requiredRoleID?]]`: Starts a simple giveaway.
