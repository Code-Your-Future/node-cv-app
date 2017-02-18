### Morning!

We've set up another repository for you to clone.

Take a look at all the boilerplate we've written for you. Soon you'll be setting up these applications from scratch so if you're curious or confused about why some file is here, grab a mentor to ask them.

## GOAL

Remember the CV you made all those months ago? This week you will be building an updated version powered by Node.js. You will fetch data from a real-world API (the github API), perform some operations on that data, and then use it to populate handlebars templates. This should sound familiar, because you did a similar thing last week. Then you will deploy your CV to the internet.

## CLASS TOPICS

* general recap and review
* writing modular javascript (controllers)
* request / response lifecycle (middleware)
* calling APIs from a node application
* async
* templating
* general JS tasks - controller logic
* Headers
* params & query strings
* deployment
* testing code
* rest
* ci


## Practical tasks
- Fork https://github.com/Code-Your-Future/node-cv-app

### API client
 - complete the `fetchFromGithub` method in `/server/lib/github-client.js` so that the **should retrieve user profile information** test passes
 - `/users/{username}/events/public` is a github endpoint that returns all a user's activity on github. Use this, and the documentation about event types https://developer.github.com/v3/activity/events/types/, to add a `getUserPullRequests` method to the github client which retrieves a list of a user's pull requests. The **should retrieve user pull requests** test should pass.

### Controllers
 - Set up a cv controller that outputs your existing html cv, using handlebars templates
 - Add your github user profile and pull request information to this page by using the github client

### Middleware
 - add error handling middleware to send a 404 if the user requests some url not supported by your app, or 503 error if anything goes wrong

#### Questions to think about
 - What approaches can you use to make it easier to work with complex data like the responses from the github API?
 - Why haven't we written all the code in a single `app.js` file?
 - Why are we passing your github user name from the controller to the github client? Why don't we just 'hard code' it into the github client?
 - How are controllers and middleware different? How are they similar?
 

### Extension tasks
 - use `?format=json` query string to send a json only response
 - set up a user controller to send the same information, minus your CV, for any user. Try to minimise how much you copy and paste code - can some of the code you wrote be extracted into another shared module in your `/lib` directory
 - extend your error middleware to send a custom 404 response if a user is not found



## CLASS TASKS

* fork
* add an initial route and an initial template to serve your current CV
* make sure it passes linting
* add a call to the github api and render the data into your cv
* extract the code to a controller file - we need to understand the benefits of modular code
* add display options with headers, params, query strings
* add middleware to pick this information off the request and add it on the response
* add a test or two
* deploy to heroku
* add other routes and views? /pulls /languages /activity /etc
