const maskPhone = () => {
    let phoneInputs = document.querySelectorAll('input[type="tel"]');
    let getInputNumbersValue = function (input) {
        return input.value.replace(/\D/g, '');
    }

    let onPhonePaste = function (e) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        let pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            let pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    let onPhoneInput = function (e) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }

        input.value = formattedInputValue;
        if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (!(inputNumbersValue[0] == "7")) inputNumbersValue = "7" + inputNumbersValue;
            let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            // if (inputNumbersValue.length >= 10) {
            //     formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            // }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '' + inputNumbersValue.substring(9, 11);
            }
        }
        input.value = formattedInputValue;
    }
    let onPhoneKeyDown = function (e) {
        let inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        } else if ([8, 46].indexOf(e.keyCode) > -1 && inputValue.length > 1) {
            let symToClear
            switch (e.keyCode) {
                case 8:
                    symToClear = e.target.value[e.target.selectionStart - 1];
                    break;
                case 46: 
                    symToClear = e.target.value[e.target.selectionStart];
                    break;
            }
            if (symToClear && /\D/.test(symToClear)) e.preventDefault();
        }
    }
        for (let phoneInput of phoneInputs) {
            phoneInput.addEventListener('keydown', onPhoneKeyDown);
            phoneInput.addEventListener('input', onPhoneInput, false);
            phoneInput.addEventListener('paste', onPhonePaste, false);
        }
    }

    export default maskPhone; 