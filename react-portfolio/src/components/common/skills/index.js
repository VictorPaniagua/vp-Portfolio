import PropTypes from 'prop-types'

const Skills = ({title}) => {
    return (
        <div class="skills">
            <h1>{title}</h1>
        </div>
    )
}

Skills.defaultProps = {
    title: "Technologies"
}

Skills.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Skills
