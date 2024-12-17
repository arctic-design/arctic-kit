import type { Meta, StoryObj } from '@storybook/react';

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger,
} from './Popover';
import { useCallback, useState } from 'react';
import { Button } from '../Button';
import { Paper } from '../Paper';
import { ChevronDownIcon } from '@arctic-kit/icons';
import { Stack } from '../Layout';
import { styled } from '@pigment-css/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../Card';
import Girl1 from './avatars/girl1.png';
import Girl2 from './avatars/girl2.png';
import Boy1 from './avatars/boy1.png';
import { Avatar } from '../Avatar';
import { List, ListItem, ListItemTitle, ListItemDescription } from '../List';

const meta: Meta<typeof Popover> = {
  title: 'Popover',
  component: Popover,
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
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const RoleContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  padding: 8,
  fontSize: 12,
  '&:hover': {
    backgroundColor: 'var(--snow-colors-grey-100)',
    cursor: 'default',
  },

  '.title': {
    fontWeight: 500,
  },
  '.description': {
    fontWeight: 400,
    color: 'var(--snow-colors-grey-700)',
  },

  '&.active': {
    backgroundColor: 'var(--snow-colors-primary-50)',
  },
}));

function Render(args: Story['args']) {
  const [open, setOpen] = useState(false);
  return (
    <Paper variant="outlined">
      <h1>Popover Example</h1>
      <Popover {...args} open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen((v) => !v)}>
          Open popover
        </PopoverTrigger>
        <PopoverContent>
          <Paper elevation={0}>
            <PopoverHeading>My popover heading</PopoverHeading>
            <PopoverDescription>My popover description</PopoverDescription>
            <PopoverClose>Close</PopoverClose>
          </Paper>
        </PopoverContent>
      </Popover>
    </Paper>
  );
}

function UserRolePopover({
  setOpen,
  open,
  selectedRole,
  onRoleSelect,
}: {
  setOpen: (value: boolean) => void;
  open?: boolean;
  selectedRole: string;
  onRoleSelect: (role: string) => void;
}) {
  return (
    <Popover placement="bottom-start" open={open} onOpenChange={setOpen}>
      <PopoverTrigger onClick={() => setOpen(!open)} asChild>
        <Button
          variant="outlined"
          style={{ fontSize: 12 }}
          suffix={<ChevronDownIcon style={{ width: 14 }} />}
          noHighlights
        >
          {selectedRole}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Stack
          style={{ maxHeight: 500, overflowY: 'auto', padding: 4 }}
          spacing={2}
        >
          {UserRoles.map((role) => (
            <RoleContainer
              key={role.name}
              onClick={() => onRoleSelect(role.name)}
              className={role.name === selectedRole ? 'active' : ''}
            >
              <div className="title">{role.name}</div>
              <div className="description">{role.description}</div>
            </RoleContainer>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  );
}

const UserRoles = [
  { name: 'Member', description: 'Can view resources' },
  { name: 'Viewer', description: 'Can view and comment' },
  { name: 'Developer', description: 'Can view, comment and edit' },
  { name: 'Billing', description: 'Can view, comment and manage billing' },
  { name: 'Owner', description: 'Admin-level access to all resources' },
];

function CustomTriggerRender(args: Story['args']) {
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(UserRoles[0].name);
  const onRoleSelect = useCallback((roleName: string) => {
    setSelectedRole(roleName);
    setOpen(false);
  }, []);

  return (
    <Paper variant="outlined">
      <h1>Custom Trigger</h1>
      <UserRolePopover
        open={open}
        setOpen={setOpen}
        selectedRole={selectedRole}
        onRoleSelect={onRoleSelect}
      />
    </Paper>
  );
}

interface TeamMember {
  name: string;
  email: string;
  id: string;
  imgUrl: string;
}

interface UserRole {
  open: boolean;
  role: string;
}

const TeamMembers: TeamMember[] = [
  {
    name: 'Sofia Davis',
    email: 'sdavis@example.com',
    imgUrl: Girl1,
    id: 'sofia',
  },
  {
    name: 'Jackson Lee',
    email: 'jlee@example.com',
    imgUrl: Boy1,
    id: 'jackson',
  },
  {
    name: 'Isabella Nguyen',
    email: 'inguyen@example.com',
    imgUrl: Girl2,
    id: 'isabella',
  },
];

const initialUserRoles: Record<string, UserRole> = TeamMembers.reduce(
  (accumulator, currentValue) => ({
    ...accumulator,
    [currentValue.id]: { open: false, role: UserRoles[0].name },
  }),
  {}
);

function AdvancedExampleUsage() {
  const [userRoles, setUserRoles] =
    useState<Record<string, UserRole>>(initialUserRoles);
  return (
    <Card sx={{ minWidth: 400 }}>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <List>
          {TeamMembers.map((member) => (
            <ListItem
              key={member.id}
              prefix={
                <Avatar
                  src={member.imgUrl}
                  alt={member.name}
                  bgColor="secondary"
                />
              }
              suffix={
                <UserRolePopover
                  open={userRoles[member.id].open}
                  setOpen={() =>
                    setUserRoles((prevValue) => ({
                      ...prevValue,
                      [member.id]: {
                        ...prevValue[member.id],
                        open: !prevValue[member.id].open,
                      },
                    }))
                  }
                  selectedRole={userRoles[member.id].role}
                  onRoleSelect={(role) =>
                    setUserRoles((prevValue) => ({
                      ...prevValue,
                      [member.id]: {
                        ...prevValue[member.id],
                        open: false,
                        role,
                      },
                    }))
                  }
                />
              }
            >
              <ListItemTitle>{member.name}</ListItemTitle>
              <ListItemDescription>{member.email}</ListItemDescription>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    // fullWidth: false,
    placement: 'bottom-start',
  },
  render: Render,
};

export const CustomTrigger: Story = {
  args: {
    // fullWidth: false,
    placement: 'bottom-start',
  },
  render: CustomTriggerRender,
};

export const AdvancedExample: Story = {
  args: {},
  render: AdvancedExampleUsage,
};
