import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(media)/components/SubLinks';
import UserStarIcon from '@/components/icons/UserStarIcon';
import EvChargerIcon from '@/components/icons/EvChargerIcon';
import CheckMarkCircleIcon from '@/components/icons/CheckMarkCircleIcon';
import Image from 'next/image';
import FirstImage from './1.png';
import RoundedPolygonFilter from '@/components/svg-filters/RoundedPolygonFilter';
import { cn } from '@/lib/utils';
import React from 'react';
import FooterCta from '@/components/footer-cta';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function OpenDataPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='المركز الإعلامي'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'البيانات المفتوحة' },
        ]}
      >
        <SubLinks lang={lang} activeTab='open-data' />
      </PageHeader>
      <div className={'relative overflow-hidden bg-[#F7F8F7] pt-16'}>
        <div className={'container relative z-30 pb-20'}>
          <div className={' mb-6'}>
            <h3 className={'mb-4 text-xl font-medium text-black md:text-2xl'}>
              البيانات المفتوحة للمركز السعودي لكفاءة الطاقة:
            </h3>
            <p className={'text-base text-sub_p'}>
              البيانات الحكومية المفتوحة هي تلك البيانات التي يُمكن لأي فرد
              استخدامها بحرية ودون قيود تقنية أو مالية أو قانونية، وأيضًا إعادة
              استخدامها ونشرها مع مراعاة متطلبات الرخصة القانونية التي تم نشر
              هذه البيانات بموجبها.
            </p>
          </div>
          <div
            className={'relative mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3'}
          >
            <div className='home__services__slide-gradient group flex flex-col items-start justify-center gap-4 rounded-2xl border border-[#D7D7D7] bg-white p-6 hover:border-white'>
              <UserStarIcon
                width={32}
                height={32}
                className={'group-hover:text-white'}
              />
              <p className={'group-hover:text-white'}>
                أعداد المتدربين في الدورات التدريبية للشهادات الاحترافية.
              </p>
            </div>
            <div className='home__services__slide-gradient group flex flex-col items-start justify-center gap-4 rounded-2xl border border-[#D7D7D7] bg-white p-6 hover:border-white'>
              <EvChargerIcon
                width={32}
                height={32}
                className={'group-hover:text-white'}
              />
              <p className={'group-hover:text-white'}>
                متوسط اقتصاد الوقود للمركبات الخفيفة الجديدة
              </p>
            </div>
            <div className='home__services__slide-gradient group flex flex-col items-start justify-center gap-4 rounded-2xl border border-[#D7D7D7] bg-white p-6 hover:border-white'>
              <CheckMarkCircleIcon
                width={32}
                height={32}
                className={'group-hover:text-white'}
              />
              <p className={'group-hover:text-white'}>
                أعداد الشركات المرخصة لتقديم خدمات كفاءة الطاقة
              </p>
            </div>
          </div>
        </div>
        <div className={'relative z-10 h-24 w-full bg-[#F4F9F7]'}>
          <span
            className={
              'skewed-t absolute top-0 block h-full w-full bg-[#F7F8F7]'
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
      </div>
      <section className={'py-20'}>
        <div className={'container flex flex-col bg-white pb-24'}>
          <div className={'grid gap-8 md:grid-cols-12 xl:gap-10'}>
            <div
              className={
                'col-span-full grid grid-cols-1 gap-4 md:gap-6 lg:col-span-6'
              }
            >
              <div className={'flex w-full flex-col justify-center'}>
                <h3
                  className={'mb-4 text-xl font-medium text-black md:text-2xl'}
                >
                  أهمية البيانات المفتوحة
                </h3>
                <p className={'mb-6 text-sub_p'}>
                  تساعد البيانات الحكومية المفتوحة على ردم الفجوة بين الجهات
                  الحكومية والمواطنين، والذين يستفيدون من البيانات المفتوحة
                  المقدمة من نواحٍ مختلفة منها:
                </p>
                <ul>
                  <li
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
                    <p className={'text-black'}>
                      {' '}
                      التعرف على الطريقة التي تعمل بها الجهات الحكومية.
                    </p>
                  </li>
                  <li
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
                    <p className={'text-black'}>
                      تقييم أداء الوحدات الإدارية المختلفة، وإبداء آرائهم مدعومة
                      بالمعلومات حول السياسات الحكومية.
                    </p>
                  </li>
                  <li
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
                      السماح باستخدام المعلومات في إجراء الأبحاث وكتابة التقارير
                      وإبداء الملاحظات والآراء.
                    </p>
                  </li>
                  <li
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
                      إنشاء تطبيقات على الإنترنت أو الأجهزة الذكية استناداً إلى
                      البيانات الحكومية المفتوحة.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={'relative hidden lg:col-span-6 lg:block'}>
              <div
                className={'relative z-10 max-h-[600px]'}
                style={{
                  filter: "url('#flt_tag')",
                }}
              >
                <Image
                  src={FirstImage}
                  alt={'open data'}
                  width={625}
                  height={580}
                  className={'h-full max-h-[600px] w-full object-cover'}
                  style={{
                    clipPath: 'polygon(0 12%, 100% 0, 100% 100%, 0 88%)',
                  }}
                />
                <RoundedPolygonFilter />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={'relative bg-[#73AE28]/5'}>
        <div
          className={
            'normal_top_skew absolute -top-24 left-0 z-30 h-24 w-full bg-[#73AE28]/5'
          }
        ></div>
        <div
          className={
            'container relative flex flex-col items-center justify-center py-24'
          }
        >
          <h4 className={'mb-4 text-2xl font-medium text-black'}>
            الدور الرئيسي لبوابة البيانات المفتوحة:
          </h4>
          <p className={'text-center text-sub_p'}>
            تُعد منصة البيانات المفتوحة في المملكة العربية السعودية من المبادرات
            المهمة، وتهدف إلى إيجاد قاعدة بيانات حكومية، ووضع إستراتيجية عامة
            لتمكين الشفافية، وتشجيع المشاركة الإلكترونية، وتحفيز الإبداع. يتمثل
            دور البوابة الرئيسي في نشر مجموعات البيانات الخاصة بالوزارات والجهات
            الحكومية في شكل بيانات مفتوحة، وإتاحتها لكافة المستفيدين.
          </p>
        </div>
        <div className={'relative h-24 bg-transparent'}>
          <span
            className={
              'skewed absolute top-0 block h-full w-full bg-gradient-to-l from-[rgba(115,174,40,1)] to-[rgba(241,247,234,1)]'
            }
          ></span>
          <span
            className={cn(
              `skewed-b absolute top-0 block h-full w-full bg-[#FFFFFF]`
            )}
          ></span>
        </div>
      </section>
      <section className={'container py-20'}>
        <div className={'mb-8'}>
          <h4 className={'mb-4 text-2xl font-medium text-black'}>
            سياسة الاستخدام:
          </h4>
          <p className={'mb-6 text-sub_p'}>
            إذا نقلت مجموعة بيانات او أي مجموعة بيانات مشتقة، أو مجموعة بيانات
            كجزء من مجموعة بيانات، أو تم استخدامها ضمن تطبيق أو دراسة معينة فيجب
            عليك:
          </p>
          <ul>
            <li
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
              <p className={'text-black'}>
                {' '}
                تضمين نسخة من رخصة البيانات المفتوحة مع مجموعة البيانات أو
                مجموعة البيانات المشتقة ، وفي أي وثائق ذات صلة.
              </p>
            </li>
            <li
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
              <p className={'text-black'}>
                الحفاظ على أي إخطارات وإشعارات متعلقة بحقوق النشر أو حقوق مجموعة
                البيانات التي تشير إلى رخصة البيانات المفتوحة.
              </p>
            </li>
            <li
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
                إذا لم يكن من الممكن وضع الإشعارات المطلوبة في ملف معين بسبب
                هيكل الملف، إذن يجب عليك تضمين الإشعارات في مكان أو ملف مرافق
                (مثل دليل ذي صلة).
              </p>
            </li>
          </ul>
        </div>
        <div className={'mb-[72px]'}>
          <p className={'text-sub_p'}>
            يجب ‌ألا تستخدم هذه البيانات في أغراض سياسية أو لدعم نشاط غير مشروع
            أو إجرامي أو في تعليقات عنصرية أو تميزية أو التأجيج أو التأثير
            السلبي في الثقافة أو المساواة أو التحريض أو أي نشاط غير نظامي أو
            مخالف لعادات المملكة وتقاليدها. يمكنك الاطلاع على سياسة الاستخدام
            بشكل تفصيلي في القسم السادس من رخصة البيانات المفتوحة. يخضع إتاحة
            واستخدام البيانات الحكومية المفتوحة في المملكة العربية السعودية
            للمبادئ الرئيسية التالية الصادرة من الهيئة السعودية للبيانات والذكاء
            الاصطناعي (سدايا).
          </p>
        </div>
        <div className={'mb-10'}>
          <h4 className={'mb-4 text-2xl font-medium text-black'}>
            تعليمات الاستخدام ومسؤولية مستخدمي البيانات:
          </h4>
          <p className={'max-w-[600px] text-sub_p'}>
            يحق لجميع زوار البوابة الوطنية للبيانات المفتوحة استخدام وإعادة
            استخدام مجموعات البيانات الموجودة في البوابة بما يتوافق مع سياسة
            الاستخدام.
          </p>
        </div>
        <p className={'text-primary'}>
          المبادئ الرئيسية والقواعد العامة للبيانات المفتوحة .
        </p>
      </section>
      <section className={'container pb-20'}>
        <FooterCta lastUpdateDate={'12/5/2024'} />
      </section>
    </>
  );
}
