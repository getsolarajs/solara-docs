---
sidebar_position: 2
slug: /first-bot
title: First Bot
---

# Your First Bot

Let's create a simple "ping" command using Solara.js. This example demonstrates the core file structure and the function-based scripting approach.

## **1. Project Setup**

Ensure you have Node.js installed. Create a new folder for your bot, navigate into it using your terminal, and initialize a new Node.js project:

```bash
mkdir my-solara-bot
cd my-solara-bot
npm init -y
npm install @getsolara/solara.js
```

## **2. Create `bot.js`**

This file initializes the Solara.js client, tells it where to find commands, and logs the bot in.

```javascript title="bot.js"
 const { SolaraClient } = require('@getsolara/solara.js');
 const path = require('path'); // Helps with file paths

 // Set up the bot
 const bot = new SolaraClient({
     intents: [ "Guilds", "GuildMessages", "MessageContent", "GuildMembers" ], // What your bot needs to "see"
     partials: ["Channel", "Message"], // Helps with older messages/DMs
     SolaraOptions: {
         prefix: "!", // Your command prefix (like !help)
         token: "YOUR_TOKEN_HERE" // Your secret bot token (Never share your bot token!)
     }
 });

 // Tell Solara where your commands live
 const commandsPath = path.join(__dirname, 'commands');
 bot.loadCommands(commandsPath);

 // Tell Solara where your custom functions live (if you have any)
 const functionsPath = path.join(__dirname, 'functions');
 bot.loadFunctions(functionsPath);                    

 // When the bot is ready...
 bot.on('ready', () => {
     console.log(`${bot.user.tag} is online and ready to go!`);
 });

 // Log in to Discord!
 bot.login();

```

## **3. Create the Command File**

Solara.js loads commands from files within a specified directory. Create a `commands` folder in your project root. Inside `commands`, create a file named `ping.js`.

```javascript title="commands/ping.js"
// This file defines the 'ping' command
module.exports = {
    name: "ping",
    aliases: ["p"], // Other ways to call the command
    description: "See how fast the bot responds.",
    type: "both", // Works as !ping AND /ping
    code: `Pong! My speed is $ping ms` // The actual bot code!
};
```

**Your Project Structure:**

```
my-solara-bot/
├── node_modules/
├── commands/
│   └── ping.js
├── bot.js
├── package.json
└── package-lock.json
```

## **4. Running the Bot**

Make sure you've replaced `'YOUR_BOT_TOKEN'` in `bot.js` with your actual bot token obtained from the Discord Developer Portal.

Run the bot from your terminal:

```bash
node bot.js
```

You should see output like:

```
Bot is starting...
Login successful!
Logged in as YourBotName#1234!
Prefix is: !
Loaded 1 commands.
```

Now, go to a Discord server where your bot is present (and has permissions to read and send messages) and type `!ping`. The bot should reply directly to your message with "Pong! My speed is `ping` ms".

Congratulations! You've built your first Solara.js bot using its core scripting and command loading features. Explore the [Core Concepts](../core-concepts/commands.md) section next to learn more about defining commands, using functions, and handling interactions.
