const allowedPhonePrefix = '+375'; // Belarus phone prefix
    let users = JSON.parse(localStorage.getItem('users')) || [];



    // Регистрация пользователя
    document.getElementById('registerButton').addEventListener('click', function(event) {
        
        event.preventDefault();
        const nickname = document.getElementById('nickname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const dob = new Date(document.getElementById('dob').value);
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreementChecked = document.getElementById('agreement').checked;

        if (!validateForm(email, phone, dob, password, confirmPassword, agreementChecked)) return;

        users.push({ nickname, email, phone, dob: dob.toISOString().split('T')[0], password, role: 'user' });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Вы успешно зарегистрированы!');

        // Перенаправление на страницу админки
        window.location.href = 'admin.html';


        switchToLoginTab();
    });

    // Валидация формы
    function validateForm(email, phone, dob, password, confirmPassword, agreementChecked) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Введите корректный email.');
            
            return false;
            
        }

        if (!phone.startsWith(allowedPhonePrefix) || phone.length !== 13) {
            alert('Номер телефона должен начинаться с +375 и содержать 13 цифр.');
            return false;
        }

        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const isBirthdayPassed = today.getMonth() > dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
        if (age < 16 || (age === 16 && !isBirthdayPassed)) {
            alert('Вы должны быть не моложе 16 лет для регистрации.');
            return false;
        }

        if (!agreementChecked) {
            alert('Вы должны согласиться с пользовательским соглашением.');
            return false;
        }

        const passwordPattern = /^(?=.*[A-Z])(?=.*[\W_])(?=.{8,20})/; // Минимум 8, максимум 20 символов
        if (!passwordPattern.test(password)) {
            alert('Пароль должен содержать как минимум 8 символов, 1 заглавную букву и 1 специальный знак.');
            return false;
        }

        if (password !== confirmPassword) {
            alert('Пароли не совпадают.');
            return false;
        }

        return true;
    }

   

    // Переключение на вкладку входа
   
    

   
document.addEventListener('DOMContentLoaded', function() {
    let nicknameCount = 0;
    const adjectives = ['Смелый', 'Умный', 'Смешной', 'Забавный', 'Храбрый','Крутой'];
    
    document.getElementById('generateNickname').addEventListener('click', function() {
       
        document.getElementById('nickname').value = adjectives[nicknameCount];
        nicknameCount++;

        if (nicknameCount >= adjectives.length) {
            alert('Вы уже сгенерировали максимальное количество никнеймов.');
             
        }
        
    });

});