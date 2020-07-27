"use strict";

let testimonialPosition = 0;
let slideTo = 1

const testimonialScroll = () => {
    if (testimonialPosition === 0) {
        testimonialSwap(slideTo);
        slideTo = 0;
        testimonialPosition = 1;
    } else {
        testimonialSwap(slideTo);
        slideTo = 1;
        testimonialPosition = 0;
    }
}

const testimonialSwap = (slideTo) => {

    let data;

    if (slideTo === 1) {
        data = quote1;
    } else {
        data = quote0;
    }
    const testimonialPhoto = document.getElementById('test-photo-swap');
    testimonialPhoto.classList.add('fadeIn');
    testimonialPhoto.src = data.photo;
    testimonialPhoto.alt = data.alt;
    const testimonialText = document.getElementById('test-text');
    testimonialText.textContent = data.text;
    const testimonialName = document.getElementById('test-name');
    testimonialName.textContent = data.name;
    const testimonialTitle = document.getElementById('test-title');
    testimonialTitle.textContent = data.title;
    window.setTimeout(function () {
        testimonialPhoto.classList.remove('fadeIn');
    }, 301);
}



const quote0 = {
    photo: "images/image-tanya.jpg",
    alt: "Tanya Sinclair, UX Engineer",
    text: "I've been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    name: "Tanya Sinclair",
    title: "UX Engineer"
};


const quote1 = {
  photo: 'images/image-john.jpg',
  alt: "John Tarkpor, Junior Front-end Developer",
  text: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
  name: 'John Tarkpor',
  title: 'Junior Front-End Developer'
}

const testimonial = document.getElementById('swap-test');

testimonial.addEventListener('click', testimonialScroll);
