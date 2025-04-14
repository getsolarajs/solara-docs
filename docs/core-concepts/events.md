---
sidebar_position: 2
title: Handling Events
---

# Handling Discord Events

While Solara.js excels at simplifying the handling of command-related events like `messageCreate` (for prefix commands) and `interactionCreate` (for slash commands, buttons, etc.) through its command file structure, you might need to react to other Discord Gateway events directly (e.g., a user joining the server, a message being deleted, etc.).

Since Solara.js is built upon Discord.js, you can leverage the standard Discord.js event handling mechanism for these scenarios.

## Defining Event Listeners

You register event listeners directly on the `SolaraClient` instance (which extends/wraps the Discord.js `Client`) using the `.on()` or `.once()` methods. This is typically done in your main bot file (e.g., `bot.js`) after initializing the client but before logging in.

The basic syntax is: `client.on('eventName', (arg1, arg2, ...) => { /* your code here */ });`

*   `client`: Your `SolaraClient` instance.
*   `eventName`: The name of the Discord.js event you want to listen for (e.g., `'guildMemberAdd'`, `'messageDelete'`).
*   `(arg1, arg2, ...)`: The arguments provided by Discord.js for that specific event.
*   `{ /* your code here */ }`: The code to execute when the event occurs.

## Accessing Event Data

The callback function you provide to `client.on()` receives the data associated with that specific event, exactly as defined by Discord.js. You'll need to refer to the **Discord.js documentation** to know which arguments are passed for each event.

**Example:**

*   The `guildMemberAdd` event provides a `GuildMember` object as its first argument.
*   The `messageDelete` event provides a `Message` object as its first argument (may be partial if not cached).

**Important Note:** Solara.js `$functions` (like `$authorID`, `$reply`, `$channelName`, etc.) are designed to work within the execution context of a Solara.js command (`code` block). They are **not directly available** or intended for use within these standard `client.on()` event handlers. You will need to use standard Discord.js methods and properties within these handlers (e.g., `member.user.tag`, `channel.send()`, `message.author.id`).

## Where to Place Listeners

The best place for `client.on()` listeners is in your main bot initialization file (e.g., `bot.js`) after you create the `client` instance.

```javascript title="bot.js"
const { SolaraClient } = require('@getsolara/solara.js');
const path = require('path');
// ... other stuff ...

const client = new SolaraClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers, // <-- Intent needed for guildMemberAdd
    // Add other necessary intents for the events you want!
  ],
  prefix: '!',
  // ... other options
});

const commandsPath = path.join(__dirname, 'commands');
client.loadCommands(commandsPath);

// --- Register Event Listeners Here ---

// Example: Log when the bot is ready
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  // You can access client properties directly here
  console.log(`Bot is in ${client.guilds.cache.size} servers.`);
});

// Example: Welcome message for new members
client.on('guildMemberAdd', member => {
  console.log(`${member.user.tag} joined ${member.guild.name}`);

  // Find a channel named 'welcome' (using standard discord.js)
  const welcomeChannel = member.guild.channels.cache.find(
    channel => channel.name === 'welcome' && channel.type === ChannelType.GuildText
  );

  if (welcomeChannel) {
    // Send a message using standard discord.js channel.send()
    welcomeChannel.send(`Welcome to the server, ${member.user.tag}! 🎉`)
      .catch(console.error); // Always good to catch potential errors
  }
});

// Example: Log deleted messages
client.on('messageDelete', message => {
  // Note: Message content might not be available if the message wasn't cached
  // Requires Privileged Intents (MessageContent) enabled if you need content often
  console.log(`Message deleted in #${message.channel.name}: ${message.content || '[Content Unavailable]'}`);
  // You could send this log to a specific logging channel
  // const logChannel = message.guild.channels.cache.get('YOUR_LOG_CHANNEL_ID');
  // if (logChannel) logChannel.send(`...`);
});

// --- End of Event Listeners ---

client.login('YOUR_BOT_TOKEN')
  .catch(console.error);

```

## Key Considerations

1.  **Intents:** Ensure you have enabled the necessary [Gateway Intents](https://discord.com/developers/docs/topics/gateway#gateway-intents) in your `SolaraClient` options *and* in the Discord Developer Portal for your bot application. Events won't be sent to your bot if the corresponding intents are missing.
2.  **Discord.js Usage:** Inside `client.on()` handlers, you interact with the Discord API using standard Discord.js methods and properties (e.g., `member.guild.channels.cache`, `channel.send()`, `message.author`).
3.  **Scope:** Use `client.on()` for events that fall outside the scope of Solara.js's command/interaction handling system (e.g., member joins/leaves, message edits/deletes, role updates, etc.).

By using the standard `client.on()` method, you can fully handle any Discord event alongside the command-focused features provided by Solara.js.