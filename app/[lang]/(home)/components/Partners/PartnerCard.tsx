import Image from 'next/image';
import Link from 'next/link';

type Props = {
  name: string;
  logo: any;
  link: string;
};
export default function PartnerCard({ name, logo, link }: Props) {
  return (
    <Link
      href={link}
      className='flex w-[300px] items-center justify-center rounded-xl bg-white py-6 drop-shadow-[0_6px_24px_0_rgba(115,174,40,0.15)]'
    >
      <Image src={logo} alt={name} className='h-full w-full' />
    </Link>
  );
}
