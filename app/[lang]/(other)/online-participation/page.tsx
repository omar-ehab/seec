import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';
import Share7Icon from '@/components/icons/colored/Share7Icon';
import BookIcon from '@/components/icons/colored/BookIcon';
import HotspotIcon from '@/components/icons/colored/HotspotIcon';

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
            <h2 className='mb-6 text-2xl font-medium text-black'>
              المشاركة الإلكترونية
            </h2>
            <p className='text-base font-normal text-sub_p [&:not(:last-child)]:mb-6'>
              ​​تمثل المشاركة بالآراء والمقترحات التطويرية أحد الأركان الرئيسية
              لتحسين أي عمل يتطلب التفاعل بين الأطراف المعنية المرتبطة بهذا
              العمل، ومن هذا المنطلق، أدركت أهمية مشاركة الجمهور في كافة الأعمال
              التي تنفذها وكل الخدمات التي تقدمها.
            </p>
            <p className='text-base font-normal text-sub_p [&:not(:last-child)]:mb-6'>
              وتتيح الهيئة الفرصة للجميع لتقديم آرائهم وأفكارهم البناءة، ليأتي
              بعد ذلك دور الهيئة في دعم الأفكار المناسبة ودراستها وتطويرها
              لتتحول إلى مبادرات يتم العمل على تحويلها فيما بعد إلى مشاريع ناجحة
              تؤتي ثمارها النافعة ليس على الهيئة فحسب، بل على كل المجتمع.
            </p>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
            <div className='flex min-w-max flex-col gap-6 rounded-2xl border p-6'>
              <div className='h-8 w-8'>
                <Share7Icon />
              </div>
              <p className='text-black'>التطوير ومشاركة الأفكار</p>
            </div>
            <div className='flex min-w-max flex-col gap-6 rounded-2xl border p-6'>
              <div className='h-8 w-8'>
                <BookIcon />
              </div>
              <p className='text-black'>البيانات المفتوحة</p>
            </div>
            <div className='flex min-w-max flex-col gap-6 rounded-2xl border p-6'>
              <div className='h-8 w-8'>
                <HotspotIcon />
              </div>
              <p className='text-black'>قنوات التواصل</p>
            </div>
          </div>
          <FooterCta lastUpdateDate={'12/5/2024'} />
        </div>
      </section>
    </>
  );
}
