'use client';
import { usePathname, useSearchParams } from 'next/navigation';

export default function SubPage() {
  const pathname = usePathname();
  const params = useSearchParams();

  if (params.get('sub_type') === null) {
    return (
      <div className={'mt-4'}>
        <h4 className={'mb-6 text-2xl font-medium text-black'}>
          متطلبات الوظيفة
        </h4>
        <ul className={'flex flex-col gap-4'}>
          <li className={'flex items-center gap-4'}>
            <span
              className={
                'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
              }
            >
              1
            </span>
            <p>Mobile Application Development and iOS Development skills</p>
          </li>
          <li className={'flex items-center gap-4'}>
            <span
              className={
                'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
              }
            >
              2
            </span>
            <p>Experience creating mobile applications for iOS</p>
          </li>
          <li className={'flex items-center gap-4'}>
            <span
              className={
                'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
              }
            >
              3
            </span>
            <p>Software Development skills</p>
          </li>
          <li className={'flex items-center gap-4'}>
            <span
              className={
                'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
              }
            >
              4
            </span>
            <p>Strong problem-solving and analytical skills</p>
          </li>
          <li className={'flex items-center gap-4'}>
            <span
              className={
                'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
              }
            >
              5
            </span>
            <p>Good understanding of user interface and user experience...</p>
          </li>
        </ul>
      </div>
    );
  }
}
