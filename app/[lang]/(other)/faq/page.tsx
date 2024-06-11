import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import Filters from './components/Filters';
import SearchInput from './components/SearchInput';
import FAQAccordion from '@/components/accordion';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function FaqPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='الأسئلة الشائعة'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'الأسئلة الشائعة' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <section className={'mb-20'}>
        <div className='container py-16'>
          <div
            className={
              'mb-6 flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-0'
            }
          >
            <Filters />
            <SearchInput />
          </div>
          <div className={'mb-8'}>
            <div className={'mb-16'}>
              <h3 className={'mb-8 text-2xl font-medium text-black'}>
                عن المركز
              </h3>
              <ul className={'flex flex-col gap-6'}>
                <li>
                  <FAQAccordion
                    title={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                    content={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                  />
                </li>
                <li>
                  <FAQAccordion
                    title={
                      'هل هناك متطلبات لكفاءة الطاقة للمصانع القائمة والجديدة؟'
                    }
                    content={
                      'هل هناك متطلبات لكفاءة الطاقة للمصانع القائمة والجديدة؟'
                    }
                  />
                </li>
                <li>
                  <FAQAccordion
                    title={'هل يقدم المركز تدريباً تعاونياً؟'}
                    content={
                      'نعم، يتيح المركز السعودي لكفاءة الطاقة التدريب التعاوني للخريجين ويتم الإعلان عنها عبر الموقع الالكتروني للمركز السعودي لكفاءة الطاقة أو عبر حسابه على اللينكدان'
                    }
                  />
                </li>
              </ul>
            </div>
            <div className={'mb-16'}>
              <h3 className={'mb-8 text-2xl font-medium text-black'}>
                الأنظمة
              </h3>
              <ul className={'flex flex-col gap-6'}>
                <li>
                  <FAQAccordion
                    title={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                    content={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                  />
                </li>
                <li>
                  <FAQAccordion
                    title={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                    content={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                  />
                </li>
                <li>
                  <FAQAccordion
                    title={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                    content={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                  />
                </li>
                <li>
                  <FAQAccordion
                    title={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                    content={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                  />
                </li>
              </ul>
            </div>
            <div>
              <h3 className={'mb-8 text-2xl font-medium text-black'}>
                الخدمات
              </h3>
              <ul className={'flex flex-col gap-6'}>
                <li>
                  <FAQAccordion
                    title={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                    content={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                  />
                </li>
                <li>
                  <FAQAccordion
                    title={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                    content={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                  />
                </li>
                <li>
                  <FAQAccordion
                    title={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                    content={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                  />
                </li>
                <li>
                  <FAQAccordion
                    title={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                    content={'كيف يمكنني استخراج تراخيص شركات خدمات الطاقة؟'}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
