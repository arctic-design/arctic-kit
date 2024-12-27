import type { Meta, StoryObj } from '@storybook/react';

import { Table } from './index';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Table.Root> = {
  title: 'Table',
  component: Table.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Table.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

// Define the Employee interface
interface Employee {
  id: number;
  fullName: string;
  email: string;
  group: string;
  position: string;
  department: string;
  location: string;
  phone: string;
  startDate: string;
  status: string;
}

// Define the column headers
const columns = [
  'Full Name',
  'Email',
  'Group',
  'Position',
  'Department',
  'Location',
  'Phone',
  'Start Date',
  'Status',
  'Manager',
  'Salary',
  'Performance',
];

// Initial employee data
const initialEmployees: Employee[] = [
  {
    id: 1,
    fullName: 'Danilo Sousa',
    email: 'danilo@example.com',
    group: 'Developer',
    position: 'Frontend Developer',
    department: 'Engineering',
    location: 'New York',
    phone: '555-1234',
    startDate: '2020-01-15',
    status: 'Active',
  },
  {
    id: 2,
    fullName: 'Zahra Ambessa',
    email: 'zahra@example.com',
    group: 'Admin',
    position: 'HR Manager',
    department: 'Human Resources',
    location: 'London',
    phone: '555-5678',
    startDate: '2018-05-22',
    status: 'Active',
  },
  {
    id: 3,
    fullName: 'Jasper Eriksson',
    email: 'jasper@example.com',
    group: 'Developer',
    position: 'Backend Developer',
    department: 'Engineering',
    location: 'Berlin',
    phone: '555-9012',
    startDate: '2019-03-10',
    status: 'On Leave',
  },
  // Additional employees...
];

// Utility function to generate more employees
const generateEmployees = (count: number): Employee[] => {
  const groups = ['Developer', 'Admin', 'Marketing', 'Sales', 'Support'];
  const positions = [
    'Frontend Developer',
    'Backend Developer',
    'HR Manager',
    'SEO Specialist',
    'Sales Executive',
    'Support Agent',
    'Product Manager',
    'UI/UX Designer',
  ];
  const departments = [
    'Engineering',
    'Human Resources',
    'Marketing',
    'Sales',
    'Customer Support',
  ];
  const locations = [
    'New York',
    'London',
    'Berlin',
    'San Francisco',
    'Rome',
    'Tokyo',
    'Sydney',
  ];
  const statuses = ['Active', 'On Leave', 'Inactive'];

  const newEmployees: Employee[] = [];

  for (let i = initialEmployees.length + 1; i <= count; i++) {
    const randomElement = (arr: string[]) =>
      arr[Math.floor(Math.random() * arr.length)];

    newEmployees.push({
      id: i,
      fullName: `Employee ${i}`,
      email: `employee${i}@example.com`,
      group: randomElement(groups),
      position: randomElement(positions),
      department: randomElement(departments),
      location: randomElement(locations),
      phone: `555-${Math.floor(1000 + Math.random() * 9000)}`,
      startDate: `20${Math.floor(10 + Math.random() * 10)}-${String(
        Math.floor(1 + Math.random() * 12)
      ).padStart(2, '0')}-${String(Math.floor(1 + Math.random() * 28)).padStart(
        2,
        '0'
      )}`,
      status: randomElement(statuses),
    });
  }

  return newEmployees;
};

// Generate 50 employees for a larger data set
const moreEmployees = generateEmployees(50);
const allEmployees = [...initialEmployees, ...moreEmployees];

function WithPaginationExample(args: Story['args']) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(allEmployees.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentEmployees = allEmployees.slice(indexOfFirstRow, indexOfLastRow);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Employee Information</h1>
      <Table.Root {...args}>
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell key={column}>
                {column}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {currentEmployees.map((employee) => (
            <Table.Row key={employee.id}>
              <Table.RowHeaderCell>{employee.fullName}</Table.RowHeaderCell>
              <Table.Cell>{employee.email}</Table.Cell>
              <Table.Cell>{employee.group}</Table.Cell>
              <Table.Cell>{employee.position}</Table.Cell>
              <Table.Cell>{employee.department}</Table.Cell>
              <Table.Cell>{employee.location}</Table.Cell>
              <Table.Cell>{employee.phone}</Table.Cell>
              <Table.Cell>{employee.startDate}</Table.Cell>
              <Table.Cell>{employee.status}</Table.Cell>
              <Table.Cell>
                {employee.status === 'Active' ? 'Alice Johnson' : 'Bob Smith'}
              </Table.Cell>
              <Table.Cell>
                ${Math.floor(30000 + Math.random() * 70000)}
              </Table.Cell>
              <Table.Cell>
                {employee.status === 'Active' ? 'Excellent' : 'Good'}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      {/* Pagination Controls */}
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

function DefaultRender(args: Story['args']) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Employee Information</h1>
      <Table.Root {...args}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
            <Table.Cell>danilo@example.com</Table.Cell>
            <Table.Cell>Developer</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
            <Table.Cell>zahra@example.com</Table.Cell>
            <Table.Cell>Admin</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
            <Table.Cell>jasper@example.com</Table.Cell>
            <Table.Cell>Developer</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
}

export const Default: Story = {
  args: {},
  render: DefaultRender,
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  render: DefaultRender,
};

export const ColorGhost: Story = {
  args: {
    variant: 'ghost',
    color: 'success',
  },
  render: DefaultRender,
};

export const Surface: Story = {
  args: {
    variant: 'surface',
  },
  render: DefaultRender,
};

export const PrimaryColor: Story = {
  args: {
    color: 'primary',
  },
  render: DefaultRender,
};

export const SecondaryColor: Story = {
  args: {
    color: 'secondary',
  },
  render: DefaultRender,
};

export const DefaultLarge: Story = {
  args: {
    size: 'large',
  },
  render: DefaultRender,
};

export const Pagination: Story = {
  args: {},
  render: WithPaginationExample,
};
