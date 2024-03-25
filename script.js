// Проверка, был ли выбран язык ранее и установка языка при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    if(localStorage.getItem('language')) {
        changeLanguage(localStorage.getItem('language'));
    }
});

function changeLanguage(lang) {
    // Сохранение выбранного языка в локальном хранилище
    localStorage.setItem('language', lang);
    const langData = {
        'ru': {
            'header': 'Шапка сайта',
            'home': 'Главная',
            'about': 'О нас',
            'contact': 'Контакты',
            'welcome': 'Приветственный текст',
            'aboutUs': 'О нас',
            'contactUs': 'Контакты',
            'welcomeContent': 'Добро пожаловать на наш сайт!',
            'aboutContent': 'Мы занимаемся чем-то интересным.',
            'contactContent': 'Наш адрес: где-то, город, страна',
            'telContent': 'Тел: +7 701 530 9898',
            'footerText': '© 2024 Одностраничный сайт. Все права защищены.',
        },
        'kk': {
            'header': 'Сайт шапкасы',
            'home': 'Басты',
            'about': 'Біз туралы',
            'contact': 'Байланыс',
            'welcome': 'Қош келдіңіздер!',
            'aboutUs': 'Біз туралы',
            'contactUs': 'Байланыстар',
            'welcomeContent': 'Біздің сайтқа қош келдіңіз!',
            'aboutContent': 'Басты контент.',
            'contactContent': 'Мекенжайымыз: негізгі, қала, ел',
            'telContent': 'Тел: +7 701 530 9898',
            'footerText': '© 2024 Бір беттік сайт. Барлық құқық қорғалған.',
        },
        'en': {
            'header': 'Website Header',
            'home': 'Home',
            'about': 'About Us',
            'contact': 'Contact',
            'welcome': 'Welcome Text',
            'aboutUs': 'About Us',
            'contactUs': 'Contact Us',
            'welcomeContent': 'Welcome to our website!',
            'aboutContent': 'We are engaged in something interesting.',
            'contactContent': 'Our address: somewhere, city, country',
            'telContent': 'Tel: +7 701 530 9898',
            'footerText': '© 2024 Single-page website. All rights reserved.',
        }
    };

    document.getElementById('homeLink').textContent = langData[lang]['home'];
    document.getElementById('aboutLink').textContent = langData[lang]['about'];
    document.getElementById('contactLink').textContent = langData[lang]['contact'];
    document.getElementById('welcomeText').textContent = langData[lang]['welcome'];
    document.getElementById('aboutText').textContent = langData[lang]['aboutUs'];
    document.getElementById('contactText').textContent = langData[lang]['contactUs'];
    document.getElementById('welcomeParagraph').textContent = langData[lang]['welcomeContent'];
    document.getElementById('aboutParagraph').textContent = langData[lang]['aboutContent'];
    document.getElementById('contactParagraph').textContent = langData[lang]['contactContent'];
    document.getElementById('tel').textContent = langData[lang]['telContent'];
    document.getElementById('footerText').textContent = langData[lang]['footerText'];
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Получаем данные из формы
    var formData = new FormData(this);

    // Отправляем данные на сервер
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'process_form.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.');
            // Очищаем поля формы после успешной отправки
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз позже.');
        }
    };
    xhr.send(formData);
});
