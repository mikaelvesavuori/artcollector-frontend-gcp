import React from 'react';
import PropTypes from 'prop-types';

import CardImageStyled from './CardImageStyled';

const CardImage = props => (
	<CardImageStyled {...props}>
		<img src={props.image}></img>
	</CardImageStyled>
);

CardImage.propTypes = {
	image: PropTypes.string.isRequired
};

export default CardImage;
