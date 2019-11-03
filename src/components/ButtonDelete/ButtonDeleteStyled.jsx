import styled from 'styled-components';

const ButtonDeleteStyled = styled.button`
	width: 2rem;
	height: 2rem;
	position: absolute;
	top: 0.25rem;
	right: 0.25rem;
	background-color: #000150;
	color: white;
	font-size: 0.8rem;
	text-align: center;
	border-radius: 50%;
	cursor: pointer;

	&:hover {
		box-shadow: 0 0.5rem 1rem -0.5rem gray;
		transition: 0.2s;
	}
`;

export default ButtonDeleteStyled;
