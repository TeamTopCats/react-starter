import * as React from 'react'
import * as css from './styles.scss'
import { сlasses } from 'helpers'

export interface P {
    className?: string;
}

const cx = сlasses.bind(css)

export const Spinner = ({ className = '' }: P) => {
    return <div className={cx({ spinner: true }, className)} />
}
