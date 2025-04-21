const responsiveMenu = () => {

    // Get DOM elements
const menuButton = document.querySelector('#menu-button')
const menu = document.querySelector('.responsive-menu')

const menuIcon = `<svg width="36" height="24" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z" fill="currentColor"/>
</svg>`

const closeIcon = `<svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="currentColor"/>
</svg>`

    // Toggle Visibility on the menu
const toggleMenu = () => {
    menu.classList.toggle('responsive-menu--open')
    menuButton.classList.toggle('menu-button--close')

    if ( menuButton.classList.contains ('menu-button--close')) {
        menuButton.innerHTML = closeIcon
    } else {
        menuButton.innerHTML = menuIcon
    }
}

// Add events
menuButton.addEventListener('click', toggleMenu)





}

responsiveMenu ()