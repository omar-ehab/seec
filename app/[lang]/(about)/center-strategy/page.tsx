import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(about)/components/SubLinks';
import CommentCta from '@/components/comment-cta';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import VisionIcon from '@/components/icons/VisionIcon';
import MissionIcon from '@/components/icons/MissionIcon';
import CenterStrategyImage from '@/public/center-strategy-image.png';
import RoundedPolygonFilter from '@/components/svg-filters/RoundedPolygonFilter';
import FooterCta from '@/components/footer-cta';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function AboutCenterPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='استراتيجية المركز'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'استراتيجية المركز' },
        ]}
      >
        <SubLinks lang={lang} activeTab='center-strategy' />
      </PageHeader>
      <div className={'relative overflow-hidden bg-[#F7F8F7] pb-56 pt-16'}>
        <div className={'container'}>
          <div className={'grid grid-cols-12 gap-6'}>
            <div className='col-span-12 md:col-span-6'>
              <VisionIcon className={'mb-4'} />
              <h2
                className={'mb-2 text-base font-medium text-black md:text-xl'}
              >
                رؤيتنا
              </h2>
              <p className={'text-sm text-black/50 md:max-w-[400px]'}>
                أن يكون المركزُ مرجعاً دولياً في مجال كفاءة الطاقة، وأنموذجاً
                للحفاظ على الموارد الطبيعية لتعزيز الاستدامة والرفاهية
                الاقتصادية والاجتماعية بحلول عام 2030م.
              </p>
            </div>
            <div className='col-span-12 md:col-span-6'>
              <MissionIcon className={'mb-4'} />
              <h2
                className={'mb-2 text-base font-medium text-black md:text-xl'}
              >
                رسالتنا
              </h2>
              <p className={'text-sm text-black/50 md:max-w-[400px]'}>
                رفع كفاءة إنتاج واستهلاك الطاقة وحسن إدارتها من خلال العمل مع
                جميع الشركاء المحليين والدوليين من القطاعين الحكومي والخاص،
                وتطوير المعرفة والقدرات في مجال كفاءة الطاقة، وتطبيق أفضل
                الممارسات في ترشيد وإدارة الطاقة في المملكة.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={'container flex flex-col bg-white pb-24'}>
        <div
          className={
            'z-20 -mt-[173px] mb-16 flex w-full overflow-hidden rounded-3xl bg-white p-8 shadow-[0_4px_16px_0px_rgba(0,0,0,.15)] xl:p-16'
          }
        >
          <div className={'grid gap-8 md:grid-cols-12 xl:gap-10'}>
            <div
              className={
                'col-span-full grid grid-cols-1 gap-4 md:gap-6 lg:col-span-6'
              }
            >
              <div className={'w-full'}>
                <h3
                  className={'mb-12 text-2xl font-bold text-black md:text-3xl'}
                >
                  قيم المركز
                </h3>
                <ul className={'flex flex-col gap-8'}>
                  <li className={'flex flex-col gap-2'}>
                    <p className={'text-xl font-medium text-black'}>الكفاءة</p>
                    <p className={'text-sub_p'}>
                      تأتي الكفاءة على رأس أولويات المركز، من خلال السعي إلـى
                      تحسين استخدام الموارد الطاقية بطريقة تضمن أقصى استفادة
                      بأقل تكلفة وأدنى تأثير بيئي.
                    </p>
                  </li>
                  <li className={'flex flex-col gap-2'}>
                    <p className={'text-xl font-medium text-black'}>المسؤلية</p>
                    <p className={'text-sub_p'}>
                      تنعكس المسؤولية في عمل المركز في التزامه بضمان استخدام
                      الطاقة بشكل مستدام ومسؤول، من خلال وضع وتنفيذ السياسات
                      واللوائح التي تحمي البيئة وتساهم في تحقيق أهداف رؤية
                      السعودية 2030.
                    </p>
                  </li>
                  <li className={'flex flex-col gap-2'}>
                    <p className={'text-xl font-medium text-black'}>
                      العمل بروح الفريق
                    </p>
                    <p className={'text-sub_p'}>
                      يتعاون المركز مع الجهات الحكومية والخاصة لتحقيق أهداف
                      كفاءة الطاقة، ويشمل ذلك التنسيق مع الجهات المختلفة لتطوير
                      اللوائح والمعايير، وتبادل المعرفة والخبرات، وتنفيذ
                      المشاريع والمبادرات.
                    </p>
                  </li>
                  <li className={'flex flex-col gap-2'}>
                    <p className={'text-xl font-medium text-black'}>
                      التكامل مع الشركاء
                    </p>
                    <p className={'text-sub_p'}>
                      يعزز المركز روح الفريق من خلال تشجيع التعاون والعمل
                      الجماعي بين موظفيه ومع الشركاء والمجتمع، ما يتيح تحقيق
                      نتائج أفضل وتقديم حلول متكاملة وفعالة لمواجهة تحديات
                      الطاقة.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={'relative hidden lg:col-span-6 lg:block'}>
              <div
                className={'relative z-10 h-full'}
                style={{
                  filter: "url('#flt_tag')",
                }}
              >
                <Image
                  src={CenterStrategyImage}
                  alt={'center strategy'}
                  width={625}
                  height={580}
                  className={'h-full w-full object-cover'}
                  style={{
                    clipPath: 'polygon(0 12%, 100% 0, 100% 100%, 0 88%)',
                  }}
                />
                <RoundedPolygonFilter />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className={'mb-8 text-2xl font-medium text-black'}>
            أهداف المركز
          </h3>
          <div className={'sm:[column-count:2]  xl:[column-count:3] '}>
            <div
              className={
                'flex h-6 items-center gap-4 py-6 [break-inside:avoid]'
              }
            >
              <span
                className={
                  'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                }
              >
                1
              </span>
              <p className={'text-black'}>تحسين كفاءة إنتاج الطاقة</p>
            </div>
            <div
              className={
                'flex h-6 items-center gap-4 py-6 [break-inside:avoid]'
              }
            >
              <span
                className={
                  'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                }
              >
                2
              </span>
              <p className={'text-black'}>تحسين كفاءة استهلاك الطاقة</p>
            </div>
            <div
              className={
                'flex h-6 items-center gap-4 py-6 [break-inside:avoid]'
              }
            >
              <span
                className={
                  'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                }
              >
                3
              </span>
              <p className={'text-black'}>
                {' '}
                ضمان الالتزام بلوائح ومعايير كفاءة الطاقة
              </p>
            </div>
            <div
              className={
                'flex h-6 items-center gap-4 py-6 [break-inside:avoid]'
              }
            >
              <span
                className={
                  'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                }
              >
                4
              </span>
              <p className={'text-black'}>
                تشجيع الاستثمار ودعم المحتوى المحلي
              </p>
            </div>

            <div
              className={
                'flex h-6 items-center gap-4 py-6 [break-inside:avoid]'
              }
            >
              <span
                className={
                  'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                }
              >
                5
              </span>
              <p className={'text-black'}>تنمية القدرات البشرية</p>
            </div>
            <div
              className={
                'flex h-6 items-center gap-4 py-6 [break-inside:avoid]'
              }
            >
              <span
                className={
                  'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                }
              >
                6
              </span>
              <p className={'text-black'}>نشر الوعي في كفاءة الطاقة</p>
            </div>
            <div
              className={
                'flex h-6 items-center gap-4 py-6 [break-inside:avoid]'
              }
            >
              <span
                className={
                  'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                }
              >
                7
              </span>
              <p className={'text-black'}>تحقيق التميز المؤسسي</p>
            </div>
            <div
              className={
                'flex h-6 items-center gap-4 py-6 [break-inside:avoid]'
              }
            >
              <span
                className={
                  'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                }
              >
                8
              </span>
              <p className={'text-black'}>تعزيز التحول الرقمي</p>
            </div>

            <div
              className={
                'flex h-6 items-center gap-4 py-6 [break-inside:avoid]'
              }
            >
              <span
                className={
                  'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                }
              >
                9
              </span>
              <p className={'text-black'}>تعزيز الارتباط الوظيفي</p>
            </div>
            <div
              className={
                'flex h-6 items-center gap-4 py-6 [break-inside:avoid]'
              }
            >
              <span
                className={
                  'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                }
              >
                10
              </span>
              <p className={'text-black'}>ضمان بيئة سيبرانية آمنة</p>
            </div>
            <div
              className={
                'flex h-6 items-center gap-4 py-6 [break-inside:avoid]'
              }
            >
              <span
                className={
                  'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
                }
              >
                11
              </span>
              <p className={'text-black'}>رفع كفاءة الإنفاق والأداء المالي</p>
            </div>
          </div>
        </div>
        <FooterCta lastUpdateDate={'12/5/2024'} />
      </div>
    </>
  );
}
