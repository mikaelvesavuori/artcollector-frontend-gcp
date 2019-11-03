import React from 'react';
import PropTypes from 'prop-types';

import ViewStyled from './ViewStyled';

const View = props => <ViewStyled>{props.children}</ViewStyled>;

View.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]),
	title: PropTypes.string.isRequired
};

export default View;
