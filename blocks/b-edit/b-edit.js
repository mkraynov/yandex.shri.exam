/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-edit', {

    onSetMod : {

        'js' : function() {
            this.bindTo(this.elem('send'), 'click', this.onSend);
        }

    },

    onSend : function(e) {
        var form = this.elem('form'),
            data = form.serializeArray(),
            bwrap = this.findBlockOutside('b-wrap');

        bwrap.trigger('controls:click', { action: 'hide' });
        bwrap.trigger('lecture:create', data);
    }

}, {

});

})();
