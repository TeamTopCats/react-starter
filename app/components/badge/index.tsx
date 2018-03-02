import * as React from 'react'
import * as css from './styles'

interface T {
    title?: string;
    bolded?: boolean;
    className?: string;
    variant?: 'info' | 'default ' | 'primary' | 'success' | 'warning' | 'danger';
    children?: React.ReactChild | {} | any[] | boolean;
}

export default class Badge extends React.PureComponent<T, {}> {
    static defaultProps = {
        title: '',
        bolded: false,
        className: '',
        variant: 'default'
    }

    render () {
        const cn: any = []

        const { title, children, variant, bolded, className } = this.props

        cn.push(css.badge)

        cn.push(css[`${variant}`])

        if (bolded) {
            cn.push(css.bold)
        }

        if (className) {
            cn.push(className)
        }

        return (
            <div className={cn.join(' ')}>{ title || children }</div>
        )
    }
}