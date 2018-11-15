import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  align-self: center;
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const TimeLine = styled.div`
  flex: 1;
  height: 1px;
  background: black;

  ${(props) => props.width && css`
    flex: ${props.width}
  `}
`;

const WrapperTitle = styled.div`
  align-self: center;
`;

const Title = styled.div`
  margin: 0 0 20px 0;
  font-size: 36px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  margin-bottom: 10px;
  align-self: center;
  
  &:before{ content: '"' }
  &:after{ content: '"' }
`;

const DescriptionAuthor = styled.div`
  align-self: flex-end;
`;


export {
  Wrapper,
  Logo,
  TimeWrapper,
  TimeLine,
  WrapperTitle,
  Title,
  DescriptionWrapper,
  Description,
  DescriptionAuthor,
};

