import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(about)/components/SubLinks';
import CertificateImage from '@/app/[lang]/(about)/center-specializations/CertificateImage';
import SeveralServices from '@/app/[lang]/(about)/center-specializations/SeveralServices';
import ContractImage from '@/app/[lang]/(about)/center-specializations/ContractImage';
import FooterCta from '@/components/footer-cta';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function CenterSpecializationsPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='اختصاصات المركز'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'اختصاصات المركز' },
        ]}
      >
        <SubLinks lang={lang} activeTab='center-specializations' />
      </PageHeader>
      <section className={'container py-8 xl:px-32 '}>
        <h2
          className={
            'mb-28 text-center text-2xl font-bold md:text-3xl lg:mb-12'
          }
        >
          اختصاصات المركز
        </h2>
        <div
          className={
            'bullet-gradient flex grid-cols-9 flex-col-reverse gap-0 rounded-3xl p-4 xs:px-8 xs:py-6 lg:grid lg:gap-6 xl:px-12 [&:not(:last-child)]:mb-32 lg:[&:not(:last-child)]:mb-16'
          }
        >
          <div
            className={
              'col-span-5 flex h-full flex-col justify-center xl:col-span-6'
            }
          >
            <p className={'text-lx mb-4 font-medium text-black md:text-2xl'}>
              اللوائح والتدقيق
            </p>
            <ul className={'text-sub_p'}>
              <li>
                - إصدار اللوائح الفنية والمعايير والإجراءات التي تحقق كفاءة
                الطاقة.
              </li>
              <li>
                - إعداد الدليل الوطني للقياس والتحقق لخدمات كفاءة الطاقة ونشره
                وتحديثه.
              </li>
              <li>- ترخيص وتأهيل مقدمي خدمات كفاءة الطاقة.</li>
              <li>- وضع القواعد اللازمة المتعلقة باختبارات كفاءة الطاقة.</li>
              <li>- مراقبة الالتزام بمعايير كفاءة الطاقة.</li>
              <li>
                - تشجيع إجراء الدراسات والبحوث والاستثمار والتمويل في مجال كفاءة
                الطاقة.
              </li>
            </ul>
          </div>
          <div
            className={
              '-mt-[85px] *:h-40 *:w-40 sm:-mt-[150px] sm:*:h-auto sm:*:w-auto lg:col-span-4 lg:mt-0 xl:col-span-3'
            }
          >
            <CertificateImage />
          </div>
        </div>
        <div
          className={
            'bullet-gradient flex grid-cols-9 flex-col gap-0 rounded-3xl p-4 xs:px-8 xs:py-6 lg:grid lg:gap-6 xl:px-12 [&:not(:last-child)]:mb-32 lg:[&:not(:last-child)]:mb-16'
          }
        >
          <div
            className={
              '-mt-[85px] *:h-40 *:w-40 sm:-mt-[150px] sm:*:h-auto sm:*:w-auto lg:col-span-4 lg:mt-0 xl:col-span-3'
            }
          >
            <SeveralServices />
          </div>
          <div
            className={
              'col-span-5 flex h-full flex-col justify-center xl:col-span-6'
            }
          >
            <p className={'text-lx mb-4 font-medium text-black md:text-2xl'}>
              البرامج والخدمات
            </p>
            <ul className={'text-sub_p'}>
              <li>- وضع برامج وطنية لكفاءة الطاقة وتحديد المؤشرات والاهداف.</li>
              <li>- اقتراح مشاريع الأنظمة الخاصة بكفاءة الطاقة.</li>
              <li>
                - تقديم خدمات فنية واستشارية في مجال تدقيق الطاقة والقياس
                والتحقق.
              </li>
              <li>
                - إقامة واعتماد البرامج التدريبية والمهنية وإعداد مناهج وأنشطة
                لكفاءة الطاقة في التعليم العالي والمهني.
              </li>
              <li>
                - إقامة المعارض والمؤتمرات والبرامج والندوات ونشر الوعي عن كفاءة
                الطاقة.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={
            'bullet-gradient flex grid-cols-9 flex-col-reverse gap-0 rounded-3xl p-4 xs:px-8 xs:py-6 lg:grid lg:gap-6 xl:px-12 [&:not(:last-child)]:mb-32 lg:[&:not(:last-child)]:mb-16'
          }
        >
          <div
            className={
              'col-span-5 flex h-full flex-col justify-center xl:col-span-6'
            }
          >
            <p className={'text-lx mb-4 font-medium text-black md:text-2xl'}>
              المعلومات والاتصال
            </p>
            <ul className={'text-sub_p'}>
              <li>
                - الحصول على المعلومات والوثائق المتعلقة بكفاءة الطاقة وإعداد
                تقارير دورية بذلك.
              </li>
              <li>
                - القيام بالاتصال والتعاون الدولي وعقد مذكرات التفاهم
                والاتفاقيات.
              </li>
            </ul>
          </div>
          <div
            className={
              '-mt-[85px] *:h-40 *:w-40 sm:-mt-[150px] sm:*:h-auto sm:*:w-auto lg:col-span-4 lg:mt-0 xl:col-span-3'
            }
          >
            <ContractImage />
          </div>
        </div>
      </section>
      <FooterCta lastUpdateDate={'12/5/2024'} className={'container mb-24'} />
    </>
  );
}
