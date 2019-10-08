var textContainer = document.querySelector(".text-container");

function get_name_browser() {
  // получаем данные userAgent
  var ua = navigator.userAgent;
  // с помощью регулярок проверяем наличие текста,
  // соответствующие тому или иному браузеру
  if (ua.search(/Chrome/) > 0) return "Google Chrome";
  if (ua.search(/Firefox/) > 0) return "Firefox";
  if (ua.search(/Opera/) > 0) return "Opera";
  if (ua.search(/Safari/) > 0) return "Safari";
  if (ua.search(/MSIE/) > 0) return "Internet Explorer";
  // условий может быть и больше.
  // сейчас сделаны проверки только
  // для популярных браузеров
  return "Не определен";
}

// пример использования
var browser = get_name_browser();
textContainer.textContent = browser;
console.log(browser);
