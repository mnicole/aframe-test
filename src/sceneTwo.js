const AFRAME = window.AFRAME;
import { createVideoConfig, createVideoScreenConfig } from '../helpers/createVideoConfig';
import { addProperties, createNewElement } from '../helpers/createNewElement';
import { categoriesUpper } from '../constants/categories';

AFRAME.registerComponent('show-scene-two', {
    init: function(el) {
        this.el.addEventListener('mousedown', function(evt) {
            const scene = document.querySelector('a-scene');
            const assets = document.querySelector('a-assets');

            const videoScreenClothes = document.createElement('a-entity');

            // videoScreenClothes.setAttribute('scale', '0.044 0.044 0.044');
            AFRAME.utils.entity.setComponentProperty(videoScreenClothes, 'scale', { x: 0.044, y: 0.044, z: 0.044 });
            scene.appendChild(videoScreenClothes);

            console.log('videoScreenClothes', videoScreenClothes);

            // Play all videos
            // videoClothes.play();
        })
    }
});
