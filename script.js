const contacts = [
  {
    name: "John Doe",
    phone: "1234567890",
    messages: [
      {
        direction: "in",
        content: "Hello, how are you?",
        date: new Date("2022-01-01T10:00:00"),
      },
      {
        direction: "out",
        content: "I'm good, thanks!",
        date: new Date("2022-01-01T10:05:00"),
      },
      {
        direction: "in",
        content: "That's great to hear!",
        date: new Date("2022-01-01T10:10:00"),
      },
      {
        direction: "out",
        content: "What have you been up to?",
        date: new Date("2022-01-01T10:15:00"),
      },
      {
        direction: "in",
        content: "Not much, just working on a project.",
        date: new Date("2022-01-01T10:20:00"),
      }
    ],
  },
  {
    name: "Jane Smith",
    phone: "0987654321",
    messages:[]
  },
  {
    name: "Aliou Resp",
    phone: "774514411",
    messages:[
      {
        direction: "in",
        content: "Hello Sir, how are you? at what time we have class today?",
        date: new Date("2022-01-01T10:00:00"),
      },
      {
        direction: "out",
        content: "Good morning Sir, we have class at 10:00 AM",
        date: new Date("2022-01-01T10:05:00"),
      },
      {
        direction: "in",
        content: "Thank you Sir, see you there",
        date: new Date("2022-01-01T10:10:00"),
      },
      {
        direction: "out",
        content: "That's great to hear!",
        date: new Date("2022-01-01T10:10:00"),
      },
    ]
  },
  {
    name: "Bob Johnson",
    phone: "1112223333",
    messages:[]
  },
  {
    name: "Alice Brown",
    phone: "4445556666",
    messages:[]
  },
  {
    name: "Charlie Davis",
    phone: "7778889999",
    messages:[]
  },
  {
    name: "Diana Evans",
    phone: "3334445555",
    messages:[]
  }
];

//
const ul = document.querySelector("ul");
const divRight = document.querySelector(".right");




ul.innerHTML = "";
contacts.forEach(function(contact) {
    ul.appendChild(createLi(contact));
})

function createLi(contact) {
    const fullName = contact.name;
    const firstName = fullName.split(" ")[0];
    const lastName = fullName.split(" ")[1];
    const avatar = firstName.charAt(0) + lastName.charAt(0);
    const li = document.createElement("li"); // <li></li>
    const divDiscussion = document.createElement("div"); // <div></div>
    divDiscussion.classList.add("discussion"); // <div class="discussion"></div>
    // divDiscussion.className = "discussion"; // <div class="discussion"></div>
    li.appendChild(divDiscussion); // <li><div class="discussion"></div></li>
    const divAvatar = document.createElement("div"); // <div></div>
    divAvatar.classList.add("avatar"); // <div class="avatar"></div>
    divAvatar.textContent = avatar; // <div class="avatar">AB</div>
    divDiscussion.appendChild(divAvatar); // <li><div class="discussion"><div class="avatar">AB</div></div></li>
    const divContact = document.createElement("div"); // <div></div>
    divContact.classList.add("contact"); // <div class="contact"></div>
    divDiscussion.appendChild(divContact);

    const divName = document.createElement("div"); 
    divName.classList.add("name");
    divName.textContent = fullName;
    const divMessage = document.createElement("div");
    divMessage.classList.add("message");
    divMessage.textContent = 'Hey, how are you?';
    // divContact.appendChild(divName);
    // divContact.appendChild(divMessage);
    divContact.append(divName, divMessage);
    //
    const divMeta = document.createElement("div");
    divMeta.classList.add("meta");
    li.appendChild(divMeta);
    const divTime = document.createElement("div");
    divTime.classList.add("time");
    divTime.textContent = '12:00';
    divMeta.appendChild(divTime);
    const divStatus = document.createElement("div");
    divStatus.classList.add("status");
    divStatus.textContent = '1';
    divMeta.appendChild(divStatus);
    //Ajouter un evenment clic
    li.addEventListener("click", function(){
      showDiscussion(contact,avatar);
      //
      
      contact.messages.forEach(function(msg) {
        const hour = msg.date.getHours() + ':' + msg.date.getMinutes();
        if(msg.direction == 'in'){
          messageIn(msg.content,hour);
        }else{
          messageOut(msg.content,hour);
        }
      });
    });
    return li;
}


function showDiscussion(contact,avatar){
  const html = `
    <div class="info-contact">
      <div class="infos">
          <div class="avatar">${avatar}</div>
          <div class="infos-text">
              <span class="name">${contact.name}</span>
              <span class="phone">${contact.phone}</span>
          </div>
      </div>
      <div class="buttons">
          <div class="button phone">
              <i class="fa-solid fa-phone" style="color: #2bc867;"></i>
          </div>
          <div class="button video">
              <i class="fa-solid fa-video" style="color: #2bc867;"></i>
          </div>
          <div class="button search">
              <i class="fa-solid fa-magnifying-glass" style="color: #777;"></i>
          </div>
      </div>
    </div>
    <div class="messages">
      <div class="text"></div>
      <div class="input">
          <input type="text" placeholder="Ecrire un message...">
          <i class="fa-solid fa-paper-plane" style="color: #2bc867;"></i>
      </div>
    </div>
    `;
  divRight.innerHTML = html;
}


function messageIn(msg,date){
  const divText = document.querySelector(".text");
  const html = `
    <div class="message-l">
        <div class="message-in">
            <div class="content">${msg}</div>
            <div class="date">${date}</div>
        </div>
    </div>
  `;
  divText.innerHTML += html;
}

function messageOut(msg,date){
  const divText = document.querySelector(".text");
  const html = `
    <div class="message-r">
        <div class="message-out">
            <div class="content">${msg}</div>
            <div class="date">${date}</div>
        </div>
    </div>
  `;
  divText.innerHTML += html;
}


