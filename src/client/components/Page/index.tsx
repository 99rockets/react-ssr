import React from 'react';

import {
	StyledContainer,
	StyledTitle,
	StyledDescription
} from './styled';

import {Props} from './types';

/** Page component */
export const Page = ({title}: Props) => (
	<StyledContainer>
		<StyledTitle>{title}</StyledTitle>
		<StyledDescription>Description</StyledDescription>
	</StyledContainer>
);
