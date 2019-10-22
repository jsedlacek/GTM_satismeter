const createArgumentsQueue = require('createArgumentsQueue');
const injectScript = require('injectScript');
const setInWindow = require('setInWindow');
const getTimestamp = require('getTimestamp');

const satismeter = createArgumentsQueue('satismeter', 'satismeter.q');
setInWindow('satismeter.l', getTimestamp(), false);

const url = 'https://app.satismeter.com/satismeter.js';
injectScript(url, data.gtmOnSuccess, data.gtmOnFailure, url);

satismeter({writeKey: 'oo6DEzaTqH3vaIhy'});
