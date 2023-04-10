const BULB_ON_URL = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
const BULB_OFF_URL = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
const checkbx = document.querySelector("#flexSwitchCheckChecked");
const bulb = document.getElementById("bulb");
/*
TODO:
Fetch the status of the 'flexSwitchCheckChecked' checkbox and call the appropiate function to turn the bulb on or off
*/
function lightSwitch() {
    let checker= checkbx.checked;
    console.log("clicked");
    if(checker)
    {
        bulb_on();
    }
    else
    {
        bulb_off();
    }
}

/*
TODO:
Set the "bulb" element's Image src to be the image specified by BULB_ON_URL
*/
function bulb_on() {
    bulb.src = BULB_ON_URL;
}

/*
TODO:
Set the "bulb" element's Image src to be the image specified by BULB_ON_URL
*/
function bulb_off() {
    bulb.src = BULB_OFF_URL;
}
