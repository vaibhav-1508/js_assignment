
function lightSwitch() {
    let switchTrigger = document.getElementById('flexSwitchCheckChecked').checked;
    switchTrigger == true ? bulb_on() : bulb_off();
    console.log(switchTrigger);
}


function bulb_on(){
    document.getElementById('bulb').src='https://i.postimg.cc/6QyTynzr/bulb-on.png';
}
function bulb_off(){
    document.getElementById('bulb').src='https://i.postimg.cc/KjK1wL3c/bulb-off.png';
}

