import { categoryProps } from '../constants/categories';

/**
 * Creates config object for video elements
 * @param  {string} type Name of video
 * @return {object} Created config object
 */
export const createVideoConfig = (name) => ({
    src: `assets/videos/${name}/${name}_02.mp4`,
    id: `video-${name}`,
    preload: 'true',
    autoplay: 'true'
});

export const createVideoScreenWrapperConfig = (name) => ({
    id: `${name}-wrapper`,
    position: categoryProps[name].position.in,
    rotation: categoryProps[name].rotation.idle
});

export const createVideoScreenConfig = (name) => ({
    id: `curved_screen_obj_${name}`,
    'obj-model': 'obj: #screen-obj',
    material: `src: #video-${name}; side: front;`,
    shadow: 'cast: true, receive: false',
    scale: '0.044 0.044 0.044',
    rotation: '-15 130 0',
    position: '0.35 0.5 -0.35'
});
