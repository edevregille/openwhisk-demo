# openwhisk-demo
This demo aims to demonstrate the power of OpenWhisk event programing compute. It is composed of 
- a Todo list application running on Cloud Foundry or Docker and using the Bluemix Cloudant NoSQL database service
- a javascript action (tweet.js) to publish a tweet each time it is triggered

Deploy the todo list node application with a Cloudant Database using Cloud Foundry or Docker container:
https://www.github.com/edevregille/node-todo-cloudant

Set-up the OpenWhisk command line and set your OpenWhisk namespace and authorization key:
https://new-console.ng.bluemix.net/openwhisk/cli

Create the OpenWhisk action:
