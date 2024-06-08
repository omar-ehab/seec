import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function FreedomOfInformationPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='حرية المعلومات'
        skewBottomClass={'bg-white'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'حرية المعلومات' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <section>
        <div className='container py-16'>
          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              حقوق الأفراد في حرية المعلومات
            </h2>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6 '>
              المبدأ الأول: الشفافية للفرد الحق في معرفة المعلومات المتعلقة
              بأنشطة الجهات العامة؛ تعزيزاً لمنظومة النزاهة والشفافية والمساءلة.
            </p>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6 '>
              المبدأ الثاني: الضرورة والتناسب أي قيود على طلب الاطلاع أو الحصول
              على المعلومات المحمية التي تتلقاها أو تنتجها أو تتعامل معها الجهات
              العامة يجب أن تكون مبررة بطريقة واضحة وصريحة.
            </p>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6 '>
              المبدأ الثالث: الأصل في المعلومات العامة الإفصاح لكل فرد الحق في
              الاطلاع على المعلومات العامة –غير المحمية– وليس بالضرورة أن يتمتع
              مقدم الطلب بحيثية معينة أو باهتمام معين بهذه المعلومات ليتمكن من
              الحصول عليها، كما لا يتعرض لأي مساءلة قانونية متعلقة بهذا الحق.
            </p>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6 '>
              المبدأ الرابع: المساواة يتم التعامل مع جميع طلبات الاطلاع أو
              الحصول على المعلومات العامة على أساس المساواة وعدم التمييز بين
              الأفراد.
            </p>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              حقوق الأفراد فيما يتعلق بالاطلاع على المعلومات العامة أو الحصول
              عليها
            </h2>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6 '>
              تم إعداد وثيقة الخصوصية وسرية المعلومات لمساعدة الزوار والمستخدمين
              على تفهم طبيعة البيانات التي يتم جمعها منهم عند زيارة البوابة
              وكيفية التعامل معها. تقوم إدارة البوابة باتخاذ الإجراءات والتدابير
              المناسبة والملائمة للمحافظة على المعلومات الشخصية التي لديها بشكل
              آمن يضمن حمايتها من الفقدان أو الدخول غير المصرح به أو إساءة
              الاستخدام، أو التعديل والإفصاح غير المصرح بهما، ومن أهم التدابير
              المعمول بها في الوزارة لحماية معلومات الزائر الشخصية:
            </p>

            <div
              className={
                'flex flex-col justify-start gap-4 text-sm xs:text-base'
              }
            >
              <div className={'flex items-start gap-2 xs:gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
                  }
                >
                  1
                </span>
                <p className={'text-black'}>
                  حق الاطلاع والحصول على أي معلومة غير محمية لدى أي جهة عامة.
                </p>
              </div>
              <div className={'flex items-start gap-2 xs:gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
                  }
                >
                  2
                </span>
                <p className={'text-black'}>
                  الحق في معرفة سبب رفض الاطلاع أو الحصول على المعلومات
                  المطلوبة.
                </p>
              </div>
              <div className={'flex items-start gap-2 xs:gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
                  }
                >
                  3
                </span>
                <p className={'text-black'}>
                  الحق في التظلم على قرار رفض طلب الاطلاع والحصول على المعلومات
                  المطلوبة.
                </p>
              </div>
            </div>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              حقوق المواطنين في الوصول إلى المعلومات الحكومية
            </h2>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6 '>
              البيانات الحكومية المفتوحة تعد من أهم مصادر البيانات التي يمكن لأي
              شخص استخدامها بحرية دون قيود فنية أو مالية أو قانونية، كما يمكن
              إعادة استخدامها وتوزيعها مع مراعاة متطلبات ترخيص البيانات المفتوحة
              التي تُنشر بموجبها وذلك من خلال البوابة الوطنية للبيانات المفتوحة.
            </p>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6 '>
              وتعمل الهيئة على تسهيل الحصول على البيانات المفتوحة لجميع الزوار،
              كما تسعى الهيئة إلى مشاركة هذه البيانات مع المستفيدين عبر البوابة
              الوطنية للبيانات المفتوحة؛ و ذلك بهدف تعزيز الشفافية وتشجيع
              المشاركة الإلكترونية.
            </p>
          </div>
          <FooterCta lastUpdateDate={'12/5/2024'} />
        </div>
      </section>
    </>
  );
}
