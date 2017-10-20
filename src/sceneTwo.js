const AFRAME = window.AFRAME;
import { createVideoConfig, createVideoScreenConfig, createVideoScreenWrapperConfig } from '../helpers/createVideoConfig';
import { createNewElement } from '../helpers/createNewElement';

export const sceneTwo = AFRAME.registerComponent('show-scene-two', {
      init: function(el) {
            this.el.addEventListener('mousedown', function(evt) {
                  const scene = document.querySelector('a-scene');

                  // CLOTHES
                  const vidScr1Wrapper = createNewElement('a-entity', createVideoScreenWrapperConfig('clothes'));
                  const vidScr1 = createNewElement('a-entity', createVideoScreenConfig('clothes'));
                  vidScr1Wrapper.append(vidScr1);
                  scene.appendChild(vidScr1Wrapper);

                  // ELECTRONICS
                  const vidScr2Wrapper = createNewElement('a-entity', createVideoScreenWrapperConfig('electronics'));
                  const vidScr2 = createNewElement('a-entity', createVideoScreenConfig('electronics'));
                  vidScr2Wrapper.append(vidScr2);
                  scene.appendChild(vidScr2Wrapper);

                  // HEALTH
                  const vidScr3Wrapper = createNewElement('a-entity', createVideoScreenWrapperConfig('health'));
                  const vidScr3 = createNewElement('a-entity', createVideoScreenConfig('health'));
                  vidScr3Wrapper.append(vidScr3);
                  scene.appendChild(vidScr3Wrapper);

                  // FOOD
                  const vidScr4Wrapper = createNewElement('a-entity', createVideoScreenWrapperConfig('food'));
                  const vidScr4 = createNewElement('a-entity', createVideoScreenConfig('food'));
                  vidScr4Wrapper.append(vidScr4);
                  scene.appendChild(vidScr4Wrapper);

                  // Play all videos @todo select video elements and play
                  // videoClothes.play();
            })
    }
});
