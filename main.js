/*Splash*/
setTimeout(() => {
    document.getElementById ('splash').classList.toggle('fade');
  }, 3000);

  /*Scroll on top button*/
  mybutton = document.getElementById("myBtn");


  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  
  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  } 

  /*Display hidden text*/
  function display() {
    const x = document.getElementById("plan_1");
    const y = document.getElementById("plan_2");
    const z = document.getElementById("plan_3");
    if (x.style.display === "none") {
      x.style.display  = "block";
    } else {
      x.style.display = "none";
    }
    if (y.style.display === "none") {
      y.style.display  = "block";
    } else {
      y.style.display = "none";
    }
    if (z.style.display === "none") {
      z.style.display  = "block";
    } else {
      z.style.display = "none";
    }
  } 
  
  