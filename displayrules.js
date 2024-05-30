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
            
    localStorage.setItem('cpright',0);
    localStorage.setItem('cpleft',0);
    localStorage.setItem('totalvpleft',0);
    localStorage.setItem('totalvpright',0);
    localStorage.setItem('secvp1left',0);
    localStorage.setItem('secvp2left',0);
    localStorage.setItem('secvp3left',0);
    localStorage.setItem('secvp1right',0);
    localStorage.setItem('secvp2right',0);
    localStorage.setItem('secvp3right',0);
    localStorage.setItem('primaryvpleft',0);
    localStorage.setItem('primaryvpright',0);
    localStorage.setItem('currentphase',1);
    localStorage.setItem('currentround',1);
    localStorage.setItem('currentplayer',"-- Select faction --");
    localStorage.setItem('factionright',"-- Select faction --");
    localStorage.setItem('factionleft',"-- Select faction --");
    location.reload();
    }
    else {
        returnconsole.log(0); // User clicked "No"
    }
}