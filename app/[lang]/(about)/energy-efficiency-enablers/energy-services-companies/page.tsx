import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';
import InitiativeCard from '@/components/initiative-card';
import FirstImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/1.jpg';
import Building2Icon from '@/components/icons/colored/Building2Icon';
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
        title='شركات خدمات الطاقة'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          {
            title: 'ممكنات كفاءة الطاقة',
            href: `/${lang}/energy-efficiency-enablers`,
          },
          { title: 'شركات خدمات الطاقة' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <div className={'overflow-hidden bg-[#F7F8F7] pt-16'}>
        <div className='container relative'>
          <Building2Icon
            className={
              'absolute -bottom-20 end-4 left-0 z-0 size-96 scale-110 opacity-5 md:opacity-25'
            }
          />
          <div className={'grid md:grid-cols-2'}>
            <div className={'mb-6'}>
              <h3 className={'mb-4 text-2xl font-medium text-black'}>
                شركات خدمات الطاقة
              </h3>
              <p className={'mb-8 max-w-[600px] text-sub_p'}>
                يشجع المركز على الاستثمار في قطاع شركات خدمات الطاقة ويقوم
                بترخيص ومتابعة مقدمي خدمات كفاءة الطاقة، ويوفر دعمًا تقنيًا
                وتحليليًا لتحسين الأداء الطاقي، مما يزيد من كفاءة الاستخدام
                ويقلل من الهدر.
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
            title={'تطوير خدمات القياس والتحقق في القطاع الحكومي'}
            description={
              'تحديث الدليل الوطني للقياس والتحقق لتطوير الخدمات في مختلف القطاعات، ويشمل ذلك تنفيذ زيارات ميدانية لجميع المشاريع وتقديم ورش عمل لمناقشة التحديات في تطبيق الإجراءات المعتمدة.'
            }
            image={FirstImage}
          />
          <InitiativeCard
            title={'خدمات القياس والتحقق بمشاريع إعادة التأهيل بالقطاع الحكومي'}
            description={
              'تقديم خدمات فنية لمشاريع إعادة تأهيل القطاع الحكومي، ومراجعة برامج مشاريع إعادة تأهيل المباني الحكومية ومصابيح إنارة الطرق.'
            }
            image={FirstImage}
          />
          <InitiativeCard
            title={'المنصة الإلكترونية لفرص مشاريع كفاءة الطاقة'}
            description={
              'تطويـــر منصـــة إلكترونيـــة لعـــرض مشـــاريع كفـــاءة الطاقـــة مـــن قبـل أصحـاب المنشـآت (المسـتفيدين) ولربـط مقدمـي خدمات كفـــاءة الطاقـــة المرخصيـــن الذيـــن يمكنهـــم الاطـــلاع علـــى الفـرص المتاحة.'
            }
            image={FirstImage}
          />
          <InitiativeCard
            title={'مدققي الطاقة المستقلين'}
            description={
              'تعزيز مشاريع كفاءة الطاقة في القطاع السكني بجودة عالية وبتكلفة مناسبة وبنطاق جغرافي أوسع، وذلك من خلال تطوير القدرات البشرية اللازمة للعمل كمدقق طاقة مرخص.'
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
