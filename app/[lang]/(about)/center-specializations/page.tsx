import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(about)/components/SubLinks';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function CenterSpecializationsPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='اختصاصات المركز'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'اختصاصات المركز' },
        ]}
      >
        <SubLinks lang={lang} activeTab='center-specializations' />
      </PageHeader>
    </>
  );
}
