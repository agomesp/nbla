import React from 'react';
import { notification } from 'antd';

const ContextApi = React.createContext<any>(null);
let apiapi:any = null;

export const Toast: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  return (
    <ContextApi.Provider value={api}>
      {contextHolder}
      <ContextApi.Consumer>
        {appContext => {
            apiapi = appContext;
            return null;
          }
        }
      </ContextApi.Consumer>
    </ContextApi.Provider>
  );
};

export async function ToastLoading(content: any) {
  // display only for 5 seconds
  apiapi['info']({
    message:
      content,
    duration: 5,
    placement: 'top'
  });
}

export async function ToastSuccess(content: any) {
  // display only for 5 seconds
  apiapi['success']({
    message:
      content,
    duration: 5,
    placement: 'top'
  });
}

export const ToastError = (content: any) => {
  // no progress bar
  apiapi['error']({
    message:
      content,
    duration: 0,
    placement: 'top'
  });
}