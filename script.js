function updateText(){

  let delay = 200;
  let h2 = document.getElementById("animated");
  let text = h2.textContent;

  h2.innerHTML = text
    .split("")
    .map(letter => {
      return `<span>` + letter + `</span>`;
    })
    .join("");

  Array.from(h2.children).forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("wavy");
    }, index * 60 + delay);
  });
}

updateText();
