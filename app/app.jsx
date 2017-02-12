import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from 'components/navbar';
import styles from './app.scss';

class HelloMessage extends Component {
    static propTypes = {
        name: React.PropTypes.string
    }

    static defaultProps = {
        name: 'User'
    }

    render () {
        return (
            <div>
                <Navbar />
                <div className={styles.wrapper}>Hello {this.props.name}</div>
            </div>
        );
    }
}

render(
    <HelloMessage name="Mariana + Amiran" />, document.getElementById('app-root')
);
