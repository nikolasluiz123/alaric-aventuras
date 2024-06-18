AFRAME.registerComponent('portal', {
    schema: {
        redirectTo: { type: 'string' }
    },
    init: function () {
        this.el.addEventListener('click', () => {
            window.location.href = this.data.redirectTo;
        });
    }
});