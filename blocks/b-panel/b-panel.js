/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

    BEM.DOM.decl('b-panel', {

        onSetMod : {

            'js' : function() {
                this.findBlockOutside('b-wrap').on(
                    'controls:click',
                    /**
                     * @this b-panel
                     */
                    $.proxy(function(e, data){
                        var action = data.action,
                            content = data.content;
                        if (action && typeof this[action.toString()] === 'function') {
                            this[action.toString()](content);
                        }
                    }, this)
                );
            },

            'visibility' : {
                'visible' : function() {
                    this.domElem.animate({'margin-left':0},500);
                },
                'hidden' : function() {
                    this.domElem.animate({'margin-left':'100%'},500);
                }
            }

        },

        onElemSetMod : {
            'tab' : {
                'visibility' : {
                    'visible' : function(elem) {
                        elem.show().stop(true).animate({'opacity':1},600);
                    },
                    'hidden' : function(elem) {
                        elem.stop(true).animate({'opacity':0},600,function(){
                            $(this).hide();
                        })
                    }
                }
            }
        },

        show : function(content) {
            var tab = this.elem('tab','content',content);
            if (this.getMod('visibility') !== 'visible') {
                this.setMod(tab, 'visibility', 'visible');
                this.setMod('visibility', 'visible');
            }
        },

        hide : function() {
            if (this.getMod('visibility') === 'visible') {
                this.setMod(this.elem('tab'), 'visibility', 'hidden');
                this.setMod('visibility', 'hidden');
            }
        }

    }, {

//        live : function() {
//            /* ... */
//        }

    });

})();
