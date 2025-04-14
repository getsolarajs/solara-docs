---
sidebar_position: 3
title: Creating Custom Functions
---

# Creating Custom Functions

While Solara.js provides a wide array of built-in `$functions`, you might encounter situations requiring more complex logic, external API calls, or database interactions that aren't covered. Solara.js allows you to extend its functionality by creating your own custom functions.

## Structure of a Custom Function

Custom functions are defined in separate `.js` files, typically organized within a dedicated folder (e.g., `functions/`). Each file exports an object with a specific structure:

```javascript
// functions/myCustomFunc.js
module.exports = {
  /**
   * The name used to call the function in Solara code (e.g., $myCustomFunc).
   * Must start with '$'.
   * @type {string}
   */
  name: "$myCustomFunc",

  /**
   * Does this function expect arguments within brackets []?
   * true: $myCustomFunc[arg1;arg2]
   * false: $myCustomFunc
   * @type {boolean}
   */
  takesBrackets: true,

  /**
   * The core logic of the function.
   * This function MUST be async if it performs any asynchronous operations (e.g., awaits).
   * @param {object} context - The execution context object. Contains data like:
   *   - context.client: The SolaraClient instance.
   *   - context.message: The triggering Message object (if type 'message' or 'both').
   *   - context.interaction: The Interaction object (if type 'interaction', 'both', 'button', etc.).
   *   - context.args: Raw arguments string from message command trigger.
   *   - context.user: The User object who triggered the command/interaction.
   *   - context.guild: The Guild object where it happened.
   *   - context.channel: The Channel object where it happened.
   *   - context.interpreter: Reference to the Solara interpreter instance.
   *   - context.command: The command object being executed.
   *   - context.variables: Local variables set with $let.
   *   - context.embedData: The current state of the embed being built.
   *   - context.components: Array of component builders (buttons, selects).
   * @param {string[]} args - An array of strings parsed from inside the brackets [], split by ';'.
   *                         Example: $myFunc[hello;world] -> args = ['hello', 'world']
   * @returns {Promise<string|null|undefined> | string | null | undefined}
   *          The text to replace the function call with, or null/undefined if it performs an action only.
   */
  execute: async (context, args) => {
    // Access data from context
    const userId = context.user.id;
    const guildName = context.guild?.name || 'DM'; // Handle potential DM context

    // Get arguments passed to the function
    const inputArg1 = args[0] || 'Default Value 1';
    const inputArg2 = args[1] || 'Default Value 2';

    // --- Perform complex logic here ---
    // Example: Fetch data from an external API
    // try {
    //   const response = await fetch(`https://api.example.com/data?user=${userId}`);
    //   const data = await response.json();
    //   // Process data...
    // } catch (error) {
    //   console.error("Custom function API call failed:", error);
    //   return "Error fetching data"; // Return an error message
    // }
    // ---------------------------------

    // Return the text that should replace the function call in the Solara code
    return `Executed $myCustomFunc for ${userId} in ${guildName}. Arg1: ${inputArg1}, Arg2: ${inputArg2}`;
  }
};
```

## Loading Custom Functions

You need to tell your `SolaraClient` where to find these custom function files *before* logging in.

1.  **Create a Directory:** Make a folder named `functions` (or similar) in your project's root directory.
2.  **Place Function Files:** Put your custom function `.js` files (like `myCustomFunc.js`) inside this directory.
3.  **Load in `bot.js`:** Use the `client.loadFunctions()` method.

```javascript title="bot.js"
import { SolaraClient } from '@getsolara/solara.js';
import { GatewayIntentBits } from 'discord.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = new SolaraClient({
  intents: [/* Your Intents */],
  prefix: '!',
});

// ---> Load Custom Functions <---
const functionsPath = path.join(__dirname, 'functions'); // Path to your custom functions folder
client.loadFunctions(functionsPath);
// ---> Done Loading Functions <---

const commandsPath = path.join(__dirname, 'commands');
client.loadCommands(commandsPath);

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('YOUR_BOT_TOKEN');
```

## Overwriting Built-ins

If you create a custom function with the **same name** as a built-in Solara.js function (e.g., `$ping`), your custom function will **overwrite** the built-in one. This allows you to modify or replace default behavior if needed, but use this capability with caution.

Custom functions provide immense flexibility, allowing you to integrate virtually any JavaScript logic or external service directly into your Solara.js scripts.