window.addEventListener("load", () => {
  const input = document.querySelector(".field");
  const output = document.querySelector(".story");
  const buttons = document.querySelectorAll(".cell");
  const clearButton = document.querySelector("[data-key='c']");
  const plusButton = document.querySelector("[data-key='+']");
  const minusButton = document.querySelector("[data-key='-']");
  const equally = document.querySelector("[data-key='=']");
  const multiple = document.querySelector("[data-key='*']");
  const split = document.querySelector("[data-key='/']");

  const whatIs = {
    isPlus: () => {
      checkSpaceOutput();
      isPlus = false;
      arrNum = parseFloat(input.textContent);
      totalCount = totalCount + arrNum;
      clearFields();
    },
    isMinus: () => {
      checkSpaceOutput();
      isMinus = false;
      arrNum = parseFloat(input.textContent);
      totalCount = totalCount - arrNum;
      clearFields();
    },
    isMultiple: () => {
      checkSpaceOutput();
      isMultiple = false;
      arrNum = parseFloat(input.textContent);
      totalCount = totalCount * arrNum;
      clearFields();
    },
    isSplit: () => {
      checkSpaceOutput();
      isSplit = false;
      arrNum = parseFloat(input.textContent);
      totalCount = totalCount / arrNum;
      clearFields();
    }
  };

  let arrNum = 0;
  let totalCount = 0;

  let isPlus = false;
  let isMinus = false;
  let isMultiple = false;
  let isSplit = false;

  init();

  function init() {
    document.body.addEventListener("keydown", function(event) {
      let numbers = parseFloat(event.key);

      console.log(event);

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

  calc = () => {
    if (event.target == equally) {
      if (isPlus) {
        isPlus = false;
        arrNum = parseFloat(input.textContent);
        totalCount = parseFloat((totalCount + arrNum).toFixed(5));
        clearFields();
      }
      if (isMinus) {
        isMinus = false;
        arrNum = parseFloat(input.textContent);
        totalCount = parseFloat((totalCount - arrNum).toFixed(5));
        clearFields();
      }
      if (isMultiple) {
        isMultiple = false;
        arrNum = parseFloat(input.textContent);
        totalCount = parseFloat((totalCount * arrNum).toFixed(5));
        clearFields();
      }
      if (isSplit) {
        isSplit = false;
        arrNum = parseFloat(input.textContent);
        totalCount = parseFloat((totalCount / arrNum).toFixed(5));
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
      arrNum = [];
      totalCount = output.textContent = "";
      allFalse();
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
        totalCount = parseFloat((totalCount + arrNum).toFixed(5));
        clearFields();
      }
      if (isMinus) {
        isMinus = false;
        arrNum = parseFloat(input.textContent);
        totalCount = parseFloat((totalCount - arrNum).toFixed(5));
        clearFields();
      }
      if (isMultiple) {
        isMultiple = false;
        arrNum = parseFloat(input.textContent);
        totalCount = parseFloat((totalCount * arrNum).toFixed(5));
        clearFields();
      }
      if (isSplit) {
        isSplit = false;
        arrNum = parseFloat(input.textContent);
        totalCount = parseFloat((totalCount / arrNum).toFixed(5));
        clearFields();
      }
    }

    if (event.key == "Delete") {
      input.textContent = "";
      arrNum = [];
      totalCount = output.textContent = "";
      allFalse();
    }
  };
});
