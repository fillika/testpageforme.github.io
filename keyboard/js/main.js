const inputElement = document.querySelector("#input"); // Точка входа
const textExampleElement = document.querySelector("#text-example"); // Точка выхода
const upperOrNot = document.querySelectorAll(".letter");

const text = `Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Не следует, однако забывать, что новая модель организационной деятельности требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Равным образом постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание существенных финансовых и административных условий. Не следует, однако забывать, что сложившаяся структура организации играет важную роль в формировании модели развития. Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации модели развития. Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Таким образом начало повседневной работы по формированию позиции способствует подготовки и реализации форм развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание новых предложений. Товарищи! постоянный количественный рост и сфера нашей активности требуют определения и уточнения соответствующий условий активизации. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации существенных финансовых и административных условий.`;

let letterId = 1; // Переменная, которая хранит в себе актуальный символ (тот символ, который мы ожидаем). Будем увеличивать её в будущем как счетчик
let mistakeCounter = 0; // Моя переменная для выяснения кол-ва ошибок
let letterCounter = 0; // Сколько всего нажатий
let startMoment = null;

const lines = getLines(text); // lines содержит в себе массив из 27 массивов в каждом по 70 объектов (каждая буква - объект)

// С этой функции мы начнем работу
init();

function init() {
  clearAndUpdate();

  inputElement.focus();

  inputElement.addEventListener("keydown", function(event) {
    const currentLineNumber = getCurrentLineNumber(); //Получаем текущую линию на момент клика
    const element = document.querySelector(`[data-key="${event.key}"]`);
    const AnotherElement = document.querySelector(
      `[data-code="${event.code}"]`
    );
    const currentLetter = getCurrentLetter();

    // console.log(letterCounter);

    if (startMoment == null) {
      startMoment = Date.now();
    }

    console.log(startMoment);

    if (event.key === "Shift" || event.key === "CapsLock") {
      return;
    } else {
      letterCounter += 1;
    }

    // Отслеживаем все F1-12.
    // return заканчивает выполнение всей функции, не доходя до preventDefault(), а значит кнокпи с f1-12 будут рабоатьб
    if (event.key.startsWith("F") && event.key.length > 1) {
      return;
    }

    if (element) {
      element.classList.add("hint");
    }

    if (AnotherElement) {
      AnotherElement.classList.add("hint");
    }

    if (event.key == "CapsLock") {
      for (let i = 0; i < upperOrNot.length; i++) {
        upperOrNot[i].classList.toggle("uppercase");
      }
    }

    if (event.code == "ShiftLeft" || event.code == "ShiftRight") {
      for (let i = 0; i < upperOrNot.length; i++) {
        upperOrNot[i].classList.toggle("uppercase");
      }
    }

    // Проверка на совпадение по символу
    if (event.key === currentLetter.label) {
      letterId = letterId + 1;
      clearAndUpdate();
    } else if (event.key === "Shift") {
      return;
    } else if (event.key === "CapsLock") {
      return;
    } else {
      mistakeCounter += 1;
      event.preventDefault();

      currentLetter.succes = false;
      clearAndUpdate();
    }

    // Если текущая линия меньше первоначальной, то текст стирается (очищаем линии)ы
    if (currentLineNumber !== getCurrentLineNumber()) {
      inputElement.value = "";
      event.preventDefault();

      const time = Date.now() - startMoment;
      console.log(time);
      document.querySelector("#wordsSpeed").textContent = Math.round(
        letterCounter / (time / 60000)
      );
      document.querySelector("#mistakePercent").textContent =
        Math.floor(100 * (mistakeCounter / letterCounter)) + "%";
      startMoment = null;
      letterCounter = 0;
      mistakeCounter = 0;
    }
  });

  inputElement.addEventListener("keyup", function(event) {
    const element = document.querySelector(`[data-key="${event.key}"]`);
    const AnotherElement = document.querySelector(
      `[data-code="${event.code}"]`
    );

    if (element) {
      element.classList.remove("hint");
    }

    if (AnotherElement) {
      AnotherElement.classList.remove("hint");
    }

    if (event.code == "ShiftLeft" || event.code == "ShiftRight") {
      for (let i = 0; i < upperOrNot.length; i++) {
        upperOrNot[i].classList.toggle("uppercase");
      }
    }
  });
}

