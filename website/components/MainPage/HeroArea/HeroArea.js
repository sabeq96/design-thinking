import React from 'react';

import {
  Wrapper,
  Logo,
  TimeWrapper,
  TimeLine,
  WrapperTitle,
  Title,
  DescriptionWrapper,
  Description,
  DescriptionAuthor,
} from './HeroArea.styles';

const HeroArea = () => {
  let time = new Date();
  return (
    <Wrapper>
    <Logo>Logo</Logo>
    <TimeWrapper>
      <TimeLine width={0.3} />
        {new Intl.DateTimeFormat('pl', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }).format(time)}
      <TimeLine />
    </TimeWrapper>
    <WrapperTitle>
      <Title>Informatyka Stosowana</Title>
      <DescriptionWrapper>
        <Description>
          Praca w młodości owocuje w przyszłości
        </Description>
        <DescriptionAuthor>
          Paulo Coelo
        </DescriptionAuthor>
      </DescriptionWrapper>
    </WrapperTitle>
  </Wrapper>
  )
}

export default HeroArea;