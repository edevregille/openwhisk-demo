# openwhisk-demo
This demo aims to demonstrate the power of OpenWhisk event programing compute. It is composed of 
- a Todo list application running on Cloud Foundry or Docker and using the Bluemix Cloudant NoSQL database service
- a javascript action (tweet.js) to publish a tweet each time it is triggered

1. Deploy the todo list node application with a Cloudant Database using Cloud Foundry or Docker container:
https://www.github.com/edevregille/node-todo-cloudant

2. Set-up the OpenWhisk command line and set your OpenWhisk namespace and authorization key:
https://new-console.ng.bluemix.net/openwhisk/cli

3. Update the twwet.js file with your Twitter developer account credentatials.

4. Create the OpenWhisk action:
```
  wsk action create myAction tweet.js
```

5. Create the Cloudant package using the Bluemix system packages:
```
  wsk package refresh
```

6. Create the trigger using the Cloudant package feed changes:
```
  wsk trigger create myTrigger --feed /<namespace>/<cloudant>/changes -p dbname todo-demo p includeDoc true
```

7. Create the rule:
```
  wsk rule create myRule --enable myTrigger myAction
```

8. Test by adding a new item from the Todo list application --> check that the tweet has been properly published.
Note that you can observe the logs:
```
  wsk activation poll
```
