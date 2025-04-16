---
sidebar_position: 1
title: SolaraJS API
---

# SolaraJS API 

---

## Base URL

All API requests are made to the following base URL:

https://solarajs-api.vercel.app/api

---

## Endpoints

### `GET ?functionname=`

Fetches detailed information about a specific SolaraJS function.

**Request Format:**

GET /api/?functionname=<function_name>

**Example:**

`https://solarajs-api.vercel.app/api/?functionname=clientid`

**Response:**
```json
{
  "info": {
    "name": "$clientID",
    "description": "Returns the bot's user ID.",
    "args": "none",
    "alias": "$botID"
  }
}


---

GET /about

Retrieves more about the SolaraJS package.

**Example:**

`https://solarajs-api.vercel.app/api/about`

**Response:**
```json
{
  "info": {
    "name": "Solara.js",
    "version": "0.0.1"
  }
}
```


---

## Rate Limiting

To ensure fair usage and maintain performance, our API enforces a rate limit of **5 requests per minute** per IP address.

If the limit is exceeded, further requests may be temporarily blocked or return a rate limit error.
