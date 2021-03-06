// MODAL WRITE US

var link = document.querySelector(".contacts-button");

var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".form-message");
var login = popup.querySelector("[name=user-name]");
var password = popup.querySelector("[name=email]");
var message = popup.querySelector("textarea");

var isStorageSupport = true;
var storage = "";

try {
 storage = localStorage.getItem("login");
} catch (err) {
 isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
 evt.preventDefault();
 popup.classList.add("modal-show")
 if (storage) {
  login.value = storage;
  password.focus();
 } else {
  login.focus();
 }
});
close.addEventListener("click", function(evt) {
 evt.preventDefault();
 popup.classList.remove("modal-show");
 popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
 if (!login.value || !password.value) {
  evt.preventDefault();
  popup.classList.add("modal-error");
  console.log("Нужно ввести имя, имеил и текс сообщения");
 } else {
  if (isStorageSupport) {
   localStorage.setItem("login", login.value);
  }
 }

});

window.addEventListener("keydown", function(evt) {
 if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
   popup.classList.remove("modal-show");
   popup.classList.remove("modal-error");
  }
 }
});

// Modal MAP
var mapLink = document.querySelector(".contacts-button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
 evt.preventDefault();
 mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
 evt.preventDefault();
 mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
 if (evt.keyCode === 27) {
  if (mapPopup.classList.contains("modal-show")) {
   mapPopup.classList.remove("modal-show");
  }
 }
});

// MODAL ADD TO CART
var clink = document.querySelector(".buy");
var popup2 = document.querySelector(".modal-cart");
var close = popup2.querySelector(".modal-close");

clink.addEventListener("click", function(evt) {
 evt.preventDefault();
 popup2.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
 evt.preventDefault();
 popup2.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt) {
 if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popup2.classList.contains("modal-show")) {
   popup2.classList.remove("modal-show");
  }
 }
});