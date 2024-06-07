import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import DoubleSquareMonoColor from '@/components/shapes/DoubleSquareMonoColor';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import UserMultipleIcon from '@/components/icons/colored/UserMultipleIcon';
import { Separator } from '@/components/ui/separator';
import CallIcon from '@/components/icons/CallIcon';
import MailIcon from '@/components/icons/MailIcon';
import CalenderIcon from '@/components/icons/colored/CalenderIcon';
import InfoCard from '@/app/[lang]/(media)/reports/[slug]/InfoCard';
import FooterCta from '@/components/footer-cta';
import NumberCard from '@/app/[lang]/(media)/reports/[slug]/NumberCard';

export default function SignelReportPage({
  params: { lang },
}: {
  params: { slug: string; lang: LangType };
}) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='التقرير السنوي لعام 2024'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'التقارير', href: `/${lang}/reports` },
          { title: 'التقرير السنوي لعام 2024' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <div className={'relative overflow-hidden bg-[#F7F8F7] pb-36 pt-16'}>
        <DoubleSquareMonoColor className={'absolute bottom-0 left-0 z-0'} />
        <div className={'container grid md:grid-cols-2'}>
          <div className={'mb-6'}>
            <h3 className={'mb-4 text-2xl font-medium text-black'}>
              التقرير السنوي لعام 2024
            </h3>
            <p className={'max-w-[600px] text-sub_p'}>
              تتيح هذه الخدمة للمنشآت الصناعية التسجيل في منصة برنامج إدارة
              الطاقة لمعرفة طرق تنفيذ نظام إدارة الطاقة وفقاً لأبرز الممارسات في
              إدارة الطاقة والحصول على أدلة وأدوات مساندة لتنفيذ النظام وتحسين
              إدارة الطاقة وتحسين كفاءتها.
            </p>
          </div>
          <div></div>
          <div className={'flex items-center gap-6'}>
            <Link
              href={'#'}
              className={cn(
                buttonVariants({ variant: 'default' }),
                'rounded-full bg-primary text-white'
              )}
            >
              تحميل ملف التقرير
            </Link>
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
              'flex w-full flex-wrap items-center gap-6 sm:justify-normal xl:justify-between'
            }
          >
            <InfoCard
              icon={<UserMultipleIcon />}
              title={'الفئة المستهدفة'}
              value={'الأفراد, الجهات الحكومية'}
              className={'min-w-[180px]'}
            />
            <InfoCard
              icon={<CalenderIcon />}
              title={'تاريخ إصدار التقرير'}
              value={'11/08/1440'}
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
        <div className={''}>
          <h4 className={'mb-8 text-2xl font-medium text-black'}>
            أهم الأرقام بالتقرير
          </h4>
          <div
            className={
              'grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-6 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'
            }
          >
            <NumberCard
              title={'تنفيذ'}
              number={9}
              hasPlus
              description={'حملة توعوية'}
            />
            <NumberCard
              title={'تأهيل'}
              number={940}
              hasPlus
              description={'مهني معتمد'}
            />
            <NumberCard
              title={'توفير'}
              number={425}
              unit={'الف'}
              description={'برميل مكافئ يومياً'}
            />
            <NumberCard
              title={'تقليل انبعاث أكسيد الكربون'}
              number={51}
              unit={'مليون'}
              description={'طن مكافئ ثانيً'}
            />
            <NumberCard title={'اعتماد'} number={5} description={'مصانع'} />
            <NumberCard
              title={'تطوير'}
              number={17}
              description={'برنامج تدريبي'}
              hasPlus
            />
          </div>
        </div>
        <FooterCta lastUpdateDate={'12/5/2024'} />
      </div>
    </>
  );
}
