# npm commands

Created: 2018-03-24 20:15:52 +0500

Modified: 2021-11-24 07:02:48 +0500

---

npx - npm package runner

<https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference>

## To install all dependencies

```bash
npm install
npm init # for creating package.json
npm init -y
npm i express
npm i --save-dev nodemon
npm i --save-prod nodemon
npm i jsonwebtoken dotenv
```

## Run server

`node .`

## Compile all ES6 and babel packages and run server

`npm start (from the project root directory)`

## To install and save to package json file from npm

`npm install --save youtube-api-search`

## Others

```bash
npm outdated
npm update
npm update "react" "react-dom"
```

## Packages

- youtube-api-search

It takes a youtube data api key and a search query and gets all the data from youtube.

- express
- body-parser
- npm install -g nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.

- jsonwebtoken
- cors
- express-jwt
- <https://www.npmjs.com/package/redis>
- npm install gray-matter

## nvm (Node Version Manager)

nvm allows you to quickly install and use different versions of node via the command line.

### Installation

Install using zsh instead of homebrew on macos

<https://github.com/nvm-sh/nvm#troubleshooting-on-macos>

<https://github.com/nvm-sh/nvm>

### Commands

```bash
nvm install 14

nvm use 14
```

## Others

### Yarn package manager

Fast, reliable, and secure dependency management

- Offline Mode.If you've installed a package before, thenyou can install it again withoutaninternet connection.
- Deterministic.The same dependencies will be installed in the same exact way on any machine, regardless ofinstallationorder.
- Network Performance.Yarn efficiently queuesrequests andavoids request waterfalls in order to maximize network utilization.
- Network Resilience.A single request that fails will not cause the entire installation to fail. Requests are automatically retried upon failure.
- Flat Mode.Yarn resolves mismatched versions of dependencies to a single version to avoid creating duplicates.

### Commands

```bash
yarn # install all dependencies
yarn start # start local server
yarn build # build a production ready deployment

yarn outdated
```

### pnpm

Fast, disk space efficient package manager

<https://pnpm.io>

<https://github.com/pnpm/pnpm>

### pnpx (npx for pnpm)

<https://pnpm.io/pnpx-cli>

## index.js

```js
// npm install express

const express = require("express");
const app = express();
const PORT = 8888;
app.get('/time', (req, res) => {
    const time = (new Date()).toLocaleTimeString();
    res.status(200).send(`The Time is ${time}`);
});

// catchall route
app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// node .

// npm install body-parser
```

<https://blog.bitsrc.io/understanding-json-web-token-authentication-a1febf0e15>
