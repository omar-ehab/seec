import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import Filters from '@/app/[lang]/rules/components/Filters';
import SearchInput from '@/app/[lang]/rules/components/SearchInput';
import FileCard from '@/app/[lang]/rules/components/FileCard';
import Pagination from '@/components/pagination';
import SubFilters from '@/app/[lang]/rules/components/SubFilters';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';

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
        title='اللوائح والانظمة'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'اللوائح والانظمة' },
        ]}
      >
        <HeaderCallToAction numberOfViews={128} />
      </PageHeader>
      <section className={'container mb-24 mt-10'}>
        <div
          className={
            'mb-6 flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-0'
          }
        >
          <Filters lang={lang} />
          <SearchInput />
        </div>
        <div className={'mb-8'}>
          <SubFilters lang={lang} />
        </div>
        <div
          className={
            'grid grid-cols-1 grid-rows-[repeat(3,minmax(234px,min-content))] items-start gap-6 md:grid-cols-2 md:grid-rows-[repeat(3,minmax(262px,min-content))] lg:grid-cols-3 2xl:grid-cols-4'
          }
        >
          <FileCard
            category={'اللوائح'}
            title={
              'لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'
            }
            link={`/${lang}/rules/slug`}
          />
          <FileCard
            category={'اللوائح'}
            title={
              'لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'
            }
            link={`/${lang}/rules/slug`}
          />
          <FileCard
            category={'اللوائح'}
            title={
              'لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'
            }
            link={`/${lang}/rules/slug`}
          />
          <FileCard
            category={'اللوائح'}
            title={
              'لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'
            }
            link={`/${lang}/rules/slug`}
          />
          <FileCard
            category={'اللوائح'}
            title={
              'لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'
            }
            link={`/${lang}/rules/slug`}
          />
          <FileCard
            category={'اللوائح'}
            title={
              'لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'
            }
            link={`/${lang}/rules/slug`}
          />
          <FileCard
            category={'اللوائح'}
            title={
              'لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'
            }
            link={`/${lang}/rules/slug`}
          />
          <FileCard
            category={'اللوائح'}
            title={
              'لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'
            }
            link={`/${lang}/rules/slug`}
          />
          <FileCard
            category={'اللوائح'}
            title={
              'لائحة اعتماد البرامج التدريبية في مجال كفاءة الطاقة المعتمدة'
            }
            link={`/${lang}/rules/slug`}
          />
        </div>
        <div className={'mt-14'}>
          <Pagination numberOfPages={4} />
        </div>
      </section>
    </>
  );
}
