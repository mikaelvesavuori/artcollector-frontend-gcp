import React from 'react';
import PropTypes from 'prop-types';

import ButtonEditStyled from './ButtonEditStyled';

const ButtonEdit = props => (
	<ButtonEditStyled {...props} onClick={e => props.onClick(e)} disabled={props.disabled}>
		{props.children}
	</ButtonEditStyled>
);

ButtonEdit.propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func
};

ButtonEdit.defaultTypes = {
	onClick: () => null
};

export default ButtonEdit;
