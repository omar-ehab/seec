import IconProps from '@/types/icon-props';

export default function MailReplyIcon({ size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size ?? 24}
      height={size ?? 24}
      fill={'none'}
      className={className}
    >
      <path d="M1.99989 5L8.91291 8.92462C11.4386 10.3585 12.5612 10.3585 15.0869 8.92462L21.9999 5"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path
        d="M21.9193 11.0333C21.9193 10.54 21.9141 10.0467 21.9036 9.55195C21.8386 6.47439 21.806 4.93561 20.6795 3.79572C19.5528 2.65584 17.985 2.61614 14.8491 2.53671C12.9164 2.48776 11.0028 2.48776 9.07012 2.5367C5.93431 2.61611 4.3664 2.65582 3.23983 3.79571C2.11325 4.9356 2.08071 6.47438 2.01559 9.55194C1.99465 10.5415 1.99466 11.5252 2.0156 12.5147C2.08071 15.5924 2.11326 17.1311 3.23984 18.271C4.3664 19.4109 5.93431 19.4505 9.07013 19.5299C10.0365 19.5544 10.998 19.5667 11.9596 19.5667"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M22.0001 21.5001C21.884 18.9755 21.9869 18.0571 20.3438 16.879C19.5362 16.3 17.9115 15.9186 15.7177 16.1245M17.4519 13.5925L15.1552 15.7462C14.9611 15.9404 14.9597 16.2558 15.1519 16.4518L17.4519 18.6399"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
