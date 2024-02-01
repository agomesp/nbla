/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import ContainerContent from '../../components/ContainerContent';
import { Flex, Typography } from 'antd';
import Fields from './Fields';
import getFilteredArray from '../../utils/getRandom';
import { useLocation } from 'react-router-dom';

const TableMap: React.FC = () => {
  const { Text } = Typography;
  const { state } = useLocation();
  const { projectDetails, jsonData } = state;
  const [filteredArray, setFilteredArray]: any = useState([])
  const tableColumns = Object.keys(jsonData[0]);

  const filterArray = async () => {
    setFilteredArray(await getFilteredArray('random', jsonData, 10).then((r) => { return r }).catch((err) => { console.log(err); }))
  }

  useState(() => {
    filterArray();
  })

  return (
    <ContainerContent title={`Nebula Mapping - ${projectDetails.projectName}`}>
      <Flex gap={20} vertical>
        <Flex gap={0} vertical>
          <Text>
            Please match the fields with the corresponding columns in the uploaded table.
          </Text>
          <Text>
            If the information is not in the table, leave it blank.
          </Text>
        </Flex>
        {
          filteredArray && (
            <Fields file={filteredArray} tableColumns={tableColumns} />
          )
        }

      </Flex>
    </ContainerContent>
  );
}

export default TableMap;