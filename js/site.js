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

// https://stakedesigner.com/how-to-make-custom-captcha-generator-in-css-javascript/
const textBox = document.querySelector(".captch_box input");
const refreshButton = document.querySelector(".refresh_button");
const inputBox = document.querySelector(".captch_input input");
const message = document.querySelector(".message");
const button1 = document.querySelector(".button");

let captchaLetters = null;

//generates captcha generator
const generateCaptcha = () => {
  //generates random string
  const str1 = Math.random().toString(36).substring(2, 7);
  //array splits the string into individual letters
  const arr1 = str1.split("");
  //letter changes every time refresh button is clicked
  const changeLetters = arr1.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
  captchaLetters = changeLetters.join("   ");
  textBox.value = captchaLetters;
  console.log(captchaLetters);
};

//refreshes the page every time icon is clicked
const refreshPage = () => {
  generateCaptcha();
  inputBox.value = "";
  captchaKeyUpValidate();
};

//validates the captcha key generator
const captchaKeyUpValidate = () => {
  //button is disabled at the start
  button1.classList.toggle("disabled", !inputBox.value);
  if (!inputBox.value) message.classList.remove("active");
};

//onClick function
const onClick = () => {
  captchaLetters = captchaLetters
    .split("")
    .filter((char) => char !== " ")
    .join("");
//message when user clicks on submit captcha button
  message.classList.add("active");
  //if input is valid, captcha is correct
  if (inputBox.value === captchaLetters) {
    message.validation = "Entered captcha is correct";
    message.style.color = "#826afb";
  } else {
    //otherwise, if the input is invalid, captcha is not correct
    message.validation = "Entered captcha is not correct";
    message.style.color = "#FF2525";
  }
};

//addEventListener functions t
refreshButton.addEventListener("click", refreshPage);
inputBox.addEventListener("keyup", captchaKeyUpValidate);
button1.addEventListener("click", onClick);

//generates captcha
generateCaptcha();