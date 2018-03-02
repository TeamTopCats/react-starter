import * as React from 'react'
import * as css from './styles'

interface T {
    isOpened: boolean;
}

interface S {
    isOpened: boolean;
}

export default class Sandwich extends React.PureComponent<T, S> {
    static defaultProps = {
        isOpened: false
    }

    state = {
        isOpened: this.props.isOpened
    }

    handleChange = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render () {
        const { isOpened } = this.state

        return (
            <button className={css.sandwich} onClick={this.handleChange}>
                <span className={!isOpened
                    ? css.sandwich__ln
                    : [
                        css.sandwich__ln, css.sandwich__ln_open
                    ].join(' ')}
                />
            </button>
        )
    }
}