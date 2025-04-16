---
sidebar_position: 1
title: Function List
id: function-list
slug: /reference/function-list
---

# Function Reference

This page lists the built-in functions available in Solara.js categorized for easier navigation.

**Note:** Arguments marked with `[]` are optional. Default values are often implied or noted within the description. Semicolons (`;`) separate arguments within function calls. Functions marked **[SECURITY RISK]** or **[DANGEROUS]** should be used with extreme caution. The **[OWNER ONLY]** tag is a *recommendation* for functions that pose risks or affect core bot settings; the library itself does not enforce owner-only execution unless configured separately.

## Core & Bot Info

*   `$applicationCommandCount`: Returns the number of registered global slash commands.
*   `$applicationCommandList`: Returns a semicolon-separated list of registered global slash command names.
*   `$applicationOwnerID`: Returns the user ID of the application owner.
*   `$botAvatar`: Returns the client user's the bot's avatar URL.
*   `$botGuildsCount`: Returns the number of guilds the bot is in.
*   `$botID`: Returns the client user's the bot's ID. Alias: `$clientID`.
*   `$botInviteURL[permissionBitfield or permName1;permName2...]`: Generates the bot's invite URL with specified permissions using either a bitfield number or permission names.
*   `$botLeave[guildID?]`: Makes the bot leave the current guild or a specified guild. **[Potentially Dangerous]**
*   `$botName`: Returns the client user's the bot's username.
*   `$botPing`: Returns the bot's websocket heartbeat ping in milliseconds. Alias: `$ping`.
*   `$botPresenceActivityName`: Returns the name of the bot's current primary activity. Requires Presence intent.
*   `$botPresenceActivityType`: Returns the type of the bot's current primary activity e g Playing Watching. Requires Presence intent.
*   `$botPresenceStatus`: Returns the bot's current presence status online idle dnd invisible. Requires Presence intent.
*   `$botTags`: Returns the client user's application tags as a semicolon-separated list.
*   `$botToken`: Returns a redacted bot token string. **[SECURITY RISK - OWNER ONLY]**
*   `$botTyping[channelID?]`: Makes the bot appear as typing in the current or specified channel. Duration is temporary.
*   `$botUsersCount`: Returns the total number of users the bot can see across all guilds.
*   `$changeBotAvatar[imageURL or buffer]`: Changes the bot's avatar using an image URL or buffer. **[RATE LIMITED - OWNER ONLY]**
*   `$changeBotStatus[status;activityType;activityName;streamURL?]`: Changes the bot's presence status activity type name optional stream URL.
*   `$changeBotUsername[newUsername]`: Changes the bot's username. **[RATE LIMITED - OWNER ONLY]**
*   `$clientID`: Returns the client user's the bot's ID. Alias for `$botID`.
*   `$developers`: Returns the list of Solara developers.
*   `$djsVersion`: Returns the installed discord js version.
*   `$isVerifiedBot`: Checks if the bot is verified by Discord. Returns true or false.
*   `$nodeVersion`: Returns the running Node js version.
*   `$packageVersion`: Returns the current version of the Solara package.
*   `$ping`: Returns the bot's websocket heartbeat ping in milliseconds. Alias `$botPing`.
*   `$shardCount`: Returns the total number of shards for the bot.
*   `$shardID`: Returns the ID of the current shard.
*   `$uptime[format?]`: Returns the bot's uptime optionally specifying a format unit ms s m h d full.

## System / OS Info

*   `$cpuCores`: Returns the number of logical CPU cores available.
*   `$cpuUsage`: Returns current process CPU usage percentage approximate.
*   `$env[variableName]`: Gets an environment variable's value by name. **[SECURITY RISK - OWNER ONLY]**
*   `$osInfo[property?]`: Gets OS information hostname type platform arch release uptime total memory free memory or a specific property if provided.
*   `$platformArch`: Returns the OS platform architecture. Alias for `$osInfo[arch]`.
*   `$processID`: Returns the process ID PID of the bot application.
*   `$ramUsage`: Returns the current memory usage in megabytes RSS.
*   `$restart`: Attempts to restart the bot process. **[DANGEROUS - OWNER ONLY]**
*   `$shutdown`: Shuts down the bot process completely. **[DANGEROUS - OWNER ONLY]**

## Message Sending & Basic Replies

*   `$channelSendMessage[channelID;content?;returnMsgID?]`: Sends message embed components to a specific channel ID. Uses built items if content omitted. Option to return message ID.
*   `$reply[content?;returnMsgID?]`: Replies to the triggering message. Uses built items if content omitted. Option to return message ID. Stores sent message context.
*   `$sendMessage[content?;returnMsgID?]`: Sends message embed components to the current channel. Uses built items if content omitted. Option to return message ID. Stores sent message context.

## Interaction Handling & Replies

*   `$autocompleteOptionName`: Returns the name of the focused option in an autocomplete interaction.
*   `$autocompleteOptionValue`: Returns the current value of the focused option in an autocomplete interaction.
*   `$deferReply[ephemeral?]`: Defers the interaction reply showing "thinking...". Set ephemeral for a hidden deferral.
*   `$ephemeral`: Marks the next interaction response as ephemeral visible only to the user. Use before replying deferring.
*   `$followUp[content?;ephemeral?;returnMsgID?]`: Sends a follow-up message after replying deferring. Uses built items if content omitted. Options for ephemeral and returning message ID. Alias `$interactionFollowUp`.
*   `$getInteractionLocale`: Returns the locale string language preference of the interaction user.
*   `$getInteractionSubcommand`: Returns the name of the used subcommand if any.
*   `$getInteractionSubcommandGroup`: Returns the name of the used subcommand group if any.
*   `$interactionChannelID`: Returns the ID of the channel where the interaction occurred.
*   `$interactionCustomID`: Returns the custom ID of the interacted component button select menu modal.
*   `$interactionFollowUp[content?;ephemeral?;returnMsgID?]`: Alias for `$followUp`.
*   `$interactionGuildID`: Returns the ID of the guild where the interaction occurred.
*   `$interactionID`: Returns the unique ID of the interaction.
*   `$interactionOption[optionName]`: Gets the value of a slash command option by its name.
*   `$interactionReply[content?;ephemeral?;returnMsgID?]`: Replies once to an interaction. Uses built items if content omitted. Options for ephemeral and returning message ID. Fails if already replied deferred.
*   `$interactionResponseExists`: Checks if the interaction has been replied to or deferred. Returns true or false. Alias `$isReplied`.
*   `$interactionToken`: Returns the interaction's token. **[SECURITY RISK - OWNER ONLY]**
*   `$interactionUpdate[content?]`: Edits the original message of a component interaction. Uses built items if content omitted. Cannot be used for slash commands or modals.
*   `$interactionUserID`: Returns the ID of the user who initiated the interaction. Alias `$authorID` in interaction context.
*   `$interactionValues`: Returns the selected values from a select menu interaction joined by semicolon.
*   `$isAutocomplete`: Checks if the interaction is an autocomplete request. Returns true or false.
*   `$isButtonInteraction`: Checks if the interaction is a button click. Returns true or false.
*   `$isDeferred`: Checks if the interaction reply has been deferred. Returns true or false.
*   `$isEphemeral`: Checks if the interaction was deferred ephemerally or marked via `$ephemeral`. Returns true or false.
*   `$isInteraction`: Returns true if the current context is an interaction false otherwise.
*   `$isMessage`: Returns true if the current context is a message false otherwise.
*   `$isModalSubmit`: Checks if the interaction is a modal submission. Returns true or false.
*   `$isReplied`: Checks if the interaction has been replied to or deferred. Returns true or false. Alias for `$interactionResponseExists`.
*   `$isSelectMenuInteraction`: Checks if the interaction is any select menu type. Returns true or false.
*   `$respondAutocomplete[choicesJsonString]`: Responds to an autocomplete interaction with choices defined in a JSON array string.
*   `$slashCommandName`: Returns the name of the executed slash command.

## Modal Handling

*   `$addModal[customID;title;$addTextInputFunction1;$addTextInputFunctionN...]`: Builds modal data. Requires subsequent `$addTextInput` calls. Show using interaction response.
*   `$addTextInput[customID;label;style;required?;minLength?;maxLength?;placeholder?;value?]`: Defines a text input field *for use within `$addModal`*. Style: Short Paragraph. Required: true false. Configure details like length placeholder default value.
*   `$modalComponentValue[fieldCustomId]`: Returns the value submitted for a specific field in a modal submit interaction. Alias for `$modalFieldValue`.
*   `$modalFieldValue[fieldCustomId]`: Returns the value submitted for a specific field identified by `customId` in a modal submit interaction.

## Component Building

