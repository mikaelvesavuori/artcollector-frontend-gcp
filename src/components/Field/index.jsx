import React from 'react';
import PropTypes from 'prop-types';

import FieldStyled from './FieldStyled';

const Field = props => (
	<FieldStyled {...props}>
		<label>{props.label}</label>
		<input
			type={props.type}
			placeholder={props.placeholder}
			pattern={props.pattern}
			onChange={(e, target) => props.handleInput(e, target)}
			value={props.value}
		></input>
	</FieldStyled>
);

Field.propTypes = {
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string,
	pattern: PropTypes.string,
	handleInput: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

Field.defaultTypes = {
	type: 'text',
	pattern: ''
};

export default Field;
