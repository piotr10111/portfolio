"use strict";!function(){window.addEventListener("scroll",function(){var e=document.querySelector(".header");(window.pageYOffset||document.documentElement.scrollTop)>250?e.classList.add("opacity"):e.classList.remove("opacity")}),window.addEventListener("scroll",function(){var e=document.querySelector(".section__about"),t=window.pageYOffset,o=e.offsetWidth;if(window.innerWidth>=1440){if(!(t>100))return;e.style.width=o+"px",(o+=100)>=1250&&(e.style.width="1250px")}});var e=document.querySelector(".header__button"),t=document.querySelector(".nav__list");e.addEventListener("click",function(o){o||(o=window.event),o.preventDefault(),e.classList.toggle("header__button--close"),t.classList.toggle("nav__list--block")});var o=document.querySelectorAll(".skills--item"),n=document.querySelectorAll(".portfolio--item");if(window.innerWidth>850){var r=new IntersectionObserver(function(e){e.forEach(function(e){e.intersectionRatio>0&&e.target.classList.add("fadeInDown")})});o.forEach(function(e){r.observe(e)}),n.forEach(function(e){r.observe(e)})}if(window.innerWidth<=850){var c=function(){document.querySelector(".nav__list").classList.toggle("nav__list--block"),document.querySelector(".header__button").classList.toggle("header__button--close")};Array.from(document.querySelectorAll(".clicked")).forEach(function(e){return e.addEventListener("click",c)})}new ScrollMenu(".scroll",{duration:900,scrollOffset:0})}();