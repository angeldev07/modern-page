const $ = (selectors) => document.querySelector(selectors);

// Menus icons
const openMenuIcon = $('.open-menu')
const closeMenuIcon = $('.close-menu')
// Nav menu
const navMenu = $('.nav-list')

openMenuIcon.addEventListener("click", () => {
    navMenu.classList.add('show')
    openMenuIcon.classList.remove('menu-active')
    openMenuIcon.classList.add('hidden-menu')
    closeMenuIcon.classList.add('menu-active')
})

closeMenuIcon.addEventListener("click", ()=>{
    navMenu.classList.remove('show')
    openMenuIcon.classList.add('menu-active')
    closeMenuIcon.classList.remove('menu-active')
})
