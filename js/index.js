// import * as $ from "jquery";
// import "../scss/index.scss";

let letters = document.querySelectorAll(".team__letter");
let lettersArr = [];
let peoples = document.querySelectorAll(".team__person");
let peoplesArr = [];
let banners = document.querySelectorAll(".works__banner");
let bannersArr = [];
let pop = document.querySelector(".works__pop-up");
let imagesArr = [
  "../img/banner3.svg",
  "../img/5.svg",
  "../img/6.svg",
  "../img/work4.svg",
  "../img/9.svg",
  "../img/10.svg",
];

function initMap() {
  // The location of Uluru
  let uluru = { lat: 53.901364, lng: 27.54525 };

  // The map, centered at Uluru
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru,
  });
  // The marker, positioned at Uluru
  let marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: "Минск, Короля, 2",
  });
}

window.initMap = initMap;

for (let i = 0; i < letters.length; i++) {
  lettersArr.push(letters[i]);
}

for (let i = 0; i < peoples.length; i++) {
  peoplesArr.push(peoples[i]);
}

for (let i = 0; i < banners.length; i++) {
  bannersArr.push(banners[i]);
}

peoplesArr.map((person, index) => {
  person.addEventListener("mouseover", () => {
    lettersArr[index].classList.add("active");
  });
});

peoplesArr.map((person, index) => {
  person.addEventListener("mouseout", () => {
    lettersArr[index].classList.remove("active");
  });
});

bannersArr.map((banner, index) => {
  $(banner).click(() => {
    getFadeIn(index);
  });
});
$(".works__pop-up").click(() => {
  $(".works__pop-up").fadeOut(300);
});

function getFadeIn(index) {
  $(".works__pop-up").attr("src", imagesArr[index]);
  $(".works__pop-up").fadeIn(300);
}
