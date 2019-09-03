window.addEventListener("load", () => {
  const input = document.querySelector(".field");
  const output = document.querySelector(".story");
  const buttons = document.querySelectorAll(".cell");
  const clearButton = document.querySelector("[data-key='с']");
  const plusButton = document.querySelector("[data-key='+']");

  let arrNum = [];
  let totalCount = 0;

  document.body.addEventListener("keydown", function(event) {
    let numbers = parseInt(event.key);

    if (numbers >= 0 || numbers <= 9) {
      input.textContent += event.key;
      if (input.textContent.length > 15) {
      }
    }
  });

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseup", function(event) {
      let getStrToNum = parseInt(arrNum[input.textContent.length - 1]);
      let buttonAttr = buttons[i].getAttribute("data-number");
      buttonAttr = parseInt(buttonAttr);

      if (buttonAttr >= 0 || buttonAttr <= 9) {
        input.textContent += buttonAttr;
        arrNum.push(input.textContent);
      }

      if (event.target == plusButton) {
        totalCount = totalCount + getStrToNum;
        totalCount = parseInt(totalCount);
        input.textContent = "";
        arrNum = [];
        output.textContent = totalCount;
      }

      if (event.target == clearButton) {
        input.textContent = "";
        arrNum = [];
        totalCount = output.textContent = 0;
      }

      //   console.log(parseInt(arrNum[input.textContent.length - 1]));
    });
  }
});
