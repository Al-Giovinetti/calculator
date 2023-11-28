const buttonZone = document.querySelector('section.buttons-zone');

const buttons = ['AC', '+/-', '%', '÷', 7, 8, 9,'X', 4, 5, 6, '-', 1, 2 ,3, '+', 0, ',', '='];
const extra = ['AC','+/-','%'];

buttons.forEach((element,index) => {
    console.log(element);
    const elementBox = document.createElement('div');
    elementBox.classList.add('button-box')
    const boxItem = document.createElement('span');
    boxItem.innerHTML = element;

    if( extra.includes(element) ){
        elementBox.classList.add('bg-grey');
    }else if((!isNaN(element)) || (element == ',')){
        elementBox.classList.add('bg-light-grey');
    }else{
        elementBox.classList.add('bg-orange');
    }

    buttonZone.append(elementBox);
    elementBox.append(boxItem);

});
