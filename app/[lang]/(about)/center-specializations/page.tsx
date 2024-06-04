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
      <section className={'container px-32 py-8'}>
        <h2 className={'mb-8 text-center text-3xl font-bold'}>
          اختصاصات المركز
        </h2>
        <div
          className={
            'bullet-gradient grid grid-cols-3 gap-6 rounded-3xl px-12 py-6'
          }
        >
          <div className={'col-span-2 flex h-full flex-col justify-center'}>
            <p className={'mb-4 text-2xl font-medium text-black'}>
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
          <div className={'col-span-1'}>
            <CertificateImage />
          </div>
        </div>
        <div
          className={
            'bullet-gradient my-16 grid grid-cols-3 gap-6 rounded-3xl px-12 py-6'
          }
        >
          <div className={'col-span-1'}>
            <SeveralServices />
          </div>
          <div className={'col-span-2 flex h-full flex-col justify-center'}>
            <p className={'mb-4 text-2xl font-medium text-black'}>
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
            'bullet-gradient grid grid-cols-3 gap-6 rounded-3xl px-12 py-6'
          }
        >
          <div className={'col-span-2 flex h-full flex-col justify-center'}>
            <p className={'mb-4 text-2xl font-medium text-black'}>
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
          <div className={'col-span-1'}>
            <ContractImage />
          </div>
        </div>
      </section>
      <FooterCta lastUpdateDate={'12/5/2024'} className={'container mb-24'} />
    </>
  );
}
