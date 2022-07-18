export function hamburgerMenu(btnOpen,menu){
    document.addEventListener('click',(e)=>{
        if(e.target.matches(btnOpen) || e.target.matches(`${btnOpen} *`)){
            document.querySelector(menu).classList.toggle('active-menu');
            document.querySelector(btnOpen).classList.toggle('active-button');
            
        }
    })
}

export function ActiveSubmenuClick(menuItem){
    document.addEventListener('click',(e)=>{
        if(e.target.matches(menuItem) || e.target.matches(`${menuItem} *`)){
            e.target.classList.toggle('activeSubMenu');
        }
    })
}
export function stickyHeader(header){
    const $header=document.getElementById(header);
    document.addEventListener('scroll',(e)=>{
        let $scrollTop = window.scrollY;
       if($scrollTop>=400){
        $header.classList.add('stickyActiveHeader');
       }else{
        $header.classList.remove('stickyActiveHeader');
       }
    })
}
export function addIconSubMenu(menuItemChildren){
    const $menuItemChildren=document.querySelectorAll(menuItemChildren);
    const $icon=document.createElement('div');
    $icon.classList.add('icon');
    $menuItemChildren.forEach(el => {
        el.after($icon);
        console.log(el);
    });
}
