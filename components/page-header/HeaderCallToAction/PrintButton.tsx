'use client';
import PrinterIcon from '@/components/icons/PrinterIcon';

export default function PrintButton() {
  return (
    <button
      className={'text-sub_p flex items-center gap-1 hover:text-primary'}
      onClick={() => {
        window.print();
      }}
    >
      <PrinterIcon />
      <span className={'ml-1'}>طباعة</span>
    </button>
  );
}
