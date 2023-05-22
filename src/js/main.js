import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import burger from "./modules/burger";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  new WOW().init();
  
  modals();
  sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn', 3000);
  sliders('.main-slider-item', 'vertical', '', '', 3000);
  forms();
  burger('.burger-menu', '.burger');
});