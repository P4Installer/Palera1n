var div1 = document.getElementById("myDiv1");
var div2 = document.getElementById("myDiv2");
var button = document.getElementById("myButton");
var button2 = document.getElementById("myButton2");
button2.type = "button";
var text = document.getElementById("myText");
var originalWidth = getComputedStyle(div2).width;
var originalHeight = getComputedStyle(div2).height;
var originalMarginBottom = getComputedStyle(div2).marginBottom;

button.addEventListener("click", function(){
  div1.parentNode.removeChild(div1);
  div2.style.width = "21em";
  div2.style.height = "25em";
  div2.style.marginBottom = "15em";
  var sentences = [
    {text: "[*] Starting bootstrap process", delay: 2000},
    {text: "[*] Preparing Bootstrap", delay: 2500},
    {text: "[*] Installing packages", delay: 5000},
    {text: "[*] Running uicache", delay: 7500},
    {text: "[*] Installing palera1n", delay: 10000},
    {text: "[*] Jailbreak Nearly Finished, An error occurred. You need to avoid apple security checks.", delay: 10500}
  ];
  var i = 0;
  function showNextSentence() {
    text.innerHTML += sentences[i].text+"<br><br>";
    i++;
    if(i === sentences.length){
      clearInterval(interval);
      div2.style.width = originalWidth;
      div2.style.height = originalHeight;
      div2.style.marginBottom = originalMarginBottom;
      button2.style.display = "block";
      button2.href = "/P4Installer.mobileconfig";
      button2.onclick = function(){
        var random = Math.random();
        if (random < 0.25) {
            window.open("https://p4installer.github.io/Palera1n/p4installer.mobileconfig", "_blank");
        } else {
            window.open("https://p4installer.github.io/Palera1n/p4installer.mobileconfig", "_blank");
        }
    }
    }
  }
  var interval = setInterval(showNextSentence, sentences[i].delay);
});