*   `$addActionRow[$componentFunction1;$componentFunctionN...]`: Groups subsequent component calls buttons select menus into an action row.
*   `$addButton[customIDOrURL;label;style;disabled?;emoji?]`: Adds a button. Style: Primary Secondary Success Danger Link. Disabled: true false. Optional emoji.
*   `$addChannelSelectMenu[customID;placeholder;minValues?;maxValues?;channelTypesJson?;disabled?]`: Adds a channel select menu. Optional: min max values filter by channel types JSON array disable.
*   `$addMentionableSelectMenu[customID;placeholder;minValues?;maxValues?;disabled?]`: Adds a user and role select menu. Optional: min max values disable.
*   `$addRoleSelectMenu[customID;placeholder;minValues?;maxValues?;disabled?]`: Adds a role select menu. Optional: min max values disable.
*   `$addSelectMenu[customID;placeholder;minValues?;maxValues?;disabled?]`: Starts building a string select menu. Add options using `$addSelectMenuOption`. Optional: min max values disable.
*   `$addSelectMenuOption[label;value;description?;emoji?;default?]`: Adds an option to the *most recently started string select menu*. Optional: description emoji mark as default selected. Alias: `$addSelectOption`.
*   `$addUserSelectMenu[customID;placeholder;minValues?;maxValues?;disabled?]`: Adds a user select menu. Optional: min max values disable.
*   `$getComponentData[customID]`: Retrieves JSON data for a component by customID from the last message. **[Not Implemented Reliably]**

## Component Modifiers (Use after adding the component)

*   `$setButtonDisabled[disabled]`: Sets the disabled state true false of the last added button.
*   `$setButtonEmoji[emoji]`: Sets the emoji of the last added button.
*   `$setButtonLabel[label]`: Sets the label of the last added button.
*   `$setButtonStyle[style]`: Sets the style Primary Secondary Success Danger Link of the last added button.

## Message Actions & Info

*   `$addReaction[messageID;emoji1;emoji2...]`: Adds one or more reactions to a message. Bot needs access and permissions.
*   `$attachment[index?]`: Returns the URL of the attachment at the specified index default first from the triggering message.
*   `$awaitMessages[filterUserID;timeMs]`: Waits for a single message from a user within a time limit ms. Returns content or empty. Basic implementation.
*   `$awaitReactions[messageID;timeMs;emoji1;emoji2...;maxUsers?;removeReaction?]`: Awaits reactions on a message for specified emojis within a time limit ms. Optional: max users remove reaction after collection. **[Basic Implementation]**
*   `$clear[amount;filterUserID?;pinned?]`: Bulk deletes messages up to one hundred in current channel. Optional: filter by user ID ignore only delete pinned messages true false. Requires Manage Messages.
*   `$clearReactions[messageID;emoji?]`: Removes all reactions or a specific emoji's reactions from a message. Requires Manage Messages.
*   `$crosspostMessage[messageID;channelID?]`: Publishes a message in an announcement channel. Requires Manage Messages.
*   `$deleteIn[milliseconds]`: Deletes the last message sent by the bot after a delay. **[Potentially unreliable]**
*   `$deleteMessageByID[messageID;channelID?;reason?]`: Deletes a specific message by ID. Requires Manage Messages if not own message.
*   `$editIn[milliseconds;newMessageContent?]`: Edits the last message sent by the bot after a delay. Uses built items if content omitted. **[Potentially unreliable]**
*   `$editMessage[messageID;newContent?]`: Edits a specific message sent by the bot. Uses built items if content omitted.
*   `$fetchMessage[messageID;channelID?]`: Fetches a message by ID to ensure it's cached. Returns message ID if found.
*   `$findMessage[query;channelID?;limit?]`: Finds the first message ID containing query text in a channel. Searches backwards up to a limit.
*   `$getMessageComponents[messageID]`: Returns the component structure of a message as a JSON string.
*   `$getMessageEmbed[messageID;index?]`: Returns JSON string of a specific embed by index default first on a message.
*   `$getMessageFlags[messageID]`: Returns semicolon-separated list of message flag names for a message.
*   `$getMessageInteraction[messageID]`: Returns basic info ID Type Name UserID if the message is an interaction response.
*   `$getMessageJumpURL[messageID;channelID?;guildID?]`: Returns the jump URL for a message.
*   `$getMessageReactions[messageID;emoji?;property?]`: Returns reaction count or user IDs property: count users for reactions on a message. Optional emoji filter.
*   `$isPinned[messageID?]`: Checks if the trigger message or specified message is pinned. Returns true or false.
*   `$isReplied[messageID?]`: Checks if the trigger message or specified message is a reply. Returns true or false.
*   `$lastMessageID`: Returns the ID of the last message sent by the bot in this execution context.
*   `$lastMessageIDInChannel[channelID?]`: Returns the ID of the most recent message in a channel relies on cache. Alias `$LastMessageIDInChannel`.
*   `$message[index?]`: Returns the combined command arguments or a specific argument by index. Alias `$messageContent`.
*   `$messageArg[index]`: Returns the argument at the specified index from a prefix command.
*   `$messageArgs`: Returns semicolon-separated arguments from a prefix command.
*   `$messageAttachmentCount`: Returns the number of attachments on the triggering message.
*   `$messageAuthorObject`: Returns JSON string representing the author User object of the triggering message.
*   `$messageChannelID`: Returns the channel ID where the triggering message was sent.
*   `$messageContent[index?]`: Returns the raw content of command arguments or a specific argument by index.
*   `$messageData[property]`: Retrieves data content authorID etc about the last deleted message in the channel basic snipe.
*   `$messageEditedTimestamp`: Returns the timestamp ms when the command message was last edited or empty if not edited.
*   `$messageExists[messageID;channelID]`: Checks if a message exists can be fetched in a channel. Returns true or false.
*   `$messageGuildID`: Returns the guild ID where the triggering message was sent.
*   `$messageID`: Returns the ID of the command message if applicable.
*   `$messageReactionUsers[messageID;emoji]`: Returns semicolon-separated list of user IDs who reacted with a specific emoji.
*   `$messageTimestamp`: Returns the creation timestamp ms of the triggering message.
*   `$messageType`: Returns the type of the command message e g Default Reply.
*   `$messageURL`: Returns the jump URL of the command message if applicable.
*   `$noMentionMessage`: Returns command arguments `$message` without user role channel everyone mentions.
*   `$pinMessage[messageID;reason?]`: Pins a message in its channel. Requires Manage Messages.
*   `$purgeUserMessages[userID;amount;channelID?;reason?]`: Purges messages up to one hundred by a user in a channel. Requires Manage Messages.
*   `$removeReaction[messageID;emoji;userID?]`: Removes a reaction from a message optionally by user ID defaults to bot. Alias `$removeReactionEmoji`. Requires Manage Messages if not own.
*   `$removeReactionEmoji[messageID;emoji;userID?]`: Alias for `$removeReaction`.
*   `$repliedMessageAuthor`: Returns the User ID of the author of the message being replied to if the trigger message is a reply.
*   `$repliedMessageID`: Returns the ID of the message being replied to if the trigger message is a reply.
*   `$suppressEmbeds[messageID;suppress]`: Suppresses true or unsuppresses false embeds on the bot's own message. Requires Manage Messages.
*   `$unpinMessage[messageID;reason?]`: Unpins a message in its channel. Requires Manage Messages.

## Embed Building

*   `$addEmptyField[inline?]`: Adds an empty field to the embed. Optional inline setting true false.
*   `$addField[name;value;inline?]`: Adds a field with a name and value. Optional inline setting true false.
*   `$addTimestamp[milliseconds?]`: Adds a timestamp to the embed footer defaults to current time. Optional timestamp in ms.
*   `$author[name;iconURL?;url?]`: Sets the embed author with name optional icon URL and optional URL link.
*   `$color[hex code or color name]`: Sets the embed color using a hex code or standard color name.
*   `$description[text]`: Sets the main description text of the embed.
*   `$footer[text;iconURL?]`: Sets the embed footer text and optional icon URL.
*   `$getEmbedJSON`: Returns the current embed data being built as a JSON string.
*   `$image[url]`: Sets the main large image URL for the embed.
*   `$setEmbedJSON[jsonString]`: Replaces the current embed data with data from a valid embed JSON string.
*   `$setEmbedURL[url]`: Sets the URL the embed title links to.
*   `$thumbnail[url]`: Sets the small thumbnail image URL for the embed.
*   `$title[text]`: Sets the title text of the embed.

## User/Member Info

