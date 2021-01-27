import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

    // onClick function
    const onClick = () => { 
        alert('Clicked!');
    }

    return (
        <div>
            <header className='header'>
                <h1> {title} </h1>
                <Button title="Add" color="green" onClick={onClick}/>
            </header>
        </div>
    )
}

// Default title
Header.defaultProps = { 
    title: 'Task Tracker'
}

// Making title mandatory
Header.propTypes = { 
    title: PropTypes.string.isRequired
}

export default Header