// Функция для создания текстовых строк для ввода
function getLines(text) {
  const lines = []; // Создаю будущий массив строк (сюда буду помещать строки)

  let line = []; // Создаю пустой массив (формирую строки)
  let idCounter = 0; // Счетчик ID. Чтобы каждой букве присвоить ID

  // letter - символ, text - массив, который передается из параметров
  for (let letter of text) {
    // цикл for of пройдет по каждому символу строки
    idCounter = idCounter + 1; // Каждому следующему сивмолу присваиваю id на 1 больше

    line.push({
      // При каждой итерации создаю объект, который имеет 3 свойства
      // И помещаю его в массив
      label: letter,
      id: idCounter,
      succes: true
    });
    if (line.length >= 70 || letter === "\n") {
      // Если Line содежит более 70 символов, то Я вношу её в массив lines, затем очищаю и начинаю по новой
      lines.push(line);
      line = []; // Очищаю
    }
  }

  if (line.length > 0) {
    lines.push(line); // После цикла остатки пушу в массив (все, что не влезло)
  }

  return lines;
}

// Функция создает div с классом Line И помещает в него букву. Так же оборачивает её в span и присваивает ему class (либо done либо hint)
// По сути каждую строку
function lineToHTML(line) {
  let divElement = document.createElement("div");

  divElement.classList.add("line");

  for (const letter of line) {
    const spanEl = document.createElement("span");
    spanEl.textContent = letter.label; // Беру символ из объекта и кладу в спан
    divElement.append(spanEl); // В самый конец нашего созданного дива мы добавляем этот элемент (текст выстраивается по порядку)

    // Все символы, ID которых меньше letterID получают класс done
    if (letterId > letter.id) {
      spanEl.classList.add("done");
    }

    if (!letter.succes) {
      spanEl.classList.add("hint");
    }
  }
  return divElement;
}

// Функция, которая будет отображать номер строки, который сейчас актуален
// Для этого пройдемся по всем линиям (цикл for)
function getCurrentLineNumber() {
  for (let i = 0; i < lines.length; i++) {
    for (const letter of lines[i]) {
      // Здесь мы проходимся по всем символам текущей линии
      if (letter.id === letterId) {
        // Если id елемента совпадает с id letterID, то мы возвращаем номер строки, в которой это произошло
        return i;
      }
    }
  }
}

// Функция очищает поле перед началом и вставляет строки (по сути запускает другие функции)
function clearAndUpdate() {
  const currentLineNumber = getCurrentLineNumber();

  textExampleElement.innerHTML = ""; // Очищаю все что есть (неважно что было)

  // Беру все, что содержится в lines (Там у нас все массивы, в которых содержаться объекты со свойствами в виде букв)
  // Беру каждый симвом (он же объект), помещаю в div, оборачиваю в span и вставляю в поле для вывода текста
  for (let i = 0; i < lines.length; i++) {
    const html = lineToHTML(lines[i]); // создаю переменную html, в которую вставляю по очереди
    textExampleElement.append(html);

    // Здесь, если номер строки меньше текущего или больше на 2, то они скрываются (чтобы убрать лишнее)
    if (i < currentLineNumber || i > currentLineNumber + 2) {
      html.classList.add("hidden");
    }
  }
}

// Что делает функция: мы сначала проходим по каждой линии в Lines, в каждой линии (массив в массиве) мы проходимся по всем символам и если id совпадает, мы возвращаем объект, который совпал
// По сути находим совпадения в символе
function getCurrentLetter() {
  for (const line of lines) {
    for (const letter of line) {
      if (letterId === letter.id) {
        return letter;
      }
    }
  }
}
