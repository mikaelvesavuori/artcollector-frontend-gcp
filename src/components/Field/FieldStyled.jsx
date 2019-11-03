import styled from 'styled-components';

const FieldStyled = styled.div`
	label {
		width: 100%;
		display: block;
		font-size: 0.6rem;
		text-transform: uppercase;
		margin-bottom: 0.25rem;
	}

	input {
		width: 100%;
		display: block;
		margin-bottom: 1rem;
		font-size: 1rem;
		padding: 0.25rem;
		box-sizing: border-box;

		&:invalid  {
			background-color: red;
			color: red;
		}
	}
`;

export default FieldStyled;
