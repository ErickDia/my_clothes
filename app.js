"use strict";
const bag1 = document.querySelector(".bag1");
const bag2 = document.querySelector(".bag2");
const bag3 = document.querySelector(".bag3");

const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");

// console.log(bag1);
setTimeout(() => {
  bag1.classList.remove("anim1");
  s1.classList.add("disable");
}, 7000);

console.log(bag2);
setTimeout(() => {
  bag2.classList.remove("anim2");
  s2.classList.add("disable");
}, 7500);

console.log(bag3);
setTimeout(() => {
  bag3.classList.remove("anim3");
  s3.classList.add("disable");
}, 8000);
