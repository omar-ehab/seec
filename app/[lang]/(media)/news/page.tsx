import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(media)/components/SubLinks';
import Filters from '@/app/[lang]/(media)/news/components/Filters';
import SearchInput from '@/app/[lang]/(media)/news/components/SearchInput';
import NewsCard from '@/app/[lang]/(media)/news/components/NewsCard';
import FirstImage from '@/app/[lang]/(media)/news/images/1.png';
import SecondImage from '@/app/[lang]/(media)/news/images/2.png';
import ThirdImage from '@/app/[lang]/(media)/news/images/3.png';
import FourthImage from '@/app/[lang]/(media)/news/images/4.png';
import Pagination from '@/components/pagination';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function NewsPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='المركز الإعلامي'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'الاخبار' },
        ]}
      >
        <SubLinks lang={lang} activeTab='news' />
      </PageHeader>
      <section className={'container mt-10 '}>
        <div
          className={
            'mb-6 flex flex-col-reverse items-center justify-between gap-4 lg:flex-row lg:gap-0'
          }
        >
          <Filters lang={lang} />
          <SearchInput />
        </div>
        <div className={'mb-14 grid gap-6 md:grid-cols-2'}>
          <NewsCard
            image={FirstImage}
            title={
              'وقع مدير عام المركز اتفاقية تعاون لتعزيزالعمل في العديد من المجالات الرقمية والصناعية'
            }
            date={'12/2/2024'}
            href={`/${lang}/news/slug`}
          />
          <NewsCard
            image={SecondImage}
            title={
              'وقع مدير عام المركز اتفاقية تعاون لتعزيزالعمل في العديد من المجالات الرقمية والصناعية'
            }
            date={'12/2/2024'}
            href={`/${lang}/news/slug`}
          />
          <NewsCard
            image={ThirdImage}
            title={
              'وقع مدير عام المركز اتفاقية تعاون لتعزيزالعمل في العديد من المجالات الرقمية والصناعية'
            }
            date={'12/2/2024'}
            href={`/${lang}/news/slug`}
          />
          <NewsCard
            image={FourthImage}
            title={
              'وقع مدير عام المركز اتفاقية تعاون لتعزيزالعمل في العديد من المجالات الرقمية والصناعية'
            }
            date={'12/2/2024'}
            href={`/${lang}/news/slug`}
          />
          <NewsCard
            image={SecondImage}
            title={
              'وقع مدير عام المركز اتفاقية تعاون لتعزيزالعمل في العديد من المجالات الرقمية والصناعية'
            }
            date={'12/2/2024'}
            href={`/${lang}/news/slug`}
          />
          <NewsCard
            image={FirstImage}
            title={
              'وقع مدير عام المركز اتفاقية تعاون لتعزيزالعمل في العديد من المجالات الرقمية والصناعية'
            }
            date={'12/2/2024'}
            href={`/${lang}/news/slug`}
          />
        </div>
        <Pagination numberOfPages={4} className={'mb-20'} />
      </section>
    </>
  );
}
