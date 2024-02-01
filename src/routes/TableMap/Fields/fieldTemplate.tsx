import { Flex, Form, Select, Typography } from 'antd';
import React, { ReactNode } from 'react';
import { FiArrowRight } from 'react-icons/fi'

type ItemType = {
  key: string;
  fieldName: string;
  required: boolean;
}

interface IFieldTemplate {
  item: ItemType;
  options: ReactNode;
  onChange: (value: string, childKey: string) => void;
  selectValue: string;
}

const FieldTemplate: React.FC<IFieldTemplate> = ({ item, options, onChange, selectValue }) => {
  const { Text } = Typography;

  const inputLabel = (text: string, required: boolean) => (
    <Flex gap={10} align='center' justify='center' >
      <Text style={{ width: required ? 129 : 140, textAlign: 'left' }}>{text}</Text>
      <FiArrowRight />
    </Flex>
  )

  return (
    <Form.Item style={{ marginBottom: 5 }} key={item.key} colon={false} name={item.key} label={inputLabel(item.fieldName, item.required)} rules={[{ required: item.required }]}>
      <Select
        onChange={(value) => onChange(value, item.key)}
        placeholder=""
        allowClear
        showSearch
        defaultValue={selectValue}
      >
        {options}
      </Select>
    </Form.Item>
  )
}

export default FieldTemplate;