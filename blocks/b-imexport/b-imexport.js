/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

    BEM.DOM.decl('b-imexport', {

        onSetMod : {

            'js' : function() {
                var _this = this,
                    bwrap = this.findBlockOutside('b-wrap'),
                    send = this.elem('send');

                if (send.length > 0) { this.bindTo(send, 'click', this.onSend); }

                bwrap.on('controls:click', function(e, data){
                    if (data && data.action === 'show' && data.content === 'export') {
                        _this.fillExport();
                    }
                })
            }
        },

        fillExport : function() {
            var db = new TAFFY(),
                lectures;

            db.store('lectures');
            lectures = db().get();
            $.each(lectures, function(i, lecture){
                delete lecture.___id;
                delete lecture.___s;
            });

            this.findBlockInside('b-textarea').domElem.find('textarea').val( JSON.stringify(lectures) );
        },

        onSend : function() {
            var form = this.elem('form'),
                data = form.serializeArray(),
                bwrap = this.findBlockOutside('b-wrap');

            if (localStorage) {
                localStorage.clear();
                localStorage.setItem('taffy_lectures', data[0].value);
                bwrap.trigger('controls:click', { action: 'hide' });
                bwrap.trigger('import');
            }
        }

    }, {

    });

})();
