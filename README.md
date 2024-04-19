# Simple Scraper 🤖🌐

SimpleScraper is an open-source tool that enables you to retrieve and manipulate content from websites through a straightforward API. It's perfect for developers looking to add live browsing capabilities to large language models (LLMs) and other applications.

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/TakSec.svg?style=social&label=Follow%20%40TakSec)](https://twitter.com/TakSec)
</p>

## Requirements
To run SimpleScraper, you need:
- **Node.js**: The JavaScript runtime that executes your server code.
- **npm (Node Package Manager)**: Manages the libraries that SimpleScraper depends on.

## Installation
To set up SimpleScraper on your system, run the following command in your terminal:
```bash
npm install
```
This installs all necessary dependencies to get you started.

## Usage
### Starting the Server
Launch the server with this command:
```bash
node server.js
```
This command starts your SimpleScraper server, making it ready to handle requests.

### Making Requests
To scrape content from a website, make a POST request to the `/api/fetch-content` endpoint.

Here’s how you can do it using `curl`:
```bash
curl -X POST http://localhost:3001/api/fetch-content -H "Content-Type: application/json" -d '{"url": "http://example.com"}'
```
Replace `"http://example.com"` with the URL of the site you want to scrape.

## See It in Action
Check out [Web Code Explainer GPT](https://chat.openai.com/g/g-uTdNhjSR5-web-code-explainer) to see Simple Scraper in action!
