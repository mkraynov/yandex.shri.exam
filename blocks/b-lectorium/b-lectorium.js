/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

var Lecture = (function(){
    function Lecture(data) {
        var i = 1;

        this.theme = data.theme;
        this.date = parseInt(data.date, 10) || Date.today().getTime();
        this.lecturer = data.lecturer;
        this.lecturer_url = data.lecturer_url;
        this.theses = data.theses || [];
        this.additional_info = data.additional_info;

        if (this.theses.length === 0) {
            while (data['thesis_' + i]) {
                this.theses.push(data['thesis_' + i]);
                i += 1;
            }
        }
    }
    Lecture.prototype.createBemjson = function() {
        var length = this.theses.length,
            theses = [],
            i,
            content;

        var bemjson = {
            block: 'b-lecture',
            js: true,
            content: [ ]
        };
        bemjson.content.push({ elem: 'time', content: new Date(this.date).toString('HH:mm') });
        bemjson.content.push({ elem: 'title', content: this.theme });
        bemjson.content.push({ block: 'b-user-link', content: this.lecturer, href: this.lecturer_url, mix: [{ block: 'b-lecture', elem: 'lecturer' }] });

        for (i = 0; i < length; i++) { theses.push(this.theses[i]); }
        if (theses.length > 0) {
            content = [];
            length = theses.length;
            for (i = 0; i < length; i++) {
                content.push({ elem: 'thesis', content: theses[i] })
            }
            bemjson.content.push({ elem: 'thesis-list', content: content });
        }
        bemjson.content.push({ elem: 'info', content: this.additional_info });

        return bemjson;
    };
    return Lecture;
})();

BEM.DOM.decl('b-lectorium', {

    onSetMod : {

        'js' : function() {
            var bwrap = this.findBlockOutside('b-wrap');
            bwrap.on('lecture:create', $.proxy(this.onLectureCreate, this));
            bwrap.on('import', $.proxy(this.initializeLectorium, this));

            this.initializeLectorium();
        }

    },

    initializeLectorium : function() {
        var _this = this;

        this.domElem.html('');
        this.lectures = new TAFFY();
        this.blecdates = new TAFFY();
        this.lectures.store('lectures');
        this.lectures.sort('date');
        $.each(this.lectures().get(), function(i, lecture){
            _this.createAndAppendLecture(new Lecture(lecture));
        });
    },

    onLectureCreate : function(e, data) {
        var i,
            length,
            dataObj = {};
        if (data && $.isArray(data)) {
            length = data.length;
            for (i = 0; i < length; i++) {
                dataObj[ data[i].name ] = data[i].value || '';
            }
        }
        this.createAndAppendLecture(new Lecture(dataObj));
    },

    findOrCreateLecDateBlock : function(date) {
        var id = parseInt(date.toString('ddMMyyyy'), 10),
            bemjson,
            result = this.blecdates({ id: id }),
            block = this.findBlockInside({ blockName: 'b-lec-date', modName: 'id', modVal: ''+id });

        if (block) { block = block.domElem }
        if (!result || result.get().length === 0) {
            bemjson = {
                block: 'b-lec-date',
                mods: { id: ''+id },
                content: [
                    { elem: 'title', content: date.toString('dd MMM, ddd') }
                ]
            };
            if (date.compareTo(Date.today()) < 0) {
                bemjson.mods.pass = 'true';
            }
            block = $(BEMHTML.apply( bemjson ));
            result = this.blecdates.insert({ id: id, created: true });
        }
        return { result: result, block: block };
    },

    createAndAppendLecture: function(lecture) {
        var blecture = lecture.createBemjson(),
            result = this.findOrCreateLecDateBlock(new Date(lecture.date)),
            blecdatehash = result.result.first(),
            prev,
            prevBlock,
            next,
            nextBlock;

        result.block.append( $(BEMHTML.apply(blecture)) );
        if (blecdatehash.created === true) {
            prev = this.blecdates({ id: { lt: blecdatehash.id }}).last();
            if (prev) {
                prevBlock = this.findBlockInside({ blockName: 'b-lec-date', modName: 'id', modVal: ''+prev.id });
                prevBlock.domElem.after( result.block );
            } else {
                next = this.blecdates({ id: { gt: blecdatehash.id }}).first();
                if (next) {
                    nextBlock = this.findBlockInside({ blockName: 'b-lec-date', modName: 'id', modVal: ''+next.id });
                    nextBlock.domElem.before( result.block );
                } else {
                    this.domElem.append( result.block );
                }
            }
        }
        if (!this.lectures({ date: lecture.date }).first()) {
            this.lectures.insert(lecture);
        }
        var bLecture = BEM.DOM.blocks['b-lecture'];
        if (bLecture && !bLecture.inited) {
            bLecture.live();
        }
    }

}, {

});

})();
