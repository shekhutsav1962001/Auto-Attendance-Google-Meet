chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "start") {
    start(request);
  }
});

function start(request) {
  var rollno = request.rollno;
  console.log("your roll no is", rollno);
  var myAttendance = setInterval(checkForAttendance, 500);

  function stopChecking() {
    // console.log("in stop");
    clearInterval(myAttendance);
  }

  function checkForAttendance() {
    console.log("checkig For attendance..");
    var allMessages = document.getElementsByClassName("oIy2qc");
    if (allMessages && allMessages.length >= 1) {
      var onemessage =  allMessages[allMessages.length - 1].getAttribute("data-message-text");
      onemessage = onemessage.toLowerCase();
      onemessage = onemessage.split(" ")[0];
      
      if(onemessage.startsWith('ce') && onemessage.length<=5 && onemessage.length>=3)
      {
        var num = onemessage.substring(2,5)
        num = parseInt(num)
        if (Number.isInteger(num) && num<=151)
        {
          console.log("yes it is attendence")
          var button =  document.getElementsByClassName('NSvDmb cM3h5d BCsjvd');
          // close => undefined
          // open => not un
          if(button[0]==undefined)
          {
            // close
            var open = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ JsuyRc boDUxc')[2]
            open.click()

            
          }
          
          document.execCommand("insertText", false, rollno);  

          var enter = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c Cs0vCd')[0]
          enter.click()

          stopChecking()
        }
        // else
        // {
        //   console.log("start with ce but not attencece")
        // }
        
      }
      // else
      // {
      //   console.log("not ce")
      // }
    }
  }

}
