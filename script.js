const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const text3 = document.querySelector('#text3');
const text4 = document.querySelector('#text4');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > text1.offsetTop + text1.offsetHeight * 0.5) {
    text1.style.opacity = '1';
  }

  if (scrollPosition > text2.offsetTop + text2.offsetHeight * 0.5) {
    text2.style.opacity = '1';
  }

  if (scrollPosition > text3.offsetTop + text3.offsetHeight * 0.5) {
    text3.style.opacity = '1';
  }

  if (scrollPosition > text4.offsetTop + text4.offsetHeight * 0.5) {
    text4.style.opacity = '1';
  }
});

function appear() {
    document.getElementById("text1").style.opacity = "1";
    document.getElementById("text2").style.opacity = "0";
    document.getElementById("text3").style.opacity = "0";
    document.getElementById("text4").style.opacity = "0";
  }
  
  appear();