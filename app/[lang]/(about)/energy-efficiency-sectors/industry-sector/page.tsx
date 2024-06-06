import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';
import FactoryIcon from '@/components/icons/colored/FactoryIcon';
import InitiativeCard from '@/components/initiative-card';
import FirstImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/1.jpg';
import SecondImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/2.jpg';
import ThirdImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/3.jpg';
import OtherSectors from '@/app/[lang]/(about)/energy-efficiency-sectors/components/OtherSectors';

type Props = {
  params: {
    lang: LangType;
  };
};

export default function IndustrySectorPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='قطاع الصناعة'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          {
            title: 'قطاعات كفاءة الطاقة',
            href: `/${lang}/energy-efficiency-sectors`,
          },
          { title: 'قطاع الصناعة' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <div
        className={'relative overflow-hidden bg-[#F7F8F7] px-20 pb-20 pt-16'}
      >
        <FactoryIcon
          className={'absolute -bottom-16 left-0 z-0 size-96 opacity-25'}
        />
        <div className={'grid grid-cols-2'}>
          <div className={'mb-6'}>
            <h3 className={'mb-4 text-2xl font-medium text-black'}>
              قطاع الصناعة
            </h3>
            <p className={'mb-8 max-w-[600px] text-sub_p'}>
              يمثـل قطـاع الصناعـة حوالـي 46% مـن الطاقـة الأوليـة المسـتهلكة
              فـي المملكة والتي تعـادل 2.1 مليـون برميـل نفـط مكافـئ يوميـًا،
              ويركز نطاق عمل المركز على القطاعات الفرعية الأكثر استهلاكًا ضمن
              هذا القطاع، بهدف تحسين كفاءة استخدام الطاقة وتقليل الهدر من خلال
              تطبيق أفضل الممارسات والمعايير.
            </p>
            <p className={'max-w-[600px] text-sub_p'}>
              القطاعات الفرعية الأكثـر اسـتهلاكًا
            </p>
            <ul className={'text-sub_p'}>
              <li>- البتروكيماويات</li>
              <li>- الأسمنت</li>
              <li>- الحديـد</li>
              <li>- الألومنيوم</li>
            </ul>
          </div>
        </div>
      </div>
      <section className={'container mt-16 bg-white'}>
        <h4 className={'mb-8 text-2xl font-medium text-black'}>المبادرات</h4>
        <div className={'flex flex-col gap-16'}>
          <InitiativeCard
            title={
              'آلية مستهدفات ومتطلبات كفاءة الطاقة في قطاع الصناعة للدورة الثانية (2020- 2025م)'
            }
            description={
              'تهدف المبادرة إلى جمع بيانات وأداء الشركات الصناعية سنوياً، وصياغة تقارير، وجمع خطط تحسين الكفاءة والاستدامة، بالإضافة لتنفيذ أكثر من 400 مبادرة في مختلف المراحل ومتابعة تطبيق أفضل الممارسات والتقنيات في تصميم المصانع الجديدة لضمان كفاءة الطاقة.'
            }
            image={FirstImage}
          />
          <InitiativeCard
            title={
              'آلية مستهدفات ومتطلبات كفاءة الطاقة في قطاع الصناعة للدورة الأولى (2014- 2019م)'
            }
            description={
              'تهدف المبادرة إلى التحقق والمتابعة مع الشركات الصناعية غير الملتزمة بمستهدفات كفاءة الطاقة للدورة الأولى 2014-2019م للتأكد من إغلاقها للفجوة في سنة الهدف 2019 م.'
            }
            image={SecondImage}
            isReversed
          />
          <InitiativeCard
            title={'برنامج إدارة الطاقة'}
            description={
              'تهدف المبادرة إلى تطوير بنية تحتية شاملة تشمل منصة إلكترونية، ومواد تعليمية، وأدوات مساندة، وأدلة إرشادية، لتمكين المنشآت من تنفيذ نظام إدارة الطاقة بأفضل الممارسات والمعايير العالمية، والعمل مع المنشآت الصناعية لتنفيذ نظام إدارة الطاقة وفقاً لمعايير الكفاءة المقرة.'
            }
            image={ThirdImage}
          />
        </div>
      </section>
      <FooterCta lastUpdateDate={'12/5/2024'} className={'container mb-24'} />
      <OtherSectors />
    </>
  );
}
