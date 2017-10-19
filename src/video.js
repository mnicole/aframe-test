const AFRAME = window.AFRAME;

AFRAME.registerComponent('video-asset', {
    schema: {
        name: { type: 'string', default: '' }
    },

    init: function () {
        const { name } = this.data;
        this.el.setAttribute('src', `../assets/videos/${name}_02.mp4`);
        this.el.setAttribute('id', `video-${name}`);
        this.el.setAttribute('preload', 'true');
        this.el.setAttribute('autoplay', 'true');
    }
});
