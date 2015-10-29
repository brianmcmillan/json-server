#JSON-Server based mock API server
---
## Overview
Local clone of the json-server application.
<https://github.com/typicode/json-server>

----
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
