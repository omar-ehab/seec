import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(media)/components/SubLinks';
import Filters from '@/app/[lang]/(media)/media-library/components/Filters';
import SearchInput from '@/app/[lang]/(media)/media-library/components/SearchInput';
import Pagination from '@/components/pagination';
import Albums from '@/app/[lang]/(media)/media-library/components/Images/Albums';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function MediaLibraryPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title="المركز الإعلامي"
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'مكتبة الوسائط' },
        ]}
      >
        <SubLinks lang={lang} activeTab="media-library" />
      </PageHeader>
      <section className={'container mt-10'}>
        <div
          className={
            'mb-6 flex flex-col-reverse items-center justify-between gap-4 lg:flex-row lg:gap-0'
          }
        >
          <Filters lang={lang} />
          <SearchInput />
        </div>
        <Albums />
        <Pagination numberOfPages={4} className={'mb-20'} />
      </section>
    </>
  );
}
