import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(media)/components/SubLinks';
import Filters from '@/app/[lang]/(media)/events/components/Filters';
import SearchInput from '@/app/[lang]/(media)/events/components/SearchInput';
import EventsCard from '@/app/[lang]/(media)/events/components/EventCard';
import FirstImage from '@/app/[lang]/(media)/events/images/1.png';
import Pagination from '@/components/pagination';
import { Button } from '@/components/ui/button';
import CalenderIcon from '@/components/icons/CalenderIcon';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function EventsPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='المركز الإعلامي'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'الفعاليات' },
        ]}
      >
        <SubLinks lang={lang} activeTab='events' />
      </PageHeader>
      <section className={'container mt-10'}>
        <div
          className={
            'mb-6 flex flex-col-reverse items-center justify-between gap-4 lg:flex-row lg:gap-0'
          }
        >
          <Filters lang={lang} />
          <div
            className={
              'flex w-full flex-grow items-start gap-4 xs:w-auto xs:items-center'
            }
          >
            <Button
              variant={'outline'}
              size={'icon'}
              className={'rounded-full text-sub_p'}
            >
              <CalenderIcon size={20} />
            </Button>
            <SearchInput />
          </div>
        </div>
        <div className={'mb-14 grid  gap-6 md:grid-cols-2 lg:grid-cols-3'}>
          <EventsCard
            image={FirstImage}
            title={'مبادرة برنامج إدارة الطاقة'}
            date={'شعبان 1444'}
            href={`/${lang}/events/slug`}
          />
          <EventsCard
            image={FirstImage}
            title={'مبادرة برنامج إدارة الطاقة'}
            date={'شعبان 1444'}
            href={`/${lang}/events/slug`}
          />
          <EventsCard
            image={FirstImage}
            title={'مبادرة برنامج إدارة الطاقة'}
            date={'شعبان 1444'}
            href={`/${lang}/events/slug`}
          />
          <EventsCard
            image={FirstImage}
            title={'مبادرة برنامج إدارة الطاقة'}
            date={'شعبان 1444'}
            href={`/${lang}/events/slug`}
          />
          <EventsCard
            image={FirstImage}
            title={'مبادرة برنامج إدارة الطاقة'}
            date={'شعبان 1444'}
            href={`/${lang}/events/slug`}
          />
          <EventsCard
            image={FirstImage}
            title={'مبادرة برنامج إدارة الطاقة'}
            date={'شعبان 1444'}
            href={`/${lang}/events/slug`}
          />
          <EventsCard
            image={FirstImage}
            title={'مبادرة برنامج إدارة الطاقة'}
            date={'شعبان 1444'}
            href={`/${lang}/events/slug`}
          />
          <EventsCard
            image={FirstImage}
            title={'مبادرة برنامج إدارة الطاقة'}
            date={'شعبان 1444'}
            href={`/${lang}/events/slug`}
          />
          <EventsCard
            image={FirstImage}
            title={'مبادرة برنامج إدارة الطاقة'}
            date={'شعبان 1444'}
            href={`/${lang}/events/slug`}
          />
        </div>
        <Pagination numberOfPages={4} className={'mb-20'} />
      </section>
    </>
  );
}