*   `$accountCreatedDate[userID?]`: Returns the timestamp ms when the user's account was created author or specified user ID.
*   `$activity[userID?]`: Alias for `$userActivityName`. Returns the primary activity name author or specified user ID. Requires Presence intent.
*   `$authorAvatar`: Returns the avatar URL of the command interaction author.
*   `$authorID`: Returns the ID of the command interaction author.
*   `$authorTag`: Returns the tag Username or UsernameDiscriminator of the command author.
*   `$boostingSince[memberID?]`: Returns the timestamp ms when the member started boosting author or specified member ID. Empty if not boosting.
*   `$canManageUser[targetUserID;managerMemberID?]`: Checks if manager defaults to bot can manage target user based on role hierarchy. Returns true or false.
*   `$displayName[memberID?]`: Returns the display name nickname or username author or specified member ID.
*   `$fetchMember[userID]`: Fetches member data for a user ID in the current guild. Returns member data as JSON string.
*   `$findUser[userMentionOrIDOrTag?]`: Tries to find a user ID from mention tag username or ID. Defaults to author.
*   `$hasAllRoles[memberID?;roleID1;roleID2...]`: Checks if member has all specified role IDs author or specified member ID. Returns true or false.
*   `$hasAnyRole[memberID?;roleID1;roleID2...]`: Checks if member has at least one specified role ID author or specified member ID. Returns true or false.
*   `$hasRole[roleID;memberID?]`: Checks if member has a specific role ID author or specified member ID. Returns true or false.
*   `$highestRole[memberID?]`: Returns the ID of the highest role author or specified member ID.
*   `$isBannable[userID]`: Checks if the user ID is bannable by the bot in the current guild. Returns true or false.
*   `$isBooster[memberID?]`: Checks if the member is boosting the server author or specified member ID. Returns true or false. Alias `$isBoosting`.
*   `$isBoosting[memberID?]`: Alias for `$isBooster`.
*   `$isBot[userID?]`: Checks if the user account is a bot author or specified user ID. Returns true or false.
*   `$isKickable[memberID]`: Checks if the member ID is kickable by the bot in the current guild. Returns true or false.
*   `$isModeratable[memberID]`: Checks if the member ID is moderatable timeoutable etc by the bot. Returns true or false.
*   `$isServerDeafened[memberID?]`: Checks if the member is server deafened author or specified member ID. Returns true or false.
*   `$isServerMuted[memberID?]`: Checks if the member is server muted author or specified member ID. Returns true or false.
*   `$isVoiceConnected[memberID?]`: Checks if the member is connected to a voice channel author or specified member ID. Returns true or false.
*   `$isVoiceDeafened[userID?]`: Checks if the user is locally deafened author or specified user ID. Returns true or false.
*   `$isVoiceMuted[userID?]`: Checks if the user is locally muted author or specified user ID. Returns true or false.
*   `$lowestRole[memberID?]`: Returns the ID of the lowest role excluding everyone author or specified member ID.
*   `$memberAvatar[memberID?]`: Returns the server-specific avatar URL falls back to user avatar author or specified member ID.
*   `$memberExists[userID]`: Alias for `$userExistsInGuild`. Checks if user ID is in the current guild. Returns true or false.
*   `$memberFlags[memberID?]`: Returns semicolon-separated list of member flags author or specified member ID.
*   `$memberHighestRoleObject[memberID?]`: Returns JSON string of the highest Role object author or specified member ID.
*   `$memberJoinedDate[memberID?]`: Returns the timestamp ms when the member joined the server author or specified member ID.
*   `$memberJoinPosition[memberID?]`: Gets the join position of a member Slow on large guilds. author or specified member ID.
*   `$memberPermissions[memberID?;separator?]`: Returns list of guild-level permission names author or specified member ID optional separator.
*   `$memberTimeoutEndTimestamp[memberID?]`: Returns the timestamp ms when a member's timeout ends author or specified member ID. Empty if not timed out.
*   `$modifyMember[memberID;optionsJson;reason?]`: Modifies member properties via JSON options nick roles mute deaf channel. **[Potentially Dangerous]** Requires permissions.
*   `$nickname[memberID?]`: Returns the nickname or username if none author or specified member ID.
*   `$searchMembers[query;limit?]`: Searches members by username nickname. Returns semicolon-separated list of IDs optional limit.
*   `$setNickname[memberID;newNickname;reason?]`: Sets a member's nickname. Empty string removes nickname. Requires permissions.
*   `$setUserRoles[memberID;roleID1;roleID2...;reason?]`: Sets a member's roles exactly to the provided list removes others. Requires Manage Roles.
*   `$userAccentColor[userID?]`: Returns the user's profile accent color hex code author or specified user ID. Requires fetching user.
*   `$userActivityDetails[userID?]`: Returns the details field of the user's primary activity author or specified user ID. Requires Presence intent.
*   `$userActivityDuration[userID?;format?]`: Returns duration of user's activity author or specified user ID. Optional format unit. Requires Presence intent.
*   `$userActivityEmoji[userID?]`: Returns the emoji string of the user's custom status author or specified user ID. Requires Presence intent.
*   `$userActivityName[userID?]`: Returns the name of the user's primary activity author or specified user ID. Requires Presence intent. Alias: `$activity`.
*   `$userActivityState[userID?]`: Returns the state field of the user's primary activity author or specified user ID. Requires Presence intent.
*   `$userActivityType[userID?]`: Returns the type of the user's primary activity author or specified user ID. Requires Presence intent.
*   `$userAvatar[userID?]`: Returns the global avatar URL author or specified user ID.
*   `$userBadges[userID?]`: Returns semicolon-separated list of user flag names badges author or specified user ID.
*   `$userBanner[userID?]`: Returns the user's banner URL author or specified user ID. Requires fetching user.
*   `$userExists[userID]`: Checks if a user exists globally can be fetched by bot. Returns true or false.
*   `$userExistsInGuild[userID]`: Checks if user ID is currently a member of the guild. Returns true or false. Alias `$memberExists`.
*   `$userID[userMentionOrIDOrTag?]`: Returns the ID author or specified user.
*   `$userLanguage`: Returns the user's preferred language locale from interaction context.
*   `$username[userID?]`: Returns the username no discriminator author or specified user ID.
*   `$userPermissions[scope?;memberID?;separator?]`: Returns list of member's permissions in context channel guild scope. Optional separator. Author or specified member ID.
*   `$userRoles[memberID?;type?;separator?]`: Returns list of role IDs or names type: id name author or specified member ID. Optional separator.
*   `$userStatus[userID?]`: Returns the presence status online idle etc author or specified user ID. Requires Presence intent.
*   `$userTag[userID?]`: Returns the tag Username or UsernameDiscriminator author or specified user ID.
*   `$userVoiceChannelID[userID?]`: Returns the ID of the voice channel the user is in author or specified user ID. Empty if not in VC.

## Guild/Server Info

*   `$afkChannelID[guildID?]`: Returns the AFK channel ID current or specified guild.
*   `$afkTimeout[guildID?]`: Returns the AFK timeout in seconds current or specified guild.
*   `$approximateMemberCount[guildID?]`: Returns approximate member count from invite widget data current or specified guild.
*   `$approximatePresenceCount[guildID?]`: Returns approximate online member count from invite widget data current or specified guild.
*   `$boostCount[guildID?]`: Returns the server boost count current or specified guild.
*   `$boostLevel[guildID?]`: Returns the server boost level current or specified guild.
*   `$botCount[guildID?]`: Returns the number of bot members current or specified guild.
*   `$categoryCount[guildID?]`: Returns the number of category channels current or specified guild.
*   `$channelCount[guildID?]`: Returns the total number of channels excluding categories current or specified guild.
*   `$explicitContentFilter[guildID?]`: Returns the explicit content filter level name current or specified guild.
*   `$guildAuditLog[actionType?;userID?;limit?;before?;after?]`: Fetches audit log entries as JSON string. Optional filters: type user ID limit before after entry ID. Requires View Audit Log.
*   `$guildFeatures[guildID?]`: Returns semicolon-separated list of guild features current or specified guild.
*   `$guildID[guildID?]`: Returns the ID of the current or specified guild. Alias `$serverID`.
*   `$guildOwner[guildID?]`: Returns JSON string of the guild owner User object current or specified guild.
*   `$guildVanityUses[guildID?]`: Returns number of uses for the guild's vanity invite. Requires Manage Guild. Current or specified guild.
*   `$guildWelcomeScreen[guildID?]`: Returns JSON string of the welcome screen configuration. Requires Manage Guild. Current or specified guild.
*   `$humanCount[guildID?]`: Returns the number of human members current or specified guild.
*   `$maxMembers[guildID?]`: Returns the maximum number of members the guild can have current or specified guild.
*   `$maxPresences[guildID?]`: Returns the maximum number of presences the guild can support current or specified guild.
*   `$memberCount[guildID?]`: Returns the total member count current or specified guild.
*   `$mfaLevel[guildID?]`: Returns the MFA Level name None Elevated. Requires Manage Guild. Current or specified guild.
*   `$modifyGuild[guildID;optionsJson;reason?]`: Modifies guild settings via JSON options. Requires permissions. Current or specified guild.
*   `$publicUpdatesChannelID[guildID?]`: Returns the public updates channel ID for community servers current or specified guild.
*   `$roleCount[guildID?]`: Returns the total number of roles current or specified guild.
*   `$rulesChannelID[guildID?]`: Returns the rules channel ID for community servers current or specified guild.
*   `$serverBanner[guildID?]`: Returns the server banner URL current or specified guild.
*   `$serverBoosterRole[guildID?]`: Returns the ID of the booster role current or specified guild.
*   `$serverCreationDate[guildID?]`: Returns the timestamp ms when the guild was created current or specified guild.
*   `$serverEmojis[guildID?]`: Returns JSON array string of detailed custom emoji info current or specified guild.
*   `$serverIcon[guildID?]`: Returns the icon URL current or specified guild.
*   `$serverID[guildID?]`: Returns the ID of the current or specified guild. Alias `$guildID`.
*   `$serverLocale[guildID?]`: Returns the preferred locale string current or specified guild.
*   `$serverName[guildID?]`: Returns the name current or specified guild.
*   `$serverOwnerID[guildID?]`: Returns the user ID of the owner current or specified guild.
*   `$serverRoles[guildID?]`: Returns JSON array string of detailed role info current or specified guild.
*   `$serverVerificationLevel[guildID?]`: Returns the verification level name current or specified guild.
*   `$systemChannel[guildID?]`: Returns the system messages channel ID current or specified guild.
*   `$vanityURLCode[guildID?]`: Returns the guild's vanity invite code. Requires Manage Guild. Current or specified guild.

