'use client';
// client component

import { useRouter } from 'next/navigation';
import { ButtonUIComponent } from '../ui/button/ButtonUIComponent';

interface Props {
  url: string;
  children: React.ReactNode;
}

export function ButtonClientComponent({ url, children }: Props) {
  const router = useRouter();
  const path = url || '/';

  const handleClickRoute = () => {
    router.push(path);
  };

  return (
    <ButtonUIComponent
      onClick={handleClickRoute}
      size={'md'}
      color={path === '/' ? 'red' : 'purple'}
    >
      {children}
    </ButtonUIComponent>
  );
}
