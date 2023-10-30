const chooseColor = document.querySelectorAll('.choose__color-btn');  //тут мы находим все class="choose-color__btn"
const contentItem = document.querySelectorAll('.content-item');   //тут мы находим все  class="content-item


chooseColor.forEach(function(element){      //бежим циклом по каждому button class="choose-color__btn",добавляем ему ивент 
    element.addEventListener('click', open)
})
 
function open(evt){   //пишем функцию для open

    const target = evt.currentTarget;    //найти того на кого кликаем
    const button = target.dataset.button; //кликаем на color--
    const contentActive = document.querySelectorAll(`.${button}`); //находим все кнопки

    chooseColor.forEach(function(item){
        item.classList.remove('choose__color-btn--active')      
    });

    target.classList.add('choose__color-btn--active')

    contentItem.forEach(function(item){
        item.classList.remove('content-item__active')
    });

    contentActive.forEach(function(item){
        item.classList.add('content-item__active')
    });
}
