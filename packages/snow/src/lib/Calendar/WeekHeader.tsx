import { dayStyles } from './commonStyles';
import { Box } from '../Box';

const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

type WeekHeaderProps = {
  id?: string;
};

export const WeekHeader = ({ id = 'week-header' }: WeekHeaderProps) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
    }}
    id={id}
    data-testid={id}
  >
    {weekNames.map((item, index) => (
      <div
        key={index}
        id={`${id}-name-container-${index}`}
        data-testid={`${id}-name-container-${index}`}
        className={dayStyles}
      >
        <span id={`${id}-name-${index}`} data-testid={`${id}-name-${index}`}>
          {item}
        </span>
      </div>
    ))}
  </Box>
);
