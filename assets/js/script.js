document.addEventListener("DOMContentLoaded", function () {

  console.log("Portal Islam siap digunakan.");

  /* ===============================
     Disable Right Click
  =================================*/
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  });

  /* ===============================
     Disable Copy / Cut
  =================================*/
  document.addEventListener("copy", function(e) {
    e.preventDefault();
  });

  document.addEventListener("cut", function(e) {
    e.preventDefault();
  });

  /* ===============================
     Disable Dev Tools Shortcut
  =================================*/
  document.addEventListener("keydown", function(e) {

    // F12
    if (e.key === "F12") {
      e.preventDefault();
    }

    // Ctrl + Shift + I
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
      e.preventDefault();
    }

    // Ctrl + Shift + J
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
      e.preventDefault();
    }

    // Ctrl + U (view source)
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
      e.preventDefault();
    }

  });

  /* ===============================
     Smooth Scroll
  =================================*/
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});