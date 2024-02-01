import styled from 'styled-components';
import { Card } from 'antd';

export const Wrapper = styled.div`
  margin: 20px 40px;
`;

export const Container = styled(Card)`
  margin: 0 auto;
  border-color: ${props => props.theme.palette.BACKGROUND.BORDER};
  border-radius: 40px;
  min-height: calc(100vh - 129px);
  padding: 0 26px;
  max-width: 1320px;
`;

export const PageTitle = styled.span`
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

export const WrapperPageTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 15px;
`;