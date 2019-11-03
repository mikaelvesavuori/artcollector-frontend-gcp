import styled from 'styled-components';

const CardStyled = styled.div`
	width: auto;
	position: relative;
	padding: 1rem;
	margin-bottom: 2rem;
	border-radius: 1rem;
	background-color: #f0f0f0;

	.Card-Data {
		font-size: 1.4rem;
		margin: 1rem 0;
	}

	.Card-Labels {
		margin-bottom: 1rem;
		line-height: 1.3;
	}

	.Card-Label {
		background-color: white;
		padding: 0.25rem;
		margin: 0.25rem;
		border-radius: 0.25rem;
		display: inline-block;
	}

	.Card-Buttons {
		margin-bottom: -1rem;
	}
`;

export default CardStyled;
