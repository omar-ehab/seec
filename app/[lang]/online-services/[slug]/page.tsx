import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import DoubleSquareMonoColor from '@/components/shapes/DoubleSquareMonoColor';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import InfoCard from '@/app/[lang]/online-services/[slug]/components/InfoCard';
import UserMultipleIcon from '@/components/icons/colored/UserMultipleIcon';
import { Separator } from '@/components/ui/separator';
import CallIcon from '@/components/icons/CallIcon';
import MailIcon from '@/components/icons/MailIcon';
import SubFilters from '@/app/[lang]/online-services/[slug]/components/SubFilters';
import SubPage from '@/app/[lang]/online-services/[slug]/components/SubPage';
import CommentCta from '@/components/comment-cta';
import OtherServices from '@/app/[lang]/online-services/[slug]/components/OtherServices';
import CalenderIcon from '@/components/icons/colored/CalenderIcon';
import ClockIcon from '@/components/icons/colored/ClockIcon';
import MoneyIcon from '@/components/icons/colored/MoneyIcon';

export default function ServicePage({
  params: { lang, slug },
}: {
  params: { slug: string; lang: LangType };
}) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='الخدمات الإلكترونية'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'الخدمات الإلكترونية', href: `/${lang}/online-services` },
          { title: slug },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <div className={'relative overflow-hidden bg-[#F7F8F7] pb-36 pt-16'}>
        <DoubleSquareMonoColor className={'absolute bottom-0 left-0 z-0'} />
        <div className={'container grid grid-cols-2'}>
          <div className={'col-span-2 mb-6 lg:col-span-1'}>
            <h3 className={'mb-4 text-xl font-medium text-black md:text-2xl'}>
              برنامج إدارة الطاقة
            </h3>
            <p className={'text-base text-sub_p'}>
              تتيح هذه الخدمة للمنشآت الصناعية التسجيل في منصة برنامج إدارة
              الطاقة لمعرفة طرق تنفيذ نظام إدارة الطاقة وفقاً لأبرز الممارسات في
              إدارة الطاقة والحصول على أدلة وأدوات مساندة لتنفيذ النظام وتحسين
              إدارة الطاقة وتحسين كفاءتها.
            </p>
          </div>
          <div></div>
          <div
            className={
              'z-30 col-span-2 mb-6 flex items-center gap-4 md:gap-6 lg:col-span-1'
            }
          >
            <Link
              href={'#'}
              className={cn(
                buttonVariants({ variant: 'default' }),
                'rounded-full bg-primary px-4 py-2 text-white sm:px-6 sm:py-3'
              )}
            >
              بدأ الخدمة
            </Link>
            <Link
              href={'#'}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'rounded-full border-[#73AE28] px-4 py-2 text-[#73AE28] hover:text-[#73AE28] sm:px-6 sm:py-3'
              )}
            >
              ملف دليل الخدمة
            </Link>
          </div>
        </div>
      </div>
      <div className={'container bg-white pb-24'}>
        <div
          className={
            'z-20 flex w-full -translate-y-[76px] items-center justify-between rounded-2xl bg-white p-6 shadow-[0_1px_24px_0px_rgba(32,32,33,0.1)]'
          }
        >
          <div
            className={
              'gab-x-6 grid w-full grid-cols-[repeat(auto-fill,minmax(180px,1fr))] items-start justify-items-center gap-y-8 md:justify-items-start 2xl:flex 2xl:justify-between'
            }
          >
            <InfoCard
              icon={<UserMultipleIcon />}
              title={'الفئة المستهدفة'}
              value={'الأفراد, الجهات الحكومية'}
            />
            <InfoCard
              icon={<CalenderIcon />}
              title={'تاريخ إصدار الخدمة'}
              value={'11/08/1440'}
            />
            <InfoCard
              icon={<ClockIcon />}
              title={'مدة تنفيذ الخدمة'}
              value={'1-2 يوم'}
            />
            <InfoCard icon={<MoneyIcon />} title={'التكلفة'} value={'مجانية'} />
            <Separator
              className={'hidden h-12 w-[1px] self-center 2xl:block'}
            />
            <InfoCard
              icon={<CallIcon size={26} />}
              title={'رقم الهاتف'}
              value={'920002724'}
            />
            <InfoCard
              icon={<MailIcon size={26} />}
              title={'البريد الإلكتروني'}
              value={'info@seec.gov.sa'}
            />
          </div>
        </div>
        <div>
          <SubFilters />
          <SubPage />
          <div className={'mt-24'}>
            <p className={'mb-8'}>
              <span className={'ml-2 text-sub_p'}>آخر تحديث بتاريخ:</span>
              <span className={'font-medium text-black'}>12/5/2024</span>
            </p>
            <CommentCta className={'mb-6'} />
            <div className={'flex items-center gap-6'}>
              <p>هل أعجبك المحتوى المقدم في هذه الصفحة؟</p>
              <div className={'flex items-center gap-4'}>
                <Button
                  variant={'outline'}
                  className={
                    'h-8 rounded-full border-primary px-4 py-2 text-primary hover:text-primary'
                  }
                >
                  نعم
                </Button>
                <Button
                  variant={'outline'}
                  className={
                    'h-8 rounded-full border-primary px-4 py-2 text-primary hover:text-primary'
                  }
                >
                  لا
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OtherServices />
    </>
  );
}
