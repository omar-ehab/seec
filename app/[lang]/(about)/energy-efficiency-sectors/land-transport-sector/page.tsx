import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';
import InitiativeCard from '@/components/initiative-card';
import FirstImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/1.jpg';
import CarIcon from '@/components/icons/colored/CarIcon';
import OtherSectors from '@/app/[lang]/(about)/energy-efficiency-sectors/components/OtherSectors';

type Props = {
  params: {
    lang: LangType;
  };
};

export default function LandTransportSectorPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='قطاع النقل البري'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          {
            title: 'قطاعات كفاءة الطاقة',
            href: `/${lang}/energy-efficiency-sectors`,
          },
          { title: 'قطاع النقل البري' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <div
        className={'relative overflow-hidden bg-[#F7F8F7] px-20 pb-20 pt-16'}
      >
        <CarIcon
          className={'absolute -bottom-16 left-0 z-0 size-96 opacity-25'}
        />
        <div className={'grid grid-cols-2'}>
          <div className={'mb-6'}>
            <h3 className={'mb-4 text-2xl font-medium text-black'}>
              قطاع النقل البري
            </h3>
            <p className={'mb-8 max-w-[600px] text-sub_p'}>
              يمثـل قطـاع النقل البري حوالي 20 ٪ مـن اسـتهلاك الطاقة الأولية في
              المملكـة، ويعمل المركـز علـى تنفيـذ مبادرات تحسـين كفـاءة استهلاك
              الطاقة في هذا القطـاع، والاستمرار فـي متابعـة تطبيـق أهـداف معيـار
              اقتصـاد الوقـود بهـدف تحسـين كفاءة استهلاك الوقود لأسطول المركبـات
              الـواردة للمملكة، من خلال تطوير المواصفات لكل من خلال:
            </p>
            <ul className={'text-sub_p'}>
              <li>- المركبات الخفيفة</li>
              <li>- لمركبات الثقيلة</li>
              <li>- الإطارات</li>
            </ul>
          </div>
        </div>
      </div>
      <section className={'container mt-16 bg-white'}>
        <h4 className={'mb-8 text-2xl font-medium text-black'}>المبادرات</h4>
        <div className={'flex flex-col gap-16'}>
          <InitiativeCard
            title={'المرحلة الأولى للمقابل المالي على رخص سير المركبات'}
            description={
              'تهدف المبادرة إلى تطبيـــق مقابـــل مالــي ســـنوي يضـــاف إلـــى قيمـــة إصـــدار وتجديـــد رخـص سـير المركبات الخفيفة الجديدة موديل 2024 م بحسب كفاءتها فـي اسـتهلاك الوقـود.'
            }
            image={FirstImage}
          />
          <InitiativeCard
            title={'معيار اقتصاد الوقود للمركبات الخفيفة الجديدة'}
            description={
              'تهدف المبادرة إلى تطبيــق أهـــداف معيار اقتصاد الوقود للمركبات الخفيفة الجديدة، والتـــي تشـــمل أهـــداف اقتصــــاد الوقـود للأعـــوام 2021- 2023م وذلــك علـــى جميـــع الشــركات المصنعة  بهـدف تحسين كفاءة استهلاك الوقـود لأســـطول المركبـات الـواردة للمملكـــة.'
            }
            image={FirstImage}
            isReversed
          />
          <InitiativeCard
            title={'مواصفة أجهزة المصدات الهوائية للمركبات الثقيلة'}
            description={
              'تهدف المبادرة إلى اعتماد مواصفة أجهزة المصدات الهوائية للمركبات الثقيلة التي تشمل المتطلبات الفنية، وتأتي المبادرة في سياق جهود المركز لتحسين كفاءة استهلاك الوقود لأسطول المركبـات داخل للمملكة'
            }
            image={FirstImage}
          />
        </div>
      </section>
      <FooterCta lastUpdateDate={'12/5/2024'} className={'container mb-24'} />
      <OtherSectors />
    </>
  );
}
