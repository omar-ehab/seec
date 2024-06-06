import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(about)/components/SubLinks';
import FooterCta from '@/components/footer-cta';
import EnablerCard from '@/app/[lang]/(about)/energy-efficiency-enablers/EnablerCard';
import Building2Icon from '@/components/icons/Building2Icon';
import UserIdIcon from '@/components/icons/UserIdIcon';
import BookUploadIcon from '@/components/icons/BookUploadIcon';
import SearchingIcon from '@/components/icons/SearchingIcon';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function EnergyEfficiencySectorsPage({
  params: { lang },
}: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='ممكنات كفاءة الطاقة'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'ممكنات كفاءة الطاقة' },
        ]}
      >
        <SubLinks lang={lang} activeTab='energy-efficiency-enablers' />
      </PageHeader>
      <section className={'container mt-16 flex flex-col items-center gap-12'}>
        <div className={'max-w-[1060px]'}>
          <h2 className={'mb-4 text-center text-2xl font-medium text-black'}>
            ممكنات كفاءة الطاقة
          </h2>
          <p className={'text-center text-sub_p'}>
            تحظى قطاعات كفاءة الطاقة بأهمية كبيرة في العصر الحالي، حيث تسعى
            الحكومات والشركات إلى تعزيز استخدام التقنيات الحديثة لتحسين كفاءة
            الطاقة وتقليل الانبعاثات الضارة بالبيئة. يتمثل الهدف الرئيسي لهذه
            الجهود في تحقيق التوازن بين الاستدامة البيئية وتلبية احتياجات النمو
            الاقتصادي والاجتماعي للمجتمعات.
          </p>
        </div>
        <div className={'grid w-full grid-cols-2 gap-8 lg:w-[900px]'}>
          <EnablerCard
            href={`/${lang}/energy-efficiency-enablers/energy-services-companies`}
            icon={
              <Building2Icon className={'text-black group-hover:text-white'} />
            }
            title='شركات خدمات الطاقة'
          />
          <EnablerCard
            href={`/${lang}/energy-efficiency-enablers/human-capabilities-development`}
            icon={
              <UserIdIcon className={'text-black group-hover:text-white'} />
            }
            title='تنمية القدرات البشرية'
          />
          <EnablerCard
            href={`/${lang}/energy-efficiency-enablers/awareness`}
            icon={
              <BookUploadIcon className={'text-black group-hover:text-white'} />
            }
            title='التوعية'
          />
          <EnablerCard
            href={`/${lang}/energy-efficiency-enablers/inspection-monitoring-certification`}
            icon={
              <SearchingIcon className={'text-black group-hover:text-white'} />
            }
            title='الفحص والمراقبة والشهادات'
          />
        </div>
      </section>
      <FooterCta lastUpdateDate={'12/5/2024'} className={'container mb-24'} />
    </>
  );
}
