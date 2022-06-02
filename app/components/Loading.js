import { number, string } from 'prop-types'
import React from 'react'

const styles = {
    content: {
        fontSite: '35px',
        position: 'absolute',
        left: '0',
        right: '0',
        marginTop: '20px',
        textAlign: 'center',
    },
}

export default class Loading extends React.Component {
    state = {
        content: this.props.text,
        speed: this.props.speed,
    }

    componentDidMount() {
        const { speed, text } = this.props

        this.interval = window.setInterval(() => {
            this.state.content === text + '...'
                ? this.setState({ content: text })
                : this.setState(({ content }) => ({ content: content + '.' }))
        }, speed)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }

    render() {
        return <p style={styles.content}>{this.state.content}</p>
    }
}

Loading.propTypes = {
    text: string.isRequired,
    speed: number.isRequired,
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300,
}
