/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

    BEM.DOM.decl('b-page', {

        onSetMod : {

            'js' : function() {
                this.__base.apply(this, arguments);
            }

        }

    }, {

    });

})();