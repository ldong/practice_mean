# Notes
Author: Lin Dong

Date: Fri Oct 17 13:28:17 EDT 2014
# MEAN
Lets talk about MEAN: **Mongo, Express, Angular Node**.

## Client-side Evolution
Client:
* Validation
* DHTML
* XHR
* jQuery/YUI/Prototype
* MVC, i.e. Angular

Server:
* Node
* Express

DB:
* NoSQL
* MongoDB(BSON, Binary representation of JSON)

## Prerequisites

* Angular
* Node
* MongoDB
* Express
* JavaScript
* Karma (Testing tool)
    * Mocha
* Stylus/CSS
* Jade (HTML Template)
* nodlist/n/nvm
* git

## Multivision Application

[Demo](http://github.com/joeeames/MEANAppsFiles)

## Walking skeleton
* End to end
* Main architectural components
* Iterative

Agenda:
* package.json
* git
* Bower
* node server
* stylus
* layout
* AngularJS
* MongoDB

## Settings
1. `npm init`
2. `npm install --save express jade`
3. `git init`
4. `npm install bower --save-dev`
5. `app vs public` folder, in this case, its called server
6. add **.bowerrc** file
7. `bower init`
8. `bower install jquery --save`
9. `bower install toastr --save`, for client side notification
10. `bower install angular angular-resource angular-route --save`
11. `app.js` or `server.js`
12. `npm install nodemon -g`

Side notes:
Webstorm -> inspection -> general -> uncheck
1. unsolved variable
2. unsolved functions
3. Signature mismatch

## Express
Express 3.X

``` javascript
// all environments
app.configure(function(){
  app.set('title', 'Application Title');
})

// development only
app.configure('development', function(){
  app.set('mongodb_uri', 'mongo://localhost/dev');
})

// production only
app.configure('production', function(){
  app.set('mongodb_uri', 'mongo://localhost/prod');
})

```
Express 4.X

``` javascript
// all environments
app.set('title', 'Application Title');

// development only
if ('development' == app.get('env')) {
  app.set('mongodb_uri', 'mongo://localhost/dev');
}

// production only
if ('production' == app.get('env')) {
  app.set('mongodb_uri', 'mongo://localhost/prod');
}
```

## 
