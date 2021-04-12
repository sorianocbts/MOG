// components/layout.js
import React from 'react'
import { initGA, logPageView } from '../../lib/gtag.js'

export default class Layout extends React.Component {
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
            console.log('GA Init')
        }
        logPageView()
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}