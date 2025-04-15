---
sidebar_position: 99 # Adjust as needed, often placed last
title: Changelog
id: changelog
slug: /changelog
---

# Changelog

This document tracks the changes, additions, and fixes made to Solara.js across different versions. Refer to this page to stay updated on new features, function modifications, and bug resolutions.

## Version 0.1.6 (15-04-25)

This version focuses on enhancing interaction handling and adding more utility functions.

### ✨ Added

* `$functionInfo`: Returns information about a specific function.
*  `$packageVersion`: Returns the current version of the Solara package.
*  `$nodeVersion`: Returns the running Node.js version.
*  `$djsVersion`: Returns the installed discord.js version.
*  `$developers`: Returns the list of Solara developers (p61s, iv.aylo).
*  `$httpStatus[url]`: Gets the HTTP status code for a URL (performs a GET request).
*  `$httpHead[url]`: Performs an HTTP HEAD request and returns headers as JSON string.
*  `$httpContentType[url]`: Gets the Content-Type header for a URL (performs a HEAD request).
