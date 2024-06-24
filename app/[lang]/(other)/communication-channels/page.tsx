import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';
import Image from 'next/image';
import XImage from '@/public/x.png';
import YouTube from '@/public/youtube.png';
import LinkedIn from '@/public/linked_in.png';
import Whatsapp from '@/public/whatsapp.png';
import Link from 'next/link';
import MailIcon from '@/components/icons/MailIcon';
import CallIcon from '@/components/icons/CallIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import MailBoxIcon from '@/components/icons/MailBoxIcon';
import MailReplyIcon from '@/components/icons/MailReplyIcon';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function CommunicationChannelsPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title="قنوات التواصل"
        skewBottomClass={'bg-white'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'قنوات التواصل' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <section>
        <div className="container py-16">
          <div className="[&:not(:last-child)]:mb-16">
            <h2 className="mb-6 text-xl font-medium text-black md:text-2xl">
              مواقع التواصل الاجتماعي
            </h2>
            <p className="text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6">
              تابع أحدث الأخبار الخاصة بالمركز
            </p>
            <div className={'flex items-center gap-6'}>
              <Link href={'#'} target={'_blank'} className={'flex flex-col justify-center'}>
                <div className={'size-[192px] flex items-center justify-center'}>
                  <div className={'rounded-full size-[120px] overflow-hidden'}>
                    <Image src={XImage} alt={'تويتر “ اكس “'} className={'w-full h-full object-cover'} />
                  </div>
                </div>
                <p className={'text-black text-xl text-center'}>تويتر “ اكس “</p>
              </Link>
              <Link href={'#'} target={'_blank'} className={'flex flex-col justify-center'}>
                <div className={'size-[192px] flex items-center justify-center'}>
                  <div className={'rounded-full size-[120px] overflow-hidden'}>
                    <Image src={YouTube} alt={'يوتيوب'} className={'w-full h-full object-contain'} />
                  </div>
                </div>
                <p className={'text-black text-xl text-center'}>يوتيوب</p>
              </Link>
              <Link href={'#'} target={'_blank'} className={'flex flex-col justify-center'}>
                <div className={'size-[192px] flex items-center justify-center'}>
                  <div className={'rounded-xl size-[120px] overflow-hidden'}>
                    <Image src={LinkedIn} alt={'لينكد ان'} className={'w-full h-full object-cover'} />
                  </div>
                </div>
                <p className={'text-black text-xl text-center'}>لينكد ان</p>
              </Link>
              <Link href={'#'} target={'_blank'} className={'flex flex-col justify-center'}>
                <div className={'size-[192px] flex items-center justify-center'}>
                  <div className={'rounded-full size-[120px]'}>
                    <Image src={Whatsapp} alt={'واتس أب'} className={'w-full h-full object-cover'} />
                  </div>
                </div>
                <p className={'text-black text-xl text-center'}>واتس أب</p>
              </Link>
            </div>
          </div>
          <h2 className="mb-8 text-xl font-medium text-black md:text-2xl">
            معلومات التواصل
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            <div className={'flex items-center gap-4'}>
              <MailIcon />
              <div className={'flex flex-col gap-1'}>
                <p className={'text-sub_p text-sm'}>
                  البريد الإلكتروني
                </p>
                <p className={'text-black'}>info@seec.gov.sa</p>
              </div>
            </div>
            <div className={'flex items-center gap-4'}>
              <CallIcon />
              <div className={'flex flex-col gap-1'}>
                <p className={'text-sub_p text-sm'}>
                  الرقم الموحد
                </p>
                <p className={'text-black'}>920002724</p>
              </div>
            </div>
            <div className={'flex items-center gap-4'}>
              <LocationIcon />
              <div className={'flex flex-col gap-1'}>
                <p className={'text-sub_p text-sm'}>
                  الموقع الجغرافي
                </p>
                <p className={'text-black'}>الرياض-المدينة الرقمية</p>
              </div>
            </div>
            <div className={'flex items-center gap-4'}>
              <MailBoxIcon />
              <div className={'flex flex-col gap-1'}>
                <p className={'text-sub_p text-sm'}>
                  الصندوق البريدي
                </p>
                <p className={'text-black'}>6764</p>
              </div>
            </div>
            <div className={'flex items-center gap-4'}>
              <MailReplyIcon />
              <div className={'flex flex-col gap-1'}>
                <p className={'text-sub_p text-sm'}>
                  الرمز البريدي
                </p>
                <p className={'text-black'}>12382</p>
              </div>
            </div>
          </div>
          <FooterCta lastUpdateDate={'12/5/2024'} />
        </div>
      </section>
    </>
  );
}
