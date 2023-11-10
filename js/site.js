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

//Reference: https://www.youtube.com/watch?v=3UZoVrc9A3o
//adding code for captcha generator here
(function(){
	const fonts = ["cursive", "sans-serif", "serif", "monospace"];
	//Initializing captchaValue here
	let captchaValue = "";
	//Generates captchaValues
	function generateCaptcha() {
		let value = btoa(Math.random()*1000000000);
		value = value.substr(0,5+Math.random()*5);
		captchaValue = value;
	}
	function setCaptcha() {
		let html = captchaValue.split("").map((char)=>{
			const rotate = -20 + Math.trunc(Math.random()*30);
			const font = Math.trunc(Math.random()*fonts.length);
			return `<span
				style="
					transform:rotate(${rotate}deg);
					font-family:${fonts[font]}
				"
			>${char}</span>`
		}).join("");
		document.querySelector(".captcha .preview").innerHTML = html;
	}

	function initCaptcha() {
		document.querySelector(".captcha .preview .captcha-refresh").addEventListener("click", function() {
			generateCaptcha();
			setCaptcha();
	});
		generateCaptcha();
		setCaptcha();
	}
	initCaptcha();
})();