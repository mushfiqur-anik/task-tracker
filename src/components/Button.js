import PropTypes from 'prop-types'

// Button function
export const Button = ({color, title, onClick}) => {
    return (
        <div>
            <button
              style={{backgroundColor: color}} // color
              className='btn'                  // className
              onClick={onClick}                // calling onClick function
            > 
              {title} 
            </button>
        </div>
    )
}

// Default values
Button.defaultProps = {
    color: 'blue'
}

// Type checkings
Button.propType = { 
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button