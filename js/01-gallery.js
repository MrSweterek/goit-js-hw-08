import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

galleryItems.forEach(element => {
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = element.original;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.dataset.source = element.original;
    galleryImage.alt = element.description;
    galleryImage.src = element.preview;

    galleryBox.append(galleryLink);
    galleryLink.append(galleryImage);
});

const lightbox = new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250,
});