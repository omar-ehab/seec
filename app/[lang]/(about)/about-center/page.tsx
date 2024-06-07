import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(about)/components/SubLinks';
import DoubleSquareMonoColor from '@/components/shapes/DoubleSquareMonoColor';
import CommentCta from '@/components/comment-cta';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import AboutCenterImage from '@/public/about-image.png';
import TickIcon from '@/components/icons/TickIcon';

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
        title='عن المركز'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'عن المركز' },
        ]}
      >
        <SubLinks lang={lang} activeTab='about-center' />
      </PageHeader>
      <div className={'relative overflow-hidden bg-[#F7F8F7] pb-40 pt-16'}>
        <DoubleSquareMonoColor className={'absolute bottom-0 left-0 z-0'} />
        <div className={'container'}>
          <div className={'grid grid-cols-1 md:grid-cols-2'}>
            <div className={'mb-6'}>
              <h3 className={'mb-4 text-xl font-medium text-black md:text-2xl'}>
                لمحة عن المركز
              </h3>
              <p className={'text-sub_p'}>
                يتولى المركز السعودي لكفاءة الطاقة مسؤولية الإشراف على ترشيد
                ورفع كفاءة استهلاك وإنتاج الطاقة في المملكة العربية السعودية،
                وتوحيد الجهود بين الجهات الحكومية وغير الحكومية في هذا المجال،
                للحفاظ على الموارد الطبيعية من مصادر الطاقة وتعزيز الرفاهية
                الاقتصادية والاجتماعية؛ حيث اهتم وفقًا لاختصاصاته بوضع التشريعات
                اللازمة التي من شأنها إيجاد السبل الكفيلة بالحد من الاستهلاك
                المرتفع للطاقة في المملكة، واستخدامها الاستخدام الأمثل، لضمان
                ديمومة نموها وبقائها للجميع دون أن يكون لذلك أي تأثير على رفاهية
                المجتمع.
              </p>
            </div>
            <div></div>
            <div
              className={
                'col-span-2 flex items-center gap-3 md:mb-6 md:gap-6 lg:col-span-1'
              }
            >
              <Link
                href={`/${lang}/contact-us`}
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'rounded-full bg-primary px-3 py-2 text-white md:px-6 md:py-3'
                )}
              >
                تواصل معنا
              </Link>
              <Link
                href={'#'}
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'rounded-full border-[#73AE28] px-6 py-3 text-[#73AE28] hover:text-[#73AE28] '
                )}
              >
                ملف توضيحي عن المركز
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={'container flex flex-col bg-white pb-24'}>
        <div
          className={
            'z-20 -mt-[135px] mb-16 flex h-80 w-full overflow-hidden rounded-3xl bg-white shadow-[0_1px_24px_0px_rgba(32,32,33,0.1)] md:h-[540px]'
          }
        >
          <Image
            src={AboutCenterImage}
            priority
            alt={'About Center Image'}
            className={'h-full w-full object-cover'}
          />
        </div>
        <div>
          <h3 className={'mb-8 text-xl font-medium text-black md:text-2xl'}>
            تأسيس المركز
          </h3>
          <ul className={'flex flex-col gap-12 border-r-2 border-[#D7DAD7]'}>
            <li className={'flex flex-col justify-start'}>
              <div className={'flex -translate-y-1/2 items-center gap-2'}>
                <span
                  className={
                    'flex size-8 translate-x-[calc(50%+1px)] rounded-full border-2 border-white bg-white text-primary'
                  }
                >
                  <span
                    className={
                      'about-center__list-bullet-gradient flex h-full w-full items-center justify-center rounded-full'
                    }
                  >
                    <TickIcon size={20} />
                  </span>
                </span>
                <span className={'text-xl font-medium text-black md:text-2xl'}>
                  2010
                </span>
              </div>
              <ul>
                <li className={'flex items-center gap-2'}>
                  <span
                    className={
                      'flex size-8 translate-x-[calc(50%+1px)] items-center justify-center'
                    }
                  >
                    <span className={'size-2 rounded-full bg-[#D7DAD7]'}></span>
                  </span>
                  <p className={'text-sub_p'}>
                    صدر قرار مجلس الوزراء بإنشاء &quot;المركز السعودي لكفاءة
                    الطاقة&quot; في شهر ذو القعدة لعام 1431هـ
                  </p>
                </li>
              </ul>
            </li>
            <li className={'flex flex-col justify-start'}>
              <div className={'flex -translate-y-1/2 items-center gap-2'}>
                <span
                  className={
                    'flex size-8 translate-x-[calc(50%+1px)] rounded-full border-2 border-white bg-white text-primary'
                  }
                >
                  <span
                    className={
                      'about-center__list-bullet-gradient flex h-full w-full items-center justify-center rounded-full'
                    }
                  >
                    <TickIcon size={20} />
                  </span>
                </span>
                <span className={'text-xl font-medium text-black md:text-2xl'}>
                  2012
                </span>
              </div>
              <ul>
                <li className={'flex items-center gap-2'}>
                  <span
                    className={
                      'flex size-8 translate-x-[calc(50%+1px)] items-center justify-center'
                    }
                  >
                    <span className={'size-2 rounded-full bg-[#D7DAD7]'}></span>
                  </span>
                  <p className={'text-sub_p'}>
                    بدأ المركز في إعداد &quot;البرنامج السعودي لكفاءة
                    الطاقة&quot; في شهر رجب لعام 1433هـ
                  </p>
                </li>
                <li className={'flex items-center gap-2'}>
                  <span
                    className={
                      'flex size-8 translate-x-[calc(50%+1px)] items-center justify-center'
                    }
                  >
                    <span className={'size-2 rounded-full bg-[#D7DAD7]'}></span>
                  </span>
                  <p className={'text-sub_p'}>
                    يستهدف البرنامج أكثر القطاعات استهلاكا للطاقة: الصناعة –
                    والمباني -والنقل البري
                  </p>
                </li>
              </ul>
            </li>
            <li className={'flex flex-col justify-start'}>
              <div className={'flex -translate-y-1/2 items-center gap-2'}>
                <span
                  className={
                    'flex size-8 translate-x-[calc(50%+1px)] rounded-full border-2 border-white bg-white text-primary'
                  }
                >
                  <span
                    className={
                      'about-center__list-bullet-gradient flex h-full w-full items-center justify-center rounded-full'
                    }
                  >
                    <TickIcon size={20} />
                  </span>
                </span>
                <span className={'text-xl font-medium text-black md:text-2xl'}>
                  2013
                </span>
              </div>
              <ul>
                <li className={'flex items-center gap-2'}>
                  <span
                    className={
                      'flex size-8 translate-x-[calc(50%+1px)] items-center justify-center'
                    }
                  >
                    <span className={'size-2 rounded-full bg-[#D7DAD7]'}></span>
                  </span>
                  <p className={'text-sub_p'}>
                    المساهمة الكاملة في إطلاق مبادرات كفاءة الطاقة ونشر الوعي
                    بأهمية ترشيد ورفع كفاءة استهلاك وإنتاج الطاقة، بالتعاون مع
                    أكثر من 30 جهة حكوميةوشبه حكومية.
                  </p>
                </li>
                <li className={'flex items-center gap-2'}>
                  <span
                    className={
                      'flex size-8 translate-x-[calc(50%+1px)] items-center justify-center'
                    }
                  >
                    <span className={'size-2 rounded-full bg-[#D7DAD7]'}></span>
                  </span>
                  <p className={'text-sub_p'}>
                    عمل المركز على أكثر من 100 مبادرة في مراحل مختلفة
                    (دراسةالجدوى، التصميم، التنفيذ)
                  </p>
                </li>
              </ul>
            </li>
            <li className={'flex flex-col justify-start'}>
              <div className={'flex -translate-y-1/2 items-center gap-2'}>
                <span
                  className={
                    'flex size-8 translate-x-[calc(50%+1px)] rounded-full border-2 border-white bg-white text-primary'
                  }
                >
                  <span
                    className={
                      'about-center__list-bullet-gradient flex h-full w-full items-center justify-center rounded-full'
                    }
                  >
                    <TickIcon size={20} />
                  </span>
                </span>
                <span className={'text-xl font-medium text-black md:text-2xl'}>
                  2018
                </span>
              </div>
              <ul>
                <li className={'flex items-center gap-2'}>
                  <span
                    className={
                      'flex size-8 translate-x-[calc(50%+1px)] items-center justify-center'
                    }
                  >
                    <span className={'size-2 rounded-full bg-[#D7DAD7]'}></span>
                  </span>
                  <p className={'text-sub_p'}>
                    صدور تنظيم المركز الحالي بزيادة نطاق عمله ليشمل: استخدام
                    الطاقة في إنتاج الكهرباء وتحلية المياه ويشمل ذلك نقل
                    الكهرباء وتوزيعها وكذلك استخدام اللقيم في قطاع الصناعة.{' '}
                  </p>
                </li>
              </ul>
            </li>
            <li className={'flex flex-col justify-start'}>
              <div className={'flex -translate-y-1/2 items-center gap-2'}>
                <span
                  className={
                    'flex size-8 translate-x-[calc(50%+1px)] rounded-full border-2 border-white bg-white text-primary'
                  }
                >
                  <span
                    className={
                      'about-center__list-bullet-gradient flex h-full w-full items-center justify-center rounded-full'
                    }
                  >
                    <TickIcon size={20} />
                  </span>
                </span>
                <span className={'text-xl font-medium text-black md:text-2xl'}>
                  2020
                </span>
              </div>
              <ul>
                <li className={'flex items-center gap-2'}>
                  <span
                    className={
                      'flex size-8 translate-x-[calc(50%+1px)] items-center justify-center'
                    }
                  >
                    <span className={'size-2 rounded-full bg-primary'}></span>
                  </span>
                  <p className={'text-sub_p'}>
                    رسم خارطة الطريق الاستراتيجية انطلاقاً من تحديد رؤية ورسالة
                    وأهداف استراتيجية للمركز، والمبادرات التي من شأنها تحقيق هذه
                    الأهداف، وانتهاء بالممكنات التي تضمن بمشيئة الله الوصول
                    للنجاح المنشود وتحقيق الغايات لتعزيز مكانة المملكة في مجال
                    كفاءة الطاقة.
                  </p>
                </li>
              </ul>
            </li>
            <li className={'flex h-0 flex-col justify-start'}>
              <div className={'flex -translate-y-1/2 items-center gap-2'}>
                <span
                  className={
                    'about-center__list-bullet-solid-gradient flex size-8 translate-x-[calc(50%+1px)] items-center justify-center rounded-full'
                  }
                >
                  <span
                    className={
                      'flex size-6 items-center justify-center rounded-full bg-white'
                    }
                  ></span>
                </span>
                <span className={'text-xl font-medium text-black md:text-2xl'}>
                  2030
                </span>
              </div>
            </li>
          </ul>
          <p className={'mt-8 ps-10 text-sub_p'}>
            بحلول عام 2030 ، من المتوقع أن تساهم جهود كفاءة الطاقة في تقليل
            استهلاك الطاقة بحوالي: مليون برميل نفط مكافئ يومياً و 97 مليون طن
            مكافئ Co2 سنوياً.
          </p>
        </div>
        <div className={'mt-24'}>
          <p className={'mb-8'}>
            <span className={'ml-2 text-sub_p'}>آخر تحديث بتاريخ:</span>
            <span className={'font-medium text-black'}>12/5/2024</span>
          </p>
          <CommentCta className={'mb-6'} />
          <div className={'flex items-center gap-6'}>
            <p>هل أعجبك المحتوى المقدم في هذه الصفحة؟</p>
            <div className={'flex items-center gap-4'}>
              <Button
                variant={'outline'}
                className={
                  'h-8 rounded-full border-primary px-4 py-2 text-primary hover:text-primary'
                }
              >
                نعم
              </Button>
              <Button
                variant={'outline'}
                className={
                  'h-8 rounded-full border-primary px-4 py-2 text-primary hover:text-primary'
                }
              >
                لا
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
