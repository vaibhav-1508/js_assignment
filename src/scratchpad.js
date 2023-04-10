let ele;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
                    }
async function illuminateLight(index)
{
    let message=document.getElementById("message").value;
    message=message.toLocaleUpperCase();
    message=message.split(" ").join("")
    //window.alert(message)
for(let i=0;i<message.length; i++)
{   index=message.charCodeAt(i)-65;
    //window.alert(index);
    let colorValue=''
    if(index>=0 && index<=7)
    {
         ele=document.getElementById("setOne").getElementsByTagName("li")
    }
    else if(index>=8&&index<=16)
    {
        ele=document.getElementById("setTwo").getElementsByTagName("li")
        index=index-8;
    }
    else if(index>=17&&index<=25)
    {
        ele=document.getElementById("setThree").getElementsByTagName("li")
        index=index-17;
    }
        //window.alert(ele[index])
        if(index%2!=0)
        {  //PINK
            ele[index].style.backgroundColor='#ff99ff';
            colorValue='rgba(255,105,180,0.9)'
            ele[index].style.boxShadow='0px 2px 20px 4px #ffff00';
        }

       else
        {
            //BLUE
            ele[index].style.backgroundColor='aqua';
            colorValue='rgba(0,153,255,0.8)'
            ele[index].style.boxShadow='0px 2px 20px 4px  #ffff00';
        }

    await sleep(1000)
    //window.alert(colorValue)
    ele[index].style.backgroundColor=colorValue;
    ele[index].style.boxShadow='0px 2px 20px 4px  '+colorValue;
    await sleep(500)
    }

}