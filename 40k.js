var factionright = localStorage.getItem('factionright');
var factionleft = localStorage.getItem('factionleft');
var currentphase = localStorage.getItem('currentphase');
var currentround = localStorage.getItem('currentround');
var currentplayer = localStorage.getItem('currentplayer');
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

function modround(value){
    currentround = localStorage.getItem('currentround');
    
    if(value>0){
        
        if(currentround<5){
            currentround++;
        }
    }
    else if(value<0){
        if(currentround>1){
            currentround--;
        }
}
localStorage.setItem('currentround',currentround);
document.getElementById("currentround").innerHTML = currentround;
}

function changecurrentplayer(){
    factionright = localStorage.getItem('factionright');
    factionleft = localStorage.getItem('factionleft');
    currentplayer = localStorage.getItem('currentplayer');
    if(currentplayer==factionright){
        localStorage.setItem('currentplayer',factionleft);
        document.getElementById("currentplayer").innerHTML = factionleft;
            }
    else if(currentplayer==factionleft){
        localStorage.setItem('currentplayer',factionright);
        document.getElementById("currentplayer").innerHTML = factionright;
        
    }
    else{
        localStorage.setItem('currentplayer',factionright);
        document.getElementById("currentplayer").innerHTML = factionright;
    }
}
function modphase(value){
    factionright = localStorage.getItem('factionright');
    currentplayer = localStorage.getItem('currentplayer');
    //forwards in phases
    if(value>0){
        
        if(currentphase<6){
            currentphase++;
        }
        if(currentphase==6){
            currentphase=1;
            changecurrentplayer();
        }
    }
    //backwards in phases
    else if(value<0){
              
        if(currentphase==1){
            currentphase=5;
            changecurrentplayer();
        }
        else {
            currentphase--;
        }

    }
            
    if(currentphase==1){
        phasename = "Command Phase";
    }
    else if(currentphase==2){
        phasename = "Movement Phase";
    }
    else if(currentphase==3){
        phasename = "Shooting Phase";
    }
    else if(currentphase==4){
        phasename = "Charge Phase";
    }
    else if(currentphase==5){
        phasename = "Fight Phase";
    }
    
    
    document.getElementById("currentphase").innerHTML = phasename;
    document.getElementById("currentround").innerHTML = currentround;
    localStorage.setItem('currentphase',currentphase);
    localStorage.setItem('currentround',currentround);

}


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
    if(value>0){if(secvp1left<=14){secvp1left++;
            modtotalvpleft(1)} 
    }
    else {if(secvp1left>0){secvp1left--;
        modtotalvpleft(-1)}};
    document.getElementById("secvp1left").innerHTML = secvp1left;
    localStorage.setItem('secvp1left',secvp1left)
}
function modsecvp2left(value){
    if(value>0){if(secvp2left<=14){secvp2left++;
        modtotalvpleft(1)} 
}
    else {if(secvp2left>0){secvp2left--;
        modtotalvpleft(-1)}};
    document.getElementById("secvp2left").innerHTML = secvp2left;
    localStorage.setItem('secvp2left',secvp2left)
}
function modsecvp3left(value){
    if(value>0){if(secvp3left<=14){secvp3left++;
        modtotalvpleft(1)} 
}
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
    if(value>0){if(secvp1right<=14){secvp1right++;
        modtotalvpright(1)} 
}
    else {if(secvp1right>0){secvp1right--;
        modtotalvpright(-1)}};
    document.getElementById("secvp1right").innerHTML = secvp1right;
    localStorage.setItem('secvp1right',secvp1right)
}
function modsecvp2right(value){
    if(value>0){if(secvp2right<=14){secvp2right++;
        modtotalvpright(1)} 
}
    else {if(secvp2right>0){secvp2right--;
        modtotalvpright(-1)}};
    document.getElementById("secvp2right").innerHTML = secvp2right;
    localStorage.setItem('secvp2right',secvp2right)
}
function modsecvp3right(value){
    if(value>0){if(secvp3right<=14){secvp3right++;
        modtotalvpright(1)} 
}
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
document.getElementById("mission").onchange = function() {
    localStorage['mission'] = document.getElementById("mission").value;
}

//Change background begin
document.getElementById("factionleft").onchange = function() {
    localStorage['factionleft'] = document.getElementById("factionleft").value;
    var e = document.getElementById("factionleft");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    const element = document.querySelector('#containerleft');
        if (text=="Adeptus Custodes"){
            element.style.backgroundImage = "url('images/bg_custodes.jpg')";
        }
        else if (text=="Astra Militarum"){
            element.style.backgroundImage = "url('images/bg_ig.jpg')";
        }
        else if (text=="Chaos Daemons"){
            element.style.backgroundImage = "url('images/bg_dae.jpg')";
        }
        else if (text=="Chaos Knights"){
            element.style.backgroundImage = "url('images/bg_chaosknights.jpg')";
        }
        else if (text=="Chaos Space Marines"){
            element.style.backgroundImage = "url('images/bg_csm.jpg')";
        }
        else if (text=="Death Guard"){
            element.style.backgroundImage = "url('images/bg_dg.jpg')";
        }
        else if (text=="Necrons"){
            element.style.backgroundImage = "url('images/bg_nec.jpg')";
        }
        else if (text=="Space Marines"){
            element.style.backgroundImage = "url('images/bg_sm.jpg')";
        }
        else if (text=="-- Select faction --"){
            element.style.backgroundImage = "none";
        }

    }
document.getElementById("factionright").onchange = function() {
    localStorage['factionright'] = document.getElementById("factionright").value;
    var e = document.getElementById("factionright");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    const element = document.querySelector('#containerright');
        if (text=="Adeptus Custodes"){
            element.style.backgroundImage = "url('images/bg_custodes_r.jpg')";
        }
        else if (text=="Astra Militarum"){
            element.style.backgroundImage = "url('images/bg_ig_r.jpg')";
        }
        else if (text=="Chaos Daemons"){
            element.style.backgroundImage = "url('images/bg_dae_r.jpg')";
        }
        else if (text=="Chaos Knights"){
            element.style.backgroundImage = "url('images/bg_chaosknights_r.jpg')";
        }
        else if (text=="Chaos Space Marines"){
            element.style.backgroundImage = "url('images/bg_csm_r.jpg')";
        }
        else if (text=="Death Guard"){
            element.style.backgroundImage = "url('images/bg_dg_r.jpg')";
        }
        else if (text=="Necrons"){
            element.style.backgroundImage = "url('images/bg_nec_r.jpg')";
        }
        else if (text=="Space Marines"){
            element.style.backgroundImage = "url('images/bg_sm_r.jpg')";
        }
        else if (text=="-- Select faction --"){
            element.style.backgroundImage = "none";
        }
    
}
//Change background end

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

window.onload = function(){

    //load dropdowns and set them to default if not in local storage
    //if(!localStorage['mission']){
    //    localStorage.setItem('mission','-- Select mission--');}
    if(!localStorage['factionleft']){
        localStorage.setItem('factionleft','-- Select faction--');}
    if(!localStorage['factionright']){
        localStorage.setItem('factionright','-- Select faction--');}
    if(!localStorage['secondary1right']){
        localStorage.setItem('secondary1right','-- Select --');}
    if(!localStorage['secondary2right']){
        localStorage.setItem('secondary2right','-- Select --');}
    if(!localStorage['secondary1right']){
        localStorage.setItem('secondary1right','-- Select --');}
    if(!localStorage['secondary2right']){
        localStorage.setItem('secondary2right','-- Select --');}
    if(!localStorage['secondary3right']){
        localStorage.setItem('secondary3right','-- Select --');}            
    if(!localStorage['secondary1left']){
        localStorage.setItem('secondary1left','-- Select --');}
    if(!localStorage['secondary2left']){
        localStorage.setItem('secondary2left','-- Select --');}
    if(!localStorage['secondary3left']){
        localStorage.setItem('secondary3left','-- Select --');}   
    

    //document.getElementById("mission").value = localStorage['mission'];
    document.getElementById("factionright").value = localStorage['factionright'];
    document.getElementById("factionleft").value = localStorage['factionleft'];
    document.getElementById("secondary1right").value = localStorage['secondary1right'];
    document.getElementById("secondary2right").value = localStorage['secondary2right'];
    document.getElementById("secondary3right").value = localStorage['secondary3right'];
    document.getElementById("secondary1left").value = localStorage['secondary1left'];
    document.getElementById("secondary2left").value = localStorage['secondary2left'];
    document.getElementById("secondary3left").value = localStorage['secondary3left'];
    

    //load cp and vp values and set them to default if not in local storage
    
    if(!localStorage['cpright']){localStorage.setItem('cpright',0);}
    if(!localStorage['cpleft']){localStorage.setItem('cpleft',0);}
    if(!localStorage['totalvpleft']){localStorage.setItem('totalvpleft',0);}
    if(!localStorage['totalvpright']){localStorage.setItem('totalvpright',0);}
    if(!localStorage['secvp1left']){localStorage.setItem('secvp1left',0);}
    if(!localStorage['secvp2left']){localStorage.setItem('secvp2left',0);}
    if(!localStorage['secvp3left']){localStorage.setItem('secvp3left',0);}
    if(!localStorage['secvp1right']){localStorage.setItem('secvp1right',0);}
    if(!localStorage['secvp2right']){localStorage.setItem('secvp2right',0);}
    if(!localStorage['secvp3right']){localStorage.setItem('secvp3right',0);}
    if(!localStorage['primaryvpleft']){localStorage.setItem('primaryvpleft',0);}
    if(!localStorage['primaryvpright']){localStorage.setItem('primaryvpright',0);}
    if(!localStorage['currentphase']){localStorage.setItem('currentphase',1);}
    if(!localStorage['currentround']){localStorage.setItem('currentround',1);}
    if(!localStorage['currentplayer']){localStorage.setItem('currentplayer',"-- Select faction --");}
    
    
    

    document.getElementById("cpright").innerHTML = localStorage['cpright'];
    document.getElementById("cpleft").innerHTML = localStorage['cpleft'];
    document.getElementById("totalvpleft").innerHTML = localStorage['totalvpleft'];
    document.getElementById("totalvpright").innerHTML = localStorage['totalvpright'];
    document.getElementById("secvp1left").innerHTML = localStorage['secvp1left'];
    document.getElementById("secvp2left").innerHTML = localStorage['secvp2left'];
    document.getElementById("secvp3left").innerHTML = localStorage['secvp3left'];
    document.getElementById("secvp1right").innerHTML = localStorage['secvp1right'];
    document.getElementById("secvp2right").innerHTML = localStorage['secvp2right'];
    document.getElementById("secvp3right").innerHTML = localStorage['secvp3right'];
    document.getElementById("primaryvpleft").innerHTML = localStorage['primaryvpleft'];
    document.getElementById("primaryvpright").innerHTML = localStorage['primaryvpright'];
    document.getElementById("currentround").innerHTML = localStorage['currentround'];
    document.getElementById("currentplayer").innerHTML = localStorage['currentplayer'];
    
   
    var currentphasex = localStorage['currentphase']

    if(currentphasex==1){
        phasename = "Command Phase";
    }
    else if(currentphasex==2){
        phasename = "Movement Phase";
    }
    else if(currentphasex==3){
        phasename = "Psychic Phase";
    }
    else if(currentphasex==4){
        phasename = "Shooting Phase";
    }
    else if(currentphasex==5){
        phasename = "Charge Phase";
    }
    else if(currentphasex==6){
        phasename = "Combat Phase";
    }
    else if(currentphasex==7){
        phasename = "Morale Phase";
    }
    
    document.getElementById("currentphase").innerHTML = phasename;
    
      



    localStorage['factionleft'] = document.getElementById("factionleft").value;
    var le = document.getElementById("factionleft");
    var text = le.options[le.selectedIndex].text;
    const lelement = document.querySelector('#containerleft');
        if (text=="Adeptus Custodes"){
            lelement.style.backgroundImage = "url('images/bg_custodes.jpg')";
        }
        else if (text=="Astra Militarum"){
            lelement.style.backgroundImage = "url('images/bg_ig.jpg')";
        }
        else if (text=="Chaos Daemons"){
            lelement.style.backgroundImage = "url('images/bg_dae.jpg')";
        }
        else if (text=="Chaos Knights"){
            lelement.style.backgroundImage = "url('images/bg_chaosknights.jpg')";
        }
        else if (text=="Chaos Space Marines"){
            lelement.style.backgroundImage = "url('images/bg_csm.jpg')";
        }
        else if (text=="Death Guard"){
            lelement.style.backgroundImage = "url('images/bg_dg.jpg')";
        }
        else if (text=="Necrons"){
            lelement.style.backgroundImage = "url('images/bg_nec.jpg')";
        }
    
        localStorage['factionright'] = document.getElementById("factionright").value;
        var re = document.getElementById("factionright");
        var text = re.options[re.selectedIndex].text;
        const relement = document.querySelector('#containerright');
            if (text=="Adeptus Custodes"){
                relement.style.backgroundImage = "url('images/bg_custodes_r.jpg')";
            }
            else if (text=="Astra Militarum"){
                relement.style.backgroundImage = "url('images/bg_ig_r.jpg')";
            }
            else if (text=="Chaos Daemons"){
                relement.style.backgroundImage = "url('images/bg_dae_r.jpg')";
            }
            else if (text=="Chaos Knights"){
                relement.style.backgroundImage = "url('images/bg_chaosknights_r.jpg')";
            }
            else if (text=="Chaos Space Marines"){
                relement.style.backgroundImage = "url('images/bg_csm_r.jpg')";
            }
            else if (text=="Death Guard"){
                relement.style.backgroundImage = "url('images/bg_dg_r.jpg')";
            }
            else if (text=="Necrons"){
                relement.style.backgroundImage = "url('images/bg_nec_r.jpg')";
            }

        }