import React, { MouseEventHandler, ReactElement } from 'react';

import * as S from './styled';
import { Button } from 'antd';

interface IContainerContent {
  children: ReactElement;
  title: string;
  actionName?: string;
  actionClick?: MouseEventHandler<HTMLElement>;
}

const ContainerContent: React.FC<IContainerContent> = ({ children, title, actionName, actionClick }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.WrapperPageTitle>
          <S.PageTitle>{title}</S.PageTitle>
          {actionName &&
            <Button type="primary" onClick={actionClick}>
              {actionName}
            </Button>}
        </S.WrapperPageTitle>
        {children}
      </S.Container>
    </S.Wrapper>
  );
}

export default ContainerContent;