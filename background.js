'use strict';


/**
Adding rules to display the extension based on required
page's url
**/

var rule1 = {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'developer.chrome.com', schemes: ['https'] }
        })
      ],
      actions: [ new chrome.declarativeContent.ShowPageAction() ]
  };

var rule2 = {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'www.google.co.in', schemes: ['https'] }
        })
      ],
      actions: [ new chrome.declarativeContent.ShowPageAction() ]
  };

var rule3 = {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'www.youtube.com', schemes: ['https'] }
        })
      ],
      actions: [ new chrome.declarativeContent.ShowPageAction() ]
  };

 chrome.runtime.onInstalled.addListener(function(details) {
      chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([rule1, rule2, rule3]);
      });
  });


/**
setting variables to the chrome storage

**/

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#FF4500'}, function() {
    console.log('The color is green.');
  });

chrome.storage.sync.set({myVar: 'Sofikul'}, function() {
    console.log('The value of the variable is Sofikul');
  });


});
