/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

    BEM.DOM.decl('b-lec-date', {

        onSetMod : {

            'js' : function() {
                if (this.hasMod('pass', 'true')) {
                    this.bindTo('hover', this.onHover);
                }
            }

        },

        onHover : function(e) {
            this.setMod('blur', e.type === 'mouseleave' || e.type === 'mouseout' ? 'true' : 'false');
    //        this.findBlocksInside('b-lecture').forEach(function(lecture){
    //            lecture.setMod('blur', e.type === 'mouseleave' || e.type === 'mouseout' ? 'true' : 'false');
    //        });
        }

    }, {

    //    live : function() {
    //        /* ... */
    //    }

    });

})();
