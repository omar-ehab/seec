import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(about)/components/SubLinks';
import FooterCta from '@/components/footer-cta';
import SectorCard from '@/app/[lang]/(about)/energy-efficiency-sectors/SectorCard';
import CarIcon from '@/components/icons/CarIcon';
import BuildingIcon from '@/components/icons/BuildingIcon';
import FactoryIcon from '@/components/icons/FactoryIcon';
import EnergyIcon from '@/components/icons/EnergyIcon';

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
        title='قطاعات كفاءة الطاقة'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'قطاعات كفاءة الطاقة' },
        ]}
      >
        <SubLinks lang={lang} activeTab='energy-efficiency-sectors' />
      </PageHeader>
      <section className={'container mt-16 flex flex-col items-center gap-12'}>
        <div className={'max-w-[1060px]'}>
          <h2
            className={
              'mb-4 text-center text-xl font-medium text-black md:text-2xl'
            }
          >
            قطاعات كفاءة الطاقة
          </h2>
          <p className={'text-center text-sub_p'}>
            قطاعات كفاءة الطاقة تمثل جزءاً أساسياً من استراتيجيات الاستدامة في
            العديد من الدول حول العالم. تهدف هذه القطاعات إلى تحسين استخدام
            الموارد الطاقوية من خلال تطبيق تقنيات وأساليب توفير الطاقة في مختلف
            القطاعات الصناعية والمنازلية والتجارية. بفضل تبني تلك التقنيات.
          </p>
        </div>
        <div
          className={'grid w-full max-w-[694px] gap-4 xs:grid-cols-2 md:gap-8'}
        >
          <SectorCard
            href={`/${lang}/energy-efficiency-sectors/buildings-sector`}
            icon={
              <BuildingIcon className={'text-black group-hover:text-white'} />
            }
            title='قطاع المباني'
          />
          <SectorCard
            href={`/${lang}/energy-efficiency-sectors/land-transport-sector`}
            icon={<CarIcon className={'text-black group-hover:text-white'} />}
            title='قطاع النقل البري'
          />
          <SectorCard
            href={`/${lang}/energy-efficiency-sectors/benefits-sector`}
            icon={
              <EnergyIcon className={'text-black group-hover:text-white'} />
            }
            title='قطاع المنافع'
          />
          <SectorCard
            href={`/${lang}/energy-efficiency-sectors/industry-sector`}
            icon={
              <FactoryIcon className={'text-black group-hover:text-white'} />
            }
            title='قطاع الصناعة'
          />
        </div>
      </section>
      <FooterCta lastUpdateDate={'12/5/2024'} className={'container mb-24'} />
    </>
  );
}
