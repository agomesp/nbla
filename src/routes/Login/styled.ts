import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 45px 95px;
`;

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

export const StefaniniLogo = styled.img`
  padding: 45px 95px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.BACKGROUND.PAPER};
`;