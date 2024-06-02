import 'animate.css';

const effect = document.querySelector('.glow'); // Replace with your own CSS selector

let isActive = true;

setInterval(() => {
  if (isActive) {
    effect.style.textShadow = '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 80px #fff, 0 0 120px #fff, 0 0 160px #fff'; // Replace with your own effect code
    isActive = false;
  } else {
    effect.style.textShadow = 'none'; // Replace with your own effect code
    isActive = true;
  }
}, 1000); // 1000 milliseconds = 1 second

document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


function copyfb(){
    // Get the text to copy
    var textToCopy = 'https://www.facebook.com/profile.php?id=100029465138397';

    // Create a temporary textarea to copy the text
    var textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    // Copy the text to the clipboard
    textarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Show a success message to the user
    alert('My FB profile link has been copied');
}
function copyig(){
    // Get the text to copy
    var textToCopy = 'https://www.facebook.com/profile.php?id=100029465138397';

    // Create a temporary textarea to copy the text
    var textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    // Copy the text to the clipboard
    textarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Show a success message to the user
    alert('My Instagram profile link has been copied');    // Get the text to copy
}

function copyli(){
    // Get the text to copy
    var textToCopy = 'https://www.linkedin.com/in/jose-angelo-ogatia-5413ab206/';

    // Create a temporary textarea to copy the text
    var textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    // Copy the text to the clipboard
    textarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Show a success message to the user
    alert('My LinkedIn profile has been copied');
}
function copyemail(){
    // Get the text to copy
    var textToCopy = 'ajogatia10@gmail.com';

    // Create a temporary textarea to copy the text
    var textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    // Copy the text to the clipboard
    textarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Show a success message to the user
    alert('My Email address has been copied');
}

document.querySelector(".btn-resume").addEventListener("click", openResume);

function openResume() {
  window.open("Ogatia-Resume.pdf", "_blank");
}


// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("spinner-container").style.display = "flex";
//   document.getElementById("spinner-container").style.zIndex = 1;
//   setTimeout(function() {
//     document.getElementById("spinner-container").style.display = "none";
//   }, 2200);
// });

AOS.init({
  duration: 1200,
})
