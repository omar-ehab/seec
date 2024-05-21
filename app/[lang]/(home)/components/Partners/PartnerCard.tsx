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
      className=' flex h-[7.5rem] w-full items-center justify-center rounded-xl bg-white px-8 py-4 shadow-[0_6px_24px_0_rgba(115,174,40,0.15)] '
    >
      <Image
        src={logo}
        alt={name}
        height={88}
        width={230}
        className='h-full w-full object-contain'
      />
    </Link>
  );
}
