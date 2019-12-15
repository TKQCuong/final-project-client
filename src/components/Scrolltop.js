import React from 'react'

export default function Scrolltop() {
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    // document.getElementById("logo").style.fontSize = "25px";
    // document.getElementById("footer").style.display = "block";
  } else {
    document.getElementById("navbar").style.padding = "17px 10px";
    // document.getElementById("logo").style.fontSize = "35px";
    // document.getElementById("footer").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    return (
        <div>
            <button onClick={() => topFunction()} id="myBtn" title="Go to top">Top</button>
        </div>
    )
}
