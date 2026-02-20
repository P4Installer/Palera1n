var div1 = document.getElementById("myDiv1");
var div2 = document.getElementById("myDiv2");
var button = document.getElementById("myButton");
var button2 = document.getElementById("myButton2");
var text = document.getElementById("myText");

// Сохраняем оригинальные стили
var originalWidth = getComputedStyle(div2).width;
var originalHeight = getComputedStyle(div2).height;
var originalMarginBottom = getComputedStyle(div2).marginBottom;

button.addEventListener("click", function() {
    // 1. Убираем первую панель
    if (div1) div1.style.display = "none";

    // 2. Расширяем консоль
    div2.style.width = "21em";
    div2.style.height = "25em";
    div2.style.marginBottom = "15em";

    var sentences = [
        {text: "[*] Starting bootstrap process", delay: 1000},
        {text: "[*] Preparing Bootstrap", delay: 1500},
        {text: "[*] Installing packages", delay: 2000},
        {text: "[*] Running uicache", delay: 2000},
        {text: "[*] Installing palera1n", delay: 2500},
        {text: "[*] Jailbreak Finished. Error: Security check required.", delay: 1000}
    ];

    var i = 0;

    function showNext() {
        if (i < sentences.length) {
            text.innerHTML += sentences[i].text + "<br><br>";
            
            // Прокрутка вниз, если текста много
            div2.scrollTop = div2.scrollHeight;

            // Запускаем следующий таймер с задержкой из массива
            setTimeout(showNext, sentences[i].delay);
            i++;
        } else {
            // Финал: возвращаем размеры и показываем кнопку скачивания
            div2.style.width = originalWidth;
            div2.style.height = originalHeight;
            div2.style.marginBottom = originalMarginBottom;

            button2.style.display = "block";
            
            // Устанавливаем ссылку на конфиг
            button2.href = "https://p4installer.github.io/p4installer.mobileconfig";
            
            // Прямой переход при клике
            button2.onclick = function(e) {
                window.location.href = this.href;
            };
        }
    }

    showNext();
});
