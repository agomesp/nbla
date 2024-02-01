import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContainerContent from '../../components/ContainerContent';
import { Modal, Button, Table, Flex } from 'antd';
import ModalWorkflow from './ModalWorkflow';
import { LoadingOutlined } from '@ant-design/icons';
import { getUserProjectsRequest, projectsSelectors } from '../../store/modules/project/actions';
import { getProjectResultsRequest, projectResultsSelectors } from '../../store/modules/projectResult/actions';
import { useSelector } from 'react-redux';
import * as XLSX from "xlsx";
import { useMsal } from '@azure/msal-react';

const Home: React.FC = () => {
  const [modalNewProjectOpen, setModalNewProjectOpen] = useState(false);
  const dispatch = useDispatch();
  const projects = useSelector(projectsSelectors.userProjects);
  const projectResults = useSelector(projectResultsSelectors.projectResults);
  const [projectList, setProjectList] = useState<any>([]);
  const [downloadButtonClick, setDownloadButtonClick] = useState(false);
  const { accounts } = useMsal();
  const user = accounts[0];
  const userId = user.username;

  useEffect(() => {
    console.log("userId", userId);
    dispatch(getUserProjectsRequest({ user_id: userId }));
  }, []);

  useEffect(() => {
    setProjectList(projects);
  }, [projects])

  useEffect(() => {
    if (downloadButtonClick && projectResults?.tickets) {
      const ws = XLSX.utils.json_to_sheet(projectResults?.tickets);

      // Create a workbook
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      // Create a Blob with the Excel data
      const blobPart = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([blobPart], {
        type: 'application/octet-stream'
      });

      // Create a link element
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      const now = new Date();
      const date = now.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).replace(/\//g, '');
      const time = now.toLocaleTimeString('en-US', { hour12: false }).replace(/:/g, '');
      const date_time = `${date}_${time}`;
      link.download = `project_${projectResults?.project_name}_${date_time}.xlsx`;
      // Append the link to the document and trigger a click event to start the download
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(link.href), 7000);
      setDownloadButtonClick(false)
    }
  }, [projectResults])

  const downloadProjectResults = (project_name: string, execution_id: string) => {
    console.log(projectList);
    console.log(userId, execution_id, project_name);
    setDownloadButtonClick(true);
    dispatch(getProjectResultsRequest({ user_id: userId, execution_id: execution_id, project_name: project_name }));
  }

  interface IProjectRecord {
    execution_id: string,
    project_name: string,
    status: string
  }

  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'project_name',
      key: 'project_name'
    },
    {
      title: 'Current Step',
      dataIndex: 'currentStep',
      key: 'currentStep',
      render: (_: string, record: IProjectRecord) => {
        const processingData = record.status !== 'done' && record.status !== 'error';
        return (
          !processingData ? <Button onClick={() => downloadProjectResults(record.project_name, record.execution_id)}>Download Analysis</Button> : <Flex gap="middle" align="center"><LoadingOutlined spin />Processing, please come back later...</Flex>
        )
      }
    },
  ]

  return (
    <ContainerContent title="Projects" actionName="New Project" actionClick={() => setModalNewProjectOpen(true)}>
      <div>
        <Modal
          title="New Project"
          centered
          destroyOnClose
          onOk={() => setModalNewProjectOpen(false)}
          onCancel={() => setModalNewProjectOpen(false)}
          open={modalNewProjectOpen}
          footer={null}
        >
          <ModalWorkflow />
        </Modal>

        {/* <ProfileContent></ProfileContent> */}

        <Table pagination={false} dataSource={projectList} columns={columns} />
      </div>
    </ContainerContent>
  );
}

export default Home;