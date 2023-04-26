const body = document.querySelector('[data-js="body"]');
const button = document.querySelector('[data-js="button"]');

button.addEventListener("click", () => {
  body.classList.toggle("black");
});

// ("click", () => {
//   // answerOne.classList.toggle("question-card__answer--hidden");
//   console.log("test");
// });
