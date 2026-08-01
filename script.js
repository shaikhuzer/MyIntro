(function () {
  var yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  var nav = document.querySelector(".top-nav");
  if (nav) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 18) {
        nav.style.boxShadow = "0 10px 24px rgba(30, 24, 18, 0.12)";
      } else {
        nav.style.boxShadow = "none";
      }
    });
  }

  var anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      var target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
