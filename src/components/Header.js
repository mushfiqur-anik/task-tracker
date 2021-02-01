import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom"
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    // onClick function
    const onClick = () => { 
        alert('Clicked!');
    }

    return (
        <div>
            <header className='header'>
                <h1> {title} </h1>
                {location.pathname === "/" && 
                    <Button title={showAdd ? "Close" : "Add"} color={showAdd? "red" : "green"} onClick={onAdd}/>
                }
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