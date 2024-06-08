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
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              عن المركز
            </h2>
            <div className='flex flex-wrap gap-3 sm:gap-4'>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                إنشاء المركز
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                مجلس الإدارة
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                استراتيجية المركز
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                اختصاصات المركز
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                قطاعات كفاءة الطاقة
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                ممكنات كفاءة الطاقة
              </a>
            </div>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              الخدمات الإلكترونية
            </h2>
            <div className='flex flex-wrap gap-3 sm:gap-4'>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                بوابة تراخيص شركات خدمات الطاقة
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                بوابة البرامج التدريبية
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                بوابة التوظيف
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                بوابة تراخيص شركات خدمات الطاقة
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                مجلس الإدارة
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                برنامج تحسين كفاءة استهلاك الطاقة في الجهات الحكومية
              </a>
            </div>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              المركز الإعلامي
            </h2>
            <div className='flex flex-wrap gap-3 sm:gap-4'>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                الأخبار
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                الفعاليات
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                التقارير
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                مكتبة الوسائط
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                البيانات المفتوحة
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                الاحصاءات
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                الهوية البصرية
              </a>
            </div>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              صفحات أخرى
            </h2>
            <div className='flex flex-wrap gap-3 sm:gap-4'>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                بوابة تراخيص شركات خدمات الطاقة
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                بوابة البرامج التدريبية
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                بوابة التوظيف
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                بوابة تراخيص شركات خدمات الطاقة
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
              >
                مجلس الإدارة
              </a>
              <a
                href='#'
                className='rounded-sm border px-4 py-2 text-sm font-normal text-sub_p hover:bg-gradient-to-b hover:from-[#73AE28] hover:to-[#006F59] hover:text-white xs:px-6 xs:py-3 xs:text-base'
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
