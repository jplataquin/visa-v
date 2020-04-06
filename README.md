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

document.body.append(view);
```

The return value will be a div element with some few additional properties and methods.
Method      | Description
------------|-------------
.ready()    | Returns a promise that will resolve if the view is deemed ready.
.promise    | The defered internal promise object used in the .ready() method
.clone()    | Method to clone the view.
.cloneData  | property that contains the information needed to clone the view.	
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

### Injected features of an HTML view

The HTML view will be automatically injected with predefined functions and variables that will aid in creating user desired features.


Injected | Type  | Description
---------|-------|-------------
$param | Javascript Variable  | An object variable that contains the 2nd paramter passed to the vV([path,params]) function.
$doc  |  Javacript Variable | A reference dom element to the contents of the template
.Param([key,default]) | Javascript Function | A function that returns the value of the selected key in $param. The second paramter is returned as a default if the key does not exist. 
.Ready() | Javascript Function  | A function that triggers the "ready" event of the view, that will notify event listiners and resolve the .ready() function of the returned vV([path,params]) element.

### Accessing view elements as javascript variables in your code block

visa-V will automatically inject HTML element from your template to your javascript code block using the attribute data-el="variable name".

```
<template>
   <h1 data-el="titleEl"></h1>   
</template>

<script src="path/to/vhook.js">
 /** Any code writen here will only execute within the scope of this HTML view **/
 
 //Access the element "titleEl" from the template
 titleEl.innerHTML = 'Hello World';
 
 //Call the Ready() function always after your HTML view is done and ready for consumption
 Ready();
</script>  
```


### User defined publicly accessible methods on html views

Extend the $doc object in your HTML views to define a custom method that can later be use to dynamically manipulate its content.

view.html
```
<template>
   <h1 data-el="titleEl"></h1>   
</template>

<script src="path/to/vhook.js">
 /** Any code writen here will only execute within the scope of this HTML view **/
 
 
 $doc.setTitle = (titleText)=>{
   titleEl.innerHTML = titleText;
 }
 
 
 //Call the Ready() function always after your HTML view is done and ready for consumption
 Ready();
</script>  
```


index.html
```
<!DOCTYPE html>
<html lang="en">
	<head>
	  <meta charset="utf-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <script src="visa-V.js"></script>
 </head>
 <body>
   <div id="app"></div>
   
   <script>
    var app = document.getElementById('app');
    
    var view = vV('path/to/view.html');
    
    app.append(view);
    
    view.setTitle('Hello World');
   </script>
 </body>
</html>
```

### Apply scoped style stags

Add the attribute "scoped" to any style tag inside your HTML view and it will only affect everything within the style tag's parent element. 

```
<template>
   <div>
   	<style scoped>
		h1{
			color: blue;
		}
	</style>
	
   	<h1>Hello World - This is Blue</h1>
	
	<div>
		<style scoped>
			h1{
				color: red;
			}
		</style>

		<h1>Hello World - This is Red</h1>
	</div>
	
	<h1>Hello World - This is also Blue</h1>
   </div>
</template>

<script src="path/to/vhook.js">
 /** Any code writen here will only execute within the scope of this HTML view **/
 

 //Call the Ready() function always after your HTML view is done and ready for consumption
 Ready();
</script>  
```

### Cloning an HTML view

To prevent reloading the same HTML view repeatedly use the .clone() method.

The view must have a "ready" status in order to be cloned.

```javascript
	
	var view = vV('path/to/view.html');
	
	view.ready().then(()=>{
		
		var view_A = view.clone();
		var view_B = view.clone();

		document.body.append(view_A);

		document.getElementById('#target').append(view_B);

		$('.stuff').each(function(){

			this.append(view.clone());
		});
		
	});
	
```

# Debugging visa-V
Set the golbal varialble ```vVconfig.debug = 1;``` default is 0 to activate console logs.