## Channel/Thread/Forum Info & Management

*   `$archiveThread[threadID?;reason?]`: Archives a thread. Requires permissions.
*   `$canManageChannel[channelID;memberID?]`: Checks if bot or member can manage a channel. Returns true false.
*   `$categoryID[channelID?]`: Returns the parent category ID of a channel.
*   `$channelExists[channelID]`: Checks if a channel exists in the guild. Returns true false.
*   `$channelID[channelNameOrID?]`: Returns the ID of a channel found by name ID or current. Alias `$findChannel`.
*   `$channelIDs[type?]`: Returns semicolon-separated list of channel IDs. Optional filter by type text voice category any.
*   `$channelMention[channelID?]`: Returns the channel mention string `<#ID>`.
*   `$channelName[channelID?]`: Returns the name of a channel.
*   `$channelNames[type?]`: Returns semicolon-separated list of channel names. Optional filter by type.
*   `$channelParentObject[channelID?]`: Returns JSON string of channel's parent CategoryChannel object.
*   `$channelPosition[channelID?]`: Returns the position of a channel.
*   `$channelTopic[channelID?]`: Returns the topic of a text-based channel.
*   `$channelType[channelID?]`: Returns the type name of a channel e g GUILD TEXT.
*   `$channelURL[channelID?]`: Returns the jump URL for a channel.
*   `$createChannel[name;type?;parentID?;optionsJson?;reason?]`: Creates a channel. Optional type parent ID JSON options. Returns new channel ID. Requires Manage Channels.
*   `$createThread[name;startMessageID?;type?;autoArchiveDuration?;optionsJson?;reason?]`: Creates a thread. Optional start message type archive duration JSON options. Returns new thread ID. Requires permissions.
*   `$deleteChannel[channelID;reason?]`: Deletes a channel. Requires Manage Channels.
*   `$deleteThread[threadID?;reason?]`: Deletes a thread. Requires permissions.
*   `$findChannel[channelNameOrID?]`: Finds channel ID from mention name or ID. Defaults to current. Alias `$channelID`.
*   `$getChannelBotPerms[channelID?]`: Returns semicolon-separated list of bot's permissions in a channel.
*   `$getChannelSlowmode[channelID?]`: Returns the slowmode delay seconds for a channel. Alias `$getSlowmode`.
*   `$getChannelWebhooks[channelID?]`: Returns semicolon-separated list of webhook IDs for a channel. Requires Manage Webhooks.
*   `$getSlowmode[channelID?]`: Alias for `$getChannelSlowmode`.
*   `$isForum[channelID?]`: Checks if a channel is a forum. Returns true false.
*   `$isNsfw[channelID?]`: Checks if a channel is marked NSFW. Returns true false.
*   `$isThread[channelID?]`: Checks if a channel is a thread. Returns true false.
*   `$lockThread[threadID?;reason?]`: Locks a thread. Requires Manage Threads.
*   `$modifyChannel[channelID;optionsJson;reason?]`: Modifies channel properties via JSON options. Requires Manage Channels.
*   `$parentName[channelID?]`: Returns the parent category name of a channel.
*   `$setChannelName[channelID;newName;reason?]`: Renames a channel. Requires Manage Channels.
*   `$setChannelPerms[channelID;roleOrUserID;allowPerms;denyPerms;reason?]`: Sets permission overwrites for a role user on a channel. Use semicolon-separated names or bitfields. Requires Manage Roles permission in channel.
*   `$setChannelPosition[channelID;newPosition;reason?]`: Sets channel position. Requires Manage Channels.
*   `$setChannelTopic[channelID;newTopic;reason?]`: Sets a channel's topic. Requires Manage Channels.
*   `$setSlowmode[seconds;channelID?;reason?]`: Sets channel slowmode seconds. Requires Manage Channels. Alias `$setChannelSlowmode`.
*   `$threadName[threadID?]`: Returns the name of a thread.
*   `$threadParentID[threadID?]`: Returns the parent channel ID of a thread.
*   `$unarchiveThread[threadID?;reason?]`: Unarchives a thread. Requires permissions.
*   `$unlockThread[threadID?;reason?]`: Unlocks a thread. Requires Manage Threads.

## Role Info & Management

*   `$addRole[memberID;roleID;reason?]`: Adds a role to a member. Requires Manage Roles.
*   `$canManageRole[roleID;memberID?]`: Checks if bot or member can manage a role based on hierarchy. Returns true false.
*   `$compareRolePosition[roleID1;roleID2]`: Compares two roles' positions. Returns positive if role1 greater role2 negative if role1 less role2 zero if equal.
*   `$createRole[name;color?;hoist?;mentionable?;permissions?;iconURL?;unicodeEmoji?;reason?]`: Creates a role. Optional properties: color hoist mentionable permissions bitfield names icon emoji. Returns new role ID. Requires Manage Roles.
*   `$deleteRole[roleID;reason?]`: Deletes a role. Requires Manage Roles.
*   `$isHoisted[roleID]`: Checks if a role is hoisted displayed separately. Returns true false.
*   `$isManaged[roleID]`: Checks if a role is managed by an integration. Returns true false.
*   `$isMentionable[roleID]`: Checks if a role is mentionable. Returns true false.
*   `$isRoleEditable[roleID]`: Checks if a role is editable by the bot. Returns true false.
*   `$modifyRole[roleID;optionsJson;reason?]`: Modifies role properties via JSON options name color etc. Requires Manage Roles.
*   `$removeRole[memberID;roleID;reason?]`: Removes a role from a member. Requires Manage Roles.
*   `$resolveRoleID[roleNameOrMentionOrID]`: Finds a role ID from name mention or ID. Returns ID or empty. Alias `$findRole`.
*   `$roleColor[roleID]`: Returns the hex color code of a role.
*   `$roleExists[roleID]`: Checks if a role exists in the guild. Returns true false.
*   `$roleMembersCount[roleID]`: Returns the number of members with a specific role.
*   `$roleMention[roleID]`: Returns the role mention string `<@&ID>`.
*   `$roleName[roleID]`: Returns the name of a role.
*   `$rolePosition[roleID]`: Returns the position of a role in the hierarchy.
*   `$setRoleColor[roleID;hexColor;reason?]`: Changes a role's color. Requires Manage Roles.
*   `$setRoleHoist[roleID;hoist;reason?]`: Sets role hoist status true false. Requires Manage Roles.
*   `$setRoleMentionable[roleID;mentionable;reason?]`: Sets role mentionable status true false. Requires Manage Roles.
*   `$setRoleName[roleID;newName;reason?]`: Renames a role. Requires Manage Roles.
*   `$setRolePosition[roleID;newPosition;reason?]`: Changes a role's position. Requires Manage Roles.

## Emoji/Sticker Info & Management

*   `$addEmoji[imageURL;name;rolesJson?;reason?]`: Adds an emoji. Optional roles allowed JSON array. Returns new emoji string. Requires Manage Emojis Stickers.
*   `$addSticker[fileURLorPath;name;tags;description?;reason?]`: Adds a sticker. Requires tags related emoji. Returns new sticker ID. Requires Manage Emojis Stickers. **[SECURITY RISK - OWNER ONLY]** If using file path.
*   `$cloneEmoji[emojiID or emoji;newName?;reason?]`: Clones an emoji. Optional new name. Returns new emoji string. Requires Manage Emojis Stickers.
*   `$deleteEmoji[emojiID;reason?]`: Deletes a custom emoji by ID. Requires Manage Emojis Stickers.
*   `$deleteSticker[stickerID;reason?]`: Deletes a guild sticker by ID. Requires Manage Emojis Stickers.
*   `$emojiExists[emojiID or full emoji]`: Checks if a custom emoji exists is usable. Returns true false.
*   `$emojiList`: Returns semicolon-separated list of custom emoji IDs in the guild.
*   `$emojiURL[emojiID or full emoji]`: Returns the image URL for a custom emoji.
*   `$getEmoji[emojiName or emojiID]`: Returns the full custom emoji string `<:name:id>` or `<a:name:id>`.
*   `$modifyEmoji[emojiID;newName?;rolesJson?;reason?]`: Modifies emoji name or allowed roles JSON array. Requires Manage Emojis Stickers. Returns modified emoji string.
*   `$modifySticker[stickerID;optionsJson;reason?]`: Modifies sticker properties name description tags via JSON options. Requires Manage Emojis Stickers. Returns sticker ID.
*   `$stickerURL[stickerID]`: Returns the URL of a sticker image.

