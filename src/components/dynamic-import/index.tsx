import * as React from 'react'

export interface T {
    load: any;
    children: any;
}

export interface S {
    component: any;
}

export class DynamicImport extends React.Component<T, S> {
    state = {
        component: null
    }

    componentDidMount () {
        this.props.load()
            .then((component) => {
                this.setState(() => ({
                    component: component.default ? component.default : component
                }))
            })
    }

    render () {
        return this.props.children(this.state.component)
    }
}
