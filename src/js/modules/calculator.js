

const compute = () => {

    let box = document.querySelector('.cost__wrapper-btn')
 
    let plusBtnOne = document.querySelector('.cost__adjustment-btn.cost__adjustment-btn--plus.cost__adjustment-btn--plus-jsOne');
    let plusBtnTwo = document.querySelector('.cost__adjustment-btn.cost__adjustment-btn--plus.cost__adjustment-btn--plus-jsTwo');

    let minusBtnOne = document.querySelector('.cost__adjustment-btn.cost__adjustment-btn--minus-jsOne');
    let minusBtnTwo = document.querySelector('.cost__adjustment-btn.cost__adjustment-btn--minus-jsTwo');

    let inputTextNumberOne = document.querySelector('.cost__adjustment-input.cost__adjustment-input--js-1');
    let inputTextNumberTwo = document.querySelector('.cost__adjustment-input.cost__adjustment-input--js-2');

    let spanTextNumberOne = document.querySelector('.cost__total-content--js-1');
    let spanTextNumberTwo = document.querySelector('.cost__total-content--js-2');

    let btnImg1 = document.querySelector('.cost__img--1');
    let btnImg2 = document.querySelector('.cost__img--2');
    let btnImg3 = document.querySelector('.cost__img--3');
    let btnImg4 = document.querySelector('.cost__img--4');

    let outletOne = document.querySelector('.cost__item--outlet-one');
    let outletMany = document.querySelector('.cost__item--outlet-many');
    let cashOne = document.querySelector('.cost__item--cash-one');
    let cashMany = document.querySelector('.cost__item--cash-many');

    let total = document.querySelector('.cost__total-number-prise--js')

    let connection = 49900;
    let cashRegister = 6000;
    let outlet = 4900;

    box.addEventListener('click', (e) => {
        if (e.target === btnImg1) {
            let countMinusOne = inputTextNumberOne.innerHTML;
            if (+countMinusOne >= 2) {
                inputTextNumberOne.innerHTML--;
                spanTextNumberOne.innerHTML--;
                plusBtnOne.style.opacity = "1";
            } else {
                minusBtnOne.style.opacity = "0.6";
            }
            if(+inputTextNumberOne.innerHTML <= 1) {
                outletOne.style.display = "block";
                outletMany.style.display = "none";
            }
        }

        if (e.target === btnImg2) {
            inputTextNumberOne.innerHTML++;   
            spanTextNumberOne.innerHTML++; 
            minusBtnOne.style.opacity = "1";
            if(+inputTextNumberOne.innerHTML >= 2)
            outletOne.style.display = "none";
            outletMany.style.display = "block";
        }

        if (e.target === btnImg3) {
            let countMinusTwo = inputTextNumberTwo.innerHTML;
            if (+countMinusTwo >= 2) {
                inputTextNumberTwo.innerHTML--;
                spanTextNumberTwo.innerHTML--;
                plusBtnTwo.style.opacity = "1";
            } else {
                minusBtnTwo.style.opacity = "0.6";
            }
            if(+inputTextNumberTwo.innerHTML <= 1) {
                cashOne.style.display = "block";
                cashMany.style.display = "none";
            }
        }

        if (e.target === btnImg4) {
            inputTextNumberTwo.innerHTML++;
            spanTextNumberTwo.innerHTML++;
            minusBtnTwo.style.opacity = "1";
            if(+inputTextNumberTwo.innerHTML >= 2)
            cashOne.style.display = "none";
            cashMany.style.display = "block";
        }

        total.innerHTML = `${connection + (cashRegister * +(spanTextNumberOne.innerHTML)) + (outlet * +(spanTextNumberTwo.innerHTML))}`;

        total.innerHTML = parse(total.innerHTML);
    });

    let parse = (s) =>[...s.replace(/[^0-9]/g,"")].reduce((a,c,i,l)=>a+=c+((l.length-i)%3==1?" ":"")||a,"");

}

export default compute;