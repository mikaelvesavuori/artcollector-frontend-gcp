import React from 'react';
import PropTypes from 'prop-types';

import H1 from 'components/H1';
import Button from 'components/Button';
import Field from 'components/Field';

import ModalStyled from './ModalStyled';

const Modal = props => {
	const IS_EDIT_MODE = props.editMode;

	return (
		<ModalStyled {...props}>
			<div className="Modal-Blur"></div>
			<div className="Modal-Main">
				<H1>Create new post</H1>

				<Field
					label="Image URL"
					placeholder="https://somewhere"
					type="text"
					handleInput={e => props.handleInput(e, 'fieldImageUrl')}
					value={props.valueImageUrl}
				/>
				<Field
					label="Artist"
					placeholder="Name Namesson"
					type="text"
					handleInput={e => props.handleInput(e, 'fieldArtist')}
					value={props.valueArtist}
				/>
				<Field
					label="Title"
					placeholder="Untitled"
					type="text"
					handleInput={e => props.handleInput(e, 'fieldTitle')}
					value={props.valueTitle}
				/>
				<Field
					label="Year"
					placeholder="2000"
					type="number"
					pattern=".{4}"
					handleInput={e => props.handleInput(e, 'fieldYear')}
					value={props.valueYear}
				/>

				{IS_EDIT_MODE ? (
					<Button
						onClick={e => props.handleUpdate(props.valueUuid)}
						disabled={!props.allFieldsValid}
					>
						Update
					</Button>
				) : (
					<Button onClick={() => props.handleCreate()} disabled={!props.allFieldsValid}>
						Create
					</Button>
				)}

				<Button onClick={() => props.close()}>Cancel</Button>
			</div>
		</ModalStyled>
	);
};

Modal.propTypes = {
	editMode: PropTypes.bool,
	handleInput: PropTypes.func.isRequired,
	handleCreate: PropTypes.func.isRequired,
	handleUpdate: PropTypes.func.isRequired,
	close: PropTypes.func.isRequired,
	allFieldsValid: PropTypes.bool.isRequired,
	valueUuid: PropTypes.string.isRequired,
	valueArtist: PropTypes.string.isRequired,
	valueTitle: PropTypes.string.isRequired,
	valueImageUrl: PropTypes.string.isRequired,
	valueYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

Modal.defaultProps = {
	editMode: false
};

export default Modal;
