chrome.browserAction.onClicked.addListener(function(){

	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	    var url = tabs[0].url;
	    console.log(url);
	    if(url.includes('defineBookingBehaviour')){
	    	    chrome.tabs.sendMessage(tabs[0].id, {action: "fill_bob"}, function(response) {});  

	
	    }
	    if(url.includes('definePrices')){
	    	chrome.tabs.sendMessage(tabs[0].id, {action: "fill_irate_reasons"}, function(response) {});  
	    	
	    }
	    if(url.includes('RecordType')){
	    	chrome.tabs.sendMessage(tabs[0].id, {action: "fill_lead"}, function(response) {});  
	    	
	    }
	    
	    //alert(url);
	});




});