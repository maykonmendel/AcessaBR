import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ children, onClick, width}) => {
    return (
        <button className="button" onclick={onClick} style={{width}}>
            { children }
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onClick: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired
}

export default Button;