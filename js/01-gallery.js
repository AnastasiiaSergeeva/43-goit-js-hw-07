import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems
//  и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи.Для этого ознакомься
//  с документацией и примерами.
// Замена значения атрибута src элемента < img > в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(item => 
   `<div class="gallery__item">
   <a class="gallery__link" href="${item.original}">
     <img
       class="gallery__image"
       src="${item.preview}"
       data-source="${item.original}"
       alt="${item.description}"
     />
   </a>
 </div>`,
 )
  .join(``);

galleryRef.insertAdjacentHTML(`beforeend`, galleryMarkup);
galleryRef.addEventListener(`click`, onGalleryClick);

 function onGalleryClick (event) {
   event.preventDefault();

   if(!event.target.classList.contains(`gallery__image`)) {
     return;
   }
   makeModal(event);
   }
   
  function makeModal(event) {
    const instance = basicLightbox.create(`
       <img src="${event.target.dataset.source}"width="800" height="600"> `);
      
      instance.show();
      
 galleryRef.addEventListener(`keydown`, onEscClick);
 function onEscClick(event) {
         if(!(event.code === `Escape`)) {
           return;
         }
         if(event.code === `Escape`) {
           instance.close();
           galleryContainer.removeEventListener(`keydown`, onEscClick);
         }
       }
     }