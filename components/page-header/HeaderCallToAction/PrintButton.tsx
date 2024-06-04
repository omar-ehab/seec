'use client';
import PrinterIcon from '@/components/icons/PrinterIcon';

export default function PrintButton() {
  return (
    <button
      className={
        'col-start-1 flex flex-row items-center justify-center gap-1 text-sm text-sub_p hover:text-primary sm:text-base'
      }
      onClick={() => {
        window.print();
      }}
    >
      <PrinterIcon className=' size-4 sm:size-auto sm:text-base' />
      <span className={''}>طباعة</span>
    </button>
  );
}
