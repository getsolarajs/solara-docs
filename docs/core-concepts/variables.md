---
sidebar_position: 5
title: Using Variables
---

# Using Variables

Solara.js provides built-in functions to store and retrieve temporary data during the execution of a command's code block. This is useful for holding intermediate values, results from functions, or user input for later use within the same command execution.

## Local Variables (`$let`/`$get`)

The primary way to handle temporary variables is using `$let` and `$get`. These variables exist **only** for the duration of the current command's execution context. They are reset for every new command trigger.

*   `$let[variableName;value]`: Assigns a `value` to a variable named `variableName`. Variable names should typically be simple alphanumeric strings without spaces. This function returns nothing (empty text).
*   `$get[variableName]`: Retrieves the value previously stored in `variableName`. If the variable was never set using `$let` in the current execution, it usually returns empty text or might cause issues depending on usage.

**Example:**

```javascript
// commands/calc.js
module.exports = {
  name: 'calc',
  type: 'message',
  code: `
    $let[num1;$messageArg[1]]  $comment[Get first number from arg 1]
    $let[num2;$messageArg[2]]  $comment[Get second number from arg 2]
    $let[op;$messageArg[3]]    $comment[Get operator from arg 3]

    $let[result;Error: Invalid Operation] $comment[Default result]

    $if[$checkCondition[$get[op];==;+];
        $let[result;$sum[$get[num1];$get[num2]]]
    ]
    $if[$checkCondition[$get[op];==;-];
        $let[result;$sub[$get[num1];$get[num2]]]
    ]
    $if[$checkCondition[$get[op];==;*];
        $let[result;$multi[$get[num1];$get[num2]]]
    ]
    $if[$checkCondition[$get[op];==;/];
        $let[result;$div[$get[num1];$get[num2]]]
    ]

    $reply[Result: $get[result]]
  `
};
// Usage: !calc 10 5 + -> Bot replies: Result: 15
```

## General Variable Functions (`$setVar`/`$getVar`/`$hasVar`/`$deleteVar`)

These offer more explicit control and potentially pave the way for different variable scopes (though currently primarily used for local scope).

*   `$setVar[varName;value;scope?]`: Sets a variable.
    *   `scope?`: Optional. Defaults to `local`. Other scopes like `guild`, `user`, or `global` might be implemented in the framework or database integrations, but rely on `local` for the temporary behavior described above if unsure.
*   `$getVar[varName;scope?]`: Gets a variable's value from the specified scope (defaults to `local`).
*   `$hasVar[varName;scope?]`: Returns `true` or `false` indicating if a variable exists in the specified scope.
*   `$deleteVar[varName;scope?]`: Removes a variable from the specified scope.

For simple temporary storage within a single command execution, `$let` and `$get` are often more concise than `$setVar[...;local]` and `$getVar[...;local]`.

## Modifying Numeric Variables

*   `$incVar[varName;increment?;scope?]`: Increases the numeric value of a variable.
    *   `increment?`: Optional amount to add (defaults to 1).
    *   `scope?`: Optional scope (defaults to `local`).
*   `$decVar[varName;decrement?;scope?]`: Decreases the numeric value of a variable.
    *   `decrement?`: Optional amount to subtract (defaults to 1).
    *   `scope?`: Optional scope (defaults to `local`).

**Example:**

```javascript
// commands/counter.js
module.exports = {
  name: 'counter',
  code: `
    $let[count;0]
    $incVar[count;5] $comment[count is now 5]
    $incVar[count]    $comment[count is now 6]
    $decVar[count;2] $comment[count is now 4]
    $reply[Final count: $get[count]]
  `
};
// Bot replies: Final count: 4
```

Variables are essential tools for managing data flow, storing user input, and making decisions within your command's logic. Remember that `$let`/`$get` create variables scoped only to the single execution of the command's code. For persistent data (saving across commands/restarts), you would need database integration, potentially accessed via custom functions.