window.addEventListener("load", () => {
  const input = document.querySelector(".field");
  const output = document.querySelector(".story");
  const sign = document.querySelector(".sign");
  const buttons = document.querySelectorAll(".cell");
  const clearButton = document.querySelector("[data-key='c']");
  const plusButton = document.querySelector("[data-key='+']");
  const minusButton = document.querySelector("[data-key='-']");
  const equally = document.querySelector("[data-key='=']");
  const multiple = document.querySelector("[data-key='*']");
  const split = document.querySelector("[data-key='/']");
  const backspace = document.querySelector("[data-key='Backspace']");
  const textarea = document.querySelector(".textarea");
  const html5Multiple = String.fromCharCode(215);
  const html5Split = String.fromCharCode(247);

  const whatIs = {
    isPlus: () => {
      checkSpaceOutput();
      isPlus = false;
      arrNum = parseFloat(input.textContent);
      storyArr.push(arrNum);
      totalCount = totalCount + arrNum;
      clearFields();
    },
    isMinus: () => {
      checkSpaceOutput();
      isMinus = false;
      arrNum = parseFloat(input.textContent);
      storyArr.push(arrNum);
      totalCount = totalCount - arrNum;
      clearFields();
    },
    isMultiple: () => {
      checkSpaceOutput();
      isMultiple = false;
      arrNum = parseFloat(input.textContent);
      storyArr.push(arrNum);
      totalCount = totalCount * arrNum;
      clearFields();
    },
    isSplit: () => {
      checkSpaceOutput();
      isSplit = false;
      arrNum = parseFloat(input.textContent);
      storyArr.push(arrNum);
      totalCount = totalCount / arrNum;
      clearFields();
    }
  };

  let arrNum = 0;
  let totalCount = 0;
  let storyArr = [];
  let lastTotalCount;

  let isPlus = false;
  let isMinus = false;
  let isMultiple = false;
  let isSplit = false;
  let isEqually = false;

  init();

  function init() {
    document.body.addEventListener("keydown", function(event) {
      let numbers = parseFloat(event.key);

      if (numbers >= 0 || numbers <= 9) {
        if (input.textContent.length > 14) {
          return;
        }
        input.textContent += event.key;
      }

      numpadCacl();
    });

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("mouseup", function(event) {
        let buttonAttr = buttons[i].getAttribute("data-number");
        buttonAttr = parseFloat(buttonAttr);

        if (buttonAttr >= 0 || buttonAttr <= 9) {
          if (input.textContent.length > 14) {
            return;
          }
          input.textContent += buttonAttr;
        }

        calc();
      });
    }
  }

  function clearFields() {
    input.textContent = "";
    arrNum = [];
    output.textContent = totalCount;
  }

  function checkSpaceField() {
    arrNum = parseFloat(input.textContent);
    totalCount = arrNum;
  }

  function checkSpaceOutput() {
    if (output.textContent.length == 0) {
      checkSpaceField();
      clearFields();
      return;
    }
  }

  function allFalse() {
    isPlus = false;
    isMinus = false;
    isMultiple = false;
    isSplit = false;
  }

  // Функции действий (сложение, вычитание, умножение и деление)

  function plus() {
    sign.textContent = "";
    sign.textContent = "+";

    storyArr.push(input.textContent);
    storyArr.push("+");

    if (!input.textContent) {
      isPlus = true;
      return;
    }

    isPlus = true;

    if (output.textContent.length == 0) {
      checkSpaceField();
      clearFields();

      return;
    }

    arrNum = parseFloat(input.textContent);

    totalCount = parseFloat((totalCount + arrNum).toFixed(5));

    clearFields();
  }

  function minus() {
    sign.textContent = "";
    sign.textContent = "-";

    storyArr.push(input.textContent);
    storyArr.push("-");

    if (!input.textContent) {
      isMinus = true;
      return;
    }

    isMinus = true;

    if (output.textContent.length == 0) {
      checkSpaceField();
      clearFields();

      return;
    }

    arrNum = parseFloat(input.textContent);

    totalCount = parseFloat((totalCount - arrNum).toFixed(5));
    clearFields();
  }

  function multipleNum() {
    sign.textContent = "";
    sign.textContent = html5Multiple;

    storyArr.push(input.textContent);
    storyArr.push(html5Multiple);

    if (!input.textContent) {
      isMultiple = true;
      return;
    }

    isMultiple = true;

    if (output.textContent.length == 0) {
      checkSpaceField();
      clearFields();

      return;
    }

    arrNum = parseFloat(input.textContent);

    totalCount = parseFloat((totalCount * arrNum).toFixed(5));
    clearFields();
  }

  function splitNum() {
    sign.textContent = "";
    sign.textContent = html5Split;

    storyArr.push(input.textContent);
    storyArr.push(html5Split);

    if (!input.textContent) {
      isSplit = true;
      return;
    }

    isSplit = true;

    if (output.textContent.length == 0) {
      checkSpaceField();
      clearFields();

      return;
    }

    arrNum = parseFloat(input.textContent);

    totalCount = parseFloat((totalCount / arrNum).toFixed(5));
    clearFields();
  }

  // Функции действий (сложение, вычитание, умножение и деление)

  calc = () => {
    if (event.target == equally) {
      if (isPlus) {
        isEqually = true;
        isPlus = false;
        arrNum = parseFloat(input.textContent);
        storyArr.push(arrNum);
        totalCount = parseFloat((totalCount + arrNum).toFixed(5));
        storyArr.push(` = ${totalCount}`);

        storyArr.unshift(lastTotalCount);
        lastTotalCount = totalCount; // Сохраняем число после нажатия на РАВНО

        insertText();

        sign.textContent = "";
        clearFields();
      }

      if (isMinus) {
        isEqually = true;
        isMinus = false;
        arrNum = parseFloat(input.textContent);
        storyArr.push(arrNum);
        totalCount = parseFloat((totalCount - arrNum).toFixed(5));
        storyArr.push(` = ${totalCount}`);
        storyArr.unshift(lastTotalCount);

        lastTotalCount = totalCount; // Сохраняем число после нажатия на РАВНО

        insertText();

        sign.textContent = "";
        clearFields();
      }

      if (isMultiple) {
        isEqually = true;
        isMultiple = false;
        arrNum = parseFloat(input.textContent);
        storyArr.push(arrNum);
        totalCount = parseFloat((totalCount * arrNum).toFixed(5));
        storyArr.push(` = ${totalCount}`);
        storyArr.unshift(lastTotalCount);

        lastTotalCount = totalCount; // Сохраняем число после нажатия на РАВНО

        insertText();

        sign.textContent = "";
        clearFields();
      }

      if (isSplit) {
        isEqually = true;
        isSplit = false;
        arrNum = parseFloat(input.textContent);
        storyArr.push(arrNum);
        totalCount = parseFloat((totalCount / arrNum).toFixed(5));
        storyArr.push(` = ${totalCount}`);
        storyArr.unshift(lastTotalCount);

        lastTotalCount = totalCount; // Сохраняем число после нажатия на РАВНО

        insertText();

        sign.textContent = "";
        clearFields();
      }
    }

    if (event.target == plusButton) {
      if (isMinus) {
        whatIs.isMinus();
      }

      if (isSplit) {
        whatIs.isSplit();
      }

      if (isMultiple) {
        whatIs.isMultiple();
      }

      plus();
    }

    if (event.target == minusButton) {
      if (isPlus) {
        whatIs.isPlus();
      }

      if (isSplit) {
        whatIs.isSplit();
      }

      if (isMultiple) {
        whatIs.isMultiple();
      }

      minus();
    }

    if (event.target == multiple) {
      if (isPlus) {
        whatIs.isPlus();
      }

      if (isMinus) {
        whatIs.isMinus();
      }

      if (isSplit) {
        whatIs.isSplit();
      }

      multipleNum();
    }

    if (event.target == split) {
      if (isPlus) {
        whatIs.isPlus();
      }

      if (isMinus) {
        whatIs.isMinus();
      }

      if (isMultiple) {
        whatIs.isMultiple();
      }

      splitNum();
    }

    if (event.target == clearButton) {
      input.textContent = "";
      sign.textContent = "";
      arrNum = [];
      totalCount = output.textContent = "";
      allFalse();
    }

    if (event.target == backspace) {
      let getStr = input.textContent;
      input.textContent = getStr.slice(0, -1);
    }
  };

  numpadCacl = () => {
    if (event.key == "+") {
      if (isMinus) {
        whatIs.isMinus();
      }

      if (isSplit) {
        whatIs.isSplit();
      }

      if (isMultiple) {
        whatIs.isMultiple();
      }

      plus();
    }

    if (event.key == "-") {
      if (isPlus) {
        whatIs.isPlus();
      }

      if (isSplit) {
        whatIs.isSplit();
      }

      if (isMultiple) {
        whatIs.isMultiple();
      }

      minus();
    }

    if (event.key == "*") {
      if (isPlus) {
        whatIs.isPlus();
      }

      if (isMinus) {
        whatIs.isMinus();
      }

      if (isSplit) {
        whatIs.isSplit();
      }

      multipleNum();
    }

    if (event.key == "/") {
      if (isPlus) {
        whatIs.isPlus();
      }

      if (isMinus) {
        whatIs.isMinus();
      }

      if (isMultiple) {
        whatIs.isMultiple();
      }

      splitNum();
    }

    if (event.key == "Enter") {
      if (isPlus) {
        isPlus = false;
        arrNum = parseFloat(input.textContent);

        storyArr.push(arrNum);
        totalCount = parseFloat((totalCount + arrNum).toFixed(5));
        storyArr.push(` = ${totalCount}`);

        storyArr.unshift(lastTotalCount);
        lastTotalCount = totalCount; // Сохраняем число после нажатия на РАВНО

        insertText();
        sign.textContent = "";
        clearFields();
      }
      if (isMinus) {
        isMinus = false;
        arrNum = parseFloat(input.textContent);

        storyArr.push(arrNum);
        totalCount = parseFloat((totalCount - arrNum).toFixed(5));
        storyArr.push(` = ${totalCount}`);

        storyArr.unshift(lastTotalCount);
        lastTotalCount = totalCount; // Сохраняем число после нажатия на РАВНО

        insertText();
        sign.textContent = "";
        clearFields();
      }
      if (isMultiple) {
        isMultiple = false;
        arrNum = parseFloat(input.textContent);

        storyArr.push(arrNum);
        totalCount = parseFloat((totalCount * arrNum).toFixed(5));
        storyArr.push(` = ${totalCount}`);

        storyArr.unshift(lastTotalCount);
        lastTotalCount = totalCount; // Сохраняем число после нажатия на РАВНО

        insertText();

        sign.textContent = "";
        clearFields();
      }
      if (isSplit) {
        isSplit = false;
        arrNum = parseFloat(input.textContent);

        storyArr.push(arrNum);
        totalCount = parseFloat((totalCount / arrNum).toFixed(5));
        storyArr.push(` = ${totalCount}`);

        storyArr.unshift(lastTotalCount);
        lastTotalCount = totalCount; // Сохраняем число после нажатия на РАВНО

        insertText();
        sign.textContent = "";
        clearFields();
      }
    }

    if (event.key == "Delete") {
      sign.textContent = "";
      input.textContent = "";
      arrNum = [];
      totalCount = output.textContent = "";
      allFalse();
    }

    if (event.key == "Backspace") {
      let getStr = input.textContent;
      input.textContent = getStr.slice(0, -1);
    }
  };

  insertText = () => {
    let span = document.createElement("span");
    span.classList.add("textarea__span");

    let str = storyArr.join(" "); // Преобразую массив в строку с заменой запятой на пробел
    span.textContent = str;
    textarea.append(span);
    storyArr = [];
  };
});
