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
      <div
        className={'relative overflow-hidden bg-[#F7F8F7] px-20 pb-36 pt-16'}
      >
        <DoubleSquareMonoColor className={'absolute bottom-0 left-0 z-0'} />
        <div className={'grid grid-cols-2'}>
          <div className={'mb-6'}>
            <h3 className={'mb-4 text-2xl font-medium text-black'}>
              برنامج إدارة الطاقة
            </h3>
            <p className={'text-sub_p'}>
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
              بدأ الخدمة
            </Link>
            <Link
              href={'#'}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'rounded-full border-[#73AE28] text-[#73AE28] hover:text-[#73AE28]'
              )}
            >
              ملف دليل الخدمة
            </Link>
          </div>
        </div>
      </div>
      <div className={'bg-white px-20 pb-24'}>
        <div
          className={
            'z-20 flex w-full -translate-y-1/2 items-center justify-between rounded-2xl bg-white p-6 shadow-[0_1px_24px_0px_rgba(32,32,33,0.1)]'
          }
        >
          <div className={'flex items-center gap-6'}>
            <InfoCard
              icon={<UserMultipleIcon />}
              title={'الفئة المستهدفة'}
              value={'الأفراد, الجهات الحكومية'}
              className={'min-w-[180px]'}
            />
            <InfoCard
              icon={<UserMultipleIcon />}
              title={'تاريخ إصدار الخدمة'}
              value={'11/08/1440'}
              className={'min-w-[180px]'}
            />
            <InfoCard
              icon={<UserMultipleIcon />}
              title={'مدة تنفيذ الخدمة'}
              value={'1-2 يوم'}
              className={'min-w-[180px]'}
            />
            <InfoCard
              icon={<UserMultipleIcon />}
              title={'التكلفة'}
              value={'مجانية'}
              className={'min-w-[180px]'}
            />
            <Separator className={'h-12 w-[1px]'} />
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
        <div>
          <SubFilters lang={lang} />
          <SubPage />
          <div className={'xl:mt-24'}>
            <p className={'mb-8'}>
              <span className={'text-sub_p ml-2'}>آخر تحديث بتاريخ:</span>
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
