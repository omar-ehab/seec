import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(media)/components/SubLinks';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import MainLogo from '@/app/[lang]/(media)/visual-identity/MainLogo';
import WhiteLogo from '@/app/[lang]/(media)/visual-identity/WhiteLogo';
import ColorPreview from './ColorPreview';
import FooterCta from '@/components/footer-cta';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function VisualIdentityPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='المركز الإعلامي'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'الهوية البصرية' },
        ]}
      >
        <SubLinks lang={lang} activeTab='visual-identity' />
      </PageHeader>
      <section className={'container pb-36'}>
        <div className={'pt-12'}>
          <h3 className={'text-2xl font-medium text-black'}>
            دليل الهوية البصرية
          </h3>
          <p className={'mb-6 text-2xl font-medium text-primary'}>2023</p>
          <p className={'mb-8 text-sub_p'}>
            هذا الدليل يستعرض استراتيجية الهوية الجديدة للإلتزام بها على جميع
            الوسائط ذات الصلة التي ينتجها المركز.
          </p>
          <Link
            href={'#'}
            className={cn(
              buttonVariants({ variant: 'default' }),
              'h-auto rounded-full px-6 py-3 text-base'
            )}
          >
            تحميل ملف الهوية
          </Link>
        </div>
      </section>
      <section className={'relative bg-[#73AE28]/5'}>
        <div
          className={
            'normal_top_skew absolute -top-24 left-0 z-30 h-24 w-full bg-[#73AE28]/5'
          }
        ></div>
        <div className='container relative flex flex-col items-center justify-center pb-16 pt-24'>
          <h3 className={'mb-4 text-2xl font-medium text-black'}>
            الشعار الرئيسي
          </h3>
          <p className={'text-center text-sub_p'}>
            يمتاز الشعار بالبساطة والوضوح ليخلق لدى المتلقي دلالات ومعاني
            ايجابية وواضحة، بما يتضمنه من تدرج لوني مميز ومشع يعبر عن الحيوية
            المتمثلة في انبثاق الطاقة وتدرجها إلى كفاءة أعلى.
          </p>
          <div
            className={
              'mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row md:gap-8 lg:gap-12'
            }
          >
            <div className={'flex flex-col items-center justify-center gap-4'}>
              <div className={'rounded-3xl bg-white px-14 py-8'}>
                <MainLogo />
              </div>
              <Link
                href={'#'}
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'h-auto min-w-40 rounded-full px-6 py-3 text-base'
                )}
              >
                تحميل
              </Link>
            </div>
            <div className={'flex flex-col items-center justify-center gap-4'}>
              <div className={'rounded-3xl bg-primary px-14 py-8'}>
                <WhiteLogo />
              </div>
              <Link
                href={'#'}
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'h-auto min-w-40 rounded-full px-6 py-3 text-base'
                )}
              >
                تحميل
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            'normal_bottom_skew absolute -bottom-24 left-0 z-30 h-24 w-full bg-[#73AE28]/5'
          }
        ></div>
      </section>
      <section className={'mb-36 mt-24 pt-16'}>
        <div className={'container'}>
          <div className={'mb-20 flex flex-col items-center justify-start'}>
            <h3 className={'mb-6 text-2xl font-medium text-black'}>
              الألوان الأساسية
            </h3>
            <p className={'mb-12 text-center text-sub_p'}>
              تحتوي هوية المـركز على ألوان مميزة متوازنة تربط جميع أجزاء
              الهوية،لوحة الألوان الرئيسية تتضمن لونين رئيسيين تستخدم في
              العناوين الرئيسية والنصوص.
            </p>
            <div
              className={
                'mb-16 flex flex-wrap items-center justify-center gap-8 xl:gap-12'
              }
            >
              <div className={'flex flex-col items-center gap-6 px-16'}>
                <ColorPreview size='lg' className={'text-[#595A5C]'} />
                <div className={'flex flex-col items-center gap-2'}>
                  <p className={'text-sub_p'}>C64 M55 Y22 K27</p>
                  <p className={'text-sub_p'}>R89 G90 B92</p>
                  <p className={'text-sub_p'}>#595A5C</p>
                </div>
              </div>
              <div className={'flex flex-col items-center gap-6 px-16'}>
                <ColorPreview size='lg' />
                <div className={'flex flex-col items-center gap-2'}>
                  <p className={'text-sub_p'}>C64 M55 Y22 K27</p>
                  <p className={'text-sub_p'}>R89 G90 B92</p>
                  <p className={'text-sub_p'}>#595A5C</p>
                </div>
              </div>
            </div>
            <h3 className={'mb-6 text-2xl font-medium text-black'}>
              الألوان الثانوية
            </h3>
            <p className={'mb-12 text-center text-sub_p'}>
              لوحة الألوان الثانوية تتضمن خمسة ألوان تستخدم في العناوين
              الفرعية، الأرقام، الرموز وغيرها من الاستخدامات.
            </p>
            <div
              className={
                'flex max-w-[1050px] flex-wrap items-center justify-around gap-8 xl:gap-12'
              }
            >
              <div className={'flex flex-col items-center gap-6 px-24'}>
                <ColorPreview size='sm' className={'text-[#287D5A]'} />
                <div className={'flex flex-col items-center gap-2'}>
                  <p className={'text-sub_p'}>C83 M29 Y76 K14</p>
                  <p className={'text-sub_p'}>R41 G125 B89</p>
                  <p className={'text-sub_p'}>#287D5A</p>
                </div>
              </div>
              <div className={'flex flex-col items-center gap-6 px-24'}>
                <ColorPreview size='sm' className={'text-[#2A9546]'} />
                <div className={'flex flex-col items-center gap-2'}>
                  <p className={'text-sub_p'}>C82 M29 Y76 K4</p>
                  <p className={'text-sub_p'}>R43 G148 B70</p>
                  <p className={'text-sub_p'}>#2A9546</p>
                </div>
              </div>
              <div className={'flex flex-col items-center gap-6 px-24'}>
                <ColorPreview size='sm' className={'text-[#80B641]'} />
                <div className={'flex flex-col items-center gap-2'}>
                  <p className={'text-sub_p'}>C56 M8 Y100 K0</p>
                  <p className={'text-sub_p'}>R128 G182 B65</p>
                  <p className={'text-sub_p'}>#80B641</p>
                </div>
              </div>
              <div className={'flex flex-col items-center gap-6 px-24'}>
                <ColorPreview size='sm' className={'text-[#B7CF35]'} />
                <div className={'flex flex-col items-center gap-2'}>
                  <p className={'text-sub_p'}>C33 M2 Y99 K0</p>
                  <p className={'text-sub_p'}>R184 G208 B99</p>
                  <p className={'text-sub_p'}>#B7CF35</p>
                </div>
              </div>
              <div className={'flex flex-col items-center gap-6 px-24'}>
                <ColorPreview size='sm' className={'text-[#E0E31F]'} />
                <div className={'flex flex-col items-center gap-2'}>
                  <p className={'text-sub_p'}>C16 M4 Y99 K0</p>
                  <p className={'text-sub_p'}>R204 G204 B49</p>
                  <p className={'text-sub_p'}>#E0E31F</p>
                </div>
              </div>
            </div>
          </div>
          <div className={'flex w-full items-center justify-center'}>
            <Link
              href={'#'}
              className={cn(
                buttonVariants({ variant: 'default' }),
                'h-auto min-w-[240px] rounded-full px-6 py-3 text-base font-normal'
              )}
            >
              تحميل
            </Link>
          </div>
        </div>
      </section>
      <section className={'relative bg-[#F7F9FA]'}>
        <div
          className={
            'normal_top_skew absolute -top-24 left-0 z-30 h-24 w-full bg-[#F7F9FA]'
          }
        ></div>
        <div className='container py-16'>
          <h3 className={'mb-6 text-2xl font-medium text-black'}>الخط</h3>
          <p className={'mb-12 text-sub_p'}>
            لكثرة التحديات اثناء استخدام الخط الحالي والمشاكل التي تواجه
            الموظفيين مثل عدم كتابة حرف الالف، تم اقتراح استعمال خط مشابه للخط
            الحالي لضمان جودة هوية المركز.
          </p>
          <div className={'flex flex-col gap-4'}>
            <p className={'text-3xl font-medium'}>
              الخط العربي DIN Next LT Arabic
            </p>
            <div>
              <p className={'text-sub_p'}>
                أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه وي
              </p>
              <p className={'text-sub_p'}>٠١٢٣٤٥٦٧٨٩ !@#$٪</p>
            </div>
            <div>
              <p className={'text-sub_p'}>
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </p>
              <p className={'text-sub_p'}>
                a b c d e f g h i j k l m n o p q r s t u v w x y z
              </p>
              <p className={'text-sub_p'}>0123456789!@#$%</p>
            </div>
            <div>
              <Link
                href={'#'}
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'mt-8 h-auto min-w-[160px] rounded-full px-6 py-3 text-base'
                )}
              >
                تحميل
              </Link>
            </div>
          </div>
        </div>
        <div className={'relative h-24 bg-[#F5F5F5]'}>
          <span
            className={
              'skewed-t absolute top-0 block h-full w-full bg-[#F7F9FA]'
            }
          ></span>
          <span
            className={
              'skewed absolute top-0 block h-full w-full bg-gradient-to-l from-[rgb(215,215,215)] to-transparent'
            }
          ></span>
          <span
            className={'skewed-b absolute top-0 block h-full w-full bg-white'}
          ></span>
        </div>
      </section>
      <section className={'container'}>
        <FooterCta lastUpdateDate={'12/5/2024'} className={'mb-24'} />
      </section>
    </>
  );
}
