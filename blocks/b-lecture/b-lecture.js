/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

    BEM.DOM.decl('b-lecture', {

        onSetMod : {

            'js' : function() {

            }

        },

        onTitleClick : function(e){
            this.setMod('view', this.hasMod('view', 'full') ? 'folded' : 'full');
        }

    }, {

        live: function() {
            if (!this.inited) {
                this.liveBindTo('title', 'click', function(e){ this.onTitleClick(e) });
            }
            this.inited = true;
        },

        inited: false

    });

})();
