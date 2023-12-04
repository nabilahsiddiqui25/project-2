// add in jQuery code
// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

window.onload = function() {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
}

function thankYou() {
  var txt;
  if (confirm("Your response was received!")) {
    txt = "Thank you for signing up!";
  }
  document.getElementById("thankYouMessage").innerHTML = txt;

  setTimeout(function() {
    document.getElementById("thankYouMessage").style.display='none';
  }, 60000);
}

//thank you message for checkbox
function thankYou1() {
  var checkBox = document.getElementById("checkbox");
  var output = document.getElementById("output");

  if (checkBox.checked == true) {
    output.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
