import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

let deck = new Reveal({
   plugins: [ Markdown ]
})
deck.initialize();

  // Initialization for ES Users
  import {
   Carousel,
   initTE,
 } from "tw-elements";
 
 initTE({ Carousel });
