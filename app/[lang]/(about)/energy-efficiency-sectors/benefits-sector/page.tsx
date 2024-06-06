import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';
import InitiativeCard from '@/components/initiative-card';
import FirstImage from '@/app/[lang]/(about)/energy-efficiency-sectors/images/1.jpg';
import EnergyIcon from '@/components/icons/colored/EnergyIcon';
import OtherSectors from '@/app/[lang]/(about)/energy-efficiency-sectors/components/OtherSectors';

type Props = {
  params: {
    lang: LangType;
  };
};

export default function BenefitsSectorPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='قطاع المنافع'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          {
            title: 'قطاعات كفاءة الطاقة',
            href: `/${lang}/energy-efficiency-sectors`,
          },
          { title: 'قطاع المنافع' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <div
        className={'relative overflow-hidden bg-[#F7F8F7] px-20 pb-20 pt-16'}
      >
        <EnergyIcon
          className={'absolute -bottom-16 left-0 z-0 size-96 opacity-25'}
        />
        <div className={'grid grid-cols-2'}>
          <div className={'mb-6'}>
            <h3 className={'mb-4 text-2xl font-medium text-black'}>
              قطاع المنافع
            </h3>
            <p className={'mb-8 max-w-[600px] text-sub_p'}>
              مثـل قطـاع المنافع نحو 39% مـن اسـتهلاك الطاقة الأولية في المملكة،
              ويعمل المركز على رفع وتحسين كفاءة استهلاك الطاقة في قطاع المنافع
              عبر وضع السياسات والأنظمة والإجراءات اللازمة بالتعاون مع
            </p>
            <p className={'max-w-[600px] text-sub_p'}>
              الجهات ذات العلاقة في قطاعات:
            </p>
            <ul className={'text-sub_p'}>
              <li>- توليد الكهرباء بالإضافة إلى التوليد المزدوج</li>
              <li>- تحلية المياه.</li>
              <li>- نقل وتوزيع الكهرباء.</li>
            </ul>
          </div>
        </div>
      </div>
      <section className={'container mt-16 bg-white'}>
        <h4 className={'mb-8 text-2xl font-medium text-black'}>المبادرات</h4>
        <div className={'flex flex-col gap-16'}>
          <InitiativeCard
            title={'تحسين كفاءة الطاقة في قطاع المنافع'}
            description={
              'تهدف المبادرة إلى جمع بيانات إنتاج واستهلاك الطاقة لأكثر من 125 محطة بالإضافة لشبكات النقل والتوزيع، وإجراء 27 زيارة ميدانية للتحقق من صحة ودقة البيانات، بالإضافة لإعداد وإصدار تقارير توضح الأداء السنوي للشركات في القطاع، وجمع وتحليل خطط تحسين كفاءة الطاقة للوصول لمستهدفات أداء 2025م.'
            }
            image={FirstImage}
          />
          <InitiativeCard
            title={'اعتماد الإطار التنظيمي لكفاءة الطاقة بالمنافع'}
            description={
              'تهدف هذه المبادرة إلى تحسين ورفع كفاءة الطاقة في قطاعات توليد الكهرباء والإنتاج المزدوج وتحلية مياه البحر ونقل وتوزيع الكهرباء، من خلال اعتماد الإطار التنظيمي لكفاءة الطاقة بالمنافع.'
            }
            image={FirstImage}
            isReversed
          />
          <InitiativeCard
            title={'تمكين القطاع لتحسين مستويات كفاءة الطاقة'}
            description={
              'تهدف المبادرة إلى زيارة 25 محطة من محطات توليد الكهرباء لفهم وتحليل الممارسات التشغيلية المؤثرة على كفاءة الطاقة، ومن ثم حصر أبرز الممارسات التشغيلية التي تساعد على تحسين كفاءة الطاقة ومشاركتها مع جميع الشركات في القطاع لنشر المعرفة والمساهمة في تبني وتطبيق هذه الممارسات.'
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
