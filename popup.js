
document.addEventListener('DOMContentLoaded', documentEvents  , false);

function send_action(){
  var e = document.getElementById("slct");
  var result = e.options[e.selectedIndex].text;
  console.log(result);

  var action = ""

  switch(result){
    case "Checkout Process":
      action = "do_checkout";
      break;

    case "Fill Booking Behavior":
    action = "fill_bob";
    break;

    case "Fill a random form":
    action = "fill_random_form";
    break;
  }

  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {action: action});
  });

}

function documentEvents(){
  var run = document.getElementById("exec");
  document.getElementById("exec").addEventListener("click", send_action);
}
