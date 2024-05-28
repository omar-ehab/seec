import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs';
import { BreadcrumbItemType } from '@/types/breadcrumb-item';

type Props = {
  breadcrumbItems: BreadcrumbItemType[];
  title: string;
  children: React.ReactNode;
};
export default function PageHeader({
  breadcrumbItems,
  title,
  children,
}: Props) {
  return (
    <div className='relative w-full overflow-hidden'>
      <span
        className={
          'absolute inset-0 z-0 bg-gradient-to-b from-[rgba(115,174,40,0.1)] to-[rgba(0,111,89,0.1)]'
        }
      ></span>
      <div className={'relative z-10 px-20 py-14'}>
        <Breadcrumbs items={breadcrumbItems} className={'mb-6'} />
        <h1 className={'mb-8 text-4xl font-bold text-black'}>{title}</h1>
        {children}
      </div>
      <div className={'relative h-24 bg-transparent'}>
        <span
          className={
            'skewed absolute top-0 block h-full w-full bg-gradient-to-l from-[rgba(115,174,40,1)] to-[rgba(241,247,234,1)]'
          }
        ></span>
        <span
          className={'skewed-b absolute top-0 block h-full w-full bg-[#FFFFFF]'}
        ></span>
      </div>
    </div>
  );
}
