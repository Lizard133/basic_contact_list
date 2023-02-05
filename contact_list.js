
var contacts = [];

window.onload = function() {
  if (localStorage.getItem("contacts")) {
    contacts = JSON.parse(localStorage.getItem("contacts"));
    for (var i = 0; i < contacts.length; i++) {
      addRowToTable(contacts[i].name, contacts[i].phone, contacts[i].email);
    }
  }
  
  function addRowToTable(name, phone, email) {
    var table = document.getElementById("contact-table");
    var row = table.insertRow(-1);
    
    var nameCell = row.insertCell(0);
    nameCell.innerHTML = name;
    
    var phoneCell = row.insertCell(1);
    phoneCell.innerHTML = phone;
    
    var emailCell = row.insertCell(2);
    emailCell.innerHTML = email;
  }
  
  function addPerson() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    
    var contact = { name: name, phone: phone, email: email };
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    
    addRowToTable(name, phone, email);
  }
  
  document.getElementById("add-button").onclick = addPerson;
};
