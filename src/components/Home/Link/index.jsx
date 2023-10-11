import "./Link.css"
import PropTypes from 'prop-types'

const Link = (props) => {
    return (
        <a className="active-link" href={props.url}>{props.title}</a>
    )
}

Link.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
}

Link.defaultProps = {
    propString: "String value..."
}

export default Link