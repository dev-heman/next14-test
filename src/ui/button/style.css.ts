import { style } from '@vanilla-extract/css';

export const buttonBaseStyle = style({
  width: '150px',
  height: '50px',
  color: 'rgb(60,60,60)',
  borderRadius: '25px',
  border: 'none',
  boxShadow: '0px 1px 3px rgba(60,60,60, 0.5)',
  fontSize: '1.0rem',
  fontWeight: 'bold',
  ':hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0px 2px 4px rgba(60,60,60, 0.5)',
    cursor: 'pointer',
  },
  ':active': {
    transform: 'translateY(1px)',
    boxShadow: '0px 1px 2px rgba(60,60,60, 0.5)',
  },
});
