import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function UsagePolicyPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='سياسة الاستخدام'
        skewBottomClass={'bg-white'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'سياسة الاستخدام' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <section>
        <div className='container py-16'>
          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-2xl font-medium text-black'>
              سياسة الاستخدام وإخلاء المسؤولية
            </h2>
            <p className='text-base font-normal text-sub_p [&:not(:last-child)]:mb-6'>
              هذه البوابة الإلكترونية للمركز السعودي لكفاءة الطاقة بالمملكة
              العربية السعودية متاحة لاستخدامك الشخصي، ويخضع دخولك واستخدامك
              لهذه البوابة لبنود وشروط الاستخدام هذه ولأنظمة المملكة العربية
              السعودية. وكذلك يعد وصولك ودخولك إلى هذه البوابة موافقة دون قيد أو
              شرط على بنود وشروط الاستخدام سواء أكنت مستخدماً مسجلاً أم لم تكن،
              وتسري هذه الموافقة اعتبارا من تاريخ أول استخدام لك لهذه البوابة.
            </p>
            <p className='text-base font-normal text-sub_p [&:not(:last-child)]:mb-6'>
              ويتضمن استخدام البوابة عدداً من البنود والشروط التي تخضع لتحديثات
              وتغييرات مستمرة حسب الحاجة، ويصبح أي تعديل أو تحديث لأي من هذه
              البنود والشروط نافذًا فور اعتماده من إدارة البوابة؛ وهو ما يتطلب
              منك مراجعة مستمرة لشروط الاستخدام ومبادئ إخلاء المسؤولية لمعرفة
              أية تحديثات تتم عليها؛ إذ أن استمرارك في استخدام هذه البوابــة
              يعني اطلاعك وقبولك التام لأي تعديل تم على بنود وشروط استخدامها.
              علماً بأن هذه البنود والشروط تتضمن حقوق الملكية، كما أن إدارة
              البوابة غير مطالبة بالإعلان عن أية تحديثات تتم على تلك الشروط.
            </p>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-2xl font-medium text-black'>
              القيود على الاستخدام:
            </h2>
            <p className='text-base font-normal text-sub_p [&:not(:last-child)]:mb-6'>
              تم إعداد وثيقة الخصوصية وسرية المعلومات لمساعدة الزوار والمستخدمين
              على تفهم طبيعة البيانات التي يتم جمعها منهم عند زيارة البوابة
              وكيفية التعامل معها. تقوم إدارة البوابة باتخاذ الإجراءات والتدابير
              المناسبة والملائمة للمحافظة على المعلومات الشخصية التي لديها بشكل
              آمن يضمن حمايتها من الفقدان أو الدخول غير المصرح به أو إساءة
              الاستخدام، أو التعديل والإفصاح غير المصرح بهما، ومن أهم التدابير
              المعمول بها في الوزارة لحماية معلومات الزائر الشخصية:
            </p>

            <div className={'flex flex-col justify-start gap-4'}>
              <div className={'flex items-center gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                  }
                >
                  1
                </span>
                <p className={'text-black'}>
                  الإجراءات والتدابير المشددة لحماية أمن المعلومات والتقنية التي
                  نستخدمها للوقاية من عمليات الاحتيال والدخول غير المصرح به إلى
                  أنظمتنا.
                </p>
              </div>
              <div className={'flex items-center gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                  }
                >
                  2
                </span>
                <p className={'text-black'}>
                  التحديث المنتظم والدوري لإجراءات وضوابط الحماية التي تفي أو
                  تزيد عن المعايير القياسية.
                </p>
              </div>
              <div className={'flex items-center gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                  }
                >
                  3
                </span>
                <p className={'text-black'}>
                  أن موظفينا مؤهلون ومدربون على احترام سرية المعلومات الشخصية
                  لزائرينا.
                </p>
              </div>
            </div>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-2xl font-medium text-black'>
              حماية خصوصيتك:
            </h2>
            <p className='text-base font-normal text-sub_p [&:not(:last-child)]:mb-6'>
              تم إعداد وثيقة الخصوصية وسرية المعلومات لمساعدة الزوار والمستخدمين
              على تفهم طبيعة البيانات التي يتم جمعها منهم عند زيارة البوابة
              وكيفية التعامل معها. تقوم إدارة البوابة باتخاذ الإجراءات والتدابير
              المناسبة والملائمة للمحافظة على المعلومات الشخصية التي لديها بشكل
              آمن يضمن حمايتها من الفقدان أو الدخول غير المصرح به أو إساءة
              الاستخدام، أو التعديل والإفصاح غير المصرح بهما، ومن أهم التدابير
              المعمول بها في الوزارة لحماية معلومات الزائر الشخصية:
            </p>

            <div className={'flex flex-col justify-start gap-4'}>
              <div className={'flex items-center gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                  }
                >
                  1
                </span>
                <p className={'text-black'}>
                  الإجراءات والتدابير المشددة لحماية أمن المعلومات والتقنية التي
                  نستخدمها للوقاية من عمليات الاحتيال والدخول غير المصرح به إلى
                  أنظمتنا.
                </p>
              </div>
              <div className={'flex items-center gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                  }
                >
                  2
                </span>
                <p className={'text-black'}>
                  التحديث المنتظم والدوري لإجراءات وضوابط الحماية التي تفي أو
                  تزيد عن المعايير القياسية.
                </p>
              </div>
              <div className={'flex items-center gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                  }
                >
                  3
                </span>
                <p className={'text-black'}>
                  أن موظفينا مؤهلون ومدربون على احترام سرية المعلومات الشخصية
                  لزائرينا.
                </p>
              </div>
            </div>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-2xl font-medium text-black'>
              إرسال الرسائل الإلكترونية:
            </h2>
            <p className='text-base font-normal text-sub_p [&:not(:last-child)]:mb-6'>
              تم إعداد وثيقة الخصوصية وسرية المعلومات لمساعدة الزوار والمستخدمين
              على تفهم طبيعة البيانات التي يتم جمعها منهم عند زيارة البوابة
              وكيفية التعامل معها. تقوم إدارة البوابة باتخاذ الإجراءات والتدابير
              المناسبة والملائمة للمحافظة على المعلومات الشخصية التي لديها بشكل
              آمن يضمن حمايتها من الفقدان أو الدخول غير المصرح به أو إساءة
              الاستخدام، أو التعديل والإفصاح غير المصرح بهما، ومن أهم التدابير
              المعمول بها في الوزارة لحماية معلومات الزائر الشخصية:
            </p>

            <div className={'flex flex-col justify-start gap-4'}>
              <div className={'flex items-center gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                  }
                >
                  1
                </span>
                <p className={'text-black'}>
                  الإجراءات والتدابير المشددة لحماية أمن المعلومات والتقنية التي
                  نستخدمها للوقاية من عمليات الاحتيال والدخول غير المصرح به إلى
                  أنظمتنا.
                </p>
              </div>
              <div className={'flex items-center gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                  }
                >
                  2
                </span>
                <p className={'text-black'}>
                  التحديث المنتظم والدوري لإجراءات وضوابط الحماية التي تفي أو
                  تزيد عن المعايير القياسية.
                </p>
              </div>
              <div className={'flex items-center gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                  }
                >
                  3
                </span>
                <p className={'text-black'}>
                  أن موظفينا مؤهلون ومدربون على احترام سرية المعلومات الشخصية
                  لزائرينا.
                </p>
              </div>
            </div>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-2xl font-medium text-black'>
              أمن المعلومات الشخصية:
            </h2>
            <p className='text-base font-normal text-sub_p [&:not(:last-child)]:mb-6'>
              تم إعداد وثيقة الخصوصية وسرية المعلومات لمساعدة الزوار والمستخدمين
              على تفهم طبيعة البيانات التي يتم جمعها منهم عند زيارة البوابة
              وكيفية التعامل معها. تقوم إدارة البوابة باتخاذ الإجراءات والتدابير
              المناسبة والملائمة للمحافظة على المعلومات الشخصية التي لديها بشكل
              آمن يضمن حمايتها من الفقدان أو الدخول غير المصرح به أو إساءة
              الاستخدام، أو التعديل والإفصاح غير المصرح بهما، ومن أهم التدابير
              المعمول بها في الوزارة لحماية معلومات الزائر الشخصية:
            </p>

            <div className={'flex flex-col justify-start gap-4'}>
              <div className={'flex items-center gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                  }
                >
                  1
                </span>
                <p className={'text-black'}>
                  الإجراءات والتدابير المشددة لحماية أمن المعلومات والتقنية التي
                  نستخدمها للوقاية من عمليات الاحتيال والدخول غير المصرح به إلى
                  أنظمتنا.
                </p>
              </div>
              <div className={'flex items-center gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                  }
                >
                  2
                </span>
                <p className={'text-black'}>
                  التحديث المنتظم والدوري لإجراءات وضوابط الحماية التي تفي أو
                  تزيد عن المعايير القياسية.
                </p>
              </div>
              <div className={'flex items-center gap-4'}>
                <span
                  className={
                    'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                  }
                >
                  3
                </span>
                <p className={'text-black'}>
                  أن موظفينا مؤهلون ومدربون على احترام سرية المعلومات الشخصية
                  لزائرينا.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
