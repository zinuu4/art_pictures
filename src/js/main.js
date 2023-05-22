import modals from "./modules/modals";
import slider from "./modules/sliders";
import sliders from "./modules/sliders";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  modals();
  sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn', 3000);
  sliders('.main-slider-item', 'vertical', '', '', 3000);
});