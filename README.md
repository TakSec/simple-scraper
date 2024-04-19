
# SimpleScraper

## Description
SimpleScraper is an open-source tool designed to fetch and transform website content based on URLs provided via an API.

## Requirements
- Node.js
- npm

## Installation
```bash
npm install
```

## Usage
Start the server:
```bash
node server.js
```

Make a POST request to `/api/fetch-content` with a JSON body containing the URL key.
Example:
```bash
curl -X POST http://localhost:3001/api/fetch-content -H "Content-Type: application/json" -d '{"url": "http://example.com"}'
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.
