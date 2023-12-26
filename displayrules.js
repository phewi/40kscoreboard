document.addEventListener('keydown', function(event) {
    // Check if the pressed key is "1" (keyCode 49)
    if (event.key === '1') {
        togglesetuprules();
    }
    if (event.key === '2') {
        togglerules2();
    }
});
function togglesetuprules() {
    var setuprules = document.getElementById("setuprules");
    if (setuprules.style.display === "none") {
        setuprules.style.display = "block";
    } else {
        setuprules.style.display = "none";
    }
  }
  function togglerules2() {
    var rules2 = document.getElementById("rules2");
    if (rules2.style.display === "none") {
        rules2.style.display = "block";
    } else {
        rules2.style.display = "none";
    }
  }