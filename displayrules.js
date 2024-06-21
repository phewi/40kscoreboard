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
    //keybinds for attacker
    if (event.key === 'q') {
        modcpleft(-1);
    }
    if (event.key === 'w') {
        modcpleft(1);
    }
    if (event.key === 'a') {
        modprimaryvpleft(-1)
    }
    if (event.key === 's') {
        modprimaryvpleft(1)
    }   
    if (event.key === 'z') {
        modsecvp1left(-1)
    }
    if (event.key === 'x') {
        modsecvp1left(1)
    }   
    //keybinds for defender
    if (event.key === 'e') {
        modcpright(-1);
    }
    if (event.key === 'r') {
        modcpright(1);
    }
    if (event.key === 'd') {
        modprimaryvpright(-1)
    }
    if (event.key === 'f') {
        modprimaryvpright(1)
    }   
    if (event.key === 'c') {
        modsecvp1right(-1)
    }
    if (event.key === 'v') {
        modsecvp1right(1)
    }
    //keybinds for round tracker
    if (event.key === 'p') {
        changecurrentplayer()
    }
    if (event.key === 'm') {
        modphase(1)
    }
    if (event.key === 'n') {
        modphase(-1)
    }
    if (event.key === 'y') {
        modround(1)
    }
    if (event.key === 't') {
        modround(-1)
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