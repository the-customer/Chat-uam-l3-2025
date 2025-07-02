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
    const fullName = contact.name;
    const firstName = fullName.split(" ")[0];
    const lastName = fullName.split(" ")[1];
    const avatar = firstName.charAt(0) + lastName.charAt(0);
    const html = `
        <li>
            <div class="discussion">
                <div class="avatar">${avatar}</div>
                <div class="contact">
                    <div class="name">${fullName}</div>
                    <div class="message">Hey, how are you?</div>
                </div>
            </div>
            <div class="meta">
                <div class="time">12:00</div>
                <div class="status">
                    1
                </div>
            </div>
        </li>
    `;
    //
    ul.innerHTML += html;
})