import { style } from '@vanilla-extract/css';
import { alignFlexDirection } from '../../common/styles/common.css';

export const userPageContainerStyle = style([
  alignFlexDirection({ direction: 'column' }),
  {
    backgroundColor: '#FDFFB6',
    padding: '20px 0',
    gap: '10px',
  },
]);
