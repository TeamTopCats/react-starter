import * as React from 'react'
import * as css from './styles'

import { Content } from 'segments'

console.log(css)

export default class Extensions extends React.Component<{}, {}> {
    render () {
        // <GroupLinks
        //     base="extensions"
        //     links={[
        //         {
        //             name: 'Группы',
        //             slug: 'groups'
        //         },
        //         {
        //             name: 'Установка модулей',
        //             slug: 'install'
        //         },
        //         {
        //             name: 'Экспорт модулей',
        //             slug: 'export'
        //         },
        //         {
        //             name: 'Таблицы',
        //             slug: 'tables'
        //         },
        //         {
        //             name: 'Модули',
        //             slug: 'binds'
        //         }
        //     ]}
        // />
        return (
            <Content>
                Entities!
            </Content>
        )
    }
}
