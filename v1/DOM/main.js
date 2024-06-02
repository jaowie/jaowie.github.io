const title = document.querySelector('.main-header');

console.log(title);

title.style.color = 'red';

const list = document.createElement('div');
const container = document.querySelector('.container');

container.append(list);
list.innerText = 'Naruto';
list.setAttribute('class', 'items');

const btn2 = document.querySelector('.btn2');
console.log(btn2);
function fbtn2() {
    list.style.alignSelf = 'end';
    list.style.color = 'red';
}

btn2.addEventListener("click", fbtn2);
