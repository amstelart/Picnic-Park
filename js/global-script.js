// Если на проекте jQuery
$( document ).ready(function() {

  $('.offers-carousel').owlCarousel({
    center: true,
    items:1,
    nav: false,
    margin: 40,
    loop:true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive : {
      768 : {
        items: 3,
        center: true,
        nav: true,
      }
    },
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #666666;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #666666;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  });

  $('.location-carousel').owlCarousel({
    center: true,
    items:1,
    nav: false,
    margin: 40,
    loop:true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive : {
      768 : {
        items: 3,
        center: true,
        nav: true,
      }
    },
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #666666;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #666666;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