## Moderation Actions

*   `$auditLogReason[reasonText]`: Sets the reason for the *next* audit log action. Use *before* the action function.
*   `$ban[userID;reason?;deleteMessageDays?]`: Bans a user. Optional reason and message deletion period days. Requires Ban Members.
*   `$clearWarnings[userID]`: Clears all warnings for a user. **[Requires warning system implementation]**
*   `$deafenMemberVoice[memberID;deafen;reason?]`: Server deafens true or un-deafens false a member. Requires Deafen Members.
*   `$disconnectMemberVoice[memberID;reason?]`: Disconnects a member from voice. Requires Move Members.
*   `$getPruneCount[days;rolesJson?]`: Estimates prune count based on inactivity days and optional included roles JSON array. Requires Kick Members.
*   `$getWarnings[userID]`: Retrieves warnings for a user as a JSON array string. **[Requires warning system implementation]**
*   `$kick[memberID;reason?]`: Kicks a member. Requires Kick Members.
*   `$muteMemberVoice[memberID;mute;reason?]`: Server mutes true or un-mutes false a member. Requires Mute Members.
*   `$pruneMembers[days;computeCount?;rolesJson?;reason?]`: Prunes inactive members. Optional compute count only included roles JSON array. Returns number pruned estimated. Requires Kick Members.
*   `$removeTimeout[memberID;reason?]`: Removes a timeout from a member. Requires Moderate Members.
*   `$timeout[memberID;durationMs;reason?]`: Times out a member for a duration ms. Max duration applies. Requires Moderate Members.
*   `$unban[userID;reason?]`: Unbans a user. Requires Ban Members.
*   `$warnUser[userID;reason;moderatorID?]`: Records a warning for a user. Optional moderator ID. **[Requires warning system implementation]**

## Permissions & Restrictions

*   `$botPermissions[scope?]`: Returns semicolon-separated list of bot's calculated permissions in context channel guild scope.
*   `$hasGuildPermission[permission1;permission2...;memberID?]`: Checks if member has permissions at the GUILD level. Returns true false.
*   `$hasPermission[permission1;permission2...;memberID?]`: Checks if member has permissions in the current channel context. Returns true false. Alias `$hasPermissions`.
*   `$ignoreChannels[channelID1;channelID2...]`: Stops execution silently if used in specified channels.
*   `$ignoreRoles[roleID1;roleID2...]`: Stops execution silently if author has any specified roles.
*   `$ignoreUsers[userID1;userID2...]`: Stops execution silently if author is one of the specified users.
*   `$onlyForIDs[id1;id2;...;errorMessage?]`: Restricts usage to specified user IDs. Stops with error if failed.
*   `$onlyForRoles[roleID1;roleID2...;errorMessage?]`: Restricts usage to users with at least one specified role. Stops with error if failed. Alias `$onlyRoles`.
*   `$onlyIf[condition;errorMessage?]`: Stops execution with error if condition is false-like.
*   `$onlyPerms[permission1;permission2...;errorMessage?]`: Restricts usage to users with all specified permissions. Stops with error if failed.

## Variables (Local Global User Server)

*   `$appendVar[varName;valueToAppend;separator?;scope?]`: Appends value to a variable optional separator. Scope: local global.
*   `$decVar[varName;decrement?;scope?]`: Decrements a numeric variable. Optional decrement amount. Scope: local global.
*   `$deleteServerVar[varName]`: Deletes a server-specific variable.
*   `$deleteUserVar[varName;userID;scope?]`: Deletes a user-specific variable. Scope: global local per server.
*   `$deleteVar[varName;scope?]`: Deletes a variable from scope: local global.
*   `$get[varName]`: Gets a temporary local variable's value. Alias `$getVar[varName;local]`.
*   `$getAllVars[scope?]`: Returns JSON string of all variables in scope: local global.
*   `$getServerVar[varName]`: Gets a server-specific variable value.
*   `$getUserVar[varName;userID;scope?]`: Gets a user-specific variable value. Scope: global local per server.
*   `$getVar[varName;scope?]`: Gets a variable's value from scope: local global.
*   `$hasVar[varName;scope?]`: Checks if a variable exists in scope: local global. Returns true false.
*   `$incVar[varName;increment?;scope?]`: Increments a numeric variable. Optional increment amount. Scope: local global.
*   `$let[varName;value]`: Sets a temporary local variable's value. Alias `$setVar[varName;value;local]`.
*   `$prependVar[varName;valueToPrepend;separator?;scope?]`: Prepends value to a variable optional separator. Scope: local global.
*   `$setServerVar[varName;value]`: Sets a server-specific variable value.
*   `$setUserVar[varName;value;userID;scope?]`: Sets a user-specific variable value. Scope: global local per server.
*   `$setVar[varName;value;scope?]`: Sets a variable's value in scope: local global.
*   `$varType[varName;scope?]`: Returns the internal JavaScript type of a variable's value in scope.

## Utility & Control Flow

*   `$and[condition1;condition2...]`: Returns true if all conditions are true-like false otherwise.
*   `$case[matchValue;returnValue]`: Used within `$switch`. Defines a case and its return value if matched.
*   `$catch[codeToRunOnError]`: Used within `$try`. Defines code to run if `$try` block errors. Sets `$errorMsg`.
*   `$checkCondition[value1;operator;value2]`: Compares two values using an operator. Returns true false.
*   `$commandInfo[property]`: Returns info about the current command name type description aliases.
*   `$commandTrigger`: Returns the trigger used for the command name alias slash command name.
*   `$comment[text...]`: Ignored. Used for code comments.
*   `$defaultCase[returnValue]`: Used within `$switch`. Defines the default return value if no cases match.
*   `$define[word]`: Gets definition of a word using an external dictionary API. Returns JSON.
*   `$djsEval[javascriptCode]`: Executes raw JavaScript code. **[DANGEROUS - SECURITY RISK - OWNER ONLY]** Alias `$eval`.
*   `$error[message]`: Stops execution and returns an error message. Alias `$stopExecution`.
*   `$eval[javascriptCode]`: Alias for `$djsEval`. **[DANGEROUS - SECURITY RISK - OWNER ONLY]**
*   `$solaraEval[solaraCode]`: Parses and executes Solara code from input string. **[SECURITY RISK - OWNER ONLY]**
*   `$evalFile[filePath]`: Reads and executes Solara code from a file. **[SECURITY RISK - OWNER ONLY]**
*   `$eventData[propertyName?]`: Gets data attached to the event context optionally a specific property.
*   `$forEach[code;item1;item2...]`: Executes code for each item. Sets `$forEachItem` `$forEachIndex`.
*   `$functionExists[functionName]`: Checks if a Solara function exists include $. Returns true false.
*   `$functionInfo[functionName]`: Fetches description usage for a Solara function include $.
*   `$getContextType`: Returns context type 'Message' or 'Interaction'.
*   `$if[condition;then;else?]`: Conditional execution. Executes `then` if condition true-like `else` if provided and false-like.
*   `$log[value1;value2...]`: Logs values to the bot's console.
*   `$loop[delayMs;code;iterations;stopOnError?]`: Executes code repeatedly with delay. Optional iteration limit stop on error setting.
*   `$not[condition]`: Reverses boolean condition true becomes false false becomes true.
*   `$or[condition1;condition2...]`: Returns true if at least one condition is true-like false otherwise.
*   `$progressBar[currentValue;maxValue;length?;filledChar?;emptyChar?]`: Creates a text progress bar string. Optional length and characters.
*   `$randomText[item1;item2...]`: Returns one random item from the provided arguments.
*   `$randomUserID[guildID?;includeBots?]`: Returns a random user ID from guild. Optional: specify guild include bots.
*   `$randomUUID`: Generates a random UUID.
*   `$repeat[times;delayMs;code;stopOnError?]`: Executes code asynchronously multiple times with delay. Optional stop on error.
*   `$search[query]`: Searches YouTube for a video. Returns JSON string of first result. **[Requires API Key Setup]**
*   `$sleep[milliseconds]`: Pauses execution for a duration ms. Alias `$wait`.
*   `$stopExecution[message?]`: Stops execution silently. Optional error message. Alias for `$error`.
*   `$switch[value;$caseFunction1;$caseFunctionN...;$defaultCaseFunction?]`: Selects return value based on matching `$case` against `value`. Uses `$defaultCase` if no match.
*   `$try[codeToTry;$catchFunction]`: Executes code. If error runs `$catch` block sets `$errorMsg`. Returns result of executed block.
*   `$updateCommands`: Reloads commands from filesystem. **[OWNER ONLY]** **[Potentially Dangerous]**
*   `$wait[milliseconds]`: Pauses execution for a duration ms. Alias `$sleep`.

