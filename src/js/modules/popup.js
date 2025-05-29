const popup = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            lockPadding = document.querySelectorAll('.lock-padding'),
            scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                document.body.style.overflow = "hidden";
                lockPadding.forEach(item => {
                    item.style.paddingRight = `${scroll}px`;
                });
                document.body.style.paddingRight = `${scroll}px`;
                modal.classList.add('popup--active'); 
            });
        });

        close.addEventListener('click', () => {
            document.body.style.overflow = "";


            lockPadding.forEach(item => {
                item.style.paddingRight = `0px`;
            });

            document.body.style.paddingRight = `0px`;
            modal.classList.remove('popup--active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.style.overflow = "";

                lockPadding.forEach(item => {
                    item.style.paddingRight = `0px`;
                });

                document.body.style.paddingRight = `0px`;
                modal.classList.remove('popup--active');
            }
        });
    }


    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = Math.max((window.innerWidth - document.body.clientWidth), (div.offsetWidth - div.clientWidth));

        div.remove(); 


        return scrollWidth;
    }

    // bindModal('.account__button.popup--open', '.application', '.application .popup--close');
    // bindModal('.account__button.popup--open', '.application', '.application__button.popup--open');
    
    bindModal('.request__button', '.application-thank', '.application-thank .popup--close');

    bindModal('.application__button.popup--open', '.application-thank', '.application-thank .popup--close');
    bindModal('.application-integration__button.popup--open', '.application-thank', '.application-thank .popup--close');
    bindModal('.subscribe__button.popup--open', '.email', '.email__close.popup--close');

    bindModal('.integration__button', '.application-integration', '.application-integration__close.popup--close');
    bindModal('.integration__button', '.application-integration', '.application-integration__button.popup--open');


    bindModal('.slider__button', '.application', '.application .popup--close');
    bindModal('.application__button', '.application', '.application__button.popup--open');

    bindModal('.account__button.popup--open', '.application-integration', '.application-integration .popup--close');
    bindModal('.account__button.popup--open', '.application-integration', '.application-integration__button.popup--open');
};

export default popup;