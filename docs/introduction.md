---
sidebar_position: 1
slug: /intro
title: Introduction
---

# Welcome to Solara.js!

**Solara.js** is a powerful yet intuitive framework built on **Discord.js v14**, designed to significantly simplify and accelerate the development of Discord bots.

At its core, Solara.js provides a unique **scripting layer** on top of Discord.js. Instead of writing complex JavaScript logic for every command and interaction, you primarily work with a simple, function-based syntax (e.g., `$functionName[argument1;argument2]`). This approach abstracts away much of the boilerplate code typically associated with Discord bot development, allowing you to focus directly on your bot's features and functionality.

Solara.js aims to solve common development hurdles by:

*   **Reducing Complexity:** Handling event listeners, command parsing, and interaction routing behind the scenes.
*   **Speeding Up Development:** Offering a vast library of pre-built functions for common tasks like sending messages, managing embeds, fetching user/server info, moderation, and more.
*   **Providing Structure:** Enforcing a clear command file structure that separates logic for different triggers (prefix commands, slash commands, button clicks, etc.).
*   **Lowering the Barrier to Entry:** Making bot creation more accessible, even for those who might be less experienced with the intricacies of asynchronous JavaScript and the full Discord API.

The core philosophy is to enable **rapid development** through **simplicity and abstraction**, while still leveraging the robustness and capabilities of Discord.js v14.

## Why Solara.js?

*   **Simplified Scripting:** Utilize an easy-to-learn `$function` syntax within your command files' `code` property to define bot behavior, making common tasks straightforward.
*   **Rich Built-in Functionality:** Access over 250 built-in functions covering a wide range of Discord features, from basic message sending and embed creation to user/role management and interaction handling.
*   **Integrated Interaction Handling:** Seamlessly define and handle prefix commands, slash commands, buttons, select menus, and modal submissions through a unified command file structure (`type` property).
*   **Extensible with Custom Functions:** Easily add your own JavaScript functions to the Solara.js parser, allowing you to implement complex custom logic when needed, blending simplicity with power.
*   **Built on Discord.js v14:** Leverages the latest stable features, performance improvements, and API updates from the underlying Discord.js library.

## Getting Help

*   Need help or want to chat with the community? Join our [Discord Server](https://discord.gg/mkuh4bPng4).
*   Found a bug or have a feature request? Report it on [GitHub Issues](https://github.com/getsolarajs/solara.js/issues).

## Ready to Start?

Dive into the [Getting Started](./getting-started/installation.md) guide to set up your first Solara.js bot and experience the streamlined development process.
