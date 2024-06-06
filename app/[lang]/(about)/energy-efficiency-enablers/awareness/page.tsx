import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';
import InitiativeCard from '@/components/initiative-card';
import FirstImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/1.jpg';
import BookUploadIcon from '@/components/icons/colored/BookUploadIcon';
import OtherEnablers from '@/app/[lang]/(about)/energy-efficiency-enablers/components/OtherEnablers';

type Props = {
  params: {
    lang: LangType;
  };
};

export default function EnergyServicesCompaniesPage({
  params: { lang },
}: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='التوعية'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          {
            title: 'ممكنات كفاءة الطاقة',
            href: `/${lang}/energy-efficiency-enablers`,
          },
          { title: 'التوعية' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <div
        className={'relative overflow-hidden bg-[#F7F8F7] px-20 pb-20 pt-16'}
      >
        <BookUploadIcon
          className={'absolute -bottom-16 left-0 z-0 size-80 opacity-25'}
        />
        <div className={'grid grid-cols-2'}>
          <div className={'mb-6'}>
            <h3 className={'mb-4 text-2xl font-medium text-black'}>التوعية</h3>
            <p className={'mb-8 max-w-[600px] text-sub_p'}>
              ينظم المركز حملات توعية ويقدم برامج تثقيفية للمجتمع والقطاعات ذات
              الصلة، ويشارك في الفعاليات والمعارض لتعزيز الوعي بأهمية كفاءة
              الطاقة وتبني الممارسات الصديقة للبيئة والمستدامة.
            </p>
          </div>
        </div>
      </div>
      <section className={'container mt-16 bg-white'}>
        <h4 className={'mb-8 text-2xl font-medium text-black'}>المبادرات</h4>
        <div className={'flex flex-col gap-16'}>
          <InitiativeCard
            title={'مشروع أطفال لتبقى'}
            description={
              'الإعـلان عـن إطـلاق مشـروع أطفـال لتبقى والذي يسـتهدف فئـة الأطفال من عمـر 4 إلى 12 سـنة والذي يهـدف إلى بنـاء جيل يتبنى سـلوكيات توفيـر الطاقة، وذلك باستخدام أدوات ووسائل حديثة وجاذبة، إلى جانب نشر برامج توعوية ومسلسلات كرتونية وإقامة معارض متنقلة في مختلف مدن المملكة.'
            }
            image={FirstImage}
          />
          <InitiativeCard
            title={'الحملة الوطنية لترشيد استهلاك الطاقة (لتبقى)'}
            description={
              'حملة وطنية توعويَّة شاملة ومستمرة، تهدف إلى تأسيس ورفع مستوى الوعي المجتمعي بأهمية ترشيد ورفع كفاءة استهلاك الطاقة وتغيير سلوكيات المجتمع من خلال حملات توعوية تركز على مواضيع محددة.'
            }
            image={FirstImage}
            isReversed
          />
          <InitiativeCard
            title={'البرامج التوعوية في التعليم العام'}
            description={
              'يواصل المركـز تنفيـذ برامج توعوية تفاعلية مناسبة لطلاب وطالبات التعليـم العام وذلك بهـدف نشـر الوعـي بأهمية ترشـيد ورفع كفاءة استهلاك الطاقة بين طلاب وطالبات التعليم العام.'
            }
            image={FirstImage}
          />
          <InitiativeCard
            title={'البرامج التوعوية للجهات الحكومية'}
            description={
              'إنفـاذًا للأمـر السـامي الكريـم رقـم (5604) وتاريـخ 1439/2/5 هــ القاضـي فـي البنـد (خامسـًا) قيـام كل جهة حكوميـة بالتنسـيق مـع المركـز السـعًودي لكفاءة الطاقة، لإعـداد وتنفيذ برامـج لتوعية منسوبيها بأهمية ترشيد استهلاك الكهرباء، وتحقيقـا للهـدف السـادس مـن الأهـداف الاسـتراتيجية للمركـز فقـد تواصـل العمـل علـى تمكين الجهـات الحكومية وعددها ( 208 ) جهـة في هذا المجـال من خلال تنفيذ حملات توعوية وإقامة ورش عمل وتقديم وتقديم مواد إعلامية نشرها علـى منسوبي الجهات وتفعيلها بالطرق المناسبة.'
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
