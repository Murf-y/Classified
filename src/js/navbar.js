import { setCssVariable , removeClassFromElement, addClassFromElement} from "./utils.js";


const navbarMaxWidth = "7rem";

function OpenNavBar(){
    // Called in navbar-controller-icon click event

    // increase the navbar width
    setCssVariable("--navbar-width", navbarMaxWidth);

    // change the icon class for styling to take place
    removeClassFromElement(".navbar-controller-icon","right-icon");
    addClassFromElement(".navbar-controller-icon","left-icon");

    // change the icon
    document.querySelector(".navbar-controller-icon").src = "../assets/icons/arrow-left.svg";

    //change the logo size
    document.querySelector(".navbar-logo").style.width = "50%";

    // change the navbar items to their original state
    ChangeNavBarItems();

}

function CloseNavBar(){
    // Called in navbar-controller-icon click event

    // decrease the navbar width
    setCssVariable("--navbar-width", "2rem");

    // change the icon class for styling to take place
    removeClassFromElement(".navbar-controller-icon","left-icon");
    addClassFromElement(".navbar-controller-icon","right-icon");

    // change the icon
    document.querySelector(".navbar-controller-icon").src = "../assets/icons/arrow-right.svg";

    //change the logo size
    document.querySelector(".navbar-logo").style.width = "80%";

    // change the navbar items to their original state
    ChangeNavBarItems();
}


function ChangeNavBarItems(){
    // Called When the navbar is opened or closed

    // change the navbar items
    var navItems= document.querySelectorAll(".navbar-item");
    var is_closed = true;
    navItems.forEach(item => {
        // check if the navbar is closed, and toggle it while doing so
        if( item.classList.contains("closed")){
            // wait 0.1 second to gradually open the navbar
            setTimeout(() => {
                // change classes for styling
                item.classList.remove("closed");
                item.classList.add("opened");
            }, 100);
            is_closed = false;
            
        }
        else{
            // wait 0.1 second to gradually close the navbar
            setTimeout(() => {
                // change classes for styling
                item.classList.remove("opened");
                item.classList.add("closed");
            }, 100);
            is_closed=true;
        }
    });
    setTimeout(() => {
        if(is_closed){
            var navBarIcons = document.querySelectorAll(".navbar-item-icon");
            navBarIcons.forEach(icon => {
                icon.classList.remove("hidden")
            });
            var navBarText = document.querySelectorAll(".navbar-item-text");
            navBarText.forEach(text => {
                text.classList.add("hidden")
            });
    
        }
        else{
            var navBarIcons = document.querySelectorAll(".navbar-item-icon");
            navBarIcons.forEach(icon => {
                icon.classList.add("hidden")
            });
            var navBarText = document.querySelectorAll(".navbar-item-text");
            navBarText.forEach(text => {
                text.classList.remove("hidden")
            });
        }
    }, 200);


    
}

// Listen for the click event on the navbar-controller-icon
document.querySelector(".navbar-controller-icon").addEventListener("click", function(){
    // if it contains the left icon then the navbar is open and we need to close it
    if(document.querySelector(".navbar-controller-icon").classList.contains("left-icon")){
        CloseNavBar();

    } 
    // if it contains the right icon then the navbar is closed and we need to open it
    else {
        OpenNavBar();
    }
});
