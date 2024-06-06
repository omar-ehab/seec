import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(media)/components/SubLinks';
import Filters from '@/app/[lang]/(media)/reports/components/Filters';
import SearchInput from '@/app/[lang]/(media)/reports/components/SearchInput';
import Pagination from '@/components/pagination';
import MainTitle from '@/app/[lang]/(media)/reports/components/MainTitle';
import ReportCard from '@/app/[lang]/(media)/reports/components/ReportCard';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function ReportsPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='المركز الإعلامي'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'التقارير' },
        ]}
      >
        <SubLinks lang={lang} activeTab='reports' />
      </PageHeader>
      <section className={'container mt-10'}>
        <div
          className={
            'mb-6 flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-0'
          }
        >
          <Filters lang={lang} />
          <SearchInput />
        </div>
        <MainTitle />
        <div
          className={
            'mb-14 mt-8 grid  gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6 2xl:grid-cols-4 '
          }
        >
          <ReportCard
            year={'2023'}
            title={'التقرير السنوي لعام 2023 '}
            link={`/${lang}/reports/slug`}
          />
          <ReportCard
            year={'2023'}
            title={'التقرير السنوي لعام 2023 '}
            link={`/${lang}/reports/slug`}
          />
          <ReportCard
            year={'2023'}
            title={'التقرير السنوي لعام 2023 '}
            link={`/${lang}/reports/slug`}
          />
          <ReportCard
            year={'2023'}
            title={'التقرير السنوي لعام 2023 '}
            link={`/${lang}/reports/slug`}
          />
          <ReportCard
            year={'2023'}
            title={'التقرير السنوي لعام 2023 '}
            link={`/${lang}/reports/slug`}
          />
          <ReportCard
            year={'2023'}
            title={'التقرير السنوي لعام 2023 '}
            link={`/${lang}/reports/slug`}
          />
          <ReportCard
            year={'2023'}
            title={'التقرير السنوي لعام 2023 '}
            link={`/${lang}/reports/slug`}
          />
          <ReportCard
            year={'2023'}
            title={'التقرير السنوي لعام 2023 '}
            link={`/${lang}/reports/slug`}
          />
          <ReportCard
            year={'2023'}
            title={'التقرير السنوي لعام 2023 '}
            link={`/${lang}/reports/slug`}
          />
        </div>
        <Pagination numberOfPages={4} className={'mb-20'} />
      </section>
    </>
  );
}
