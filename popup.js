  let sourceclicked = document.getElementById('source');


sourceclicked.onclick = function(element) {
   chrome.windows.create({
  url: "https://github.com/gubareve/synergy-addons",
  type: "popup",
  focused: true
});
    
  };
   chrome.storage.local.set({'enabled': true}, function() {
        });
document.getElementById("yes").onclick = function {
   chrome.storage.local.set({'enabled': true}, function() {
        });
}
document.getElementById("no").onclick = function {
   chrome.storage.local.set({'enabled': false}, function() {
        });
}



