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
      <section className={'mx-auto mb-24 mt-16 max-w-[1056] px-6 md:px-20'}>
        <div
          className={
            'md:rounded-3xl md:bg-[#D7DAD7]/35 lg:rounded-[3rem] lg:p-12'
          }
        >
          <div
            className={
              'flex w-full flex-col gap-4 md:grid md:grid-cols-2 md:gap-0 lg:gap-12'
            }
          >
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
