# Guide to setup the Microservice Test Automation Framework
This framework includes the basic capabilities of automating the functionalities of a Web API project. The framework is available as an NPM Plugin and can be plugged into any cypress based automation suite. This file will guide you through the steps to create a basic automation suite using the microservicetestframework plugin 

## Pre-requisite
1. Node JS ([To install Node JS](https://nodejs.org/en))
2. Cypress ([Cypress Home](https://www.cypress.io/))
3. You need access to the Azure Artifacts of https://qavsts.visualstudio.com/CustomerService project

## Step 1: Create a Cypress test suite
1. Create a Node JS Project
  > Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of your project to ensure cypress is installed in the correct directory.
2. Install Cypress via npm
  > npm install cypress --save-dev
3. Open cypress using the command
  > npx cypress open

## Step 2: Install the microservice automation framework
1. In your project, add a .npmrc file with the following details
   >registry=https://qavsts.pkgs.visualstudio.com/CustomerService/_packaging/PrivateNpmRegistry/npm/registry/
   >https://registry.npmjs.org
   >always-auth=true
2. In the terminal, run
   > npm install microserviceautomationframework
3. This will install the latest npm version of the microservice automation framework in your cypress test suite

   Happy Coding!
