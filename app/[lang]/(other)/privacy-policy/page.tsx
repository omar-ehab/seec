import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function PrivacyPolicyPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='سياسة الخصوصية'
        skewBottomClass={'bg-white'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'سياسة الخصوصية' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <section>
        <div className='container py-16'>
          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              الخصوصية وسرية المعلومات:
            </h2>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
              تضع البوابة الإلكترونية للمركز السعودي لكفاءة الطاقة سرية معلومات
              مستخدميها وزوارها على رأس قائمة الأولويات، وتبذل إدارة البوابة كل
              جهودها لتقديم خدمة ذات جودة عالية لكل المستفيدين، وتعتبر الخصوصية
              وسرية المعلومات الموضحة ادناه جزءاً من شروط استخدام البوابة
              الإلكترونية للمركز السعودي لكفاءة الطاقة وأحكامها.
            </p>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
              لا تقوم البوابة الإلكترونية للمركز السعودي لكفاءة الطاقة بجمع
              معلومات شخصية عنك عندما تقوم بزيارة بوابتها إلا إذا اخترت تحديداً
              وبمعرفتك تقديم هذه المعلومات لنا. إذا اخترت تقديم معلوماتك، فإننا
              لا نستخدمها إلا لإنجاز طلبك للحصول على معلومات أو خدمات وفق ما ورد
              في هذه السياسات، وباستخدامك لبوابة الإلكترونية للمركز السعودي
              لكفاءة الطاقة فإنك توافق على سياسة الخصوصية وسرية المعلومات هذه.
            </p>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
              يجب على زوار البوابة والمستفيدين من خدماتها الاطلاع بشكل مستمر على
              شروط ومبادئ الخصوصية وسرية المعلومات لمعرفة أية تحديثات تتم عليها،
              علماً بأن إدارة البوابة غير مطالبة بالإعلان عن أية تحديثات تتم على
              تلك الشروط والمبادئ، ويعني استخدامك للبوابة اطلاعك وموافقتك على
              تلك الشروط والمبادئ وما يتم عليها من تعديلات مستمرة.
            </p>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
              البوابة الإلكترونية للمركز السعودي لكفاءة الطاقة غير مسئولة تحت أي
              ظرف من الظروف عن أي أضرار مباشرة، أو غير مباشرة أو عرضية أو تبعية
              أو خاصة أو استثنائية تنشأ عن استخدام أو عدم القدرة على استخدام هذه
              البوابة.
            </p>
          </div>

          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              أمن المعلومات الشخصية:
            </h2>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
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
              <div className={'flex items-start gap-2 xs:gap-4 '}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
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
              <div className={'flex items-start gap-2 xs:gap-4 '}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
                  }
                >
                  2
                </span>
                <p className={'text-black'}>
                  التحديث المنتظم والدوري لإجراءات وضوابط الحماية التي تفي أو
                  تزيد عن المعايير القياسية.
                </p>
              </div>
              <div className={'flex items-start gap-2 xs:gap-4 '}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
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
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              حماية خصوصيتك:
            </h2>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
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
              <div className={'flex items-start gap-2 xs:gap-4 '}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
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
              <div className={'flex items-start gap-2 xs:gap-4 '}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
                  }
                >
                  2
                </span>
                <p className={'text-black'}>
                  التحديث المنتظم والدوري لإجراءات وضوابط الحماية التي تفي أو
                  تزيد عن المعايير القياسية.
                </p>
              </div>
              <div className={'flex items-start gap-2 xs:gap-4 '}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
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
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              إرسال الرسائل الإلكترونية:
            </h2>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
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
              <div className={'flex items-start gap-2 xs:gap-4 '}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
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
              <div className={'flex items-start gap-2 xs:gap-4 '}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
                  }
                >
                  2
                </span>
                <p className={'text-black'}>
                  التحديث المنتظم والدوري لإجراءات وضوابط الحماية التي تفي أو
                  تزيد عن المعايير القياسية.
                </p>
              </div>
              <div className={'flex items-start gap-2 xs:gap-4 '}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
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
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              أمن المعلومات الشخصية:
            </h2>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
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
              <div className={'flex items-start gap-2 xs:gap-4 '}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
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
              <div className={'flex items-start gap-2 xs:gap-4 '}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
                  }
                >
                  2
                </span>
                <p className={'text-black'}>
                  التحديث المنتظم والدوري لإجراءات وضوابط الحماية التي تفي أو
                  تزيد عن المعايير القياسية.
                </p>
              </div>
              <div className={'flex items-start gap-2 xs:gap-4 '}>
                <span
                  className={
                    'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
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
          <FooterCta lastUpdateDate={'12/5/2024'} />
        </div>
      </section>
    </>
  );
}
