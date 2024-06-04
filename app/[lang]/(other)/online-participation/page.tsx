import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function OnlineParticipationPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='المشاركة الإلكترونية'
        skewBottomClass={'bg-white'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'المشاركة الإلكترونية' },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <section>
        <div className='container py-16'>
          <div className='[&:not(:last-child)]:mb-16'>
            <h2 className='mb-6 text-2xl font-medium text-black'>
              المشاركة الإلكترونية
            </h2>
            <p className='text-base font-normal text-sub_p [&:not(:last-child)]:mb-6'>
              ​​تمثل المشاركة بالآراء والمقترحات التطويرية أحد الأركان الرئيسية
              لتحسين أي عمل يتطلب التفاعل بين الأطراف المعنية المرتبطة بهذا
              العمل، ومن هذا المنطلق، أدركت أهمية مشاركة الجمهور في كافة الأعمال
              التي تنفذها وكل الخدمات التي تقدمها.
            </p>
            <p className='text-base font-normal text-sub_p [&:not(:last-child)]:mb-6'>
              وتتيح الهيئة الفرصة للجميع لتقديم آرائهم وأفكارهم البناءة، ليأتي
              بعد ذلك دور الهيئة في دعم الأفكار المناسبة ودراستها وتطويرها
              لتتحول إلى مبادرات يتم العمل على تحويلها فيما بعد إلى مشاريع ناجحة
              تؤتي ثمارها النافعة ليس على الهيئة فحسب، بل على كل المجتمع.
            </p>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
            <div className='home__services__slide-gradient group flex min-w-max flex-col gap-6 rounded-2xl border p-6'>
              <div className='h-8 w-8'>
                <svg
                  className='h-full w-full'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.5348 4.58109C14.1554 4.52765 13.7677 4.5 13.3733 4.5C10.2974 4.5 7.62058 6.18227 6.24054 8.66317M19.7131 7.49453C20.8311 8.86497 21.5 10.6056 21.5 12.5C21.5 13.8758 21.1472 15.1705 20.5258 16.3012M15.8816 20.1117C15.0917 20.3638 14.2486 20.5 13.3733 20.5C9.58287 20.5 6.39853 17.9454 5.5 14.4898'
                    stroke='#141B34'
                    stroke-width='1.5'
                  />
                  <path
                    d='M20.5 5.5C20.5 7.15685 19.1569 8.5 17.5 8.5C15.8431 8.5 14.5 7.15685 14.5 5.5C14.5 3.84315 15.8431 2.5 17.5 2.5C19.1569 2.5 20.5 3.84315 20.5 5.5Z'
                    stroke='#141B34'
                    stroke-width='1.5'
                  />
                  <path
                    d='M8.5 11.5C8.5 13.1569 7.15685 14.5 5.5 14.5C3.84315 14.5 2.5 13.1569 2.5 11.5C2.5 9.84315 3.84315 8.5 5.5 8.5C7.15685 8.5 8.5 9.84315 8.5 11.5Z'
                    stroke='#141B34'
                    stroke-width='1.5'
                  />
                  <path
                    d='M21.5 18.5C21.5 20.1569 20.1569 21.5 18.5 21.5C16.8431 21.5 15.5 20.1569 15.5 18.5C15.5 16.8431 16.8431 15.5 18.5 15.5C20.1569 15.5 21.5 16.8431 21.5 18.5Z'
                    stroke='#141B34'
                    stroke-width='1.5'
                  />
                </svg>
              </div>
              <p className='group text-base font-normal text-black group-hover:text-white'>
                التطوير ومشاركة الأفكار
              </p>
            </div>
            <div className='home__services__slide-gradient group flex min-w-max flex-col gap-6 rounded-2xl border p-6'>
              <div className='h-8 w-8'>
                <svg
                  className='h-full w-full'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5'
                    stroke='#141B34'
                    stroke-width='1.5'
                    stroke-linecap='round'
                  />
                  <path
                    d='M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5'
                    stroke='#141B34'
                    stroke-width='1.5'
                    stroke-linecap='round'
                  />
                  <path
                    d='M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17'
                    stroke='#141B34'
                    stroke-width='1.5'
                    stroke-linecap='round'
                  />
                  <path
                    d='M15 7L9 7'
                    stroke='#141B34'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M12 11L9 11'
                    stroke='#141B34'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <p className='group text-base font-normal text-black group-hover:text-white'>
                البيانات المفتوحة
              </p>
            </div>
            <div className='home__services__slide-gradient group flex min-w-max flex-col gap-6 rounded-2xl border p-6'>
              <div className='h-8 w-8'>
                <svg
                  className='h-full w-full'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='12.0002'
                    cy='14'
                    r='2'
                    stroke='#141B34'
                    stroke-width='1.5'
                    stroke-linecap='round'
                  />
                  <path
                    d='M4.00024 20.001C2.74442 18.3295 2.00024 16.2516 2.00024 14C2.00024 8.47715 6.4774 4 12.0002 4C17.5231 4 22.0002 8.47715 22.0002 14C22.0002 16.2516 21.2561 18.3295 20.0002 20.001'
                    stroke='#141B34'
                    stroke-width='1.5'
                    stroke-linecap='round'
                  />
                  <path
                    d='M7.52803 18C6.57795 16.9385 6.00024 15.5367 6.00024 14C6.00024 10.6863 8.68654 8 12.0002 8C15.314 8 18.0002 10.6863 18.0002 14C18.0002 15.5367 17.4225 16.9385 16.4725 18'
                    stroke='#141B34'
                    stroke-width='1.5'
                    stroke-linecap='round'
                  />
                </svg>
              </div>
              <p className='group text-base font-normal text-black group-hover:text-white'>
                قنوات التواصل
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
