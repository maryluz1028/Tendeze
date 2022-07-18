// you can import modules from the theme lib or even from
// NPM packages if they support it…
import {hamburgerMenu,ActiveSubmenuClick, stickyHeader,addIconSubMenu} from "./components/Hamburger-menu";

// Some convenient tools to get you started…
import ReplaceObfuscatedEmailAddresses from "./components/ReplaceObfuscatedEmailAddresses";
import AnimateOnPageLinks from "./components/AnimateOnPageLinks";
import {videosOpenModal} from "./components/Videos-modal"

// Initialise our components 
document.addEventListener('DOMContentLoaded',(e)=>{
    hamburgerMenu('#button-bars','.menu-nav-mobile');
    ActiveSubmenuClick('.menu-nav-mobile #navbar_mobile .menu .menu-item .icon');
    stickyHeader('header');
    addIconSubMenu('.menu-nav-mobile .menu-item-has-children >a');
    videosOpenModal('videos-modal','.video-img','#videos-close-modal','.video-modal-container');

})
/************* */