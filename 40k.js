var cpleft = localStorage.getItem('cpleft');
var cpright = localStorage.getItem('cpright');
var totalvpleft = localStorage.getItem('totalvpleft');
var totalvpright = localStorage.getItem('totalvpright');
var primaryvpright = localStorage.getItem('primaryvpright');
var primaryvpleft = localStorage.getItem('primaryvpleft');
var secvp1left = localStorage.getItem('secvp1left');
var secvp2left = localStorage.getItem('secvp2left');
var secvp3left = localStorage.getItem('secvp3left');
var secvp1right = localStorage.getItem('secvp1right');
var secvp2right = localStorage.getItem('secvp2right');
var secvp3right = localStorage.getItem('secvp3right');

function modcpleft(value){
    if(value>0){cpleft++;}
    else {if(cpleft>0)cpleft--};
    document.getElementById("cpleft").innerHTML = cpleft;
    localStorage.setItem('cpleft',cpleft)
}
function modcpright(value){
    if(value>0){cpright++;}
    else {if(cpright>0)cpright--};
    document.getElementById("cpright").innerHTML = cpright;
    localStorage.setItem('cpright',cpright)
}
function modtotalvpleft(value){
    if(value>0){totalvpleft++;}
    else {if(totalvpleft>0)totalvpleft--};
    document.getElementById("totalvpleft").innerHTML = totalvpleft;
    localStorage.setItem('totalvpleft',totalvpleft)
}
function modprimaryvpleft(value){
    if(value>0){primaryvpleft++;
        modtotalvpleft(1)}
    else {if(primaryvpleft>0){primaryvpleft--;
        modtotalvpleft(-1)}};
    document.getElementById("primaryvpleft").innerHTML = primaryvpleft;
    localStorage.setItem('primaryvpleft',primaryvpleft)
}
function modsecvp1left(value){
    if(value>0){secvp1left++;
        modtotalvpleft(1)}
    else {if(secvp1left>0){secvp1left--;
        modtotalvpleft(-1)}};
    document.getElementById("secvp1left").innerHTML = secvp1left;
    localStorage.setItem('secvp1left',secvp1left)
}
function modsecvp2left(value){
    if(value>0){secvp2left++;
        modtotalvpleft(1)}
    else {if(secvp2left>0){secvp2left--;
        modtotalvpleft(-1)}};
    document.getElementById("secvp2left").innerHTML = secvp2left;
    localStorage.setItem('secvp2left',secvp2left)
}
function modsecvp3left(value){
    if(value>0){secvp3left++;
        modtotalvpleft(1)}
    else {if(secvp3left>0){secvp3left--;
        modtotalvpleft(-1)}};
    document.getElementById("secvp3left").innerHTML = secvp3left;
    localStorage.setItem('secvp3left',secvp3left)
}
function modtotalvpright(value){
    if(value>0){totalvpright++;}
    else {if(totalvpright>0)totalvpright--};
    document.getElementById("totalvpright").innerHTML = totalvpright;
    localStorage.setItem('totalvpright',totalvpright)
}
function modprimaryvpright(value){
    if(value>0){primaryvpright++;
        modtotalvpright(1)}
    else {if(primaryvpright>0){primaryvpright--;
        modtotalvpright(-1)}};
    document.getElementById("primaryvpright").innerHTML = primaryvpright;
    localStorage.setItem('primaryvpright',primaryvpright)
}
function modsecvp1right(value){
    if(value>0){secvp1right++;
        modtotalvpright(1)}
    else {if(secvp1right>0){secvp1right--;
        modtotalvpright(-1)}};
    document.getElementById("secvp1right").innerHTML = secvp1right;
    localStorage.setItem('secvp1right',secvp1right)
}
function modsecvp2right(value){
    if(value>0){secvp2right++;
        modtotalvpright(1)}
    else {if(secvp2right>0){secvp2right--;
        modtotalvpright(-1)}};
    document.getElementById("secvp2right").innerHTML = secvp2right;
    localStorage.setItem('secvp2right',secvp2right)
}
function modsecvp3right(value){
    if(value>0){secvp3right++;
        modtotalvpright(1)}
    else {if(secvp3right>0){secvp3right--;
        modtotalvpright(-1)}};
    document.getElementById("secvp3right").innerHTML = secvp3right;
    localStorage.setItem('secvp3right',secvp3right)
}
function letsago() {
    document.getElementById("cpleft").innerHTML = cpleft;
    document.getElementById("cpright").innerHTML = cpright;
    document.getElementById("totalvpleft").innerHTML = totalvpleft;
    document.getElementById("totalvpright").innerHTML = totalvpright;
    document.getElementById("primaryvpright").innerHTML = primaryvpright;
    document.getElementById("primaryvpleft").innerHTML = primaryvpleft;
    document.getElementById("secvp1left").innerHTML = secvp1left;
    document.getElementById("secvp2left").innerHTML = secvp2left;
    document.getElementById("secvp3left").innerHTML = secvp3left;
    document.getElementById("secvp1right").innerHTML = secvp1right;
    document.getElementById("secvp2right").innerHTML = secvp2right;
    document.getElementById("secvp3right").innerHTML = secvp3right;
}

//DROPDOWNS BEGIN
document.getElementById("factionright").onchange = function() {
    localStorage['factionright'] = document.getElementById("factionright").value;
}
document.getElementById("factionleft").onchange = function() {
    localStorage['factionleft'] = document.getElementById("factionleft").value;
}
document.getElementById("secondary1right").onchange = function() {
    localStorage['secondary1right'] = document.getElementById("secondary1right").value;
}
document.getElementById("secondary2right").onchange = function() {
    localStorage['secondary2right'] = document.getElementById("secondary2right").value;
}
document.getElementById("secondary3right").onchange = function() {
    localStorage['secondary3right'] = document.getElementById("secondary3right").value;
}
document.getElementById("secondary1left").onchange = function() {
    localStorage['secondary1left'] = document.getElementById("secondary1left").value;
}
document.getElementById("secondary2left").onchange = function() {
    localStorage['secondary2left'] = document.getElementById("secondary2left").value;
}
document.getElementById("secondary3left").onchange = function() {
    localStorage['secondary3left'] = document.getElementById("secondary3left").value;
}
window.onload= function(){
    document.getElementById("factionleft").value = localStorage['factionleft'];
    document.getElementById("factionright").value = localStorage['factionright'];
    document.getElementById("secondary1right").value = localStorage['secondary1right'];
    document.getElementById("secondary2right").value = localStorage['secondary2right'];
    document.getElementById("secondary3right").value = localStorage['secondary3right'];
    document.getElementById("secondary1left").value = localStorage['secondary1left'];
    document.getElementById("secondary2left").value = localStorage['secondary2left'];
    document.getElementById("secondary3left").value = localStorage['secondary3left'];
}