import styled from 'styled-components';

const ModalStyled = styled.div`
	.Modal-Blur {
		width: 100%;
		height: 100%;
		position: fixed;
		overflow-y: scroll;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;

		background-color: black;
		opacity: 0.8;
	}

	.Modal-Main {
		width: 500px;
		position: fixed;
		display: block;
		top: 0;
		z-index: 2;
		padding: 1rem;
		box-sizing: border-box;

		background-color: white;
	}
`;

export default ModalStyled;
