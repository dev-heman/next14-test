import { style } from '@vanilla-extract/css';
import { alignFlexDirection } from '../common/styles/common.css';

const appDefaultStyle = alignFlexDirection({ direction: 'column' });

export const appContainerStyle = style([appDefaultStyle, { margin: 0 }]);

export const homeContainerStyle = style([
  appDefaultStyle,
  {
    backgroundColor: '#E4F1EE',
    padding: '20px 0',
    gap: '10px',
  },
]);
