import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import burger from "./modules/burger";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  new WOW().init();
  
  modals();
  sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn', 3000);
  sliders('.main-slider-item', 'vertical', '', '', 3000);
  forms();
  burger('.burger-menu', '.burger');
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
});