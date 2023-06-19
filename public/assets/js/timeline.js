"use strict";

function qs(selector, all = false) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const sections = qs('.section1', true);
const timeline = qs('.timeline');
const line1 = qs('.line1');
line1.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up1, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * .8;

function scrollHandler(e) {
  const { scrollY } = window;
  up1 = scrollY < prevScrollY;
  down = !up1;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line1.getBoundingClientRect();
  const dist = targetY - timelineRect.top;

  if (down && !full) {
    set = Math.max(set, dist);
    line1.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line1.style.bottom = `-50px`;
  }

  sections.forEach(item => {
    const rect = item.getBoundingClientRect();

    if (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      item.classList.add('show-me');
    } else {
      item.classList.remove('show-me');
    }
  });

  // Vérifier si le défilement est revenu au sommet de la page
  if (scrollY === 0) {
    // Réinitialiser les valeurs pour revenir à l'état initial
    set = 0;
    full = false;
    line1.style.bottom = `calc(100% - 20px)`;
  }

  prevScrollY = window.scrollY;
}

scrollHandler();
line1.style.display = 'block';
window.addEventListener('scroll', scrollHandler);
