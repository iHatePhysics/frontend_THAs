const joke = {};
const nextbtn = document.querySelector(".next-btn");

async function getJoke() {
  const res = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  const data = await res.json();
  return data;
}

nextbtn.addEventListener("click", async () => {
  let response = getJoke();
  let jokes = await response;
  let joke = jokes[0];
  const setup = document.querySelector(".setup");
  const punchline = document.querySelector(".punchline");
  console.log(joke);
  console.log(joke.setup);
  console.log(joke.punchline);
  setup.innerHTML = joke.setup;
  punchline.innerHTML = joke.punchline;
});
