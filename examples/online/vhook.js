/*!
 * Hook for visa-V iframe content v1.0.0
 * https://jquery.com/
 *
 * Author John Patrick Lataquin
 * Released under the MIT license
 * 
 * Software authors provide no warranty with the software and are not liable for anything.
 *
 * Date: 2020-04-05
 */
 (function(){

  //Get id from hash
  let hash = document.location.hash.replace('#','');

  //Get first template from dom
  let template = document.getElementsByTagName('template')[0] || '';

  //get last script from dom
  let scripts = document.getElementsByTagName('script');
  let script = scripts[scripts.length-1] || '{}';

  //Prepare message
  var message = {
    id:hash,
    hookType:'view',
    template: template.innerHTML,
    script: script.innerHTML
  }

  //Send Message to parents
  parent.postMessage(JSON.stringify(message), "*");


})();