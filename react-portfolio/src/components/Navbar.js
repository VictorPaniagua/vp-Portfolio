import PropTypes from 'prop-types'

const Navbar = ({title}) => {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'Skills',
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Navbar
