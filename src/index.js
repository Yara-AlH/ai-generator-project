function handleClick(event) {
  event.preventDefault();
  let wordInput = document.querySelector(".wordInput");
  let keyword = wordInput.value;

  let factElement = document.querySelector("#fact-container");
  factElement.classList.remove("hidden");
  factElement.innerHTML = `<div class="generating">⏳ Generating a fun fact about ${keyword}<div>`;

  let apiKey = "0c6283dt87dcb24afbce90bd2bac3o16";
  let prompt = `Tell me a fun fact about ${keyword} `;
  let context = `No introduction. Start with Fun Fact:.  Seperate each line with a <br />. On a new line, sign the fact with <strong>SheCodes AI</strong>  `;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayResponse);
}

function displayResponse(response) {
  let answer = response.data.answer;

  new Typewriter("#fact-container", {
    strings: answer,
    autoStart: true,
    delay: 10,
  });
}

let formElement = document.querySelector("#form-element");
formElement.addEventListener("submit", handleClick);