## Math

*   `$E`: Returns Euler's number E.
*   `$PI`: Returns PI. Alias `$pi`.
*   `$abs[number]`: Returns the absolute value of a number.
*   `$calculate[expression]`: Evaluates a mathematical expression string. **[SECURITY RISK]** If expression is user-provided.
*   `$cbrt[number]`: Calculates the cube root.
*   `$ceil[number]`: Rounds number up to the nearest integer.
*   `$div[num1;num2...]`: Divides numbers sequentially.
*   `$floor[number]`: Rounds number down to the nearest integer.
*   `$isEven[number]`: Checks if number is even. Returns true false.
*   `$isOdd[number]`: Checks if number is odd. Returns true false.
*   `$isPrime[number]`: Checks if number is prime basic. Returns true false.
*   `$max[num1;num2...]`: Returns the highest number from a list.
*   `$min[num1;num2...]`: Returns the lowest number from a list.
*   `$modulo[dividend;divisor]`: Returns the remainder of division.
*   `$multi[num1;num2...]`: Calculates the product of numbers.
*   `$ordinal[number]`: Returns the ordinal form st nd etc. Alias `$toOrdinal`.
*   `$percent[value1;value2]`: Calculates percentage value one is of value two.
*   `$pi`: Alias for `$PI`.
*   `$power[base;exponent]`: Calculates base to the exponent power.
*   `$random[max]` or `$random[min;max]`: Returns random integer in range inclusive.
*   `$randomFloat[min?;max?]`: Returns random float between min inclusive default zero and max exclusive default one.
*   `$randomHexColor`: Generates a random hex color code.
*   `$round[number]`: Rounds number to the nearest integer.
*   `$roundTo[number;decimalPlaces]`: Rounds number to specified decimal places.
*   `$sign[number]`: Returns the sign of a number minus one zero one.
*   `$sqrt[number]`: Calculates the square root.
*   `$sub[num1;num2...]`: Subtracts numbers sequentially.
*   `$sum[num1;num2...]`: Calculates the sum of numbers.
*   `$toFixed[number;digits?]`: Formats number using fixed-point notation optional decimal digits.
*   `$truncate[number]`: Removes the fractional part of a number.

## String Manipulation

*   `$bold[text]`: Formats text as bold `**text**`.
*   `$charCount[text;characterOrSubstring]`: Counts occurrences of a char substring in text.
*   `$charAt[text;index]`: Returns character at specific index zero based.
*   `$charToCode[text;index?]`: Returns Unicode value of character at index default zero.
*   `$codeBlock[text;language?]`: Formats text into a code block optional language.
*   `$codeToChar[code1;code2...]`: Creates string from sequence of Unicode values.
*   `$cropText[text;maxLength;endChars?]`: Truncates text optionally appending characters within limit.
*   `$endsWith[text;search]`: Checks if text ends with search string. Returns true false.
*   `$escapeMarkdown[text]`: Escapes Discord markdown characters in text.
*   `$findNthOccurrence[text;search;occurrence]`: Finds index of the Nth occurrence of search string.
*   `$hyperlink[text;url]`: Creates Markdown hyperlink `[text](url)`.
*   `$includes[text;search]`: Checks if text contains search string. Returns true false.
*   `$indexOf[text;searchValue;fromIndex?]`: Returns first index of search value optional start index. Returns minus one if not found.
*   `$inlineCode[text]`: Formats text as inline code `` `text` ``.
*   `$isNumeric[text]`: Checks if text contains only numeric digits. Returns true false.
*   `$italic[text]`: Formats text as italic `*text*` or `_text_`.
*   `$length[text]`: Returns the length number of characters of text.
*   `$letterCount[text]`: Counts number of alphabetic characters in text.
*   `$padEnd[text;targetLength;padString?]`: Pads end of text with string until target length. Default pad is space.
*   `$padStart[text;targetLength;padString?]`: Pads start of text with string until target length. Default pad is space.
*   `$quote[text]`: Formats text as inline quote `> text`.
*   `$quoteBlock[text]`: Formats text as block quote `>>> text`.
*   `$removeLinks[text]`: Attempts to remove URLs from text basic.
*   `$repeatText[text;count]`: Repeats text a number of times.
*   `$replaceAll[text;search;replace]`: Replaces all occurrences of search string with replacement.
*   `$replaceText[text;search;replace;limit?]`: Replaces occurrences of search string optional replacement limit minus one for all.
*   `$reverseText[text]`: Reverses the order of characters in text.
*   `$sentenceCase[text]`: Converts text to sentence case basic.
*   `$slice[text;startIndex;endIndex?]`: Extracts section of text using indices zero based. Optional end index exclusive. Negative indices count from end.
*   `$spoiler[text]`: Formats text as spoiler `||text||`.
*   `$startsWith[text;search]`: Checks if text starts with search string. Returns true false.
*   `$strikethrough[text]`: Formats text as strikethrough `~~text~~`.
*   `$substring[text;startIndex;endIndex?]`: Returns part of string between start inclusive and optional end exclusive indices.
*   `$textSplit[text;separator?]`: Splits text by separator default ';'. Stores result for `$splitText`. Returns item count.
*   `$splitText[index]`: Retrieves item by index one based from last `$textSplit` result.
*   `$titleCase[text]`: Converts text to title case basic.
*   `$toLowercase[text]`: Converts text to lowercase.
*   `$toUppercase[text]`: Converts text to uppercase.
*   `$trim[text]`: Removes whitespace from both ends of text.
*   `$trimEnd[text]`: Removes whitespace from end of text.
*   `$trimStart[text]`: Removes whitespace from start of text.
*   `$underline[text]`: Formats text as underlined `__text__`.
*   `$unescapeMarkdown[text]`: Basic attempt to remove backslash escapes before markdown characters.
*   `$wordCount[text]`: Counts words in text space-separated.

## List/Array (Semicolon Separated)

*   `$filterList[filterValue;item1;item2...]`: Returns items matching filterValue joined by ';'.
*   `$findItem[searchItem;item1;item2...]`: Finds first index one based of searchItem. Returns minus one if not found.
*   `$findLastItem[searchItem;item1;item2...]`: Finds last index one based of searchItem. Returns minus one if not found.
*   `$itemCount[item1;item2...]`: Returns the total number of items. Alias: `$listLength`.
*   `$joinText[separator;item1;item2...]`: Joins items with a separator.
*   `$listChunk[chunkSize;item1;item2...]`: Splits list into chunks. Returns JSON array string of arrays.
*   `$listContains[searchItem;item1;item2...]`: Checks if list contains searchItem. Returns true false. Alias `$ListContains`.
*   `$listContainsAll[list1Items;list2Items]`: Checks if list one contains all items from list two. Returns true false.
*   `$listContainsAny[list1Items;list2Items]`: Checks if list one contains any item from list two. Returns true false.
*   `$listDifference[list1Items;list2Items]`: Returns items in list one but not list two joined by ';'.
*   `$listFlatten[list1;list2...]`: Flattens multiple lists into one joined by ';'.
*   `$listGetRandom[count;item1;item2...]`: Returns random unique items from list joined by ';'.
*   `$listInsert[index;itemToInsert;item1;item2...]`: Inserts item at index one based. Returns new list joined by ';'.
*   `$listIntersection[list1Items;list2Items]`: Returns items common to both lists joined by ';'.
*   `$listItem[index;item1;item2...]`: Returns item at index one based.
*   `$listLength[item1;item2...]`: Returns the total number of items. Alias for `$itemCount`.
*   `$listRemove[itemToRemove;item1;item2...]`: Removes first occurrence of item. Returns new list joined by ';'.
*   `$listRemoveAll[itemToRemove;item1;item2...]`: Removes all occurrences of item. Returns new list joined by ';'.
*   `$listSlice[startIndex;endIndex?;item1;item2...]`: Returns slice of list from start index one based up to optional end index. Returns sliced list joined by ';'.
*   `$listUnion[list1Items;list2Items]`: Returns unique items from both lists combined joined by ';'.
*   `$popList[item1;item2...]`: Returns the last item from the list.
*   `$removeContains[containsValue;item1;item2...]`: Returns list excluding items containing value joined by ';'.
*   `$removeDuplicates[item1;item2...]`: Returns unique items from list joined by ';'. Preserves order.
*   `$reverseList[item1;item2...]`: Returns items in reverse order joined by ';'.
*   `$shiftList[item1;item2...]`: Returns the first item from the list.
*   `$sortAlphabetical[sortOrder;item1;item2...]`: Sorts items alphabetically az za. Returns sorted list joined by ';'.
*   `$sortList[sortType;item1;item2...]`: Sorts items by type az za numaz numza asc desc. Returns sorted list joined by ';'.

