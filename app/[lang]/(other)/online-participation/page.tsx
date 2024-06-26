import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';
import Share7Icon from '@/components/icons/colored/Share7Icon';
import BookIcon from '@/components/icons/colored/BookIcon';
import HotspotIcon from '@/components/icons/colored/HotspotIcon';
import Link from 'next/link';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function OnlineParticipationPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='المشاركة الإلكترونية'
        skewBottomClass={'bg-white'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'المشاركة الإلكترونية' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <section>
        <div className='container py-16'>
          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              المشاركة الإلكترونية
            </h2>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
              ​​تمثل المشاركة بالآراء والمقترحات التطويرية أحد الأركان الرئيسية
              لتحسين أي عمل يتطلب التفاعل بين الأطراف المعنية المرتبطة بهذا
              العمل، ومن هذا المنطلق، أدركت أهمية مشاركة الجمهور في كافة الأعمال
              التي تنفذها وكل الخدمات التي تقدمها.
            </p>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
              وتتيح الهيئة الفرصة للجميع لتقديم آرائهم وأفكارهم البناءة، ليأتي
              بعد ذلك دور الهيئة في دعم الأفكار المناسبة ودراستها وتطويرها
              لتتحول إلى مبادرات يتم العمل على تحويلها فيما بعد إلى مشاريع ناجحة
              تؤتي ثمارها النافعة ليس على الهيئة فحسب، بل على كل المجتمع.
            </p>
          </div>

          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3'>
            <Link href={`/${lang}/development-and-sharing`} className='flex min-w-max flex-col items-center gap-4 rounded-2xl border p-6 sm:items-stretch sm:gap-6'>
              <div className='h-8 w-8'>
                <Share7Icon />
              </div>
              <p className='text-black'>التطوير ومشاركة الأفكار</p>
            </Link>
            <Link href={`/${lang}/open-data`} className='flex min-w-max flex-col items-center gap-4 rounded-2xl border p-6 sm:items-stretch sm:gap-6'>
              <div className='h-8 w-8'>
                <BookIcon />
              </div>
              <p className='text-black'>البيانات المفتوحة</p>
            </Link>
            <Link href={`/${lang}/communication-channels`} className='flex min-w-max flex-col items-center gap-4 rounded-2xl border p-6 sm:items-stretch sm:gap-6'>
              <div className='h-8 w-8'>
                <HotspotIcon />
              </div>
              <p className='text-black'>قنوات التواصل</p>
            </Link>
          </div>
          <FooterCta lastUpdateDate={'12/5/2024'} />
        </div>
      </section>
    </>
  );
}
