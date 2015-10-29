#JSON-Server based mock API server
---
## Overview
Local clone of the json-server application.
<https://github.com/typicode/json-server>

----

##Usage
1. Open a terminal in the json-server directory.
1. Run `json-server people.js` from the terminal.
1. Open a browser window to `http://localhost:3000/people`
1. This should return a valid randomly generated json file.
````json
[
  {
    "uuid": "81b2e330-5179-4fb7-9e38-9788832ca9f7",
    "userName": "Timmothy.Littel",
    "firstName": "Timmothy",
    "lastName": "Littel",
    "email": "Timmothy.Littel@luis.com",
    "phone": [],
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinjohndayy/128.jpg"
  },
  {
    "uuid": "32205d13-1327-447a-8e2f-c0f8f08cf21e",
    "userName": "Dane.Rice",
    "firstName": "Dane",
    "lastName": "Rice",
    "email": "Dane.Rice@catherine.org",
    "phone": [
      {
        "type": "cell",
        "value": "614-866-1430"
      },
      {
        "type": "home",
        "value": "346-833-2544"
      }
    ],
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/pcridesagain/128.jpg"
  }
]
````


##Installation
`mkdir [folderName]`  
`cd [folderName]`  
`npm install -g json-server` can json-server be installed locally (e.g. `npm install --save json-server`?)
`npm init`  creates a `package.json` file.  
`npm install --save  faker`  
`npm install --save  lodash`  
Create the filed used to specify the data to be generated.
`touch generate.js && echo "//create a function to dynamically create the API data" > index.js`  

Create a static html file
`mkdir public`  

```
echo '//create a static html page  
<!DOCTYPE html>  
<html>  
  <head>  
  	<title>Hello World</title>  
  </head>  
    <body>  
	      Hello World  
    </body>  
</html>' > public/index.html
```
