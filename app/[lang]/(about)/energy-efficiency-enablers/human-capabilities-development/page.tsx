import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';
import InitiativeCard from '@/components/initiative-card';
import FirstImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/1.jpg';
import UserIdIcon from '@/components/icons/colored/UserIdIcon';
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
        title='تنمية القدرات البشرية'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          {
            title: 'ممكنات كفاءة الطاقة',
            href: `/${lang}/energy-efficiency-enablers`,
          },
          { title: 'تنمية القدرات البشرية' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <div className={'overflow-hidden bg-[#F7F8F7] pt-16'}>
        <div className='container relative'>
          <UserIdIcon
            className={
              'absolute -bottom-32 end-4 left-0 z-0 size-96 opacity-5 md:opacity-25'
            }
          />
          <div className={'grid md:grid-cols-2'}>
            <div className={'mb-6'}>
              <h3 className={'mb-4 text-2xl font-medium text-black'}>
                تنمية القدرات البشرية
              </h3>
              <p className={'mb-8 max-w-[600px] text-sub_p'}>
                يقوم المركز بتعزيز المعرفة والمهارات لدى طلاب التعليم العالي
                والمهني من خلال إدراج مقررات تعنى بكفاءة الطاقة وتقديم الدورات
                التدريبية، ودعم الأبحاث والدراسات في مجال كفاءة الطاقة لرفع
                مستوى الوعي والاستفادة من الابتكارات والتطورات.
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
            title={'منصة التعليم الإلكتروني'}
            description={
              'تطوير منصة تعليم إلكتروني توفر موارد تعليمية شاملة ومتاحة لجميع المهتمين بكفاءة الطاقة، مما يسهم في رفع مستوى المعرفة والمهارات وتعزيز الكفاءة في استخدام الطاقة على نطاق واسع.'
            }
            image={FirstImage}
          />
          <InitiativeCard
            title={'اعتماد البرامج التدريبية في مجال كفاءة الطاقة'}
            description={
              'تطوير وتنمية مهارات القدرات المحلية في مجال إدارة كفاءة الطاقة من خلال اعتماد البرامج التدريبية في مجال كفاءة الطاقة وتدقيقها بهدف تعزيز المعرفـة فـي مجـال كفـاءة الطاقـة.'
            }
            image={FirstImage}
          />
        </div>
      </section>
      <FooterCta lastUpdateDate={'12/5/2024'} className={'container mb-24'} />
      <OtherEnablers />
    </>
  );
}