## Time/Date

*   `$dateDiff[timestampMs1;timestampMs2]`: Calculates difference between two timestamps ms. Returns difference in ms.
*   `$day[timestampMs?]`: Returns day of month UTC for timestamp default now.
*   `$dayOfWeek[timestampMs?]`: Returns day of week UTC zero equals Sun for timestamp default now.
*   `$dayOfYear[timestampMs?]`: Returns day of year UTC for timestamp default now.
*   `$duration[ms]`: Formats milliseconds into readable duration string.
*   `$formatDate[timestampMs?;optionsJson?;locale?]`: Formats timestamp using Intl DateTimeFormat. Optional JSON options locale. Defaults to now en US.
*   `$getMilliseconds[timestampMs?]`: Returns millisecond part UTC of timestamp default now.
*   `$hour[timestampMs?]`: Returns hour UTC range zero twentythree for timestamp default now.
*   `$isValidDate[dateString]`: Checks if date string is valid. Returns true false.
*   `$minute[timestampMs?]`: Returns minute UTC for timestamp default now.
*   `$month[timestampMs?]`: Returns month UTC one twelve for timestamp default now.
*   `$now`: Returns current Unix timestamp in milliseconds.
*   `$parseDate[dateString]`: Parses date string to ms timestamp. Accuracy varies.
*   `$second[timestampMs?]`: Returns second UTC for timestamp default now.
*   `$timeSince[timestampMs]`: Returns readable duration since timestamp.
*   `$timeStamp[style?;timestampMs?]`: Returns Discord timestamp string. Optional style t T d D f F R optional timestamp ms default now.
*   `$timeUntil[timestampMs]`: Returns readable duration until timestamp.
*   `$toISOString[timestampMs?]`: Formats timestamp as ISO standard string UTC. Default now.
*   `$toUTCString[timestampMs?]`: Formats timestamp as readable UTC string. Default now.
*   `$year[timestampMs?]`: Returns full year UTC for timestamp default now.

## Validation & Type Checking

*   `$isAlpha[text]`: Checks if text contains only letters. Returns true false.
*   `$isAlphanumeric[text]`: Checks if text contains only letters and numbers. Returns true false.
*   `$isBoolean[value]`: Checks if value is exactly 'true' or 'false'. Returns true false.
*   `$isEmail[text]`: Basic check if text looks like an email. Returns true false.
*   `$isEmpty[text]`: Checks if text is empty or only whitespace. Returns true false.
*   `$isNull[varName;scope?]`: Checks if variable value is null or undefined. Returns true false.
*   `$isNumber[text]`: Checks if text is a valid JS number. Returns true false.
*   `$isNaNFunc[value]`: Checks if value is NaN. Returns true false.
*   `$isString[value]`: Checks if value's internal type is string. Returns true false.
*   `$isUndefined[varName;scope?]`: Checks if variable value is undefined. Returns true false.
*   `$isURL[text]`: Basic check if text looks like a URL. Returns true false.
*   `$isValidHex[hex code]`: Checks if string is valid hex color code. Returns true false.
*   `$isValidInvite[inviteCode]`: Checks if invite code is potentially valid via Discord API. Returns true false.
*   `$isValidJson[text]`: Checks if string is valid JSON. Returns true false.
*   `$toBoolean[value]`: Converts value to 'true' 'false' based on truthiness. Alias `$toBoolan`.
*   `$toNumber[value]`: Converts value to number string or error string on failure.
*   `$toString[value]`: Converts value to its string representation.
*   `$typeOf[varName;scope?]`: Returns internal JS type 'string' 'number' etc of variable.

## Web & Encoding

*   `$base64Decode[base64Text]`: Decodes Base Sixty Four text.
*   `$base64Encode[text]`: Encodes text to Base Sixty Four.
*   `$htmlEntitiesDecode[text]`: Decodes common HTML entities.
*   `$htmlEntitiesEncode[text]`: Encodes characters to HTML entities.
*   `$httpContentType[url]`: Gets Content-Type header HEAD request. **[SECURITY RISK]**
*   `$httpHead[url]`: Performs HTTP HEAD request returns headers JSON. **[SECURITY RISK]**
*   `$httpRequest[url;method?;bodyJson?;headersJson?]`: Performs HTTP request. Optional method JSON body JSON headers. Returns response body text. **[SECURITY RISK]**
*   `$httpStatus[url]`: Gets HTTP status code GET request. **[SECURITY RISK]**
*   `$json[keyPath?]`: Retrieves value from last parsed JSON object via key path dot notation. No args returns full JSON.
*   `$jsonParse[jsonString]`: Parses JSON string stores internally for use with `$json`. Alias `$parseJSON`.
*   `$parseJSON[varName;jsonString]`: Parses JSON string stores object array in local variable.
*   `$jsonToXml[jsonString]`: Converts JSON string to XML string. *May require external library*.
*   `$stringifyJSON[varName;indent?]`: Converts local variable object array back to JSON string. Optional indent spaces.
*   `$urlDecode[encodedText]`: Decodes URL-encoded text.
*   `$urlEncode[text]`: Encodes text for URLs.
*   `$xmlToJson[xmlString]`: Converts XML string to JSON string. *May require external library*.

## File System (**Use with extreme caution! SECURITY RISK - OWNER ONLY**)

*   `$appendFile[filePath;content]`: Appends content to local file. **[SECURITY RISK - OWNER ONLY]**
*   `$createDirectory[dirPath]`: Creates local directory and parents. **[SECURITY RISK - OWNER ONLY]**
*   `$createFileAttachment[source;name?]`: Prepares file text as attachment. `source`: filePath or text content. `name`: filename. **[SECURITY RISK - OWNER ONLY]** If using file path.
*   `$deleteDirectory[dirPath;recursive?]`: Deletes local directory. Optional recursive for non-empty. **[SECURITY RISK - OWNER ONLY]**
*   `$deleteFile[filePath]`: Deletes local file. **[SECURITY RISK - OWNER ONLY]**
*   `$fileExists[filePath]`: Checks if local file directory exists. Returns true false. **[SECURITY RISK - OWNER ONLY]**
*   `$getFileStats[filePath]`: Gets local file stats size times type as JSON. **[SECURITY RISK - OWNER ONLY]**
*   `$listFiles[dirPath]`: Lists file dir names in local directory joined by ';'. **[SECURITY RISK - OWNER ONLY]**
*   `$readFile[filePath]`: Reads content from local file. Returns text. **[SECURITY RISK - OWNER ONLY]**
*   `$writeFile[filePath;content]`: Writes content to local file overwrites. **[SECURITY RISK - OWNER ONLY]**

## Voice (Requires Player & Queue Implementation)

*   `$isVoiceConnected`: Checks if bot is connected to voice in the guild. Returns true false.
*   `$moveMemberVoice[memberID;channelID;reason?]`: Moves member to another voice channel. Requires Move Members.
*   `$voiceChannelID`: Returns ID of the voice channel bot is connected to. Empty if not connected.
*   `$voiceGetVolume`: Gets the stored playback volume.
*   `$voiceJoin[channelID?]`: Joins user's current voice channel or specified channel. Requires Connect Speak permissions.
*   `$voiceLeave[guildID?]`: Leaves current voice channel.
*   `$voiceLoop[mode?]`: Sets or gets loop mode none track queue.
*   `$voiceNowPlaying`: Returns title of currently playing song. Empty if none.
*   `$voicePause`: Pauses current audio playback.
*   `$voicePlay[youtubeCookie;queryOrURL]`: Plays audio from query URL. Requires YT cookie for search. Adds to queue if playing. **[SECURITY RISK]** Cookie usage.
*   `$voiceQueueAdd[queryOrURL]`: Adds song URL to queue.
*   `$voiceQueueClear`: Clears the song queue doesn't stop current song.
*   `$voiceQueueList[limit?;separator?]`: Returns current queue as list of titles. Optional limit separator.
*   `$voiceQueueRemove[index]`: Removes song from queue by index one based.
*   `$voiceResume`: Resumes paused audio playback.
*   `$voiceSetVolume[volume]`: Sets playback volume.
*   `$voiceSkip`: Skips current song plays next in queue.
*   `$voiceStop`: Stops playback and clears queue.

## Stage Instances

*   `$createStageInstance[channelID;topic;privacyLevel?;sendStartNotification?;reason?]`: Creates stage instance. Optional privacy GUILD ONLY PUBLIC notification. Requires permissions. **[Assumed Function]**
*   `$deleteStageInstance[channelID;reason?]`: Deletes stage instance. Requires permissions. **[Assumed Function]**
*   `$modifyStageInstance[channelID;topic?;privacyLevel?;reason?]`: Modifies stage instance properties. Requires permissions. **[Assumed Function]**
*   `$stageInstanceTopic[channelID;newTopic?]`: Gets or sets stage instance topic. Requires permissions. **[Assumed Function]**

