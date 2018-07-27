<p align="center"><a href="https://fortumo.com/" target="_blank" rel="fortumo noreferrer"><img width="100" src="https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/04/fortumo-uuslogo-flower.png" alt="fortumo logo"></a></p>

<p align="center">
  <a href="https://github.com/usamahamed/Fortumo-Task"><img src="https://img.shields.io/circleci/project/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a href="https://github.com/usamahamed/Fortumo-Task"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg" alt="Coverage Status"></a>
  <a href="https://github.com/usamahamed/Fortumo-Task"><img src="https://img.shields.io/npm/dm/vue.svg" alt="Downloads"></a>
  <a href="https://github.com/usamahamed/Fortumo-Task"><img src="https://img.shields.io/npm/v/vue.svg" alt="Version"></a>
  <a href="https://github.com/usamahamed/Fortumo-Task"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <a href="https://github.com/usamahamed/Fortumo-Task"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a>
  <br>
  <a href="https://github.com/usamahamed/Fortumo-Task"><img src="https://saucelabs.com/browser-matrix/vuejs.svg" alt="Sauce Test Status"></a>
</p>

<h2 align="center">Fortumo Itrator Task</h2>
Simple iterator which polls a number of external services and if a certain criterion is met, redirects the user elsewhere.

---

## Introduction

### From the user's perspective, the experience is as follows:
- user arrives to the site,
- clicks a button,
- sees a loader,
- and is redirected to another page.
### From the technical perspective, the flow follows a similar pattern:
-  user arrives to the site,
-  front end makes a request to the first service,
-  the first service responds with the url of the second service and instructs to make an XHR request, 4. front end makes a request to        the second service,
-  3-4 are repeated n times
-  the (n+1)th service responds with the next url and instructs to redirect the user to the page

<!-- [START getstarted] -->
## Implementation
As the idea is simple i preferd not using any MVC frameworks all done this plain javascript. i created 4 service json files in this formate as provided in spec and i added small fields for data visualization:- 
```
{
	"id":" ",
    "activity": "xhr",
    "activity_url": "Url for next services",
    "name":"Name of service",
    "description":"service description",
    "img":"service image"

}

```
and the last service json format, which is responsible for redirecting after service end, like this provides also on spec:-
```
{
	"id":" ",
    "activity": "redirect",
    "activity_url": "http://example.com/landing_page"
}

```
and i host this service on cloud site and i using simple ajax calling which it will recursively and automatically call the next servive until redirecting 

<!-- [START getstarted] -->

## Getting Started

### Installation

- git clone the repository via ```git clone repository name``` and install dependances via ``` npm install ```
- start the server via ```npm start```
- open browser on port 4444

### test
I add a simple test cases using Mocha with Chai and sinon for spy stuff , i focus testing on successful API call, is it call successfully and with appropriate response or fail to run test just type ```npm test``` and also listen on port 4444


<!-- [START getstarted] -->

## Deployment
I Deploy the app on firebase and you can just see the app from this link   <a href="https://fortumo-task.firebaseapp.com/">Fortumo Task</a>





