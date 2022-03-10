import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const TopSectionContainer = styled.div`
  ${tw`relative flex flex-col h-screen max-w-full `}
`;

const TopSection = () => {
  return <TopSectionContainer>TopSection</TopSectionContainer>;
};

export default TopSection;
