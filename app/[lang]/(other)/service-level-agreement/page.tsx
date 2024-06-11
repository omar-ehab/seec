import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';

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
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              إتفاقية مستوى الخدمة
            </h2>

            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
              تهدف اتفاقية مستوى الخدمات الالكترونية إلى توضيح مستوى الخدمات
              المقدمة من المركز السعودي لكفاءة الطاقة، والحقوق والواجبات لكل من
              المركز والمستفيدين من الخدمات المقدمة. وتُعد هذه الاتفاقية بمثابة
              اتفاق بين المركز وبين المستفيدين من كافة الشرائح، ولذا بمجرد
              الحصول على أي خدمة من الخدمات المقدمة بهذه الاتفاقية فهي تُعد
              موافقة على جميع ما ورد في هذه الاتفاقية.
            </p>

            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
              ويحرص المركز السعودي لكفاءة الطاقة على استمرارية الارتقاء بجودة
              الخدمات المقدمة للمستفيدين، وبما يتوافق مع توجيهات القيادة الكريمة
              ببذل كل ما من شأنه تحقيق رضى العملاء عبر إتاحة الخدمات الإلكترونية
              بأسهل وأيسر الطرق، علماً بأن هذا الزمن لا يشمل استكمال النواقص في
              حال لم يقدم المستفيد كافة المعلومات المطلوبة، كما لا يشمل الزمن
              المستغرق في معالجة المعاملات من قبل طرف ثالث &quot;الجهات الحكومية
              الأخرى&quot; في حال استدعت طبيعة المعاملات ذلك، كما يجب على
              العملاء الالتزام بشروط ومتطلبات كل مهمة كما هو موضح في دليل
              الخدمات الإلكترونية وسيتم تحديث وإضافة كافة الخدمات الإلكترونية
              تباعاً إلى هذه القائمة.
            </p>

            <table className='mt-2 text-sm sm:text-base [&:not(:last-child)]:mb-8'>
              <thead className='bg-gradient-to-b from-[#73AE281A] to-[#006F591A] font-medium '>
                <tr>
                  <th className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    نوع الخدمة
                  </th>
                  <th className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    المدة الزمنية لتنفيذ الخدمة
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='even:bg-[#D7DAD740]'>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    خدمة الاستفسارات
                  </td>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    يومين عمل
                  </td>
                </tr>
                <tr className='even:bg-[#D7DAD740]'>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    خدمة الشكاوى
                  </td>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    15 يوم عمل
                  </td>
                </tr>
                <tr className='even:bg-[#D7DAD740]'>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    خدمة الطلبات
                  </td>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    15 يوم عمل
                  </td>
                </tr>
              </tbody>
            </table>

            <table className='mt-2 text-sm sm:text-base [&:not(:last-child)]:mb-8'>
              <thead className='bg-gradient-to-b from-[#73AE281A] to-[#006F591A] font-medium '>
                <tr>
                  <th className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    القناة
                  </th>
                  <th className='py-2rmd: w-[312px] border px-4 py-2.5 text-start md:px-8'>
                    توفر القناة
                  </th>
                  <th className='py-2rmd: w-[312px] border px-4 py-2.5 text-start md:px-8'>
                    وقت الاستجابة
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='even:bg-[#D7DAD740]'>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    بوابة المركز
                  </td>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    7/24
                  </td>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    فوري
                  </td>
                </tr>
                <tr className='even:bg-[#D7DAD740]'>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    مركز الاتصال
                  </td>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    7/24
                  </td>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    فوري
                  </td>
                </tr>
                <tr className='even:bg-[#D7DAD740]'>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    البريد الالكتروني
                  </td>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    7/24
                  </td>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    يوم عمل
                  </td>
                </tr>
                <tr className='even:bg-[#D7DAD740]'>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    منصة أكس
                  </td>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    7/24
                  </td>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    -
                  </td>
                </tr>
                <tr className='even:bg-[#D7DAD740]'>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    منصة لنكدان
                  </td>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    7/24
                  </td>
                  <td className='w-[312px] border px-4 py-2 text-start md:px-8 md:py-2.5'>
                    -
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              ‌المساعدة والدعم
            </h2>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
              تقدم بوابة المركز السعودي لكفاءة الطاقة الإلكتروني المساعدة والدعم
              للمستفيدين بما يتناسب مع أكبر عدد من زوار الموقع، من خلال توفير
              محتوى مقروء ووسائط متعددة، ومعلومات تفصيلية وروابط إلى بعض أشكال
              المساعدة مثل: الأسئلة المتكررة، وسهولة الاستخدام، وقنوات التواصل،
              والاستفسارات، والشكاوى.
            </p>
          </div>
          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-xl font-medium text-black md:text-2xl'>
              الخصوصية وسرية المعلومات
            </h2>
            <p className='text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6'>
              يحرص المركز السعودي لكفاءة الطاقة أن تكون سرية وخصوصية معلومات
              المستخدم على رأس قائمة الأولويات، وتعتبر سياسات الخصوصية وسرية
              المعلومات من شروط استخدام بوابة المركز السعودي لكفاءة الطاقة.
              للمزيد حول معلومات الخصوصية والسرية يمكنك زيارة صفحة سياسة
              الخصوصية.
            </p>
          </div>
          <FooterCta lastUpdateDate={'12/5/2024'} />
        </div>
      </section>
    </>
  );
}
