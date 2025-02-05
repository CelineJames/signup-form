const submitButton = document.querySelector("button");
const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMessage = document.querySelector(".error-message");
const emailHolder = document.querySelector("p span");
const dismissButton = document.querySelector("#dismiss-button");
const image = document.querySelector(".form-image img");

console.log(emailHolder);
console.log(errorMessage);


// Function to save data into LocalStorage
function saveData() {
  let inputValue = document.querySelector("input").value;
  localStorage.setItem("email", inputValue);
}

// Function to retrieve data from LocalStorage
function loadData() {
  let storedValue = localStorage.getItem("email");
  if (storedValue) {
    document.querySelector("p span").textContent = storedValue;
  } else {
    document.querySelector("p span").textContent = "No data found!";
  }
}

// Automatically load data when Page 2 is opened
if (document.querySelector("p span")) {
  loadData();
  dismissButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });

}


 if (window.matchMedia("(max-width: 600px)").matches) {
   image.setAttribute("src", "./assets/images/illustration-sign-up-mobile.svg");
  
 } else {
   image.setAttribute(
     "src",
     "./assets/images/illustration-sign-up-desktop.svg"
   );
 }

// Validate the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (input.value === "" || !regex.test(input.value)) {
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "12px";
    errorMessage.style.fontWeight = "bold";
    errorMessage.innerHTML = "Valid email required";
    input.style.border = "1px solid red";
  } else {
    errorMessage.style.display = "none";
    input.style.border = "initial";
    saveData();
    window.location.href = "success.html";
  }
});

