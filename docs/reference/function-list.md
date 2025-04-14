---
sidebar_position: 1
title: Function List
---

# Function Reference

This page lists the built-in functions available in Solara.js, categorized for easier navigation.

**Note:** Arguments marked with `?` are optional. Default values are often implied or noted. Semicolons (`;`) separate arguments within brackets `[]`.

## Core & Bot Info

*   `$ping`: Returns websocket ping (ms).
*   `$botID`: Returns the bot's user ID.
*   `$botName`: Returns the bot's username.
*   `$botAvatar`: Returns the bot's avatar URL.
*   `$botPing`: Alias for `$ping`.
*   `$uptime`: Returns the bot's uptime (ms).
*   `$botToken`: Returns redacted bot token string. \[OWNER ONLY]
*   `$botTags`: Returns semicolon-separated application tags.
*   `$changeBotUsername[newUsername]`: Changes bot username. \[OWNER ONLY, Rate Limited]
*   `$changeBotAvatar[imageURL]`: Changes bot avatar. \[OWNER ONLY, Rate Limited]
*   `$changeBotStatus[status;activityType;activityName;streamURL?]`: Changes bot presence. `status`: online/idle/dnd. `activityType`: Playing/Watching/Listening/Competing/Streaming.

## Message Sending & Interaction Replies

*   `$sendMessage[content?]`: Sends message/embed/components explicitly. Uses context's built embed/components if `content` is omitted. Returns message ID.
*   `$reply[content?]`: Replies to the triggering message. Uses context's built embed/components if `content` is omitted. Returns message ID.
*   `$interactionReply[content?;ephemeral?;returnMsgID?]`: Replies to interaction. Fails if already replied/deferred. Uses context's built embed/components if `content` is omitted. Optionally returns message ID.
*   `$followUp[content?;ephemeral?;returnMsgID?]`: Sends follow-up to interaction. Uses context's built embed/components if `content` is omitted. Returns message ID if requested.
*   `$interactionUpdate[content?]`: Edits the original component message. Clears unmentioned content/embeds/components unless rebuilt in code. Uses context's built embed/components if `content` is omitted.
*   `$deferReply[ephemeral?]`: Defers interaction reply. Use when response takes > 3 seconds.
*   `$ephemeral`: Marks interaction response as ephemeral (use before reply/defer).

## Message Actions & Info

*   `$deletecommand`: Deletes the triggering message (if applicable).
*   `$deleteIn[milliseconds]`: Deletes last `$sendMessage`/`$reply` message after delay.
*   `$editMessage[messageID;newContent?]`: Edits a specific bot message. Uses current embed/components from context if `newContent` is omitted.
*   `$addReaction[messageID;emoji1;emoji2...]`: Adds reaction(s) to a message.
*   `$removeReaction[messageID;emoji;userID=@me?]`: Removes reaction(s) from a message. `@me` targets the bot.
*   `$pinMessage[messageID]`: Pins a message.
*   `$unpinMessage[messageID]`: Unpins a message.
*   `$messageID`: Returns the triggering message ID (if `isMessage`).
*   `$messageContent`: Returns raw content of the triggering message.
*   `$messageArgs`: Returns semicolon-separated arguments from a prefix command.
*   `$messageArg[index]`: Returns the argument at the specified index (1-based) from a prefix command.
*   `$noMentionMessage`: Returns `$messageContent` with mentions removed.
*   `$lastMessageID`: Returns ID of last message sent via `$sendMessage`/`$reply`.
*   `$repliedMessageID`: Returns ID of the message being replied to (if any).
*   `$repliedMessageAuthor`: Returns User ID of the author of the message being replied to (if any).
*   `$messageAttachmentCount`: Returns number of attachments on the triggering message.
*   `$attachment[index=1?]`: Returns URL of the attachment at the specified index (1-based).
*   `$isPinned[messageID?]`: Checks if the trigger message (or specified message) is pinned. Returns `true` or `false`.
*   `$messageURL`: Returns the URL of the triggering message.
*   `$messageType`: Returns the type of the triggering message (e.g., `Default`, `Reply`).
*   `$messageEditedTimestamp`: Returns timestamp (ms) when trigger message was last edited, or 0.
*   `$messageExists[messageID;channelID]`: Returns `true` or `false` if message exists.
*   `$clear[amount;filterUserID?;pinned?]`: Bulk deletes messages (1-100). `pinned`: `true` to ignore pinned, `false` to include (default).

