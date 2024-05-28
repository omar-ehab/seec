import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import Filters from '@/app/[lang]/online-services/components/Filters';
import SearchInput from '@/app/[lang]/online-services/components/SearchInput';
import Pagination from '@/components/pagination';
import SubFilters from '@/app/[lang]/online-services/components/SubFilters';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import ServiceCard from '@/app/[lang]/online-services/components/ServiceCard';
import MomkenatImage from '@/public/momkenat.png';
import Estbdalmage from '@/public/estbdal.png';
import KafaaImage from '@/public/kafaa.png';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function RulesPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='الخدمات الإلكترونية'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'الخدمات الإلكترونية' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} />
      </PageHeader>
      <section className={'mb-24 mt-10 px-20'}>
        <div className={'mb-6 flex items-center justify-between'}>
          <Filters />
          <SearchInput />
        </div>
        <div className={'mb-8'}>
          <SubFilters lang={lang} />
        </div>
        <div className={'grid grid-cols-1 gap-6 lg:grid-cols-3'}>
          <ServiceCard
            src={MomkenatImage}
            title={'ممكنات'}
            description={
              'المنصة الموحدة لممكنات كفاءة الطاقة (ممكنات) هي صفحة الكترونية تجمع كافة الخدمات والأخبار المرتبطة بقطاع خدمات كفاءة الطاقة وتمثل مرجعاً شاملاً.'
            }
          />
          <ServiceCard
            src={Estbdalmage}
            title={'مبادرة استبدال'}
            description={
              'مبادرة وطنية تهدف إلى تحفيز استبدال مكيفات الشباك القديمة بأخرى جديدة أعلى توفيراً في الاستهلاك | تحت تنفيذ المركز السعودي لكفاءة الطاقة.'
            }
          />
          <ServiceCard
            src={KafaaImage}
            title={'برنامج إدارة الطاقة'}
            description={
              'المنصة الإلكترونية للبرنامج التي تتضمن التعريف بالبرنامج ونظام إدارة الطاقة والخيارات المتاحة للمنشآت، كما تحتوى على منصة لبناء القدرات التي تساعد المنشآت في تطبيق'
            }
          />
        </div>
        <div className={'mt-14'}>
          <Pagination numberOfPages={4} />
        </div>
      </section>
    </>
  );
}
