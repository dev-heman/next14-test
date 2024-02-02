import React from 'react';
import { buttonBaseStyle } from './style.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

type Size = 'sm' | 'md' | 'lg';
type Color = 'red' | 'purple';

interface Props {
  children: React.ReactNode;
  size: Size;
  color: Color;
  onClick?: (e: React.MouseEvent) => void;
}

const getButtonWidth = (size: Size) => {
  switch (size) {
    case 'sm':
      return '100px';
    case 'lg':
      return '200px';
    default:
    case 'md':
      return '150px';
  }
};

export function ButtonUIComponent({ children, size, color, onClick }: Props) {
  return (
    <button
      className={buttonBaseStyle}
      style={assignInlineVars({
        backgroundColor: color === 'purple' ? '#DEDAF4' : '#FFADAD',
        width: getButtonWidth(size),
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
