import React from 'react';
import PropTypes from 'prop-types';

import ButtonDeleteStyled from './ButtonDeleteStyled';

const ButtonDelete = props => (
	<ButtonDeleteStyled {...props} onClick={e => props.onClick(e)}>
		X
	</ButtonDeleteStyled>
);

ButtonDelete.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default ButtonDelete;
