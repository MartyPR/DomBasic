const h1=document.querySelector('h1');
const parrafo=document.querySelector('.parrafo');
const input=document.querySelector('#pid')


h1.innerHTML="Beunas";
console.log(h1.getAttribute('pantalla'));
h1.getAttribute('class', 'rojo')
h1. classList.add('rojo');
h1.classList.remove('verde');

input.value='1234597';

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg')
console.log(img);
parrafo.innerHTML="";
parrafo.append(img);

