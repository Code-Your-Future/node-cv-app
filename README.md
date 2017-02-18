### Morning!

We've set up another repository for you to clone.

Take a look at all the boilerplate we've written for you. Soon you'll be setting up these applications from scratch so if you're curious or confused about why some file is here, grab a mentor to ask them.

## GOAL

Remember the CV you made all those months ago? This week you will be building an updated version powered by Node.js. You will fetch data from a real-world API (the github API), perform some operations on that data, and then use it to populate handlebars templates. This should sound familiar, because you did a similar thing last week. Then you will deploy your CV to the internet.

## CLASS TOPICS

* general recap and review
* writing modular javascript (controllers)
* request / response lifecycle (middleware)
* calling apis from within node
* async
* templating
* general JS tasks - controller logic
* Headers
* params & query strings
* deployment
* testing code
* rest

## CLASS TASKS

* fork
* add an initial route and an initial template to serve your current CV
* add a call to the github api and render the data into your cv
* extract the code to a controller file - we need to understand the benefits of modular code
* add display options with headers, params, query strings
* add middleware to pick this information off the request and add it on the response
* add a test or two
* deploy to heroku
* add other routes and views? /pulls /languages /activity /etc
