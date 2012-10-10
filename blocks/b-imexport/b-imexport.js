/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

    BEM.DOM.decl('b-imexport', {

        onSetMod : {

            'js' : function() {
                /* ... */
            },

            'visibility' : {
                'visible' : function() {
                    this.domElem.show().stop(true).animate({'opacity':1},600);
                },
                'hidden' : function() {
                    this.domElem.stop(true).animate({'opacity':0},600,function(){
                        $(this).hide();
                    })
                }
            }

        }

    }, {

    });

})();
