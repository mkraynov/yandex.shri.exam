/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

    BEM.DOM.decl('b-lecture', {

        onSetMod : {

            'js' : function() {
                this.bindTo(this.elem('title'), {
                    'click' : this.onTitleClick
                });
            }

        },

        onTitleClick : function(e){
            this.setMod('view', this.hasMod('view','full') ? 'folded' : 'full');
        }

    }, {

    //    live : function() {
    //        /* ... */
    //    }

    });

})();
