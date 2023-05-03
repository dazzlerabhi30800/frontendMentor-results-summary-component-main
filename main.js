fetch("./data.json")
  .then((response) => response.json())
  .then((json) => populateScore(json));

const scoreWrapper = document.querySelector(".score--wrapper");
const scoreElement = document.querySelector(".score");

function populateScore(data) {
  scoreWrapper.innerHTML = data
    .map(
      (item) =>
        `
        <div class="score--card ${item.category}--card">
            <div class="score--logo">
              <img src=${item.icon} alt="reaction" />
              <p>${item.category}</p>
            </div>
            <p class="total--score"><span>${item.score}</span> / 100</p>
          </div>
        `
    )
    .join("");
}

function setScore() {
  let score = 0;
  let interval = setInterval(() => {
    score++;
    if (score >= 76) {
      score = 76;
      clearInterval(interval);
    }
    scoreElement.innerText = score;
  }, 30);
}

setScore();
