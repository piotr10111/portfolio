"use strict";!function(){window.addEventListener("scroll",function(){var e=document.querySelector(".header");250<(window.pageYOffset||document.documentElement.scrollTop)?e.classList.add("opacity"):e.classList.remove("opacity")}),window.addEventListener("scroll",function(){var e=document.querySelector(".section__about"),t=window.pageYOffset,o=e.offsetWidth;if(1440<=window.innerWidth){if(!(100<t))return;e.style.width=o+"px",1250<=(o+=100)&&(e.style.width="1250px")}});var t=document.querySelector(".header__button");t.addEventListener("click",function(e){e||(e=window.event),e.preventDefault(),t.classList.toggle("header__button--close"),document.querySelector(".nav__list").classList.toggle("nav__list--block")});var e=document.querySelectorAll(".skills--item"),o=document.querySelectorAll(".portfolio--item");if(850<window.innerWidth){var n=new IntersectionObserver(function(e){e.forEach(function(e){0<e.intersectionRatio&&e.target.classList.add("fadeInDown")})});e.forEach(function(e){n.observe(e)}),o.forEach(function(e){n.observe(e)})}if(window.innerWidth<=850){var r=function(){document.querySelector(".nav__list").classList.toggle("nav__list--block"),document.querySelector(".header__button").classList.toggle("header__button--close")};Array.from(document.querySelectorAll(".clicked")).forEach(function(e){return e.addEventListener("click",r)})}new ScrollMenu(".scroll",{duration:900,scrollOffset:0})}();