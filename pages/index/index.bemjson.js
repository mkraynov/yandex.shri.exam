({
    block: 'b-page',
    title: 'Первая ШРИ: интерактивная программа курса лекций',
    head: [
        { elem: 'css', url: '_index.css'},
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '../../blocks/i-date/date-ru-RU.js' },
        { elem: 'js', url: '../../blocks/i-taffy/taffy.js' },
        { elem: 'js', url: 'index.bemhtml.js' },
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        {
            block: 'b-wrap',
            content: [
                {
                    block: 'b-controls',
                    content: [
                        {
                            elem: 'layout',
                            content: [
                                { elem: 'item', elemMods: { action: 'show', content: 'import' } },
                                { elem: 'item', elemMods: { action: 'show', content: 'export' } },
                                { elem: 'item', elemMods: { action: 'show', content: 'add' } }
                            ]
                        }
                    ]
                },
                {
                    block: 'b-lectorium'
                },
                {
                    block: 'b-panel',
                    mods: { visible: 'false'},
                    content: [
                        {
                            block: 'b-controls',
                            mods: { mode: 'inner' },
                            content: [
                                {
                                    elem: 'layout',
                                    content: [
                                        { elem: 'item', elemMods: { action: 'hide' } }
                                    ]
                                }
                            ]
                        },
                        { block: 'b-imexport', mods: { mode: 'import' }, mix: [{ block: 'b-panel', elem: 'tab', mods: { content:'import' } }] },
                        { block: 'b-imexport', mods: { mode: 'export' }, mix: [{ block: 'b-panel', elem: 'tab', mods: { content:'export' } }] },
                        { block: 'b-edit', mix: [{ block: 'b-panel', elem: 'tab', mods: { content:'add' } }] }
                    ]
                }
            ]
        }
    ]
})
