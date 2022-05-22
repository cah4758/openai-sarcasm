const formEl = document.getElementById("chat-form");
const chatEl = document.getElementById("chat-session");

formEl.addEventListener("submit", sendQuestion);

function sendQuestion(e) {
  console.log(formEl.value);
  e.preventDefault();
  const response = fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formEl.value),
  }).then((response) => {
    console.log(response);
  });
  //   .then(response =>{return response.json})
}