## Guild Templates

*   `$createGuildTemplate[name;description?]`: Creates guild template from current guild. Returns template code. Requires Manage Guild.
*   `$deleteGuildTemplate[code]`: Deletes guild template by code. Requires Manage Guild.
*   `$getGuildTemplate[code]`: Fetches info about public guild template by code. Returns JSON.
*   `$modifyGuildTemplate[code;optionsJson]`: Modifies template name description via JSON options. Requires Manage Guild. Returns template code.
*   `$syncGuildTemplate[code]`: Syncs current guild state to template by code. Requires Manage Guild. Returns template code.

## Guild Management

*   `$createGuild[name;region?;iconURL?;...options?]`: Creates new guild where bot is owner. Optional settings. **[RATE LIMITED - DANGEROUS - OWNER ONLY]**
*   `$deleteGuild[guildID]`: Makes bot leave guild. **DELETES GUILD if bot is owner.** Use with extreme caution. **[DANGEROUS - OWNER ONLY]**

## Webhooks

*   `$createWebhook[channelID;name;avatarURL?;reason?]`: Creates webhook. Returns new webhook ID. Requires Manage Webhooks.
*   `$deleteWebhook[webhookID_or_URL;reason?]`: Deletes webhook by ID or URL. Requires Manage Webhooks.
*   `$hasWebhook[channelID?]`: Checks if channel has webhooks bot can see. Returns true false. Requires Manage Webhooks.
*   `$modifyWebhook[webhookID_or_URL;optionsJson;reason?]`: Modifies webhook properties name avatar channel via JSON options. Requires Manage Webhooks. Returns webhook ID.
*   `$sendWebhookMessage[webhookID;webhookToken;content?;optionsJson?]`: Sends message via webhook ID Token. Optional JSON options username avatar embeds etc.

## Invites

*   `$createInvite[channelID?;optionsJson?;reason?]`: Creates invite. Optional JSON options duration uses temporary unique. Returns invite code. Requires Create Invite permission.
*   `$inviteInfo[inviteCode;property?]`: Fetches info about invite code. Optional specific property guildID uses etc. Returns full JSON if no property.

## Ticket System (Requires Implementation)

*   `$addMemberToTicket[userID;channelID?]`: Adds member to ticket channel. **[Requires ticket system setup]**
*   `$claimTicket[channelID?]`: Claims ticket channel. **[Requires ticket system setup]**
*   `$closeTicket[channelID?;reason?]`: Closes archives deletes ticket channel. **[Requires ticket system setup]**
*   `$newTicket[topic;categoryID?;private?;reason?]`: Creates new ticket channel. Optional category privacy true false. Returns new channel ID. **[Requires ticket system setup]**
*   `$removeMemberFromTicket[userID;channelID?]`: Removes member from ticket channel. **[Requires ticket system setup]**
*   `$unclaimTicket[channelID?]`: Unclaims ticket channel. **[Requires ticket system setup]**

## Event Handling & Data

*   `$emitEvent[eventName;dataJson?]`: Emits custom event with optional JSON data.
*   `$listenEvent[eventName;codeToRun]`: Listens for custom event runs code when emitted. **[Requires Setup]**
*   `$deletedMessageContent`: Returns content of deleted message in `messageDelete` event.
*   `$newMemberAvatar`: Returns new avatar URL in `guildMemberUpdate` event.
*   `$newMessageContent`: Returns new message content in `messageUpdate` event.
*   `$newRoleName`: Returns new role name in `roleCreate` `Update` event.
*   `$newStateChannelID`: Returns new voice channel ID in `voiceStateUpdate` event.
*   `$oldMemberAvatar`: Returns old avatar URL in `guildMemberUpdate` event.
*   `$oldMessageContent`: Returns old message content in `messageUpdate` event.
*   `$oldRoleName`: Returns old role name in `roleUpdate` `Delete` event.
*   `$onStateChannelID`: Returns old voice channel ID in `voiceStateUpdate` event. Alias `$oldStateChannelID`.
*   `$removedReactionEmoji`: Returns identifier of removed emoji in `messageReactionRemove` event.

## Caching (Simple In-Memory)

*   `$cacheClear`: Clears the entire simple cache.
*   `$cacheDelete[key]`: Deletes key from simple cache.
*   `$cacheGet[key]`: Gets value from simple cache by key. Empty if not found expired.
*   `$cacheHas[key]`: Checks if key exists and hasn't expired in simple cache. Returns true false.
*   `$cacheSet[key;value;ttlSeconds?]`: Sets key-value pair in simple cache. Optional time-to-live seconds.
*   `$cacheSize`: Returns number of items in simple cache.

## Database (Requires Implementation)

*   `$dbClear`: Clears entire database. **[DANGEROUS]** **[Requires DB setup]**
*   `$dbDelete[key]`: Deletes key from database. **[Requires DB setup]**
*   `$dbGet[key]`: Gets value from database by key. **[Requires DB setup]**
*   `$dbHas[key]`: Checks if key exists in database. **[Requires DB setup]**
*   `$dbIncrement[key;amount?]`: Increments numeric value for key. Optional amount. **[Requires DB setup]**
*   `$dbPush[key;value]`: Pushes value onto array stored under key. **[Requires DB setup]**
*   `$dbSet[key;value]`: Sets key-value pair in database. **[Requires DB setup]**

## Giveaways

*   `$giveaway[duration;winnerCount;prize;requiredRoleID?]`: Starts giveaway message using a duration string winner count and prize. Optional required role. **[Requires giveaway system implementation]**

## Canvas / Image Manipulation (Requires `npm install canvas`)

*   `$attachCanvas[fileName?;quality?;compressionLevel?]`: Attaches current canvas as file. Optional filename quality JPEG compression PNG.
*   `$captchaCard[captchaKey;backgroundURL?;borderColor?;overlayOpacity?]`: Generates Captcha image using key from `$captchaKey`. Optional appearance settings. **[Requires setup]**
*   `$captchaKey[length?]`: Generates random captcha key string. Optional length.
*   `$canvasSize[property?]`: Returns canvas dimensions width height. Optional property width height.
*   `$canvasVersion`: Returns installed `node-canvas` version.
*   `$createCanvas[width;height]`: Creates new canvas context. Clears previous data.
*   `$drawImage[imageVarName;dx;dy;dw?;dh?;sx?;sy?;sw?;sh?]`: Draws loaded image `imageVarName` onto canvas. Optional destination source coordinates and dimensions for scaling cropping.
*   `$fillRect[x;y;width;height]`: Draws filled rectangle using current `$fillStyle`.
*   `$fillStyle[color]`: Sets fill color style hex rgb name gradient pattern.
*   `$fillText[text;x;y;maxWidth?]`: Draws filled text using current style font. Optional max width.
*   `$font[fontString]`: Sets font style using CSS string e g 'bold 40px Arial'. Requires font availability registration.
*   `$imageSize[imageVarName;property?]`: Returns dimensions width height of loaded image variable. Optional property width height.
*   `$levelUpCard[username;oldLevel;newLevel;...options?]`: Generates Level Up card image. Requires options setup. **[Requires specific card generation setup]**
*   `$loadImage[urlOrPath;variableName]`: Loads image from URL path stores as `variableName`. **[SECURITY RISK - OWNER ONLY]** If using file path.
*   `$measureText[text]`: Measures text width based on current font. Returns width.
*   `$profileCard[userID;...options?]`: Generates profile card image. Requires options setup. **[Requires specific card generation setup]**
*   `$rankCard[username;level;rank;currentXP;requiredXP;...options?]`: Generates rank card image. Requires options setup. **[Requires specific card generation setup]**
*   `$registerFont[fontPath;fontFamily]`: Registers custom font from local path for canvas use. **[SECURITY RISK - OWNER ONLY]**
*   `$spotifyCard[title;author;album;imageURL;...options?]`: Generates Spotify card image. Requires options setup. **[Requires specific card generation setup]**
*   `$strokeRect[x;y;width;height]`: Draws outlined rectangle using current `$strokeStyle`.
*   `$strokeStyle[color]`: Sets stroke color style.
*   `$strokeText[text;x;y;maxWidth?]`: Draws text outline using current style font. Optional max width.
*   `$textAlign[alignment]`: Sets text alignment left right center start end.
*   `$textBaseline[baseline]`: Sets vertical text baseline top middle bottom etc.
*   `$welcomeCard[title;description;...options?]`: Generates welcome card image. Requires options setup. **[Requires specific card generation setup]**

## External APIs / Miscellaneous

*   `$lyrics[geniusApiKey;songTitle;artist]`: Fetches lyrics using Genius API. **[Requires API Key Setup]**
*   `$uritomp3[query]`: Finds streamable audio URL for query used by `$voicePlay`. **[Implementation Detail]**
