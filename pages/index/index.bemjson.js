({
    block: 'b-page',
    title: 'Первая ШРИ: интерактивная программа курса лекций',
    head: [
        { elem: 'css', url: '_index.css'},
        { block: 'i-jquery', elem: 'core' },
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
                                { elem: 'item', elemMods: { action: 'search' } },
                                { elem: 'item', elemMods: { action: 'import' } },
                                { elem: 'item', elemMods: { action: 'export' } },
                                { elem: 'item', elemMods: { action: 'add' } }
                            ]
                        }
                    ]
                },
                {
                    block: 'b-lectorium',
                    content: [
                        {
                            block: 'b-lec-date',
                            mods: { pass: 'true' },
                            content: [
                                { elem: 'title', content: '15 сентября,&nbsp;сб' },
                                {
                                    block: 'b-lecture',
                                    content: [
                                        { elem: 'time', content: '13:00' },
                                        { elem: 'title', content: 'Общий цикл разработки' },
                                        { block: 'b-user-link', content: 'Михаил Трошев', mix: [ { block: 'b-lecture', elem: 'lecturer' } ] },
                                        {
                                            elem: 'thesis-list',
                                            content : [
                                                { elem: 'thesis', content: 'Разработка'},
                                                { elem: 'thesis', content: 'Процесс разработки'},
                                                { elem: 'thesis', content: 'Цикл разработки'},
                                                { elem: 'thesis', content: 'Постановка задачи'},
                                                { elem: 'thesis', content: 'Дизайн'},
                                                { elem: 'thesis', content: 'Разработка'},
                                                { elem: 'thesis', content: 'Тестирование'},
                                                { elem: 'thesis', content: 'Деплой'},
                                                { elem: 'thesis', content: 'Маркетинг'},
                                                { elem: 'thesis', content: 'Поддержка пользователей'},
                                                { elem: 'thesis', content: 'Что потом'},
                                                { elem: 'thesis', content: 'Примеры циклов разработки'}
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'b-lecture',
                                    content: [
                                        { elem: 'time', content: '14:00' },
                                        { elem: 'title', content: 'Task-tracker' }
                                    ]
                                },
                                {
                                    block: 'b-lecture',
                                    content: [
                                        { elem: 'time', content: '14:30' },
                                        { elem: 'title', content: 'Wiki' }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'b-lec-date',
                            mods: { pass: 'true' },
                            content: [
                                { elem: 'title', content: '18 сентября,&nbsp;вт' },
                                {
                                    block: 'b-lecture',
                                    content: [
                                        { elem: 'time', content: '19:00' },
                                        { elem: 'title', content: 'Командная строка Unix' }
                                    ]
                                },
                                {
                                    block: 'b-lecture',
                                    content: [
                                        { elem: 'time', content: '20:00' },
                                        { elem: 'title', content: 'Редакторы кода' }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'b-lec-date',
                            content: [
                                { elem: 'title', content: '20 сентября,&nbsp;чт' },
                                {
                                    block: 'b-lecture',
                                    mods: { recent: 'true' },
                                    content: [
                                        { elem: 'time', content: '19:00' },
                                        { elem: 'title', content: 'Браузеры' },
                                        { block: 'b-user-link', content: 'Георгий Мостоловица', mix: [ { block: 'b-lecture', elem: 'lecturer' } ] },
                                        {
                                            elem: 'thesis-list',
                                            content : [
                                                { elem: 'thesis', content: 'Общая схема работы браузера'},
                                                { elem: 'thesis', content: 'Краткая история'},
                                                { elem: 'thesis', content: 'Браузерные войны'},
                                                { elem: 'thesis', content: 'Режимы отображения'},
                                                { elem: 'thesis', content: 'UserAgent'},
                                                { elem: 'thesis', content: 'Кроссбраузерность'}
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'b-lecture',
                                    mods: { recent: 'true' },
                                    content: [
                                        { elem: 'time', content: '20:00' },
                                        { elem: 'title', content: 'Системы контроля версий' },
                                        { block: 'b-user-link', content: 'Сергей Сергеев', href: 'http://github.com/gurugray', mix: [ { block: 'b-lecture', elem: 'lecturer' } ] },
                                        {
                                            elem: 'thesis-list',
                                            content : [
                                                { elem: 'thesis', content: 'Мир без VCS'},
                                                { elem: 'thesis', content: 'Для чего нам нужны VCS'},
                                                { elem: 'thesis', content: 'Централизованные vs. Децентрализованные'},
                                                { elem: 'thesis', content: 'Работа с VCS'},
                                                { elem: 'thesis', content: 'Релизы'},
                                                { elem: 'thesis', content: '«Гигиена» разработки'},
                                                { elem: 'thesis', content: 'GitHub—тренд opensource'}
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'b-lec-date',
                            content: [
                                { elem: 'title', content: '22 сентября,&nbsp;сб' },
                                {
                                    block: 'b-lecture',
                                    content: [
                                        { elem: 'time', content: '12:00' },
                                        { elem: 'title', content: 'Тестирование' }
                                    ]
                                },
                                {
                                    block: 'b-lecture',
                                    content: [
                                        { elem: 'time', content: '14:00' },
                                        { elem: 'title', content: 'Развертывание верстки' }
                                    ]
                                },
                                {
                                    block: 'b-lecture',
                                    content: [
                                        { elem: 'time', content: '14:00' },
                                        { elem: 'title', content: 'HTTP-протокол' }
                                    ]
                                }
                            ]
                        }
                    ]
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
                        { block: 'b-imexport', mods: { mode: 'import' } },
                        { block: 'b-imexport', mods: { mode: 'export' } },
                        { block: 'b-edit' }
                    ]
                }
            ]
        }
    ]
})
