---
sidebar_position: 1
title: Function Syntax & Execution
---

# Function Syntax & Execution

The core of creating command logic in Solara.js involves using special **functions** within the `code` property of your command files. These functions start with a dollar sign (`$`) and handle various tasks, from retrieving data to building messages and controlling flow.

## Function Syntax

Functions are called using a specific format:

1.  **Without Arguments:** `$functionName`
    *   These functions perform an action or retrieve a value without needing extra input.
    *   Example: `$ping` (returns the bot's websocket latency as text).
    *   Example: `$authorID` (returns the ID of the user who triggered the command).

2.  **With Arguments:** `$functionName[argument1;argument2;argument3]`
    *   Arguments provide necessary input to the function.
    *   Arguments are separated by **semicolons** (`;`).
    *   **Important:** Do not add spaces immediately before or after the semicolons unless they are part of the argument's value itself.
    *   Example: `$addField[Field Title;Some value here;true]` (Adds an inline field to an embed. Arguments: name, value, inline).
    *   Example: `$checkCondition[10;>;5]` (Compares 10 and 5. Arguments: value1, operator, value2).

## How Code Executes

When a command is triggered, Solara.js processes the `code` string sequentially:

1.  **Parsing:** It reads the code from top to bottom, identifying `$function` calls and plain text.
2.  **Execution:** When a function is found, its internal logic runs using the provided arguments.
3.  **Output/Action:** Functions typically do one of two things:
    *   **Return Text:** The function call (`$function[...]`) is replaced by the text result (e.g., `$authorTag` becomes `User#1234`). This text contributes to the final message content unless consumed by another function or sent explicitly.
    *   **Perform Action / Modify Context:** The function performs an operation like setting a variable (`$let`), modifying the embed data (`$title`), adding a component (`$addButton`), or sending a message (`$reply`). These often return an empty string, contributing nothing directly to the text output.
4.  **Implicit Sending:** If the code finishes executing and no explicit sending function (like `$reply`, `$interactionReply`) was called, Solara.js attempts to send:
    *   Any accumulated plain text and text returned by functions.
    *   Any embed data that was built using functions like `$title`, `$addField`, etc.
    *   Any components added using `$addButton`, `$addSelectMenu`, etc.
    *   *Note:* If you mix text output and an embed without explicit sending, it might try to send both, which usually requires an explicit sending function for clarity.

## Example Execution Flow

Consider this code:

```javascript
// commands/example.js
module.exports = {
  name: 'example',
  code: `
    Hello $username!
    $title[Your Stats]
    $let[score;100]
    $addField[Score;$get[score]]
    Your current score is $get[score].
  `
};
```

Execution:

1.  `Hello ` (plain text)
2.  `$username` executes, returns the user's name (e.g., `SomeUser`). Text buffer is now `Hello SomeUser!`
3.  `$title[Your Stats]` executes, sets the embed title (returns empty text).
4.  `$let[score;100]` executes, stores `100` in a local variable named `score` (returns empty text).
5.  `$addField[Score;$get[score]]` executes. `$get[score]` runs first, returning `100`. `$addField` then adds a field named "Score" with value "100" to the embed (returns empty text).
6.  `Your current score is ` (plain text). Text buffer is `Hello SomeUser!\nYour current score is `
7.  `$get[score]` executes, returns `100`. Text buffer is `Hello SomeUser!\nYour current score is 100.`
8.  Code ends. No explicit send function used.
9.  Solara.js sees accumulated text AND a prepared embed. It will likely attempt to send the *embed* with the title and field, potentially ignoring the accumulated text in this specific scenario (behavior can depend on framework details, explicit sending is safer). Using `$reply` or `$interactionReply` would give predictable results.

Understanding this execution flow and the difference between text-returning functions and action-performing functions is key to using Solara.js effectively.