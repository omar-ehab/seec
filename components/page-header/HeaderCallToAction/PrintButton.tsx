'use client';
import PrinterIcon from '@/components/icons/PrinterIcon';

export default function PrintButton() {
  return (
    <button
      className={
        'flex flex-col items-center justify-center gap-0 text-sub_p hover:text-primary sm:flex-row sm:gap-1'
      }
      onClick={() => {
        window.print();
      }}
    >
      <PrinterIcon />
      <span className={''}>طباعة</span>
    </button>
  );
}
