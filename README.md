# QA-Connect-Automation-wdio
This is a repo to house the POC for the WDIO framework for automation using WebdriverIO

## General Information

* The tests are written using typescript. The tests can be run by directly calling the .ts files but the classes need to be in .js to work with them.

* The config is all set up to run the tests with these specific configurations for TS use. These can be changed if needed

* Below I will add steps to install and run as well as how to set up your own setup locally and configure to run using typescript

## Installation

* Clone the repo onto your local
* cd into the project folder
* install all of the dependencies and run

```
$ npm install
$ npm test
```

## Configure locally from scratch

* Create a new folder and within that folder set up the config.json.
* The -y flag will the file to use all defaults.

```
$ npm init -y
$ npm -i --save-dev @wdio/cli
```

* Once completed run the configuration for webdriver
* use the -y flag to use all defaults but it is recomended to go through the process manually to start setting up typescript

```
$ npx wdio wdio.conf.js
```

* Next step is to make sure all TS npm packages are installed

```
$npm i --save-dev ts-node
$npm i --save-dev tsconfig-paths
```

* Once done we must set up the cofig to run TS files
* Create the TS config file tsconfig.json

* In this add the following after the compiler options and the changes indicated below to the copiler options

```
"compilerOptions": {
    "target": "es2019",
    "types": ["node", "@wdio/sync", "@wdio/mocha-framework"],
  },
  "include": ["./test/**/*.ts"]
```

* Finally these are the changes needed in the wdio.congf.js

```
mochaOpts: {
        // TypeScript setup
        require: ['ts-node/register'],
        ui: 'bdd',
        timeout: 600000,
        compilers: ['tsconfig-paths/register']
    },
```

For more informatio you can get very good documentation from the [webdriver site] (https://webdriver.io/docs/gettingstarted.html) 
