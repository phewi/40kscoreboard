document.addEventListener('keydown', function(event) {
    // Check if the pressed key is "1" (keyCode 49)
    if (event.key === '1') {
        togglesetuprules();
    }
    if (event.key === '2') {
        togglerules2();
    }
    if (event.key === '0') {
        confirmReset();
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
  function confirmReset() {
    var userResponse = confirm("Reset data?");
    if (userResponse) {
        // User clicked "Yes"
            
    localStorage.clear('cpright');
    localStorage.clear('cpleft');
    localStorage.clear('totalvpleft');
    localStorage.clear('totalvpright');
    localStorage.clear('secvp1left');
    localStorage.clear('secvp2left');
    localStorage.clear('secvp3left');
    localStorage.clear('secvp1right');
    localStorage.clear('secvp2right');
    localStorage.clear('secvp3right');
    localStorage.clear('primaryvpleft');
    localStorage.clear('primaryvpright');
    localStorage.clear('currentphase');
    localStorage.setItem('currentround',1);
    localStorage.clear('currentplayer');
    localStorage.clear('factionright');
    localStorage.clear('factionleft');
    location.reload();
    }
    else {
        returnconsole.log(0); // User clicked "No"
    }
}