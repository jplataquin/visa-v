/*!
 * visa-V JavaScript Library v1.0.0
 * https://jquery.com/
 *
 * Author John Patrick Lataquin
 * Released under the MIT license
 * 
 * Date: 2020-04-05
 */
(function(){

    window.vVconfig = {
      debug:0
    };

    //Initalize script eval function for layout.
    //Use crazy fonts to make it hard for user code to access them.
    let iframe_eval = function(ć̴̡̢̤̣̠͖̦̜́͆̍̈́͐̊͗ớ̴̼̙̜̦̣̈́͌̏̾m̷̢̢̡̭͉̥̮̤͗̄̓̈̋̈́̈̓̈́̕m̷̨̖̥͚͍͔̓̿̍̀a̴͓̼̟̗̤͕͛̌̃͌̂͜n̷̯̒̌̎̎̀̈́́̓̓̓d̶͈̟̥̗̈́̿̈́̎́,$doc,$param,ȇ̸͕̪̱̟̱̫͆̄͋̈́ͅͅl̵̹͎̱̲̤͐̓̄̿̓̇͒s̶̺͕̬͖̎͊̀͂͑̿͗͠){

        //Inject Ready Function to let user triger "ready" event;
        function Ready(){  let event = new Event("ready"); $doc.dispatchEvent(event); };
        
        //Set variables that are binded to elements in the template        
        let e̷̛͙͂̊̈́̍̊̀̅̆͜͠l̵͈̘͎̠͍͊̔̈̀̅͒̅̀̐͘͜s̶̡͚̦̤͐̏̿̇̾̈́̈́̓͒̄_̶̢̮̱̱̞̘̰͗̀̆̿͊͘͝ş̴̎̈́̃̈́̍͠t̴͇̫̥̰̘̙̖̙͎̯͒͑͋̊̈́͘ȑ̴̲̯̱͖̗̘͎̪͗͝ = '';

        for(let i = 0; i <= ȇ̸͕̪̱̟̱̫͆̄͋̈́ͅͅl̵̹͎̱̲̤͐̓̄̿̓̇͒s̶̺͕̬͖̎͊̀͂͑̿͗͠.length - 1; i++){


            e̷̛͙͂̊̈́̍̊̀̅̆͜͠l̵͈̘͎̠͍͊̔̈̀̅͒̅̀̐͘͜s̶̡͚̦̤͐̏̿̇̾̈́̈́̓͒̄_̶̢̮̱̱̞̘̰͗̀̆̿͊͘͝ş̴̎̈́̃̈́̍͠t̴͇̫̥̰̘̙̖̙͎̯͒͑͋̊̈́͘ȑ̴̲̯̱͖̗̘͎̪͗͝ += "var "+ȇ̸͕̪̱̟̱̫͆̄͋̈́ͅͅl̵̹͎̱̲̤͐̓̄̿̓̇͒s̶̺͕̬͖̎͊̀͂͑̿͗͠[i].getAttribute('data-el').trim().replace(/\s+/g, '')+" = ȇ̸͕̪̱̟̱̫͆̄͋̈́ͅͅl̵̹͎̱̲̤͐̓̄̿̓̇͒s̶̺͕̬͖̎͊̀͂͑̿͗͠["+i+"];";
        }


        eval(e̷̛͙͂̊̈́̍̊̀̅̆͜͠l̵͈̘͎̠͍͊̔̈̀̅͒̅̀̐͘͜s̶̡͚̦̤͐̏̿̇̾̈́̈́̓͒̄_̶̢̮̱̱̞̘̰͗̀̆̿͊͘͝ş̴̎̈́̃̈́̍͠t̴͇̫̥̰̘̙̖̙͎̯͒͑͋̊̈́͘ȑ̴̲̯̱͖̗̘͎̪͗͝+'e̷̛͙͂̊̈́̍̊̀̅̆͜͠l̵͈̘͎̠͍͊̔̈̀̅͒̅̀̐͘͜s̶̡͚̦̤͐̏̿̇̾̈́̈́̓͒̄_̶̢̮̱̱̞̘̰͗̀̆̿͊͘͝ş̴̎̈́̃̈́̍͠t̴͇̫̥̰̘̙̖̙͎̯͒͑͋̊̈́͘ȑ̴̲̯̱͖̗̘͎̪͗͝=null;(function(){'+ć̴̡̢̤̣̠͖̦̜́͆̍̈́͐̊͗ớ̴̼̙̜̦̣̈́͌̏̾m̷̢̢̡̭͉̥̮̤͗̄̓̈̋̈́̈̓̈́̕m̷̨̖̥͚͍͔̓̿̍̀a̴͓̼̟̗̤͕͛̌̃͌̂͜n̷̯̒̌̎̎̀̈́́̓̓̓d̶͈̟̥̗̈́̿̈́̎́+'})()');    
    }

    //Initialize id generator function 
    let makeid = function(length) {

       var result           = '';
       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
       var charactersLength = characters.length;
       for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;

    }

    // Create IE + others compatible event handler
    let eventMethod  = window.addEventListener ? "addEventListener" : "attachEvent";
    let eventer      = window[eventMethod];
    let messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    //Create internally scoped registry of views
    let internal_scope_registry_of_views = {};

    //initialize global public interface for loading views
    window.vV = function(path,params){
    
        //Initialize necessary elements & id
        let iframe     = document.createElement('iframe');
        let id         = makeid(6);
        var container  = document.createElement('div');

        //configure iframe
        iframe.sandbox           = "allow-same-origin allow-scripts";
        iframe.style.display     = 'none';
        iframe.style.visible     = false;
        iframe.src               = path+'#'+id;

        //register object
        internal_scope_registry_of_views[id] = {
            container : container,
            iframe    : iframe,
            params    : params
        }

        //append iframe to body so it will be initialized
        document.body.append(iframe);
        if(window.vVconfig.debug == 1){
          console.log("vV: iFrame url:"+iframe.src+" attached to body");
        }

        //Set up a promise for when the view is ready it will resolve, attach to container for easy access later on
        container.promise =  new Promise((resolve)=>{
            container.addEventListener('ready',function(){
                resolve(container);
            });
        });


        //Set up on ready promise interface for user
        container.ready = function(){
          if(window.vVconfig.debug == 1){
            console.log("vV: view "+id+" is ready");
          }
          return container.promise;
        }

        //Set up clone method for view
        container.clone = function(){

          let container  = document.createElement('div');
          let script     = this.cloneData.script;
          let template   = this.cloneData.template;
          let params     = this.cloneData.params;

          container.innerHTML = template;

          var els = container.querySelectorAll('[data-el]');
               
          iframe_eval(script,container,params,els);
          
          return container;
        }

        //Initialize number of scoped style element found
        var numOfScopedStyle = 0;

        //Initiate Observable for scoped style
        var observer = new MutationObserver(function(mutations) {
            
            //Get all style element with attribute scoped
            let styles = document.querySelectorAll('style[scoped]');
            let num = styles.length;

            //If ther ewas a change in current number of scoped style element
            if(num != numOfScopedStyle){
                
                //Update scoped style count
                numOfScopedStyle = num;

                let scope = [];        

                //Loop through all styles
                for(let i = 0; i <= styles.length-1; i++){
                
                    let element = styles[i];

                    //Add new unique style scope attribute
                    scope.push('data-sc-'+i);

                    let scopeText = '';
                    
                    let parent = element.parentNode;

                    //Remove old existing style scope attributes attributes
                    for (var j = 0; j <= parent.attributes.length - 1; j++){
                        
                        if(/data\-sc\-(.*)/.test(parent.attributes[j].nodeName)){
                            parent.removeAttribute(parent.attributes[j].nodeName);
                        }
                    }

                    //Update new style scope attributes
                    for(var k = 0; k <= scope.length-1; k++){

                        parent.setAttribute(scope[k],'');
                        
                        scopeText += '['+scope[k]+']';
                    }

                    //Correct original content
                    element.originalContent = element.originalContent || element.innerHTML;

                    //Modify css string to include scoped identifier and place back in style element
                    element.innerHTML = element.originalContent.replace(/\n(.*)\{/g, function(match, contents, offset, input_string){

                            return scopeText+' '+contents.trim()+'{';
                    });
                        
                }
            }    
        });
         
    
        //Listen to all changes in the container
        observer.observe(container, { 
            childList: true,
            subtree:true
        });

        //return the container where the contents will be rendered
        return container;
    }


    //Listen for iframe hook event
    eventer(messageEvent,function(e) {

          //Ignore unauthorized messages from other domains
          if(
              (window.location.protocol == 'https:' || window.location.protocol == 'http:') && 
              e.origin != window.location.origin &&  
              location.hostname != 'localhost'
          ){

              if(window.vVconfig.debug == 1){
                console.log('vV: Post message blocked, protocol or origin unauthorized');
                console.log(e);
              }

              return false;          
          }else if(
               window.location.protocol == 'file:' && 
               e.origin != 'null' && 
               e.origin != 'file://'
          ){

             if(window.vVconfig.debug == 1){
                console.log('vV: Post message blocked, protocol or origin unauthorized');
                console.log(e);
              }
              
              return false;
          }

          //Try to parse JSON
          try{
              var message = JSON.parse(e.data);
          }catch(e){

              if(window.vVconfig.debug == 1){
                console.log("vV: Post message can't be parsed by json");
                console.log(e.data);
              }
              
              return false;//Ignore message
          }

          //Check if the message has all the right properties needed
          if(typeof message['hookType'] == 'undefined' ||
             typeof message['id']       == 'undefined' || 
             typeof message['template'] == 'undefined' ||
             typeof message['script']   == 'undefined' 
          ){

              if(window.vVconfig.debug == 1){
                console.log("vV: Incomplete message content");
                console.log(message);
              }

              return false;//Ignore message
          }

          //Check if this hook is a type view
          if(message.hookType != 'view') {
            
            if(window.vVconfig.debug == 1){
              console.log("vV: hookType is not valid");
              console.log(message.hookType);
            }

            return false;
          }

          //Initialize variables from id
          let container     = internal_scope_registry_of_views[message.id].container;
          let iframe        = internal_scope_registry_of_views[message.id].iframe;
          let params        = internal_scope_registry_of_views[message.id].params;

          //Get template and script from message
          let template      = message.template
          let script        = message.script;

          container.cloneData           = {};
          container.cloneData.template  = template;
          container.cloneData.script    = script;
          container.cloneData.params    = params;

          //Render template to container
          container.innerHTML = template;

          var els = container.querySelectorAll('[data-el]');
               
          iframe_eval(script,container,params,els);

          //clean up
          internal_scope_registry_of_views[message.id] = undefined;

          //Remove the iframe after the contents are processed
          iframe.parentElement.removeChild(iframe);

    },false);

  
})();