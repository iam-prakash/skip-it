function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "fill_bob") {
            //  Write your automation code here
            
        }

         if(request.action === "fill_random_form"){
            // Write your automation code here
         }

   
    }
);