/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

    var $window = $(window),
        scrollTimeout;

    BEM.DOM.decl('b-controls', {

        onSetMod : {

            'js' : function() {
//                $window.on('scroll.b-controls', this.onWindowScroll, this);

                var bWrap = this.findBlockOutside('b-wrap');
                if (bWrap) {
                    this.bindTo(this.elem('item'), 'click', function(e){
                        bWrap.trigger(
                            'controls:click',
                            {
                                'action' : this.getMod(e.data.domElem,'action'),
                                'content': this.getMod(e.data.domElem,'content')
                            }
                        );
                    });
                }
            }

        },

        onWindowScroll : function(e) {
            var that = this;
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(function(){
                    var scrollTop = that.domElem.scrollTop(),
                        winScrollTop = $window.scrollTop();

                    that.domElem.stop(true, true).css({top: winScrollTop + 10 + 'px'});
                    scrollTimeout = null;
                }, 300);
            } else {
                console.log('fuck yeah');
            }
        }

    }, {

    //    live : function() {
    //        /* ... */
    //    }

    });

})();
