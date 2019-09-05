window.addEventListener("load", () => {
  if (
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof DocumentTouch)
  ) {
  } else {
    document.body.classList.add("no-touch");
  }
});
