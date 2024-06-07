import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';
import InitiativeCard from '@/components/initiative-card';
import FirstImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/1.jpg';
import SearchingIcon from '@/components/icons/colored/SearchingIcon';
import OtherEnablers from '@/app/[lang]/(about)/energy-efficiency-enablers/components/OtherEnablers';

type Props = {
  params: {
    lang: LangType;
  };
};

export default function InspectionMonitoringCertificationPage({
  params: { lang },
}: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='الفحص والمراقبة والشهادات'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          {
            title: 'ممكنات كفاءة الطاقة',
            href: `/${lang}/energy-efficiency-enablers`,
          },
          { title: 'الفحص والمراقبة والشهادات' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <div className={'overflow-hidden bg-[#F7F8F7] pt-16'}>
        <div className='container relative'>
          <SearchingIcon
            className={
              'absolute -bottom-36 end-4 z-0 size-96 opacity-5 md:opacity-25'
            }
          />
          <div className={'grid md:grid-cols-2'}>
            <div className={'mb-6'}>
              <h3 className={'mb-4 text-2xl font-medium text-black'}>
                الفحص والمراقبة والشهادات
              </h3>
              <p className={'mb-8 max-w-[600px] text-sub_p'}>
                يقوم المركز بالتعاون مع الجهات ذات العلاقة بمراقبة المصانع
                والأسواق والمستودعات لضمان الالتزام بمواصفات واشتراطات كفاءة
                الطاقة، ويدعم تطوير البنية التحتية لمواصفات كفاءة الطاقة
                المحدثة، مما يساهم في تمكين القطاع من الالتزام بالمعايير والتحول
                نحو الطاقة النظيفة.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className={'container mt-16 bg-white'}>
        <h4
          className={
            'mx-auto mb-8 max-w-[1052px] text-2xl font-medium text-black'
          }
        >
          المبادرات
        </h4>
        <div className={'mx-auto flex max-w-[1052px] flex-col gap-16'}>
          <InitiativeCard
            title={'مسح السوق (شراء العينات من الأسواق للاختبار)'}
            description={
              'قيـــاس فاعليـــة تطبيـــق الإجـــراءات الرقابيـــة علـــى المنتجـــات حيـــث تـــم شـــراء واختبـــار جميـــع العينـــات المســـتهدفة حســـب الخطـــة الســـنوية.'
            }
            image={FirstImage}
          />
          <InitiativeCard
            title={'الخطة الرقابية على المنتجات'}
            description={
              'التأكـــد مـــن التـــزام الأسـواق والمستودعات والمصانع المحليـــة بطاقــات كفـاءة الطاقـــة حيـــث تـــم تنفيــذ كافـة الجـــولات الرقابيـــة حســـب الخطـــة الســـنوية.'
            }
            image={FirstImage}
            isReversed
          />
          <InitiativeCard
            title={'تطوير نظام إدارة العينات الإلكتروني- مرحلة(3)'}
            description={
              'تطويـــر النظـــام الموحـــد لإدارة العينـــات بيـــن الجهـــات الحكوميـــة ذات العاقـــة والمختبـــرات الخاصـــة لأتمتـــة عمليـــات الفحـــص والمراقبـــة والشـــهادات.'
            }
            image={FirstImage}
          />
          <InitiativeCard
            title={'التعامل مع المنتجات غير المطابقة من جميع القنوات الرقابية'}
            description={
              'اعـادة تدويـر المنتجـات المخالفـة التـي يتـم رصدهـا مـن القنـوات الرقابيـة وفقـًا للإجـراءات القانونيـة' +
              'والاشـتراطات البيئيـة المناسـبة.'
            }
            image={FirstImage}
            isReversed
          />
        </div>
      </section>
      <FooterCta lastUpdateDate={'12/5/2024'} className={'container mb-24'} />
      <OtherEnablers />
    </>
  );
}
