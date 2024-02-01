/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Flex, Select, Tabs, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import FieldTemplate from './fieldTemplate';
import fieldLabels from '../../../mocks/fieldLabels';
import tabsContent from '../../../mocks/MapPage/tabs-content';
import Table from './table';
interface IFields {
  tableColumns: string[];
  file: Array<object>;
}

interface FieldMaps {
  [key: string]: string;
}

const Fields: React.FC<IFields> = ({ tableColumns, file }) => {
  const [selectedTab, setSelectedTab] = useState('0');
  const [fieldMaps, setFieldMaps] = useState<FieldMaps>({});
  const [options, setOptions]: any = useState();
  const { Option } = Select;

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  }

  useEffect(() => {
    setOptions(tableColumns.map((column) => {
      const hasAlreadyBeenSelected = Object.values(fieldMaps).includes(column);

      return (
        <Option key={column} value={column} disabled={hasAlreadyBeenSelected}>
          {column}
        </Option>
      )
    })
    )
  }, [fieldMaps, Option, tableColumns])

  const onChange = (value: string, childKey: string) => {
    setFieldMaps({ ...fieldMaps, [childKey]: value })
  }

  return (
    <Flex gap={30} vertical>
      <Card>
        <Flex justify='space-between'>
          <Tabs
            tabPosition='left'
            items={tabsContent}
            onChange={handleTabChange}
            renderTabBar={(tabBarProps, DefaultTabBar) => {
              return (
                <DefaultTabBar {...tabBarProps}>
                  {(node) => {
                    return (
                      <Flex gap={0} align='center'>
                        {node.key === '1' ? (
                          <Typography.Text style={{ marginLeft: 10, marginRight: -19 }} type="danger">
                            *
                          </Typography.Text>
                        ) : null}
                        {node}

                      </Flex>
                    )
                  }}
                </DefaultTabBar>
              )
            }}
          />
          <Flex vertical gap={8} style={{ width: '100%', height: 308, overflow: 'auto' }}>
            <Flex gap={103}>
              <Typography.Text strong>Target Fields</Typography.Text>
              <Typography.Text strong>Your Spreadsheet</Typography.Text>
            </Flex>
            {fieldLabels
              .filter(label => label.key === selectedTab || selectedTab === '0')
              .map(label =>
                label.children.map(child => (
                  <FieldTemplate
                    key={child.key}
                    item={child}
                    options={options}
                    onChange={onChange}
                    selectValue={fieldMaps[child.key]}
                  />
                ))
              )}
          </Flex>
        </Flex>
      </Card>
      <Table mappedTable={fieldMaps} content={file} tableColumns={tableColumns} />
    </Flex>
  );
}

export default Fields;