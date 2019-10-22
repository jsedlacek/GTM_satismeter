

/* Javascript code of custom html tag
 (function() { window.satismeter = window.satismeter || function() {(window.satismeter.q = window.satismeter.q || []).push(arguments);};window.satismeter.l = 1 * new Date();var script = document.createElement("script");var parent = document.getElementsByTagName("script")[0].parentNode;script.async = 1;script.src = "https://app.satismeter.com/satismeter.js";parent.appendChild(script);})();
 satismeter({
   writeKey: "oo6DEzaTqH3vaIhy"
 });
*/

// custom template sandboxed javascript
const logToConsole = require('logToConsole');
const injectScript = require('injectScript');
const queryPermission = require('queryPermission');
const setInWindow = require('setInWindow');

/*
Part bellow is equivalent to 
window.satismeter = window.satismeter || function() {(window.satismeter.q = window.satismeter.q || []).push(arguments);};window.satismeter.l = 1 * new Date();
see ref here: https://developers.google.com/tag-manager/templates/convert-existing-tag
*/
const createArgumentsQueue = require('createArgumentsQueue');
const satismeter = createArgumentsQueue('satismeter', 'satismeter.q');
const getTimestamp = require('getTimestamp');
setInWindow('satismeter.l', getTimestamp(), true);


