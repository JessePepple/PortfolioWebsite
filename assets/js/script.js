// menu slide down and up function

var menu_btn = document.getElementById("menu_btn");
var menu = document.querySelector(".links");

// make sure menu button exists not to trigger an error
if(menu_btn)
{
    
    menu_btn.addEventListener('click', () => {
        console.log('menu clicked');
        if(menu)
        {
            console.log('menu exists');
            // whenever hamburger/menu button gets clicked, toggle between scrolling up and down 
            menu.classList.toggle('slide-down');
        }
    })
}
