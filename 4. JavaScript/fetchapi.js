const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// const getFacts = async () => {
//     console.log("getting data....");
//     let response = await fetch(URL); //response is a object
//     console.log(response); // JSON Format
//     let data = await response.json(); //  json() : JSON to javascript object
//     factPara.innerText = data[Math.floor(Math.random() * 5)+ 1].text;
// };


function getFacts(){
    fetch(URL).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      factPara.innerText = data[Math.floor(Math.random() * 5)+ 1].text;
    });
}

btn.addEventListener("click",getFacts());

