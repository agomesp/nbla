/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button, Form, Input, Upload, message } from 'antd';
import { FiUpload } from 'react-icons/fi';
import * as XLSX from "xlsx"
import { useNavigate } from "react-router-dom";
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';

type FieldType = {
  projectName?: string;
  client?: string;
};

const ModalWorkflow: React.FC = () => {
  const [hasFile, setHasFile] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [processedFile, setProcessedFile] = useState([])
  const navigate = useNavigate();

  const getFileProcessed = async (file: any) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      const arrayBuffer = e?.target?.result;
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData: any = XLSX.utils.sheet_to_json(worksheet);
      setProcessedFile(jsonData);
    };

    fileReader.readAsArrayBuffer(file[0].originFileObj);
  }

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    navigate('/table-mapping',
      {
        state:
        {
          projectDetails:
          {
            client: values.client,
            projectName: values.projectName
          },
          jsonData: processedFile
        }
      }
    )
  };


  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo);
  };

  const normFile: any = (e: any) => {
    console.log('Upload event:', e);
    const fileType = e?.file.name.split('.');
    const fileFormat = fileType[fileType.length - 1];
    const isFormat = fileFormat === 'xlsx' || fileFormat === 'csv';

    if (!isFormat) {
      message.error('You can only upload CSV/XLSX file!');
      setHasFile(false);
      return [];
    }

    if (e.fileList[0].originFileObj.size === 0) {
      message.error('Your file size is 0. Upload a valid file.');
      setHasFile(false);
      return [];
    }

    if (Array.isArray(e)) {
      return e;
    }

    e?.fileList.length > 0 ? setHasFile(true) : setHasFile(false);

    getFileProcessed(e?.fileList.slice(-1));
    return e?.fileList.slice(-1);
  };

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<FieldType>
        label="Project Name"
        name="projectName"
        rules={[{ required: true, message: 'Please input your Project Name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Client / Program"
        name="client"
        rules={[{ required: true, message: 'Please input the Client / Program!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="upload"
        label="File for Processing"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: 'Please upload a file!' }]}
      >
        <Upload {...props}>
          {!hasFile &&
            <Button icon={<FiUpload />}>
              Select File
            </Button>
          }
        </Upload>
      </Form.Item>

      <Form.Item style={{ textAlign: 'right' }}>
        <Button type="primary" htmlType="submit">
          Create Project
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ModalWorkflow;