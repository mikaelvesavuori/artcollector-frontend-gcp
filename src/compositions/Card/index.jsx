import React from 'react';
import PropTypes from 'prop-types';

import CardImage from 'components/CardImage';
import Button from 'components/Button';
import ButtonEdit from 'components/ButtonEdit';
import ButtonDelete from 'components/ButtonDelete';

import CardStyled from './CardStyled';

const Card = props => {
	const LABELS = props.artwork.labels.map((label, index) => {
		return (
			<span className="Card-Label" key={`Card-Label__${index}`}>
				{label}
			</span>
		);
	});

	return (
		<CardStyled {...props}>
			<ButtonDelete onClick={() => props.handleDelete(props.artwork.uuid)} />

			<CardImage image={props.artwork.imageUrl} />
			<div className="Card-Data">
				<strong>{props.artwork.title}</strong>
				<br />
				{props.artwork.artist} — {props.artwork.year}
			</div>

			<div className="Card-Labels">{LABELS}</div>

			<div className="Card-Buttons">
				<Button onClick={e => props.edit(props.artwork)}>Edit</Button>
				<br />
			</div>
		</CardStyled>
	);
};

Card.propTypes = {
	artwork: PropTypes.object.isRequired,
	edit: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired
};

export default Card;
