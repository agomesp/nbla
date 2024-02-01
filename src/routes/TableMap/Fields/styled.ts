import styled from 'styled-components';
import { Typography } from 'antd';

export const Container = styled.div`
  position: relative;
`;

export const SelectedValue = styled.div`
  position: absolute;
  top: -9px;
  left: -8px;
  border: 2px solid ${props => props.theme.palette.GREYSCALE.DARK_GREY};
  width: calc(100% + 16px);
  overflow: hidden;
  height: calc(100% + 17px);
  transition: all 0.3s ease;

  :hover {
    opacity: 0;
  }
`;

export const ColumnValue = styled(Typography.Text)`
  transition: all 0.3s ease;
  background-color: ${props => props.theme.palette.GREYSCALE.DARK_GREY};
  color: ${props => props.theme.palette.GREYSCALE.WHITE};
  position: absolute;
  top: -2px;
  border-radius: 0 0 8px 0px;
  padding: 2px 4px;
`