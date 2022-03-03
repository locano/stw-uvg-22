import React, { useState, useEffect } from "react";
import "./jsLab.css";
function jsLab() {
  let chatInput;
  let chatContainer;
  let intervalRefresh;
  let _user = "LUDWING";

  let primaryColor = "#303F9F";
  let lightPrimaryColor = "#C5CAE9";
  let accentColor = "#607D8B";

  function startChat() {
    askUser();

    // create main container
    let container = createContainer();

    // chatHeader
    let chatHeader = createHeader();
    container.appendChild(chatHeader);

    // chatContainer
    let chatContainer = createChatContainer();
    container.appendChild(chatContainer);

    // chatInput
    chatInput = createChatInput();

    container.appendChild(chatInput);

    httpGetChats();
  }

  function createContainer() {
    let container = document.createElement("div");
    container.id = "container";
    container.style.width = "450px";
    container.style.height = "calc(100vh - 75px)";
    container.style.backgroundColor = "#E1E1E1";
    container.style.margin = "auto";
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.borderRadius = "16px";
    // container.style.boxShadow = "5px 5px #45454521";
    // container.style.borderRadius = "50%";

    let container2 = document.createElement("div");
    container2.id = "container2";
    container2.style.width = "415px";

    container.appendChild(container2);
    document.getElementById("chat-body").appendChild(container);
    return container2;
  }

  function createHeader() {
    let chatHeaderPhone = document.createElement("div");
    chatHeaderPhone.id = "chatHeaderPhone";
    chatHeaderPhone.style.backgroundColor = "#E1E1E1";
    chatHeaderPhone.style.height = "35px";
    chatHeaderPhone.style.width = "50%";
    chatHeaderPhone.style.borderRadius = "0% 0% 35% 35%";
    chatHeaderPhone.style.position = "relative";
    chatHeaderPhone.style.left = "100px";
    chatHeaderPhone.style.top = "-10px";

    let chatHeaderPhone2 = document.createElement("div");
    chatHeaderPhone2.id = "chatHeaderPhone";
    chatHeaderPhone2.style.backgroundColor = "gray";
    chatHeaderPhone2.style.height = "7px";
    chatHeaderPhone2.style.width = "75px";
    chatHeaderPhone2.style.borderRadius = "20%";
    chatHeaderPhone2.style.top = "10px";
    chatHeaderPhone2.style.left = "65px";
    chatHeaderPhone2.style.position = "relative";
    chatHeaderPhone.appendChild(chatHeaderPhone2);

    let chatHeaderPhone3 = document.createElement("div");
    chatHeaderPhone3.id = "chatHeaderPhone";
    chatHeaderPhone3.style.backgroundColor = "gray";
    chatHeaderPhone3.style.height = "8px";
    chatHeaderPhone3.style.width = "8px";
    chatHeaderPhone3.style.borderRadius = "50%";
    chatHeaderPhone3.style.top = "2px";
    chatHeaderPhone3.style.left = "150px";
    chatHeaderPhone3.style.position = "relative";
    chatHeaderPhone.appendChild(chatHeaderPhone3);

    let chatHeader = document.createElement("div");
    chatHeader.id = "chatHeader";
    chatHeader.style.height = "100px";
    chatHeader.style.color = "white";
    chatHeader.style.alignItems = "center";
    chatHeader.style.backgroundColor = primaryColor;
    chatHeader.style.padding = "10px";
    chatHeader.style.borderRadius = "10px 10px 20px 20px";
    chatHeader.style.display = "block";
    chatHeader.appendChild(chatHeaderPhone);

    // let title = document.createElement("h3");
    // title.style.color = "white";
    // title.style.textAlign = "center";
    // title.style.marginRight = "65px";
    // title.innerHTML = _user.toUpperCase();
    // chatHeader.appendChild(title);

    let refreshDiv = document.createElement("div");
    refreshDiv.id = "refreshDiv";
    refreshDiv.style.display = "flex";
    refreshDiv.style.justifyContent = "center";
    let check = document.createElement("input");
    check.type = "checkbox";
    check.id = "refresh";
    check.onclick = handleCheck;
    refreshDiv.appendChild(check);

    let labelCheck = document.createElement("label");
    labelCheck.innerHTML = "Auto Refresh (10s)";

    refreshDiv.appendChild(labelCheck);
    chatHeader.appendChild(refreshDiv);
    return chatHeader;
  }

  function createChatContainer() {
    let chatContainer = document.createElement("div");
    chatContainer.id = "chatContainer";
    chatContainer.style.height = "calc(100vh - 390px)";
    chatContainer.style.backgroundColor = "white";
    chatContainer.style.overflow = "auto";
    chatContainer.style.padding = "10px";
    chatContainer.style.marginTop = "-15px";

    return chatContainer;
  }

  function createChatInput() {
    let chatInputDiv = document.createElement("div");
    chatInputDiv.id = "chatInputDiv";
    let chatInput = document.createElement("textarea");
    chatInput.id = "chatInput";
    chatInput.maxLength = "140";
    chatInput.placeholder = "Type your message";
    chatInput.autofocus = "true";
    chatInput.style.padding = "10px";
    chatInput.style.width = "395px";
    chatInput.style.height = "150px";
    chatInput.style.borderLeft = "none";
    chatInput.style.borderRight = "none";
    chatInput.style.borderBottom = "none";
    chatInput.style.resize = "none";
    chatInput.onkeypress = handleEnter;
    chatInputDiv.appendChild(chatInput);
    return chatInputDiv;
  }

  // Handle events

  function handleCheck(e) {
    if (document.getElementById("refresh").checked) {
      intervalRefresh = window.setInterval(function () {
        httpGetChats();
      }, 2000);
    } else {
      clearInterval(intervalRefresh);
    }
  }

  function handleEnter(e) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      e.preventDefault();
      //Enter keycode
      let chatInput = document.getElementById("chatInput");
      if (chatInput.value != "") {
        httpPostChat(chatInput.value);
        setTimeout(() => {
          httpGetChats();
        }, 500);
        chatInput.value = "";
      }
    }
  }

  /**
   *  CHAT BUBBLES */
  function createMessage(element, container, color) {
    let messageContainer = document.createElement("div");
    messageContainer.style.width = "390px";
    messageContainer.style.minHeight = "30px";
    messageContainer.style.transform =
      element.user == _user ? "rotateY(180deg)" : "";
    messageContainer.style.display = "inline-flex";

    let userInfo = document.createElement("div");
    userInfo.style.backgroundColor = color;
    userInfo.style.color = "white";
    userInfo.style.height = "40px";
    userInfo.style.width = "40px";
    userInfo.style.marginRight = "5px";
    userInfo.style.borderRadius = "50%";
    userInfo.style.textAlign = "center";
    userInfo.style.display = "flex";
    userInfo.style.justifyContent = "center";
    userInfo.style.alignItems = "center";
    userInfo.innerHTML = `<i class="fa fa-user"></i>`;
    userInfo.style.transform = element.user == _user ? "rotateY(180deg)" : "";
    messageContainer.appendChild(userInfo);

    let smallTriangle = document.createElement("div");
    smallTriangle.style.width = "0";
    smallTriangle.style.height = "0";
    smallTriangle.style.marginTop = "15px";
    smallTriangle.style.borderTop = "5px solid transparent";
    smallTriangle.style.borderBottom = "5px solid transparent";
    smallTriangle.style.borderRight = `10px solid ${color}`;
    messageContainer.appendChild(smallTriangle);

    let bubble = document.createElement("div");
    bubble.style.fontSize = "12px";
    bubble.style.minWidth = "100px";
    bubble.style.maxWidth = "300px";
    bubble.style.minHeight = "30px";
    bubble.style.backgroundColor = "white";
    bubble.style.border = `2px solid ${color}`;
    bubble.style.borderRadius = "16px";
    bubble.style.padding = "8px";
    bubble.style.marginBottom = "8px";
    bubble.style.overflowWrap = "break-word";
    bubble.style.transform = element.user == _user ? "rotateY(180deg)" : "";
    bubble.style.backgroundColor =
      element.user == _user ? "whitesmoke" : "#FFE990";

    bubble = validateMessage(element?.chat ?? "null", bubble);
    messageContainer.appendChild(bubble);
    container.appendChild(messageContainer);
    container.scrollTop = container.scrollHeight;
  }
  /**
   *  CHAT IMAGES */
  function createImagePreview(message, container) {
    // chatInput
    let imgPreview = document.createElement("img");
    imgPreview.width = "200";
    imgPreview.style.margin = "10px";
    imgPreview.src =
      "https://scontent.faqb1-1.fna.fbcdn.net/v/t45.1600-4/fr/cp0/q90/spS444/129188577_6220121344170_8941261021967050203_n.png.jpg?_nc_cat=109&ccb=2&_nc_sid=67cdda&_nc_ohc=4Z0TjrbnQhMAX-Ig-J8&_nc_ht=scontent.faqb1-1.fna&oh=e84f65d626213ca43425409ddb7f0d5e&oe=603FAAD3";

    container.appendChild(imgPreview);
  }
  /**
   *  CHAT PAGE */
  function createPagePreview(fixedText, container) {
    // chatInput
    let pagePrev = document.createElement("iframe");
    pagePrev.width = "300";
    pagePrev.src = fixedText;

    // chatInput
    const message = document.createElement("p");
    message.className = "mess";
    message.innerHTML = `${fixedText}`;

    pagePrev.src = message.children[0].href + "&output=embed";

    container.appendChild(pagePrev);
    container.appendChild(message);
  }

  function httpGetChats() {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://stw-uvg-22.site:3001/chats", false); // false for synchronous request
    xmlHttp.send(null);
    let response = xmlHttp.responseText;
    if (response.toUpperCase() == "NO RESULT") {
      return false;
    }
    // console.log(response);
    let json = JSON.parse(response);
    if (json && json.length > 0) {
      chatContainer = document.getElementById("chatContainer");
      chatContainer.innerHTML = "";
      json.reverse().forEach((chatElement) => {
        if (chatElement.user == _user) {
          createMessage(chatElement, chatContainer, primaryColor);
        } else {
          createMessage(chatElement, chatContainer, lightPrimaryColor);
        }
      });
    }
  }

  async function httpPostChat(message) {
    // let xmlHttp = new XMLHttpRequest();
    // xmlHttp.open("POST", "http://stw-uvg-22.site:3001/chat", true); // false for synchronous request
    // //Send the proper header information along with the request
    // xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // xmlHttp.send(JSON.stringify({ chat: message, user: _user}));

    const rawResponse = await fetch("http://stw-uvg-22.site:3001/chat", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        user: _user,
        chat: message,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8'",
      },
    });

    const content = await rawResponse.json();

    if (content.length > 0) {
      httpGetChats();
    } else {
      console.log(content);
    }

    // if (xmlHttp.responseText.length > 0) {
    //   httpGetChats();
    // } else {
    //   console.log(xmlHttp.responseText);
    // }
  }

  function askUser() {
    let person = prompt("Please enter your name:", "New Chat");
    if (person == null || person == "") {
      askUser();
    } else {
      _user = person;
      return;
    }
  }

  function validateMessage(value, bubble) {
    const links = [];
    let fixedText = "";
    value.split(" ").forEach((text) => {
      if (validURL(text)) {
        fixedText += `<a href="${text}" target='_blank'>${text}`;
        if (isImage(text)) {
          const a = document.createElement("a");
          a.href = text;
          a.target = "_blank";
          const a2 = document.createElement("p");
          a2.className = "mess";
          a2.innerHTML = `${fixedText}`;
          bubble.appendChild(a2);
          const image = document.createElement("img");
          image.src = text;
          image.className = "chat-image";
          image.style.width = "300px";
          a.appendChild(image);
          bubble.appendChild(a);
        } else {
          createPagePreview(fixedText, bubble);
        }
      } else {
        bubble.innerHTML += `${text} `;
      }
    });

    return bubble;
  }

  /**
   * Metodo para validar si una palabra es un URL
   *
   * @param {String} str palabra a analizar
   */
  function validURL(str) {
    const pattern = new RegExp(
      "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$"
    ); // fragment locator
    return !!pattern.test(str);
  }

  /**
   * Metodo para validar si un link es una imagen
   *
   * @param {String} url
   */
  function isImage(url) {
    return (
      url
        .trim()
        .toLowerCase()
        .match(/\.(jpeg|jpg|gif|png)$/) != null
    );
  }

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    startChat();
  });

  return <div id="chat-body"></div>;
}

export default jsLab;
