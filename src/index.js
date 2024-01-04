function handleClick(event) {
  let apiKey = "0c6283dt87dcb24afbce90bd2bac3o16";
  let prompt = `Generate a dad joke using the word ${input} `;
  let keyword = event.target.value;
  console.log(keyword);
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
}

let submitButton = document.querySelector("submit-button");
submitButton.addEventListener("click", handleClick);
