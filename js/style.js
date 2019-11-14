var button = document.querySelector(".call-me .button");
var modal  = document.querySelector(".modal-writeus");
var close  = document.querySelector('.modal-close');
var form   = modal.querySelector("form");
var name   = modal.querySelector("[name=name]");
var email  = modal.querySelector("[name=mail]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt){
	evt.preventDefault();
  modal.classList.add("modal-show");
  
  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  } 
});

close.addEventListener("click",function (evt){
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});	

modal.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});