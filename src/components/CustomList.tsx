import React from 'react';
import Typography from '@mui/material/Typography';
import { t } from 'ttag'; // Import t from ttag
import { Box } from '@mui/material';

interface CustomListProps {
  items: string[];
}

/**
 * CustomList component
 * @param items
 * @returns 
 * @example
 * <CustomList items={['Software Developer', 'Tech Enthusiast', 'Problem Solver']} />
 */
const CustomList: React.FC<CustomListProps> = ({ items }) => {
  // Function to group items into pairs
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 2) {
    groupedItems.push(items.slice(i, i + 2));
  }

  return (
    <Box sx={{ mt: 2 }}>
      {groupedItems.map((pair, index) => (
        <Box key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', justifyContent: 'center' }}>
          {pair.map((item, idx) => (
            <React.Fragment key={idx}>
              <Typography>{t`${item}`}</Typography>
              {idx === 0 && pair.length === 2 && <span style={{ margin: '0 8px', color: 'tomato' }}>|</span>}
            </React.Fragment>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default CustomList;
