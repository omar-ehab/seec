import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function SiteMapPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='خارطة الموقع'
        skewBottomClass={'bg-white'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'خارطة الموقع' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <section>
        <div className='container py-16'>
          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-2xl font-medium text-black'>عن المركز</h2>
            <div className='flex flex-wrap gap-4'>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                إنشاء المركز
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                مجلس الإدارة
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                استراتيجية المركز
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                اختصاصات المركز
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                قطاعات كفاءة الطاقة
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                ممكنات كفاءة الطاقة
              </a>
            </div>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-2xl font-medium text-black'>
              الخدمات الإلكترونية
            </h2>
            <div className='flex flex-wrap gap-4'>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                بوابة تراخيص شركات خدمات الطاقة
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                بوابة البرامج التدريبية
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                بوابة التوظيف
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                بوابة تراخيص شركات خدمات الطاقة
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                مجلس الإدارة
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                برنامج تحسين كفاءة استهلاك الطاقة في الجهات الحكومية
              </a>
            </div>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-2xl font-medium text-black'>
              المركز الإعلامي
            </h2>
            <div className='flex flex-wrap gap-4'>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                الأخبار
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                الفعاليات
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                التقارير
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                مكتبة الوسائط
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                البيانات المفتوحة
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                الاحصاءات
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                الهوية البصرية
              </a>
            </div>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-2xl font-medium text-black'>صفحات أخرى</h2>
            <div className='flex flex-wrap gap-4'>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                بوابة تراخيص شركات خدمات الطاقة
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                بوابة البرامج التدريبية
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                بوابة التوظيف
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                بوابة تراخيص شركات خدمات الطاقة
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                مجلس الإدارة
              </a>
              <a
                href='#'
                className='rounded-sm border px-6 py-3 text-base font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white'
              >
                برنامج تحسين كفاءة استهلاك الطاقة في الجهات الحكومية
              </a>
            </div>
          </div>
          <FooterCta lastUpdateDate={'12/5/2024'} />
        </div>
      </section>
    </>
  );
}
