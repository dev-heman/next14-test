import React from 'react';
import type { Metadata } from 'next';
import { appContainerStyle } from './style.css';

export const metadata: Metadata = {
  title: 'Next.js v14 test',
  description: 'Next.js 14 버전을 위한 테스트 프로젝트입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={appContainerStyle}>{children}</body>
    </html>
  );
}
