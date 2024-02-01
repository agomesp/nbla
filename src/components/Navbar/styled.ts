import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.palette.BACKGROUND.PAPER};
  padding: 23px 40px;

  border-bottom: 1px solid ${props => props.theme.palette.BACKGROUND.BORDER};

  font-size: 14px;

  img {
    width: 116px;
    height: auto;
  }

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  section {
    max-width: 1320px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  svg {
    color: ${props => props.theme.palette.GREYSCALE.LIGHT_GREY};
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
`;
