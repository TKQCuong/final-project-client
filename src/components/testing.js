window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
  
    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos > 20) {
      // I am using 'display' instead of 'top':
      document.getElementById("service_content").style.display = "none";
    } else {
      document.getElementById("service_content").style.display = "initial";
    }
  }
