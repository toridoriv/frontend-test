<h1 align="center">Welcome to cornershop-frontend-test 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href=" https://github.com/nerdalot/frontend-test" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href=" https://github.com/nerdalot/frontend-test" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/nerdalot" target="_blank">
    <img alt="Twitter: nerdalot" src="https://img.shields.io/twitter/follow/nerdalot.svg?style=social" />
  </a>
</p>

> Frontend test for Cornershop App



<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [About the Project](#about-the-project)
  - [Architecture](#architecture)
    - [Components](#components)
    - [Imports](#imports)
    - [Naming](#naming)
    - [Functions](#functions)
  - [Version Control](#version-control)
    - [Branches](#branches)
    - [Commit Messages](#commit-messages)
      - [Subject](#subject)
      - [Body](#body)
    - [Issues](#issues)
  - [Built With](#built-with)
  - [🏠 Homepage](#-homepage)
  - [✨ Demo](#-demo)
- [Install](#install)
- [Usage](#usage)
- [Run tests](#run-tests)
- [Author](#author)
- [🤝 Contributing](#-contributing)
- [Show your support](#show-your-support)
- [📝 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## 📃 About the Project

### Architecture

#### Components

For this project I've decided to follow the [Single Responsability Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle): each component is gonna have responsability over one part of the functionality of the app. 

#### Imports

Dependencies from `node_modules` and project files must be separated by a blank line:

```javascript
import * as React from 'react'
import { Provider } from "react-redux";

import { store } from "../store";
```

#### Naming

- All names must be writen in English. Always. Till the end of times.



<img src="https://i.imgflip.com/4nxpfa.jpg" style="max-width:400px;" />



- Names should be clear, even if longer names are needed to do so.
- Types should be declared with Typescript, not within the function name.
- Interface declarations should start with a capital I.

#### Functions

- Avoid long (god) functions. If it gets too long, it must be divided into specific actions.

### Version Control

I've been tracking all the changes with git so if you want to understand how I build this project in a more specific manner, this section is a guide to my practices.

#### Branches

- `master` 
  - `develop`
    - `feature`
    - `fix`
    - `chore`
  - `hotfix`

#### Commit Messages



<img src="https://imgs.xkcd.com/comics/git_commit_2x.png" style="max-width:400px;">



##### Subject

- Summary of changes made.
- Capitalized.
- Imperative mode.
- Prepend with one of the following keywords:

| Keyword  | Description                                                  |
| -------- | ------------------------------------------------------------ |
| Build    | Changes related to the tools that are being used (scripts, dependencies or configuration) |
| CI       | Continous integration and deployment changes                 |
| Docs     | Documentation changes (internal or external)                 |
| Feat     | Codebase changes related to new features                     |
| Fix      | Codebase changes related to bug fixes                        |
| Perf     | Performance improvements                                     |
| Refactor | Development changes that don't affect functionality          |
| Style    | Styling changes, like identations, semi-colons, quotes, etc  |
| Test     | Add, refactor or delete tests                                |

##### Body

Not required, but recommended for longer changes. It must contain '*why*' and '*what*', but not '*how*'.


#### Issues

### Built With

### 🏠 [Homepage](https://github.com/nerdalot/frontend-test)

### ✨ [Demo]( https://github.com/nerdalot/frontend-test)

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Victoria Rodriguez <Nerdalot>**

* Website: https://toriwrites.online
* Twitter: [@nerdalot](https://twitter.com/nerdalot)
* Github: [@nerdalot](https://github.com/nerdalot)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page]( https://github.com/nerdalot/frontend-test). You can also take a look at the [contributing guide]( https://github.com/nerdalot/frontend-test).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Victoria Rodriguez <Nerdalot>](https://github.com/nerdalot).<br />
This project is [MIT]( https://github.com/nerdalot/frontend-test) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_