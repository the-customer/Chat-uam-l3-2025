const contacts = [
  {
    name: "John Doe",
    phone: "1234567890",
  },
  {
    name: "Jane Smith",
    phone: "0987654321",
  },
  {
    name: "Aliou Resp",
    phone: "774514411",
  },
  {
    name: "Bob Johnson",
    phone: "1112223333",
  },
  {
    name: "Alice Brown",
    phone: "4445556666",
  },
  {
    name: "Charlie Davis",
    phone: "7778889999",
  },
  {
    name: "Diana Evans",
    phone: "3334445555",
  }
];

//
const ul = document.querySelector("ul");



ul.innerHTML = "";
contacts.forEach(function(contact) {
    ul.appendChild(createLi(contact.name));
})

function createLi(fullName) {
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
    return li;
}