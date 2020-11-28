var btnTranslate = document.querySelector("#button");
var inputTxt = document.querySelector("#input");
var outputTxt = document.querySelector("#output");

var serverurl = "https://api.funtranslations.com/translate/minion.json";

const converttext = (text) => {
  return serverurl + "?" + "text=" + text;
};

const clickHandler = () => {
  var textToTranslate = inputTxt.value;

  fetch(converttext(textToTranslate))
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log("Error occured while calling the API");
      } else {
        var translatedText = data.contents.translated;
        outputTxt.innerText = translatedText;
      }
    });
  // .catch((error) => console.log(error));
};

btnTranslate.addEventListener("click", clickHandler);
