import PropTypes from 'prop-types'

export const Button = ({color, title, onClick}) => {
    return (
        <div>
            <button
              style={{backgroundColor: color}} // color
              className='btn'
              onClick={onClick}
            > 
              {title} 
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'blue'
 }

export default Button