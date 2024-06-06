import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';
import InitiativeCard from '@/components/initiative-card';
import FirstImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/4.jpg';
import SecondImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/5.jpg';
import ThirdImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/6.jpg';
import FourthImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/7.jpg';
import FifthImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/8.jpg';
import BuildingIcon from '@/components/icons/colored/BuildingIcon';
import OtherSectors from '@/app/[lang]/(about)/energy-efficiency-sectors/components/OtherSectors';

type Props = {
  params: {
    lang: LangType;
  };
};

export default function BuildingsSectorPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='قطاع المباني'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          {
            title: 'قطاعات كفاءة الطاقة',
            href: `/${lang}/energy-efficiency-sectors`,
          },
          { title: 'قطاع المباني' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <div
        className={'relative overflow-hidden bg-[#F7F8F7] px-20 pb-20 pt-16'}
      >
        <BuildingIcon
          className={'absolute -bottom-16 left-0 z-0 size-96 opacity-25'}
        />
        <div className={'grid grid-cols-2'}>
          <div className={'mb-6'}>
            <h3 className={'mb-4 text-2xl font-medium text-black'}>
              قطاع المباني
            </h3>
            <p className={'mb-8 max-w-[600px] text-sub_p'}>
              يمثـل قطـاع المباني حوالـي 29% مـن الطاقـة الأوليـة المسـتهلكة فـي
              المملكة، وتعادل هذه النسـبة استهلاك 1.4 مليون برميل نفط مكافئ،
              ويعمـل المركز بالتعاون مـع الجهات المعنية على تطوير اللوائح
              والمواصفات التي تضمن أن المباني تلبي معايير كفاءة الطاقة.
            </p>
            <p className={'max-w-[600px] text-sub_p'}>
              الحلول تستهدف تطوير اللوائح والمواصفات لكل من
            </p>
            <ul className={'text-sub_p'}>
              <li>- أجهزة التكييف</li>
              <li>- الأجهزة المنزلية</li>
              <li>- منتجات العـزل الحـراري</li>
              <li>- منتجـات الإنارة</li>
            </ul>
          </div>
        </div>
      </div>
      <section className={'container mt-16 bg-white'}>
        <h4 className={'mb-8 text-2xl font-medium text-black'}>المبادرات</h4>
        <div className={'flex flex-col gap-16'}>
          <InitiativeCard
            title={'مبادرة كثافة استهلاك الطاقة في المباني EUI'}
            description={
              'عملت المبادرة على مواءمة الآليات الحكومية مع الجدول الزمني للتطبيق، وإعداد المسودة الأولية للوائح التقنية. كما تضمنت إعداد مقترح التكاليف المالية ودراسة الأثر الاقتصادي والاجتماعي، وتم رفع المقترح لمركز تنمية الإيرادات غير النفطية للتقييم واستكمال الدراسة.'
            }
            image={FirstImage}
          />
          <InitiativeCard
            title={
              'متطلبات وضع الاستعداد والسكون للأجهزة الكهربائية Standby and off-mode'
            }
            description={
              'تتعلق المبادرة بوضع متطلبات للأجهزة الكهربائية في وضع الاستعداد والسكون، تم إعداد مسودة للائحة الفنية المتعلقة بهذا الشأن. الهدف هو تحديد المعايير التقنية لتشغيل الأجهزة بكفاءة في وضع الاستعداد والسكون لتقليل استهلاك الطاقة الزائد.'
            }
            image={SecondImage}
            isReversed
          />
          <InitiativeCard
            title={'نظام إدارة الطاقة في المباني (BMS)'}
            description={
              'تهدف المبادرة إلى حصر التجارب المحلية والدولية ودراسة التحديات والخيارات الممكنة لتفعيل المبادرة على المستوى التشريعي والتوعوي، وذلك لتعزيز فهم متطلبات إدارة الطاقة، وأنهى المركـز حصـر التجـارب المحليـة و الدوليـة ودراسـة التحديــات والخيارات الممكنة لتفعيل المبادرة.'
            }
            image={ThirdImage}
          />
          <InitiativeCard
            title={'تحديث مواصفات المكيفات ذات السعة الكبيرة'}
            description={
              'تهدف المبادرة إلى تحديث مواصفات المكيفات ذات السعة الكبيرة SASO2874/2016 ورفع متطلبات الحدود الدنيا، ويسعى المركز من خلال هذا التحديث إلى تحسين كفاءة الطاقة وتقليل استهلاك الطاقة للمكيفات الكبيرة، مما يسهم في تقليل الاعتماد على الطاقة اللازمة لتشغيلها وتحسين كفاءتها.'
            }
            image={FourthImage}
            isReversed
          />
          <InitiativeCard
            title={'تقليل استخدام مصادر الإضاءة (Delamping)'}
            description={
              'تهدف المبادرة إلى حصر التجارب المحلية والدولية ودراسة التحديات والخيارات الممكنة في تفعيل المبادرة على المستوى التشريعي والتوعوي، لتحفيز التوجه نحو استخدام مصادر إضاءة فعالة من حيث الطاقة وتقليل الاستهلاك الزائد، وتوفير توجيهات ودعم لتطبيق التقنيات الحديثة والمستدامة الإنارة.'
            }
            image={FifthImage}
          />
        </div>
      </section>
      <FooterCta lastUpdateDate={'12/5/2024'} className={'container mb-24'} />
      <OtherSectors />
    </>
  );
}
