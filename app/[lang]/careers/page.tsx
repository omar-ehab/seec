import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import Filters from '@/app/[lang]/careers/components/Filters';
import SearchInput from '@/app/[lang]/careers/components/SearchInput';
import Pagination from '@/components/pagination';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import JobCard from '@/app/[lang]/careers/components/JobCard';

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
        title="التوظيف"
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'التوظيف' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} />
      </PageHeader>
      <section className={'mb-24 mt-10 px-6 md:px-20'}>
        <div
          className={
            'mb-6 flex flex-col-reverse items-center justify-between gap-4 md:flex-row'
          }
        >
          <Filters />
          <SearchInput />
        </div>
        <div
          className={
            'grid grid-cols-1 grid-rows-[repeat(3,minmax(164px,_min-content))] gap-6 lg:grid-cols-3  2xl:lg:grid-cols-4 '
          }
        >
          <JobCard category={'التطوير'} title={'مطلوب مطور IOS'} link={`/${lang}/career/slug`} />
          <JobCard
            category={'التصميم'}
            title={'مصمم تجربة المستخدم'}
            link={`/${lang}/careers/slug`}
          />
          <JobCard
            category={'التطوير'}
            title={'مطلوب مطور اندرويد'}
            link={`/${lang}/careers/slug`}
          />
          <JobCard category={'التطوير'} title={'مطلوب مطور IOS'} link={`/${lang}/careers/slug`} />
          <JobCard
            category={'التصميم'}
            title={'مصمم تجربة المستخدم'}
            link={`/${lang}/careers/slug`}
          />
          <JobCard
            category={'التطوير'}
            title={'مطلوب مطور اندرويد'}
            link={`/${lang}/careers/slug`}
          />
          <JobCard category={'التطوير'} title={'مطلوب مطور IOS'} link={`/${lang}/careers/slug`} />
          <JobCard
            category={'التصميم'}
            title={'مصمم تجربة المستخدم'}
            link={`/${lang}/careers/slug`}
          />
          <JobCard
            category={'التطوير'}
            title={'مطلوب مطور اندرويد'}
            link={`/${lang}/careers/slug`}
          />
        </div>
        <div className={'mt-8'}>
          <Pagination numberOfPages={4} />
        </div>
      </section>
    </>
  );
}
