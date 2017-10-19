const AFRAME = window.AFRAME;
AFRAME.registerComponent('video-screen', {
    schema: {
        name: { type: 'string', default: '' }
    },
    update: function () {
        const { name } = this.data;
        this.el.setAttribute('id', `curved_screen_obj_${name}`);
        // this.el.setAttribute('obj-model', 'obj: url(models/screen/screen_00.obj)');
        // this.el.setAttribute('position', { x: 0, y: 0, z: 0 });
        // this.el.setAttribute('rotation', { x: 0, y: 0, z: 0 });
        // this.el.setAttribute('scale', { x: 0.044, y: 0.044, z: 0.044 });
        // this.el.setAttribute('shadow', 'cast: false; receive: false;');
        // this.el.setAttribute('material', 'src', '#video-clothes');
        // this.el.setAttribute('material', {
        //     shader: 'flat',
        //     src: '#video',
        //     side: 'front'
        // });
    }
});
