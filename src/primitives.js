const AFRAME = window.AFRAME;

AFRAME.registerPrimitive('gg-video', {
    defaultComponents: {
        position: { x: 0, y: 0, z: 0 },
        scale: { x: 0.044, y: 0.044, z: 0.044 },
        rotation: { x: 0, y: 0, z: 0 },
        shadow: { cast: true, receive: false },
        'obj-model': { obj: '#screen-obj' }
    },
    // Maps HTML attributes to the component's properties
    mappings: {
        id: 'id',
        material: 'material'
    }
});
