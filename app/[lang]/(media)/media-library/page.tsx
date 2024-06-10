import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(media)/components/SubLinks';
import Filters from '@/app/[lang]/(media)/media-library/components/Filters';
import SearchInput from '@/app/[lang]/(media)/media-library/components/SearchInput';
import Pagination from '@/components/pagination';
import Image from 'next/image';
import FirstImage from '@/app/[lang]/(media)/media-library/images/1.png';
// import SecondImage from '@/app/[lang]/(media)/media-library/images/2.png';
// import ThirdImage from '@/app/[lang]/(media)/media-library/images/3.png';
// import FourthImage from '@/app/[lang]/(media)/media-library/images/4.png';
// import FifthImage from '@/app/[lang]/(media)/media-library/images/5.png';
// import SixthImage from '@/app/[lang]/(media)/media-library/images/6.png';
import { Button } from '@/components/ui/button';
import ImageIcon from '@/components/icons/ImageIcon';

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
        title='المركز الإعلامي'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'مكتبة الوسائط' },
        ]}
      >
        <SubLinks lang={lang} activeTab='media-library' />
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
        <div className={'mb-14'}>
          {/*TODO:: here is image component example*/}
          <div className={'relative overflow-hidden rounded-2xl'}>
            <span className={'absolute inset-0 z-10 bg-black/15'}></span>
            <Button
              variant={'outline'}
              className={
                'absolute start-4 top-4 z-20 flex items-center gap-1 border-none bg-black/70 px-1 text-white hover:bg-black/60 hover:text-white'
              }
            >
              <ImageIcon className={'text-white'} />
              <span className={'text-base font-normal'}>3</span>
            </Button>
            <Image
              src={FirstImage}
              alt={'first image'}
              className={'h-full w-full object-cover'}
            />
          </div>
        </div>
        <Pagination numberOfPages={4} className={'mb-20'} />
      </section>
    </>
  );
}
