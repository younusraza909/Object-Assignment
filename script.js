// var itemsArray = [
//   {name: "juice", price: "50", quantity: "3"},
//   {name: "cookie", price: "30", quantity: "9"},
//   {name: "shirt", price: "880", quantity: "1"},
//   {name: "pen", price: "100", quantity: "2"},
// ];

// var totalPrice = 0;
// for (let i = 0; i < itemsArray.length; i++) {
//   var price = itemsArray[i].price * itemsArray[i].quantity;
//   totalPrice += price;
// }
// console.log(totalPrice);

///////////////////////////////////
// Question 2
// var obj = {
//   name: "Raza",
//   email: "test@test.com",
//   password: "testing",
//   age: 20,
//   gender: "Male",
//   city: "Karachi",
//   country: "Pakistan",
// };

// console.log(obj.hasOwnProperty("age"));
// console.log(obj.hasOwnProperty("country"));
// console.log(obj.hasOwnProperty("firstName"));
// console.log(obj.hasOwnProperty("lastName"));

///////////////////////////////////
// Question 3
// function Student(first, last, age, gender) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.gender = gender;
// }

// var student1 = new Student("Younus", "Raza", 20, "Male");
// var student2 = new Student("Ahmed", "Bashir", 30, "Male");

// console.log(student1.firstName);
// console.log(student2.age);

////////////////////////////////////
//Question 4
let btn = document.getElementById("btn");
let male = document.getElementById("male");
let feMale = document.getElementById("feMale");
let professionDOM = document.getElementById("professions");
let educationDom = document.getElementById("educations");
let nameInput = document.getElementById("name");
let addressInput = document.getElementById("address");
let table = document.getElementById("table");
// Counstructor
//  // //
function Data(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

btn.addEventListener("click", function () {
  // Selected gender
  const gender = document.querySelectorAll('input[name="gender"]');
  let selectedValue;
  for (const rb of gender) {
    if (rb.checked) {
      selectedValue = rb.value;
      break;
    }
  }

  const education = educationDom.value;
  const profession = professionDOM.value;
  const name = nameInput.value;
  const address = addressInput.value;

  let entry = new Data(name, selectedValue, address, education, profession);

  showUi(entry);
});

function showUi(data) {
  const ele = document.createElement("tr");
  ele.innerHTML = ` 
        <td>${data.name}</td>
        <td>${data.gender}</td>
        <td>${data.address}</td>
        <td>${data.education}</td>
        <td>${data.profession}</td>
  `;

  table.appendChild(ele);
  nameInput.value = "";
  addressInput.value = "";
}
