import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  min-width: 600px;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: gray;
`;

const Logo = styled.img`
  align-self: center;
  width: 40%;
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

