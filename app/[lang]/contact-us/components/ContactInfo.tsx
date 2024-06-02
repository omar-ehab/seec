import Image from 'next/image';
import contactBgImage from '@/public/contact_bg.jpg';
import CallIcon from '@/components/icons/CallIcon';
import MailIcon from '@/components/icons/MailIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import Link from 'next/link';
import TwitterIcon from '@/components/icons/TwitterIcon';
import YoutubeIcon from '@/components/icons/YoutubeIcon';
import LinedInIcon from '@/components/icons/LinedInIcon';

export default function ContactInfo() {
  return (
    <div
      className={
        'relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl p-4 md:p-8 '
      }
    >
      <span
        className={
          'absolute inset-0 z-10 bg-gradient-to-b from-[rgba(115,174,40,1)] to-[rgba(0,111,89,1)] opacity-95'
        }
      ></span>
      <Image
        src={contactBgImage}
        priority
        alt={'footer'}
        className={'absolute inset-0 z-0 h-full w-full'}
      />
      <div className={'z-10'}>
        <h3 className={'mb-8 text-xl font-medium text-white md:text-2xl'}>
          معلومات التواصل
        </h3>
        <div className={'mb-4 flex items-center gap-4'}>
          <CallIcon className={'text-white'} size={24} />
          <div>
            <p className={'mb-1 text-sm text-[#D7DAD7]'}>الرقم الموحد</p>
            <p className={'text-lg text-white md:text-xl'}>920002724</p>
          </div>
        </div>
        <div className={'mb-4 flex items-center gap-4'}>
          <MailIcon className={'text-white'} size={24} />
          <div>
            <p className={'text-sm text-[#D7DAD7]'}>البريد الإلكتروني</p>
            <p className={'text-lg text-white md:text-xl'}>info@seec.gov.sa</p>
          </div>
        </div>
        <div className={'mb-4 flex items-center gap-4'}>
          <LocationIcon className={'text-white'} size={24} />
          <div>
            <p className={'text-sm text-[#D7DAD7]'}>الموقع الجغرافي</p>
            <p className={'text-lg text-white md:text-xl'}>
              الرياض-الميدنة الرقمية
            </p>
          </div>
        </div>
        <div
          className={
            'my-8 flex h-[255px] w-full items-center justify-center rounded-2xl bg-[#F1F2F4]'
          }
        >
          <p className={'text-black'}>Google Maps will live here</p>
        </div>
      </div>
      <div className={'z-10'}>
        <p className={'mb-2 text-sm text-[#D7DAD7]'}>تابعنا على</p>
        <ul className={'flex items-center gap-4'}>
          <li>
            <Link
              href={'#'}
              className={
                'bg group flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(202,214,219,.1)] hover:bg-white'
              }
            >
              <TwitterIcon
                className={'text-white group-hover:text-[#008E3D]'}
                size={20}
              />
            </Link>
          </li>
          <li>
            <Link
              href={'#'}
              className={
                'bg group flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(202,214,219,.1)] hover:bg-white'
              }
            >
              <YoutubeIcon
                className={'text-white group-hover:text-[#008E3D]'}
                size={20}
              />
            </Link>
          </li>
          <li>
            <Link
              href={'#'}
              className={
                'bg group flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(202,214,219,.1)] hover:bg-white'
              }
            >
              <LinedInIcon
                className={'text-white group-hover:text-[#008E3D]'}
                size={20}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
