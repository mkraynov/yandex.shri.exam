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
                        var sAction = data.action.toString(),
                            actionName = sAction.charAt(0).toUpperCase() + sAction.substr(1);
                        (typeof this['show' + actionName] === 'function') && this['show' + actionName]();
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

        showImport : function() {
            this.findBlockInside({blockName: 'b-imexport', modName: 'mode', modVal: 'import'}).setMod('visibility', 'visible');
            (this.getMod('visibility') !== 'visible') && this._show();
        },

        showExport : function() {
            this.findBlockInside({blockName: 'b-imexport', modName: 'mode', modVal: 'export'}).setMod('visibility', 'visible');
            (this.getMod('visibility') !== 'visible') && this._show();
        },

        showAdd : function() {
            this.findBlockInside('b-edit').setMod('visibility', 'visible');
            (this.getMod('visibility') !== 'visible') && this._show();
        },

        /*
        *  Довольно странный метод получился,
        *  но так не требуется вводить лишние проверки
        *  и декларативность соблюдена
        */
        showHide : function() {
            (this.getMod('visibility') === 'visible') && this._hide();
            this.findBlockInside('b-imexport').setMod('visibility', 'hidden');
        },

        _show : function() {
            this.setMod('visibility', 'visible');
        },

        _hide : function() {
            this.setMod('visibility', 'hidden');
        }

    }, {

//        live : function() {
//            /* ... */
//        }

    });

})();
