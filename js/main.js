let textareaEl = document.querySelector("#text");
let text =null;

let data={
  uppercases: 0,
  lowercases:0,
  spaces:0,
  digits:0,
  words:0,
  sentences:0,
  
  consunant:0,
  vowels: 0,
};
const setText = () => {
 text=textareaEl.value;

 const findLength= (item) => (item === null? 0 : item.length);

 if(text != null){
   data.uppercases=findLength(text.match(/[A-Z]/g));
   data.lowercases=findLength(text.match(/[a-z]/g));
   data.spaces=findLength(text.match(/\s/g));
   data.digits=findLength(text.match(/\d/g));
   data.vowels=findLength(text.match(/[aeiou]/gi));
   data.sentences=findLength(text.match(/\056/gi));
   data.consunant=findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
   data.words= findLength(text.match(/[a-zA-Z]+/gi));
  
 }
 localStorage.setItem("data", JSON.stringify(data));
 window.location="info.html";

};
 const getData = () =>{
return JSON.parse(localStorage.getItem("data"));
 }

 const showData = () =>{
   let data=getData();
   let htmlContent = "";

   for(item in data){
     htmlContent+= `<div class="box"> <h1> ${data[item]} </h1> <a class="btn-primary main-container"> ${item} </a> </div>`;
   }
   document.querySelector(".info-wrapper").innerHTML = htmlContent;
 }