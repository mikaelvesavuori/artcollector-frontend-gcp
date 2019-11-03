import styled from 'styled-components';

const ButtonStyled = styled.button`
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	cursor: pointer;

	width: 100%;
	display: block;
	height: 3rem;
	border: 0;
	border-radius: 0.5rem;

	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}

	color: white;
	background-color: #000150;
	text-align: center;

	font-size: 1rem;

	&:hover {
		box-shadow: 0 0.5rem 1rem -0.5rem gray;
		transition: 0.2s;
	}

	&:disabled {
		cursor: not-allowed;
		border: 0;
		color: lightgray;
		background-color: red;
		transition: 0.2s;
	}
`;

export default ButtonStyled;