## Embed Building

*   `$title[text]`: Sets embed title.
*   `$description[text]`: Sets embed description.
*   `$color[hex code or color name]`: Sets embed color.
*   `$author[name;iconURL?;url?]`: Sets embed author.
*   `$footer[text;iconURL?]`: Sets embed footer.
*   `$addField[name;value;inline?]`: Adds an embed field. `inline`: `true` or `false`.
*   `$timestamp[milliseconds?]`: Adds embed timestamp (defaults to now).
*   `$thumbnail[url]`: Sets embed thumbnail URL.
*   `$image[url]`: Sets embed image URL.

## Component Building

*   `$addButton[customIDOrURL;label;style;disabled?;emoji?]`: Adds button builder. `style`: Primary/Secondary/Success/Danger/Link.
*   `$addSelectMenu[customID;placeholder;minValues=1?;maxValues=1?;disabled?]`: Adds string select menu builder. Must be followed by `$addSelectOption`.
*   `$addSelectOption[label;value;description?;emoji?;default?]`: Adds option to the last added select menu builder.

## User/Member Info

*   `$authorID`: Returns the ID of the user who triggered the command/interaction.
*   `$authorAvatar`: Returns the avatar URL of the user who triggered the command/interaction.
*   `$authorTag`: Returns the tag (Username#Discriminator) of the user who triggered the command/interaction.
*   `$userID[userID?]`: Returns the provided userID or the author's ID.
*   `$username[userID?]`: Returns the username of the specified user (or author).
*   `$userTag[userID?]`: Returns the tag of the specified user (or author).
*   `$userAvatar[userID?]`: Returns the avatar URL of the specified user (or author).
*   `$nickname[memberID?]`: Returns the server nickname of the specified member (or author).
*   `$memberJoinedDate[memberID?]`: Returns server join timestamp (ms) for the member (or author).
*   `$accountCreatedDate[userID?]`: Returns account creation timestamp (ms) for the user (or author).
*   `$isBot[userID?]`: Returns `true` or `false` if the user (or author) is a bot.
*   `$userStatus[userID?]`: Returns status (online/idle/dnd/offline) of the user (or author).
*   `$userBadges[userID?]`: Returns semicolon-separated list of user flag names (badges).
*   `$highestRole[memberID?]`: Returns the ID of the highest role of the member (or author).
*   `$lowestRole[memberID?]`: Returns the ID of the lowest role (@everyone) of the member (or author).
*   `$hasRole[roleID;memberID?]`: Returns `true` or `false` if the member (or author) has the role.
*   `$isBooster[memberID?]`: Returns `true` or `false` if the member (or author) is boosting the server.
*   `$boostingSince[memberID?]`: Returns timestamp (ms) when the member (or author) started boosting.
*   `$isKickable[memberID]`: Returns `true` or `false` if the bot can kick the specified member.
*   `$isBannable[userID]`: Returns `true` or `false` if the bot can ban the specified user.
*   `$isModeratable[memberID]`: Returns `true` or `false` if the bot can moderate the member (kick/ban/timeout).
*   `$userBanner[userID?]`: Returns the user's banner URL (if available).
*   `$userRoles[memberID?;type=id?]`: Returns semicolon-separated list of role IDs (`type=id`) or names (`type=name`) for the member (or author).
*   `$memberAvatar[memberID?]`: Returns the server-specific avatar URL if set, otherwise the user's main avatar URL.
*   `$userExists[userID]`: Returns `true` or `false` if a user with this ID exists globally (cached).
*   `$userExistsInGuild[userID]`: Returns `true` or `false` if a user with this ID is currently in the guild.
*   `$userLanguage`: Returns the user's preferred locale (e.g., `en-US`) from interaction context.

## Guild/Server Info

*   `$guildID[guildID?]`: Returns the ID of the current or specified guild.
*   `$serverName[guildID?]`: Returns the name of the current or specified guild.
*   `$serverIcon[guildID?]`: Returns the icon URL of the current or specified guild.
*   `$serverOwnerID[guildID?]`: Returns the owner's user ID of the current or specified guild.
*   `$memberCount[guildID?]`: Returns the total member count of the current or specified guild.
*   `$botCount[guildID?]`: Returns the bot count of the current or specified guild.
*   `$humanCount[guildID?]`: Returns the human count of the current or specified guild.
*   `$roleCount`: Returns the role count of the current guild.
*   `$channelCount[guildID?;type?]`: Returns channel count. `type`: Text/Voice/Category/etc.
*   `$categoryCount[guildID?]`: Returns category channel count.
*   `$boostCount[guildID?]`: Returns the server boost count.
*   `$boostLevel[guildID?]`: Returns the server boost level (0-3).
*   `$serverVerificationLevel[guildID?]`: Returns the verification level name.
*   `$guildFeatures[guildID?]`: Returns semicolon-separated list of guild features.
*   `$vanityURLCode[guildID?]`: Returns the vanity invite code (if any).
*   `$rulesChannelID[guildID?]`: Returns the ID of the rules channel.
*   `$publicUpdatesChannelID[guildID?]`: Returns the ID of the public updates channel.
*   `$mfaLevel[guildID?]`: Returns MFA level (0 or 1).
*   `$explicitContentFilter[guildID?]`: Returns explicit content filter level name.
*   `$afkChannelID[guildID?]`: Returns the ID of the AFK channel.
*   `$afkTimeout[guildID?]`: Returns the AFK timeout in seconds.
*   `$serverCreationDate[guildID?]`: Returns guild creation timestamp (ms).
*   `$systemChannel[guildID?]`: Returns the system messages channel ID.
*   `$serverBoosterRole[guildID?]`: Returns the booster role ID.
*   `$serverBanner[guildID?]`: Returns the server banner URL.
*   `$serverLocale[guildID?]`: Returns the preferred server locale (e.g., `en-US`).
*   `$getClientData[property]`: Gets client config property (e.g., `prefix`).

## Channel/Thread/Forum Info & Management

*   `$channelID[channelID?]`: Returns the ID of the current or specified channel.
*   `$channelName[channelID?]`: Returns the name of the current or specified channel.
*   `$channelTopic[channelID?]`: Returns the topic of the current or specified channel.
*   `$channelType[channelID?]`: Returns the type of the current or specified channel (e.g., `GuildText`).
*   `$categoryID[channelID?]`: Returns the parent category ID of the current or specified channel.
*   `$parentName[channelID?]`: Returns the parent category name of the current or specified channel.
*   `$isNsfw[channelID?]`: Returns `true` or `false` if the channel is NSFW.
*   `$channelPosition[channelID?]`: Returns the position of the channel in the list.
*   `$getChannelSlowmode[channelID?]`: Returns the slowmode delay in seconds.
*   `$channelMention[channelID?]`: Returns the channel mention string (`<#ID>`).
*   `$channelURL[channelID?]`: Returns the URL for the channel.
*   `$lastMessageIDInChannel[channelID?]`: Returns the ID of the last message sent in the channel (may require cache).
*   `$channelExists[channelID]`: Returns `true` or `false` if a channel with this ID exists in the guild.
*   `$createChannel[name;type=Text?;parentID?;reason?]`: Creates a channel. Returns new channel ID.
*   `$deleteChannel[channelID;reason?]`: Deletes a channel.
*   `$setChannelName[channelID;newName;reason?]`: Renames a channel.
*   `$setChannelTopic[channelID;newTopic;reason?]`: Sets a channel's topic.
*   `$setChannelSlowmode[seconds;channelID?;reason?]`: Sets channel slowmode.
*   `$channelIDs[type=any?]`: Returns semicolon-separated list of channel IDs in current guild. `type`: Text/Voice/Category/etc.
*   `$channelNames[type=any?]`: Returns semicolon-separated list of channel names in current guild.
*   `$isThread[channelID?]`: Returns `true` or `false` if the channel is a thread.
*   `$isForum[channelID?]`: Returns `true` or `false` if the channel is a forum.
*   `$threadParentID[threadID?]`: Returns the parent channel ID of the thread.
*   `$threadName[threadID?]`: Returns the name of the thread.
*   `$createThread[name;startMessageID?;type=Public?;autoArchiveDuration=Max?;reason?]`: Creates a thread. Returns new thread ID.
*   `$deleteThread[threadID?;reason?]`: Deletes a thread.
*   `$lockThread[threadID?;reason?]`: Locks a thread.
*   `$unlockThread[threadID?;reason?]`: Unlocks a thread.
*   `$archiveThread[threadID?;reason?]`: Archives a thread.
*   `$unarchiveThread[threadID?;reason?]`: Unarchives a thread.

## Role Info & Management

*   `$roleName[roleID]`: Returns the name of the role.
*   `$roleColor[roleID]`: Returns the hex color code of the role.
*   `$rolePosition[roleID]`: Returns the position of the role.
*   `$roleExists[roleID]`: Returns `true` or `false` if the role exists.
*   `$createRole[name;color?;hoist?;mentionable?;reason?]`: Creates a role. Returns new role ID.
*   `$deleteRole[roleID;reason?]`: Deletes a role.
*   `$setRoleName[roleID;newName;reason?]`: Renames a role.
*   `$setRoleColor[roleID;hexColor;reason?]`: Sets a role's color.
*   `$setRolePosition[roleID;newPosition;reason?]`: Sets a role's position.
*   `$roleMention[roleID]`: Returns the role mention string (`<@&ID>`).
*   `$isRoleEditable[roleID]`: Returns `true` or `false` if the bot can edit the role.
*   `$isManaged[roleID]`: Returns `true` or `false` if the role is managed by an integration.
*   `$isHoisted[roleID]`: Returns `true` or `false` if the role is displayed separately.
*   `$roleMembersCount[roleID]`: Returns the number of members with the role.

## Emoji/Sticker Info

*   `$emojiList`: Returns semicolon-separated list of custom emoji IDs in current guild.
*   `$emojiExists[emojiID or full emoji]`: Returns `true` or `false` if the custom emoji exists in the guild.
*   `$getEmoji[emojiName or emojiID]`: Returns the full emoji string (`<:name:id>` or `<a:name:id>`).
*   `$emojiURL[emojiID or full emoji]`: Returns the URL of the custom emoji image.
*   `$stickerURL[stickerID]`: Returns the URL of the sticker image.

## Moderation Actions

*   `$kick[memberID;reason?]`: Kicks a member from the server.
*   `$ban[userID;reason?;deleteMessageDays=0?]`: Bans a user from the server.
*   `$unban[userID;reason?]`: Unbans a user from the server.
*   `$timeout[memberID;durationMs;reason?]`: Times out a member (max 28 days).
*   `$removeTimeout[memberID;reason?]`: Removes a member's timeout.

## Role/User Assignment

*   `$addRole[memberID;roleID;reason?]`: Adds a role to a member.
*   `$removeRole[memberID;roleID;reason?]`: Removes a role from a member.
*   `$setUserRoles[memberID;roleID1;roleID2...;reason?]`: Sets a member's roles exactly to the provided list (removes others).

## Permissions & Restrictions

*   `$onlyForIDs[id1;id2...;errorMessage?]`: Stops execution if author's ID is not in the list.
*   `$onlyPerms[perm1;perm2...;errorMessage?]`: Stops execution if author lacks all specified permissions.
*   `$onlyIf[condition;errorMessage?]`: Stops execution if the condition (e.g., from `$checkCondition`) is false.
*   `$onlyRoles[roleID1;roleID2...;errorMessage?]`: Stops execution if author lacks at least one of the specified roles.
*   `$ignoreUsers[userID1;userID2...]`: Prevents command execution for specific users.
*   `$ignoreRoles[roleID1;roleID2...]`: Prevents command execution for users with specific roles.
*   `$ignoreChannels[channelID1;channelID2...]`: Prevents command execution in specific channels.
*   `$hasPermission[perm1;perm2...;memberID=@me?]`: Returns `true` or `false` if the member (or bot) has all permissions in the current channel context.
*   `$hasGuildPermission[perm1;perm2...;memberID=@me?]`: Returns `true` or `false` if the member (or bot) has all permissions in the guild context.
*   `$userPermissions[scope=channel?;memberID?]`: Returns semicolon-separated list of permission names for the user (or author). `scope`: `channel` or `guild`.
*   `$botPermissions[scope=channel?]`: Returns semicolon-separated list of the bot's permission names. `scope`: `channel` or `guild`.

## Variables

*   `$setVar[varName;value;scope=local?]`: Sets a variable (see variable guide).
*   `$getVar[varName;scope=local?]`: Gets a variable (see variable guide).
*   `$deleteVar[varName;scope=local?]`: Deletes a variable.
*   `$hasVar[varName;scope=local?]`: Returns `true` or `false` if variable exists.
*   `$let[varName;value]`: Alias for `$setVar[varName;value;local]`.
*   `$get[varName]`: Alias for `$getVar[varName;local]`.
*   `$incVar[varName;increment=1?;scope=local?]`: Increments a numeric variable.
*   `$decVar[varName;decrement=1?;scope=local?]`: Decrements a numeric variable.

## Utility & Control Flow

*   `$updateCommands`: Reloads commands and events. \[OWNER ONLY]
*   `$solaraEval[Solara.js code]`: Executes Solara.js code dynamically. \[OWNER ONLY]
*   `$djsEval[javascript code]`: Executes raw JavaScript code. \[EXTREMELY DANGEROUS - OWNER ONLY]
*   `$comment[...]`: Ignored by the interpreter. Useful for adding comments to your code.
*   `$checkCondition[val1;op;val2]`: Compares two values. `op`: `==`, `!=`, `>`, `<`, `>=`, `<=`. Returns `true` or `false`.
*   `$if[condition;then;else?]`: Conditional execution. `condition` should evaluate to `true` or `false`.
*   `$and[cond1;cond2...]`: Returns `true` if all conditions are true.
*   `$or[cond1;cond2...]`: Returns `true` if at least one condition is true.
*   `$not[condition]`: Returns the opposite boolean value of the condition.
*   `$switch[value;$case[match;then];$defaultCase[default]]`: Basic switch logic. Use `$case` and `$defaultCase` markers.
*   `$case[match;then]`: Marker for `$switch`. Code inside `then` is executed if `value` matches `match`.
*   `$defaultCase[default]`: Marker for `$switch`. Code inside `default` executes if no `$case` matches.
*   `$try[codeToTry;$catch[errorCode]]`: Basic try/catch logic. Use `$catch` marker.
*   `$catch[errorCode]`: Marker for `$try`. Code inside `errorCode` executes if `codeToTry` fails.
*   `$error[message]`: Stops execution immediately and logs an error message.
*   `$wait[milliseconds]`: Pauses execution for the specified duration.
*   `$log[...]`: Logs the provided arguments to the console.
*   `$hyperlink[text;url]`: Creates Markdown hyperlink `[text](url)`.
*   `$repeat[times;delayMs;code;stopOnError=true?]`: Runs `code` asynchronously multiple times with a delay between runs.
*   `$forEach[code;item1;item2...]`: Executes `code` for each item. Inside `code`, use `$forEachItem` for current item and `$forEachIndex` for its index (1-based). \[Simplified]
*   `$commandTrigger`: Returns the trigger word/command name used.

## Math

*   `$sum[num1;num2...]`: Returns the sum.
*   `$sub[num1;num2...]`: Returns the difference.
*   `$multi[num1;num2...]`: Returns the product.
*   `$div[num1;num2...]`: Returns the quotient.
*   `$random[max]` or `$random[min;max]`: Returns a random integer.
*   `$round[number]`: Rounds to the nearest integer.
*   `$floor[number]`: Rounds down to the nearest integer.
*   `$ceil[number]`: Rounds up to the nearest integer.
*   `$abs[number]`: Returns the absolute value.
*   `$toFixed[number;digits=0?]`: Formats number using fixed-point notation.
*   `$power[base;exponent]`: Returns base to the power of exponent.
*   `$sqrt[number]`: Returns the square root.
*   `$cbrt[number]`: Returns the cube root.
*   `$roundTo[number;decimalPlaces]`: Rounds to a specific number of decimal places.
*   `$modulo[dividend;divisor]`: Returns the remainder of division.
*   `$isNumber[text]`: Returns `true` or `false` if the text represents a valid number.
*   `$isNaNFunc[value]`: Returns `true` or `false` if the value is NaN.
*   `$PI`: Returns the value of PI.
*   `$E`: Returns the value of Euler's number E.
*   `$percent[value1;value2]`: Calculates what percentage value1 is of value2.
*   `$min[num1;num2...]`: Returns the smallest number.
*   `$max[num1;num2...]`: Returns the largest number.

## String Manipulation

*   `$toLowercase[text]`: Converts text to lowercase.
*   `$toUppercase[text]`: Converts text to uppercase.
*   `$length[text]`: Returns the number of characters in the text.
*   `$slice[text;startIndex;endIndex?]`: Extracts a section of the text.
*   `$replaceText[text;search;replace;limit=-1?]`: Replaces occurrences of `search` with `replace`. `limit`: max replacements (-1 for all).
*   `$includes[text;search]`: Returns `true` or `false` if text contains search.
*   `$startsWith[text;search]`: Returns `true` or `false` if text starts with search.
*   `$endsWith[text;search]`: Returns `true` or `false` if text ends with search.
*   `$trim[text]`: Removes whitespace from both ends.
*   `$indexOf[text;searchValue;fromIndex=0?]`: Returns the index of the first occurrence.
*   `$padStart[text;targetLength;padString=' '?]`: Pads the start of the text.
*   `$padEnd[text;targetLength;padString=' '?]`: Pads the end of the text.
*   `$charCount[text;charOrSubstring]`: Counts occurrences of a character or substring.
*   `$charAt[text;index]`: Returns the character at the specified index.
*   `$substring[text;startIndex;endIndex?]`: Returns a substring between indices.
*   `$replaceAll[text;search;replace]`: Replaces all occurrences (uses string replaceAll).
*   `$trimStart[text]`: Removes whitespace from the start.
*   `$trimEnd[text]`: Removes whitespace from the end.
*   `$charToCode[text;index=0?]`: Returns the Unicode value of the character at the index.
*   `$codeToChar[code1;code2...]`: Returns string created from Unicode values.
*   `$titleCase[text]`: Converts text to title case (basic implementation).
*   `$isEmpty[text]`: Returns `true` if the text is empty or only whitespace, `false` otherwise.
*   `$isString[value]`: Returns `true` if the value is a string (often true in Solara).
*   `$isBoolean[value]`: Returns `true` if the value is the string "true" or "false".

## List/Array (Semicolon Separated)

*   `$splitText[text;separator=;?]`: Splits text by separator, returns items joined by ';'.
*   `$joinText[separator;item1;item2...]`: Joins items using the separator.
*   `$listItem[index;item1;item2...]`: Returns the item at the 1-based index.
*   `$itemCount[item1;item2...]`: Returns the number of items provided. (Alias: `$listLength`)
*   `$findItem[searchItem;item1;item2...]`: Returns the 1-based index of the first matching item, or -1.
*   `$findLastItem[searchItem;item1;item2...]`: Returns the 1-based index of the last matching item, or -1.
*   `$listContains[searchItem;item1;item2...]`: Returns `true` or `false` if the list contains the item.
*   `$reverseList[item1;item2...]`: Returns the items in reverse order, joined by ';'.
*   `$removeDuplicates[item1;item2...]`: Returns unique items, joined by ';'.
*   `$shiftList[item1;item2...]`: Returns the first item from the list.
*   `$popList[item1;item2...]`: Returns the last item from the list.
*   `$sortList[type;item1;item2...]`: Sorts items. `type`: `az`/`za` (alphabetical), `numaz`/`numza`/`asc`/`desc` (numerical). Returns sorted list joined by ';'.
*   `$sortAlphabetical[order;item1;item2...]`: Alias for `$sortList` with `az`/`za`.
*   `$filterList[value;item1;item2...]`: Returns items that exactly match `value`, joined by ';'. \[Simplified]

## Time/Date

*   `$timeStamp[style?;timestampMs?]`: Returns a Discord timestamp string. `style`: t/T/d/D/f/F/R. Defaults to `f` (Short date/time). `timestampMs`: Defaults to now.
*   `$dateDiff[ts1;ts2]`: Returns the difference between two timestamps in milliseconds.
*   `$formatDate[ts?;optionsJson?;locale=en-US?]`: Formats a timestamp using Intl.DateTimeFormat. `optionsJson`: e.g., `{"weekday":"long","year":"numeric"}`.
*   `$now`: Returns the current Unix timestamp in milliseconds.
*   `$day[ts?]`: Returns the day of the month (1-31). Defaults to now.
*   `$month[ts?]`: Returns the month (1-12). Defaults to now.
*   `$year[ts?]`: Returns the full year (YYYY). Defaults to now.
*   `$hour[ts?]`: Returns the hour (0-23). Defaults to now.
*   `$minute[ts?]`: Returns the minute (0-59). Defaults to now.
*   `$second[ts?]`: Returns the second (0-59). Defaults to now.
*   `$dayOfWeek[ts?]`: Returns the day of the week (0-6, Sun-Sat). Defaults to now.
*   `$dayOfYear[ts?]`: Returns the day of the year (1-366). Defaults to now.

## Web & Encoding

*   `$isValidHex[hex code]`: Returns `true` or `false` if it's a valid hex color code.
*   `$isValidJson[text]`: Returns `true` or `false` if the text is valid JSON.
*   `$jsonParse[jsonString;path]`: Parses JSON and returns value at path (e.g., `users.0.name`, `data[1].value`).
*   `$base64Encode[text]`: Encodes text to Base64.
*   `$base64Decode[base64Text]`: Decodes Base64 text.
*   `$urlEncode[text]`: Encodes text for use in URLs.
*   `$urlDecode[encodedText]`: Decodes URL-encoded text.
*   `$httpRequest[url;method=GET?;bodyJson?;headersJson?]`: Performs an HTTP request. \[OWNER ONLY - SECURITY RISK]

## File System (Use with extreme caution!)

*   `$readFile[filePath]`: Reads content from a file. \[OWNER ONLY - SECURITY RISK]
*   `$writeFile[filePath;content]`: Writes content to a file. \[OWNER ONLY - SECURITY RISK]

## Interaction Specific

*   `$interactionID`: Returns the ID of the interaction.
*   `$interactionToken`: Returns the interaction token. \[SECURITY RISK]
*   `$interactionChannelID`: Returns the channel ID where the interaction occurred.
*   `$interactionGuildID`: Returns the guild ID where the interaction occurred.
*   `$interactionUserID`: Returns the user ID who triggered the interaction.
*   `$isInteraction`: Returns `true` if the context is an interaction, `false` otherwise.
*   `$isMessage`: Returns `true` if the context is a message, `false` otherwise.
*   `$interactionOption[optionName]`: Gets the value of a slash command option.
*   `$interactionCustomID`: Gets the `customId` of the interacted component/modal.
*   `$interactionValues`: Gets the selected value(s) from a select menu (joined by ';').
*   `$modalFieldValue[fieldCustomId]`: Gets the value submitted in a specific modal text input field.
*   `$isEphemeral`: Returns `true` if the interaction was deferred ephemerally.
*   `$getInteractionSubcommand`: Returns the used subcommand name (if any).
*   `$getInteractionSubcommandGroup`: Returns the used subcommand group name (if any).
*   `$slashCommandName`: Returns the name of the triggered slash command.