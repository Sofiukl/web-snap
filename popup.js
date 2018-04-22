'use strict';

/**
This function is responsible for capturing 
active tab's only visible portion

TODO full window capturing is yet pending for
implementation

@param tab active tab object

**/

function _captureTab(tab) {

    chrome.tabs.captureVisibleTab(

    null,

    {format: 'png', quality: 100},

    function(dataURI) {
        if (dataURI) {
            
            var image = new Image();
            
            image.onload = function() {
                tab.image = {width: image.width, height: image.height};
            };

            image.src = dataURI;

            //_displayImage(dataURI);
            
            _downloadImage(dataURI, 'SofikulExt_captureScreen.png');

            
        }
    }
    );
}

/**
This function is responsible for 
downloading the image to the disk

@param dataURI  image uri
**/

function _downloadImage(dataURI, imagename){

    chrome.downloads.download({url:dataURI, filename : imagename}, function(downloadId){
        console.log(`image download completed. Download Id: ${downloadId}`);
    })
}

/**
This function is responsible for 
displaying the image to the extension popup

@param dataURI  image uri
**/
function _displayImage(dataURI){

    document.write('<img src="' + dataURI + '"> </img>');
}

/**
Query on current active tab and
capture the visible tab
**/

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    
    console.log('Started Screen Capturing..');

    var tab = tabs[0];
    _captureTab(tab);

});