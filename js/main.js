var div1 = document.getElementById("myDiv1");
var div2 = document.getElementById("myDiv2");
var button = document.getElementById("myButton");
var button2 = document.getElementById("myButton2");
var text = document.getElementById("myText");

var originalWidth = getComputedStyle(div2).width;
var originalHeight = getComputedStyle(div2).height;
var originalMarginBottom = getComputedStyle(div2).marginBottom;

button.addEventListener("click", function() {
  div1.style.display = "none"; // Просто скрываем первую панель
  
  // Раскрываем консоль
  div2.style.width = "21em";
  div2.style.height = "25em";
  div2.style.marginBottom = "15em";

  var sentences = [
    {text: "[*] Starting bootstrap process", delay: 1000},
    {text: "[*] Preparing Bootstrap", delay: 1500},
    {text: "[*] Installing packages", delay: 2000},
    {text: "[*] Running uicache", delay: 2000},
    {text: "[*] Installing palera1n", delay: 2500},
    {text: "[*] Successful Jailbreak.", delay: 500}
  ];

  var i = 0;

  function showNextSentence() {
    if (i < sentences.length) {
      text.innerHTML += sentences[i].text + "<br><br>";
      
      // Запускаем следующий шаг через время, указанное в delay
      setTimeout(showNextSentence, sentences[i].delay);
      i++;
    } else {
      // Когда текст закончился:
      div2.style.width = originalWidth;
      div2.style.height = originalHeight;
      div2.style.marginBottom = originalMarginBottom;

      // Просто показываем кнопку, в которой уже прописана ссылка в HTML
      button2.style.display = "block";
    }
  }

  showNextSentence();
});
