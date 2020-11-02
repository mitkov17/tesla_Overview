$(document).ready(function(){
    $('#consultation-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
            surname: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 12
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите своё имя",
                minlength: jQuery.validator.format("Не менее {0} символов!"),
                maxlength: jQuery.validator.format("Не более {0} символов!")
            },
            surname: {
                required: "Пожалуйста, введите свою фамилию",
                minlength: jQuery.validator.format("Не менее {0} символов!"),
                maxlength: jQuery.validator.format("Не более {0} символов!")
            },
            phone: {
                required : "Пожалуйста, введите свой номер телефона",
                minlength: jQuery.validator.format("Не менее {0} символов!"),
                maxlength: jQuery.validator.format("Не более {0} символов!")
            },
            email: {
              required: "Пожалуйста, введите свой адрес электронной почты",
              email: "Введённая почта должна быть формата name@domain.com"
            }
        }
    });

    document.querySelector('#idName').addEventListener('keyup', function(){
        this.value = this.value.replace(/^[.:;№"!#$%&@'*+/=?^_`(){|}~-]/g, '');
    });

    document.querySelector('#idSurname').addEventListener('keyup', function(){
        this.value = this.value.replace(/^[.:;№"!#$%&@'*+/=?^_`(){|}~-]/g, '');
    });
});