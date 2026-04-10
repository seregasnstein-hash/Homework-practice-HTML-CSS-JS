const stats = document.querySelectorAll(".stats__quantity");
const headerBtnLogin = document.querySelector("#headerBtnLogin");
const headerBtnCart = document.querySelector("#headerBtnCart");
const btnGetQuote = document.querySelector('#btnGetQuote');
const btnLearnMore = document.querySelector('#btnLearnMore');


stats.forEach((elem) => {
  let counter = elem.querySelector("span");
  counter.innerText = Math.floor(Math.random() * 201);
});

function activeBtn(active, noActive) {
  active.addEventListener("click", () => {
    active.classList.add("button--primary");
    noActive.classList.remove("button--primary");
  });
};

activeBtn(headerBtnLogin, headerBtnCart);
activeBtn(headerBtnCart, headerBtnLogin);
activeBtn(btnGetQuote, btnLearnMore);
activeBtn(btnLearnMore, btnGetQuote);
