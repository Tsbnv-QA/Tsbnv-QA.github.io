// Находим кнопку и элемент с текстом
    const btn2 = document.getElementById('Красавчик же, ну!');
    const textBlock = document.getElementById('Ладно, идем!');

    // По клику на кнопку показываем текст
    btn2.addEventListener('click', () => {
      textBlock.style.display = 'block';
    });