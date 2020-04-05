# visa-V
A micro library for frontend loading and rendering of HTML files with scoped javascript and css execution.
This library is suitable for both offline and online single page applications (e.g. Cordova) or any browser based UI manipulation. 


# How to install
* Add the `<script src="visa-V.js"></script>` to the head of your main html file.

* Add the hook `<script src="vhook.js"> /** Your code here **/ </script>` as the last script tag in all of your views html files.

# How to use

### Loading an HTML View

Once visa-V is loaded you will have access to the function `vV([path,param]);` 

Example:
```javascript
var view = vV('path/to/view.html',{title:'Hello World'});
```

The return value will be a div element with some few additional properties and methods.
Method      | Description
------------|-------------
.ready()    | Returns a promise that will resolve if the view is deemed ready.
promise     | The defered internal promise object used in the .ready() method
.*          | Custom user defined methods that are made publicly accesible for a number of user defined features.
 

### Creating an HTML View

For your HTML Views to work it must follow the format below 
 
```
<template>
   <h1>Hello Wordl</h1>   
</template>

<script src="path/to/vhook.js">
 /** Any code writen here will only execute within the scope of this HTML view **/

 //Call the Ready() function always after your HTML view is done and ready for consumption
 Ready();
</script>  
```
 
### Alternate format for HTML views

Note that only the last javascript code block will be used for execution within the HTML view's scope.

Adding other external script tags will execute in the global scope.
 
```
<template>
   <h1>Hello Wordl</h1>   
</template>

<!-- Optional -->
<script src="3rd/party.js"></script>

<!-- vhook.js is required for the HTML views to work -->
<script src="path/to/vhook.js"></script>

<!-- The last javascript code block -->
<script>
 /** Any code writen here will only execute within the scope of this HTML view **/

 //Call the Ready() function always after your HTML view is done and ready for consumption
 Ready();
</script>  
```

