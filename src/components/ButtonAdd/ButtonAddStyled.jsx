import styled from 'styled-components';

const ButtonAddStyled = styled.button`
	width: 4rem;
	height: 4rem;
	position: fixed;
	bottom: 3rem;
	right: 3rem;
	background-color: #000150;
	color: white;
	font-size: 2rem;
	text-align: center;
	border-radius: 50%;
	z-index: 3;
	cursor: pointer;

	&:hover {
		box-shadow: 0 0.5rem 1rem -0.5rem gray;
		transition: 0.2s;
	}
`;

export default ButtonAddStyled;
