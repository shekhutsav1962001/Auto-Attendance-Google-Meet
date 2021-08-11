document.getElementById("btn").addEventListener("click", click);

function click() {
  console.log("object");
  var rollno = document.getElementById("rollno").value;
  console.log(rollno);

 
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    console.log(activeTab);
    chrome.tabs.sendMessage(activeTab.id, { message: "start", rollno });
  });
}
