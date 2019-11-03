import React from 'react';
import PropTypes from 'prop-types';

import ButtonAddStyled from './ButtonAddStyled';

const ButtonAdd = props => (
	<ButtonAddStyled {...props} onClick={e => props.onClick(e)}>
		+
	</ButtonAddStyled>
);

ButtonAdd.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default ButtonAdd;
