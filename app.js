const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

function randomQuote(){
    quoteBtn.classList.add("loading")
    quoteBtn.innerHTML = "Loading Quote....";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerHTML = result.content;
        authorName.innerHTML = result.author;
        quoteBtn.innerHTML = "New Quote";
        quoteBtn.classList.remove("loading")
    });
}

soundBtn.addEventListener("click" , ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${authorName.innerHTML}`);
    speechSynthesis.speak(utterance); 
})

copyBtn.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(quoteText.innerHTML);
})

twitterBtn.addEventListener("click" , ()=>{
    let twitterUrl = `https://twitter.com/intent/tweet?url="${quoteText.innerHTML}" __${authorName.innerHTML}`;
    window.open(twitterUrl, "_blank");
})


quoteBtn.addEventListener("click" , randomQuote);