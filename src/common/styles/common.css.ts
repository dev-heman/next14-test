import { style } from '@vanilla-extract/css';

export interface FlexDirectionStyle {
  direction: 'column' | 'row';
}

export const fullWidth = style({
  width: '100%',
});

export const flexContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const alignFlexDirection = ({
  direction = 'row',
}: FlexDirectionStyle) => {
  return style([flexContainer, fullWidth, { flexDirection: direction }]);
};
