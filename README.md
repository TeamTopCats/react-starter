[![license](https://img.shields.io/github/license/lnked/react-starter.svg)](https://github.com/lnked/react-starter/blob/fastest/LICENSE)
[![Build Status](https://travis-ci.org/lnked/react-starter.svg?branch=master)](https://travis-ci.org/lnked/react-starter)

[![Code Climate](https://codeclimate.com/github/lnked/react-starter/badges/gpa.svg)](https://codeclimate.com/github/lnked/react-starter)
[![Issue Count](https://codeclimate.com/github/lnked/react-starter/badges/issue_count.svg)](https://codeclimate.com/github/lnked/react-starter)

---

React-starter a react web starter kit.

## Installation

#### GIT

```bash
git clone -b master git@github.com:lnked/react-starter.git
```

OR

```bash
git init
git remote add origin git@github.com:lnked/react-starter.git
git fetch origin
```

Then run command

```bash
yarn
```

OR

```bash
npm i
```

## Run tasks

Start dev-server

```bash
yarn start
```

Build without compress

```bash
yarn build
```

Build with compress

```bash
yarn release
```

Analyze code

```bash
yarn analyze
```

Stats

```bash
yarn stats
```

Lint scripts

```bash
yarn lint:scripts
```

Lint styles

```bash
yarn lint:styles
```

Lint styles and scripts

```bash
yarn lint
```

Fix

```bash
yarn run lint:fix
```

## Build with environment
```bash
yarn release --env example
```
Requires a file `.env.example` file in the root folder of the project
You can add any files to your environments

## Features
- [x] TypeScript
- [x] Styled Components
- [x] PostCss / scss
- [x] Svg sprites
- [x] MobX
- [x] Tests

## Get in touch
- Bugs / Suggestions: [open an issue](https://github.com/lnked/react-starter/issues)
