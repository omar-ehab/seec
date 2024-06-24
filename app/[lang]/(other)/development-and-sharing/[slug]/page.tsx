import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import DoubleSquareMonoColor from '@/components/shapes/DoubleSquareMonoColor';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import InfoCard from '@/app/[lang]/(media)/reports/[slug]/InfoCard';
import CalenderIcon from '@/components/icons/colored/CalenderIcon';
import { Separator } from '@/components/ui/separator';
import CallIcon from '@/components/icons/CallIcon';
import MailIcon from '@/components/icons/MailIcon';
import FooterCta from '@/components/footer-cta';
import FlashIcon from '@/components/icons/FlashIcon';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function SingleDevelopmentAndSharingPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title="هاكاثون الابتكار للتغيير نحو الأفضل"
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'التطوير ومشاركة الأفكار', href: `/${lang}/development-and-sharing` },
          { title: 'هاكاثون الابتكار للتغيير نحو الأفضل' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <div className={'relative overflow-hidden bg-[#F7F8F7] pb-36 pt-16'}>
        <DoubleSquareMonoColor className={'absolute bottom-0 left-0 z-0'} />
        <div className={'container grid md:grid-cols-2'}>
          <div className={'mb-6'}>
            <h3 className={'mb-4 text-2xl font-medium text-black'}>
              هاكاثون الابتكار للتغيير نحو الأفضل
            </h3>
            <p className={'max-w-[600px] text-sub_p'}>
              المركز يطلق مبادرة هاكاثون “الابتكار للتغيير نحو الأفضل” (innovate 4 impact), وذلك بالتعاون مع شركة
              ديفوتيم, حيث تهدف المبادرة إلى تشجيع ودعم السعوديين من خريجي الجامعات والباحثين عن عمل إلى الإبداع
              والابتكار في توفير حلول رقمية مبتكرة عن طريق طرح عدد من التحديات التي تواجه بعض الخدمات بالوزارة. </p>
          </div>
          <div></div>
          <div className={'flex items-center gap-6'}>
            <Button
              className={cn(
                buttonVariants({ variant: 'default' }),
                'z-30 rounded-full bg-primary text-white',
              )}
            >
              شاركنا برأيك
            </Button>
          </div>
        </div>
      </div>
      <div className={' container bg-white pb-24'}>
        <div
          className={
            'z-20 flex w-full -translate-y-[76px] items-center justify-between rounded-2xl bg-white p-6 shadow-[0_1px_24px_0px_rgba(32,32,33,0.1)]'
          }
        >
          <div
            className={
              'flex w-full flex-wrap xl:flex-nowrap items-center gap-6 sm:justify-normal xl:justify-between'
            }
          >
            <InfoCard
              icon={<FlashIcon />}
              title={'الحالة'}
              value={'حالية'}
              className={'min-w-[180px]'}
            />
            <InfoCard
              icon={<CalenderIcon />}
              title={'تاريخ البدء'}
              value={'05/06/2024'}
              className={'min-w-[180px]'}
            />
            <InfoCard
              icon={<CalenderIcon />}
              title={'تاريخ الإغلاق'}
              value={'23/06/2024'}
              className={'min-w-[180px]'}
            />
            <Separator className={'hidden h-12 w-[1px] xl:block'} />
            <InfoCard
              icon={<CallIcon size={26} />}
              title={'رقم الهاتف'}
              value={'920002724'}
              className={'min-w-[180px]'}
            />
            <InfoCard
              icon={<MailIcon size={26} />}
              title={'البريد الإلكتروني'}
              value={'info@seec.gov.sa'}
              className={'min-w-[180px]'}
            />
          </div>
        </div>
        <FooterCta lastUpdateDate={'12/5/2024'} className={'mt-0'} />
      </div>
    </>
  );
}