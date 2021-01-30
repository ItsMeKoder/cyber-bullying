function submit(){
  inputField = document.getElementById("inForm");
  // let str = inputField.value;
  // console.log(str)
  output();
  // inputField.value = "";
}
document.getElementById("inForm").addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    output(submit);    
  }
});


// function resize(){
  // chatDiv=document.getElementById("frame")
  // console.info(chatDiv)
// }

function testMobile() {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}


function getinForm(){
  field= document.getElementById("inForm");
  setTimeout(function resetVal(){field.value=""},1)
  return field.value;
  // feild.value="";
}
function output() {
  let product;
  input=getinForm()
  // console.log("str from func  "+str);
  // console.info(str.text)
  console.info(typeof(input))

  txt = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = txt
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you")
    .replace(/"?"/g, "")
    .replace(/"i'am"/, "i am")
    .replace(/don't/,"do not");
  console.info("Cleaned Query is",text);
  if (compare(prompts, replies, text)) { 
    
    product = compare(prompts, replies, text);
    addChat(input, product);

  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
    addChat(input,product)
  } else if (text.match(/(corona|covid|virus)/gi)) {
    addChat(input,product)
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    product = alternative[0];
    addChat(input,product,true)
  }


}

function compare(promptsArray, repliesArray, str) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    console.log("NOw looking into x=",x,promptsArray[x]);
    for (let y = 0; y < promptsArray[x].length; y++) {
      console.log("NOw looking into y=",y,promptsArray[x].length, "looking for ",promptsArray[x][y],"Q=",str );
      if (promptsArray[x][y].toLowerCase() === str) {
        // console.info("Reply has been found for the asked question")
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChat(input, product,googlesearch=false) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="/cyber-bullying/static/user.png" class="avatar"><span>${input}</span>`;
  
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "/cyber-bullying/static/bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  if (`${googlesearch}` === "true"){
    console.info(`${googlesearch}`)
    setTimeout(() => {
      botText.innerText = `${product}`;
      window.open("https://google.com/search?igu=1&ei=&q="+`${input}`);
      // textToSpeech(product)
    }, 2000
    )
  }
  else{
    setTimeout(() => {
      botText.innerText = `${product}`;
      // textToSpeech(product)
    }, 2000
    )
  }

}