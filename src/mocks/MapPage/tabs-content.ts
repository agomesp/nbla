import { TabsProps } from "antd";

export default <TabsProps['items']>[
  {
    key: '0',
    label: 'All Fields',
  },
  {
    key: '1',
    label: 'Basic Ticket Information',
    hasRequired: true,
  },
  {
    key: '2',
    label: 'Ticket Details',
    hasRequired: false,
  },
  {
    key: '3',
    label: 'Assignment and Location',
    hasRequired: false,
  },
  {
    key: '4',
    label: 'Priority and Urgency',
    hasRequired: false,
  },
  {
    key: '5',
    label: 'Additional Details',
    hasRequired: false,
  },
]