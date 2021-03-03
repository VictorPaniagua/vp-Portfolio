import PropTypes from 'prop-types'

const Skills = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Skills.defaultProps = {
    title: "Technologies"
}

Skills.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Skills
