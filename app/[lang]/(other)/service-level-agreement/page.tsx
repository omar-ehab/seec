import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function ServiceLevelAgreementPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='اتفاقية مستوى الخدمة'
        skewBottomClass={'bg-white'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'اتفاقية مستوى الخدمة' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <section>
        <div className='container py-16'>
          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-2xl font-medium text-black'>
              إتفاقية مستوى الخدمة
            </h2>
            <p className='text-base font-normal text-sub_p [&:not(:last-child)]:mb-6'>
              تؤكد وزارة الموارد البشرية والتنمية الاجتماعية حرصها لتحقيق رضى
              العملاء وذلك  بإتاحة خدمات البوابة الخارجية للوزارة والخدمات
              الإلكترونية في جميع الأوقات كحد أقصى لهم. ونقدم هنا قائمة بخدمات
              البوابة الخارجية والخدمات الإلكترونية التي حققت الالتزام بهذه
              المعايير إلى جانب الزمن الأقصى لتقديم الخدمة، علماً بأن هذا الزمن
              لا يشمل استكمال النواقص في حال لم يقدم العميل كافة المعلومات
              المطلوبة، كما لا يشمل الزمن المستغرق في معالجة المعاملات من قبل
              طرف ثالث كالجهات الحكومية الأخرى في حال تطلبت طبيعة المعاملات ذلك.
              كما يجب على العملاء الالتزام بشروط ومسوغات كل خدمة كما هو موضح في
              دليل الخدمات الإلكترونية في الوزارة. 
            </p>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-2xl font-medium text-black'>
              ‌المساعدة والدعم
            </h2>
            <p className='text-base font-normal text-sub_p [&:not(:last-child)]:mb-6'>
              تشتمل البوابة على قسم لمساعدة ودعم جمهور المستفيدين، ويوفر هذا
              القسم كل ما يحتاجه زائر بوابة وزارة الموارد البشرية والتنمية
              الاجتماعية من مساعدة مع مراعاة أن يناسب أكبر عدد ممكن من الزوار،
              ولهذا تم توفير محتوى مقروء ومواد وسائط بأشكال مختلفة، بالإضافة إلى
              معلومات تفصيلية وروابط إلى بعض أشكال المساعدة مثل: الأسئلة
              المتكررة، أقسام الاستفسارات المتعددة، سهولة الاستخدام، النسخة
              الكفية،... وغيرها.
            </p>
          </div>
          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-2xl font-medium text-black'>
              الخصوصية وسرية المعلومات
            </h2>
            <p className='text-base font-normal text-sub_p [&:not(:last-child)]:mb-6'>
              تضع بوابة وزارة الموارد البشرية والتنمية الاجتماعية سرية معلومات
              مستخدميها وزوارها على رأس قائمة الأولويات، وتبذل إدارة البوابة كل
              جهودها لتقديم خدمات ذات جودة عالية لكل المستفيدين من خلال وثيقة
              الخصوصية وسرية المعلومات.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
