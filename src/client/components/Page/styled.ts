import styled from '@emotion/styled';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: var(--space-m);
	margin: var(--space-xl) auto;
	box-sizing: border-box;

	@media (min-width: 420px) {
		width: 600px;
		padding: 0;
	}
`;

export const StyledTitle = styled.h1`
	font-size: var(--typo-size-xl);
	line-height: var(--type-height-xl);
	color: var(--color-primary);
	margin: 0 0 var(--space-m);
`;

export const StyledDescription = styled.div`
	font-size: var(--typo-size-m);
	line-height: var(--typo-height-m);
	color: var(--color-secondary);
`;
