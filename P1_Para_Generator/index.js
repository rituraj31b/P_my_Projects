const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");

const generateWord = (length) => {
  let text = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < length; ++i) {
            const random = (Math.random() * 25).toFixed(0);
            text += letters[random];
        }
  return text;
};

const generatePara = () => {
  const numOfWords = Number(input.value);
  const para = document.createElement("p");
  let data = "";
        for (let i = 0; i < numOfWords; ++i) {
            const randomNumber = (Math.random() * 15).toFixed(0);
            data += generateWord(randomNumber);
            data += " ";
        }
  para.innerText = data.toLowerCase();
  para.setAttribute("class", "paras");
  container.append(para);
};