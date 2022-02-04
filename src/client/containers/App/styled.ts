import {css} from '@emotion/react';

export const colorsCSS = css`
	--color-primary: hotpink;
	--color-secondary: black;
`;

export const spacesCSS = css`
	--space-xs: 4px;
	--space-s: 8px;
	--space-m: 16px;
	--space-l: 32px;
	--space-xl: 64px;
`;

export const typoCSS = css`
	--typo-size-xs: 10px;
	--typo-size-s: 13px;
	--typo-size-m: 16px;
	--typo-size-l: 24px;
	--typo-size-xl: 48px;
	--typo-height-xs: 14px;
	--typo-height-s: 18px;
	--typo-height-m: 24px;
	--typo-height-l: 36px;
	--typo-height-xl: 56px;
`;

export const themeCSS = css`
	${colorsCSS}
	${spacesCSS}
	${typoCSS}
`;

export const GlobalStyles = css`
	:root {
		${themeCSS}
	}

	body {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		font-family: Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	#root {
		flex: 1;
	}
`;
