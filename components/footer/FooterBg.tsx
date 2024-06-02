'use client';
import Image from 'next/image';
import { useWindowSize } from '@uidotdev/usehooks';
import footerImage from '@/public/footer.png';
import mobileFooterImage from '@/public/contact_bg.jpg';

export default function FooterBg() {
  const { width } = useWindowSize();
  return (
    <Image
      src={width && width > 768 ? footerImage : mobileFooterImage}
      priority
      alt={'footer'}
      className={'absolute top-0 z-0 h-full md:w-full'}
    />
  );
}
