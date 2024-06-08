import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import DoubleSquareMonoColor from '@/components/shapes/DoubleSquareMonoColor';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import InfoCard from '@/app/[lang]/rules/[slug]/components/InfoCard';
import UserMultipleIcon from '@/components/icons/colored/UserMultipleIcon';
import { Separator } from '@/components/ui/separator';
import CallIcon from '@/components/icons/CallIcon';
import MailIcon from '@/components/icons/MailIcon';
import CommentCta from '@/components/comment-cta';
import GridIcon from '@/components/icons/colored/GridIcon';
import CalenderIcon from '@/components/icons/colored/CalenderIcon';
import OtherRules from '@/app/[lang]/rules/[slug]/components/OtherRules';

export default function RulePage({
  params: { lang, slug },
}: {
  params: { slug: string; lang: LangType };
}) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'اللوائح والأنظمة', href: `/${lang}/rules` },
          { title: slug },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <div className={'relative overflow-hidden bg-[#F7F8F7]  pb-36 pt-16'}>
        <DoubleSquareMonoColor className={'absolute bottom-0 left-0 z-0'} />
        <div className={'container grid md:grid-cols-2'}>
          <div className={'mb-6'}>
            <h3 className={'mb-4 text-2xl font-medium text-black'}>
              وصف للائحة
            </h3>
            <p className={'max-w-[600px] text-sub_p'}>
              توضــــــيح إليكم لائحة اعتماد البرامج التدريبية في مجال كفاءة
              الطاقة الصــــــادر بموجب قرار مجلس إدارة المركز الســــــعودي
              لكفـــاءة الطـــاقـــة
            </p>
          </div>
          <div></div>
          <div className={'z-30 flex items-center gap-6'}>
            <Link
              href={'#'}
              className={cn(
                buttonVariants({ variant: 'default' }),
                'rounded-full bg-primary text-white'
              )}
            >
              الملف التوضيحي للائحة
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
              className={'min-w-[180px]'}
            />
            <InfoCard
              icon={<GridIcon />}
              title={'نطاق عمل الائحة'}
              value={'ممكنات الطاقة'}
              className={'min-w-[180px]'}
            />
            <InfoCard
              icon={<CalenderIcon />}
              title={'تاريخ إصدار الخدمة'}
              value={'11/08/1440'}
              className={'min-w-[180px]'}
            />
            <Separator
              className={'hidden h-12 w-[1px] self-center 2xl:block'}
            />
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
      <OtherRules />
    </>
  );
}
