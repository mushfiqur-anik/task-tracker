import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    // onClick function
    const onClick = () => { 
        alert('Clicked!');
    }

    return (
        <div>
            <header className='header'>
                <h1> {title} </h1>
                <Button title={showAdd ? "Close" : "Add"} color={showAdd? "red" : "green"} onClick={onAdd}/>
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