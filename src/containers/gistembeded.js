import React, { PureComponent } from 'react'
import { PropTypes } from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setStylesheet, setSource, setLoading } from '../actions/gist'
import { Loading } from  '../components/loading'
import TagList from '../containers/tagList'
import TagInput from '../containers/tagInput'
import { api } from '../config'
/**
 * Component display single gist
 */
class EmbeddedGist extends PureComponent {

    /**
     * propTypes
     * @type {Object}
     * @property {Object} item Gist item
     */
    static propTypes = {
        item: PropTypes.object,
    }

    /**
     * Add Githubs gist embeded stylesheet
     * @param {String} href The URL of the stylesheet
     */
    addStylesheet(href) {
        const { stylesheet } = this.props
        if (!stylesheet) {
            let link = document.createElement('link')
            link.type = 'text/css'
            link.rel = 'stylesheet'
            link.href = href
            document.head.appendChild(link)
        }
    }

    /**
     * React lifecycle method
     */
    componentWillMount() {
        const { actions, item: { id }  } = this.props

        actions.setLoading(true)
        const callback = 'gist_callback_' + Date.now()

        window[callback] = function(gist) {
            if(!gist) {
                throw new Error('API error')
            }
            actions.setStylesheet(gist.stylesheet)
            this.addStylesheet(gist.stylesheet)
            actions.setSource(gist.div)
        }.bind(this)

        let url = api.endpoints.APP_EMBED_ITEM_URL.replace(':id', id).replace(':callback', callback)
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = url
        document.head.appendChild(script)
    }

    /**
     * Render react component
     * @returns {XML}
     */
    render() {
        const { gist, item } = this.props
        if (gist.loading) {
            return <Loading/>
        } else {
            return (
                <div>
                    {item.description && <div>{item.description}</div>}
                    {item.tag && <TagList tag={item.tag} id={item.id} removable={true}/>}
                    <TagInput id={item.id} />
                    <div dangerouslySetInnerHTML={{
                        __html: gist.source
                    }}/>
                </div>
            )
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
