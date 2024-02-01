export default [
  {
    key: '1',
    groupName: 'Basic Ticket Information',
    children: [
      { key: 'number', fieldName: 'Ticket ID', required: true },
      { key: 'number_type', fieldName: 'Ticket Type', required: false },
      { key: 'date_number_created', fieldName: 'Date Created', required: false },
      { key: 'date_number_resolved', fieldName: 'Date Resolved', required: false },
      { key: 'number_desc', fieldName: 'Description', required: true },
      { key: 'number_shortdesc', fieldName: 'Short Description', required: true },
      { key: 'number_source', fieldName: 'Ticket Source', required: false }
    ]
  },
  {
    key: '2',
    groupName: 'Categorization and Configuration',
    children: [
      { key: 'number_category1', fieldName: 'Category', required: false },
      { key: 'number_category2', fieldName: 'Subcategory', required: false },
      { key: 'number_ci', fieldName: 'Configuration Item', required: false }
    ]
  },
  {
    key: '3',
    groupName: 'Assignment and Location',
    children: [
      { key: 'asgrp_closed', fieldName: 'Assignment Group', required: false },
      { key: 'cust_country', fieldName: 'Country', required: false },
      { key: 'number_language', fieldName: 'Language', required: false }
    ]
  },
  {
    key: '4',
    groupName: 'Priority and Urgency',
    children: [
      { key: 'number_priority', fieldName: 'Priority', required: false },
      { key: 'number_urgency', fieldName: 'Urgency', required: false },
      { key: 'number_impact', fieldName: 'Impact', required: false }
    ]
  },
  {
    key: '5',
    groupName: 'Additional Details',
    children: [
      { key: 'number_reopencount', fieldName: 'Count of Reopened', required: false },
      { key: 'number_reassignmentcount', fieldName: 'Count of Bounce', required: false },
      { key: 'cust_affected_id', fieldName: 'Customer Affected ID', required: false },
      { key: 'number_resolvednotes', fieldName: 'Resolution Notes', required: false }
    ]
  }
];
