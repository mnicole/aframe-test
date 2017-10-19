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

export const createVideoScreenConfig = (name) => ({
    id: `curved_screen_obj_${name}`,
    position: { x: 0, y: 0, z: 0 },
    scale: { x: 0.044, y: 0.044, z: 0.044 },
    rotation: { x: 0, y: 0, z: 0 },
    shadow: { cast: true, receive: false },
    material: { src: `#video-${name}`, side: 'front' },
    'obj-model': { obj: '#screen-obj' }
});
