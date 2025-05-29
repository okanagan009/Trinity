const burger = () => {
    const burgerMenu = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.header__mobile-menu');
    // const navigationLink = document.querySelectorAll('.navigation__item-link');

    burgerMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('mobile-menu--active');
        burgerMenu.classList.toggle('burger--active');
        document.body.classList.toggle('overflow');
    });

    // navigationLink.forEach(item => {
    //     item.addEventListener('click', () => {
    //         mobileMenu.classList.remove('mobile-menu--active');
    //         burgerMenu.classList.remove('burger--active');
    //         // document.body.classList.remove('overflow');
    //     });
    // }); 
};

export default burger;