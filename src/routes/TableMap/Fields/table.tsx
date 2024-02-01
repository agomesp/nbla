/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Table as AntdTable, Button, Flex, Typography } from 'antd';
import * as S from './styled';
import getKeyByValue from '../../../utils/getKey';
import fieldLabels from '../../../mocks/fieldLabels';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { createUserProjectRequest } from '../../../store/modules/project/actions';
import { useMsal } from '@azure/msal-react';

interface FieldMaps {
  [key: string]: string;
}

interface ITable {
  tableColumns: Array<string>;
  content: Array<object>;
  mappedTable: FieldMaps;
}

const Table: React.FC<ITable> = ({ tableColumns, content, mappedTable }) => {
  const { Text } = Typography;
  const { state } = useLocation();
  const { projectDetails, jsonData } = state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { accounts } = useMsal();
  const user = accounts[0];
  const userId = user.username;

  const getChildByKey = (array: any, keyToFind: string) => {
    for (const group of array) {
      const child = group.children.find((child: any) => child.key === keyToFind);
      if (child) {
        return child;
      }
    }
    return null;
  }

  const columns = tableColumns.map((column: string) => {
    const selectedKey = getKeyByValue(mappedTable, column);
    let children: any;
    selectedKey !== '' ? children = getChildByKey(fieldLabels, selectedKey) : null;

    return {
      title: () => (
        <S.Container>
          <Text ellipsis={{ tooltip: column }} style={{ maxWidth: 200 }}>{column}</Text>
          {children && (
            <S.SelectedValue>
              <S.ColumnValue ellipsis={{ tooltip: children.fieldName }}>{children.fieldName}</S.ColumnValue>
            </S.SelectedValue>
          )}

        </S.Container>
      ),
      key: column,
      dataIndex: column,
      render: (text: string) => {
        return (<Text ellipsis={{ tooltip: text }} style={{ maxWidth: 200 }}>{text}</Text>)
      }
    }
  })

  interface MappingObject {
    [key: string]: string;
  }

  const transformObject = async (sourceObject: any, mappingObject: MappingObject) => {
    const transformedObject: MappingObject = {};

    for (const key in mappingObject) {
      const sourceKey = mappingObject[key];
      if (sourceKey in sourceObject) {
        transformedObject[key] = sourceObject[sourceKey];
      }
    }
    return transformedObject;
  }

  const generateJson: any = async () => {
    setLoading(true);
    let result = [];

    result = await Promise.all(jsonData.map(async (content: object) => {
      return await transformObject(content, mappedTable)
    }))

    console.log('test', { projectDetails: projectDetails, jsonData: result })

    const request = {
        user_id: userId,
        project_name: projectDetails.projectName,
        //execution_id: null, // TODO: reuse execution_id from another project
        tickets: result,
        navigate,
        setLoading,
    };

    console.log('request:', request)
    
    dispatch(createUserProjectRequest(request));

    return { projectDetails: projectDetails, jsonData: result };
  }

  return (
    <Flex gap={5} vertical style={{ width: '100%' }} align='flex-end'>
      <Button onClick={() => generateJson()} type="primary" loading={loading}>Send Mapped Table</Button>
      <AntdTable style={{ width: '100%', overflow: 'auto' }} bordered size="small" pagination={false} dataSource={content} columns={columns} />
    </Flex>
  );
}

export default Table;