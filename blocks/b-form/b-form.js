/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-form', {

    onSetMod : {

        'js' : function() {
            this.elem('clone').data('ord', 1);
            this.bindTo(this.elem('clone'), 'click', this.onElemClone);

            var dateinput = this.elem('inptext', 'date', 'true').find('input[type=text]');
            this.bindTo(dateinput, 'blur', this.parseDate);

            this.findBlockOutside('b-wrap').on('controls:click', $.proxy(this.resetForm, this));
        }

    },

    onElemClone : function(e) {
        e.preventDefault();

        var cloneBtn = $(e.data.domElem),
            original = cloneBtn.prev(),
            clone = original.clone(),
            name = original.attr('name'),
            ord = cloneBtn.data('ord');

        if (name) {
            name = name.split('_');
            name.pop();
            name = name.join('_') + '_' + ++ord;
        } else {
            throw new Error('Clonable element must have name attribute in format "name_N"');
        }

        clone.attr('name', name);
        clone.appendTo(cloneBtn.parent());
        cloneBtn.data('ord', ord);
        clone.focus();
    },

    parseDate : function(e) {
        var input = $(e.data.domElem),
            hidden = input.siblings('input[type=hidden]').eq(0),
            value = input.val(),
            date = Date.parse(value);

        if (date !== null) {
            hidden.val(date.getTime());
            input.val(date.toString('dd MMM yyyy HH:mm'));
            this.unbindFrom(input, 'focus');
        } else {
            hidden.val(Date.today().getTime());
            input.val('Не смог распознать дату, введите еще раз. Например, в формате: dd.MM.yyyy HH:mm');
            this.bindTo(input, 'focus', function(){
                input.val('');
            });
        }
    },

    resetForm : function(e, data) {
        if (data && data.action === 'hide') {
            this.domElem.find('input').val('');
            this.domElem.find('textarea').val('');
        }
    }

}, {

});

})();
