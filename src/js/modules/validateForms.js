const validateForms = (selector, successModal) => {
    new window.JustValidate(selector, {
        rules: {
            tel: {
                required: true,
                minLength: 18,
            },
            name: {
                required: true
            },
        },
        submitHandler: function (form) {
            let formData = new FormData(form);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Отправлено');
                    }
                }
            }

            xhr.open('POST', '../php/server.php', true);
            xhr.send(formData);

            form.reset();
        },
        messages: {
            name: '*Введите имя',
            tel: '*Введите номер телефона',
        },
    });
}

export default validateForms;