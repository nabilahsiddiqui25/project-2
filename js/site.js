// add in jQuery code
// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

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