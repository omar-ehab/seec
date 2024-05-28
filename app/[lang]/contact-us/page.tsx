import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import ContactInfo from '@/app/[lang]/contact-us/components/ContactInfo';
import ContactForm from '@/app/[lang]/contact-us/components/ContactForm';

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
        title='تواصل معنا'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'تواصل معنا' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} />
      </PageHeader>
      <section className={'mb-24 mt-16 px-20'}>
        <div className={'rounded-[3rem] bg-[#D7DAD7]/35 p-12'}>
          <div className={'grid w-full grid-cols-2 gap-12'}>
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
