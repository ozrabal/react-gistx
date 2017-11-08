import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setStylesheet, setSource, setLoading } from '../actions/gist'

class EmbeddedGist extends PureComponent {

    addStylesheet = (href) => {
        const { stylesheet } = this.props
        if (!stylesheet) {
            let link = document.createElement('link')
            link.type = 'text/css'
            link.rel = 'stylesheet'
            link.href = href
            document.head.appendChild(link);
        }
    }

    componentWillMount() {
        const { actions, id } = this.props

        actions.setLoading(true)
        const gistCallback = 'gist_callback_' + Date.now()

        window[gistCallback] = function(gist) {
            actions.setStylesheet(gist.stylesheet)
            this.addStylesheet(gist.stylesheet)
            actions.setSource(gist.div)
        }.bind(this);

        const url = `https://gist.github.com/${ id }.json?callback=${ gistCallback }`
        // Add the JSONP script tag to the document.
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = url
        document.head.appendChild(script)
    }

    render() {
        const { gist } = this.props
        if (gist.loading) {
            return <div>loading...</div>;
        } else {
            return <div dangerouslySetInnerHTML={{
                    __html: gist.source
                }}/>
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = Object.assign({}, {setStylesheet, setSource, setLoading})
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        gist: state.gist
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmbeddedGist)
