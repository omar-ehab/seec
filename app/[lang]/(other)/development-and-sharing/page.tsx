import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FooterCta from '@/components/footer-cta';
import Filters from '@/app/[lang]/(other)/development-and-sharing/components/Filters';
import SearchInput from '@/app/[lang]/(other)/development-and-sharing/components/SearchInput';
import JobCard from '@/app/[lang]/careers/components/JobCard';
import Pagination from '@/components/pagination';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function OnlineParticipationPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title="التطوير ومشاركة الأفكار"
        skewBottomClass={'bg-white'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'التطوير ومشاركة الأفكار' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <section>
        <div className="container py-16">
          <div className="[&:not(:last-child)]:mb-16">
            <h2 className="mb-6 text-xl font-medium text-black md:text-2xl">
              التطوير ومشاركة الأفكار
            </h2>
            <p className="text-sm font-normal text-sub_p xs:text-base [&:not(:last-child)]:mb-6">
              يحرص المركز على تمكين الافراد والجهات عبر اشراكهم كعنصر أساسي في عملية تطوير الخدمات وذلك من خلال اتاحة
              الفرصة لهم لمشاركة وإبداء الرأي في المشروعات المُقترحة قبل إقرارها، حيث تحتوي المنصة على جميع استشارات
              التطوير المشترك الحالية (المفتوحة) والمستقبلية (المخطط لها) والسابقة (المؤرشفة) على المنصة. وتشجعك على
              مشاركة آرائك وأفكارك حول المقترحات التطويرية قبل الموافقة عليها ليتم دراستها واخذها بالاعتبار.
            </p>
          </div>
          <section>
            <div className={'w-full flex justify-between items-center mb-8'}>
              <Filters lang={lang} />
              <SearchInput />
            </div>
            <div
              className={
                'grid grid-cols-1 grid-rows-[repeat(3,minmax(164px,_min-content))] gap-6 md:grid-cols-2 lg:grid-cols-3'
              }
            >
              <JobCard
                category={'الحاليه'}
                title={'هاكاثون "الابتكار للتغيير نحو الأفضل'}
                link={`/${lang}/development-and-sharing/slug`}
              />
              <JobCard
                category={'الحاليه'}
                title={'هاكاثون "الابتكار للتغيير نحو الأفضل'}
                link={`/${lang}/development-and-sharing/slug`}
              />
              <JobCard
                category={'الحاليه'}
                title={'هاكاثون "الابتكار للتغيير نحو الأفضل'}
                link={`/${lang}/development-and-sharing/slug`}
              />
              <JobCard
                category={'الحاليه'}
                title={'هاكاثون "الابتكار للتغيير نحو الأفضل'}
                link={`/${lang}/development-and-sharing/slug`}
              />
              <JobCard
                category={'الحاليه'}
                title={'هاكاثون "الابتكار للتغيير نحو الأفضل'}
                link={`/${lang}/development-and-sharing/slug`}
              />
              <JobCard
                category={'الحاليه'}
                title={'هاكاثون "الابتكار للتغيير نحو الأفضل'}
                link={`/${lang}/development-and-sharing/slug`}
              />
              <JobCard
                category={'الحاليه'}
                title={'هاكاثون "الابتكار للتغيير نحو الأفضل'}
                link={`/${lang}/development-and-sharing/slug`}
              />
              <JobCard
                category={'الحاليه'}
                title={'هاكاثون "الابتكار للتغيير نحو الأفضل'}
                link={`/${lang}/development-and-sharing/slug`}
              />
              <JobCard
                category={'الحاليه'}
                title={'هاكاثون "الابتكار للتغيير نحو الأفضل'}
                link={`/${lang}/development-and-sharing/slug`}
              />
            </div>
            <Pagination numberOfPages={4} className={'mt-8'}/>
          </section>
          <FooterCta lastUpdateDate={'12/5/2024'} />
        </div>
      </section>
    </>
);
}
