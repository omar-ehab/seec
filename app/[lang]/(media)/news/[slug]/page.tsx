import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FirstImage from '@/app/[lang]/(media)/news/[slug]/1.png';
import Image from 'next/image';
import FooterCta from '@/components/footer-cta';
import OtherNews from '@/app/[lang]/(media)/news/[slug]/OtherNews';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function SingleNewsPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='«الاعتماد السعودي» و «كفاءة الطاقة» يوقعان اتفاقية تعاون'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'الاخبار', href: `/${lang}/news` },
          {
            title:
              'وقع مدير عام المركز اتفاقية تعاون لتعزيز العمل في العديد من المجالات  الرقمية والصناعي',
          },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <section className={'container max-w-[850px] mb-20 mt-10'}>
        <div className={'h-64 w-full overflow-hidden rounded-xl md:h-[420px]'}>
          <Image
            src={FirstImage}
            alt={'first image'}
            height={420}
            className={'h-full w-full object-cover'}
          />
        </div>
        <h2 className={'mt-8 text-xl font-medium text-black md:text-2xl'}>
          «الاعتماد السعودي» و «كفاءة الطاقة» يوقعان اتفاقية تعاون
        </h2>
        <div className={'mt-4 flex flex-col gap-8'}>
          <p className={'text-sm text-sub_p xs:text-base'}>
            وقع المركز السعودي للاعتماد اتفاقية تعاون مع المركز السعودي لكفاءة
            الطاقة؛ بهدف تعزيز العمل في العديد من المجالات المشتركة بي الطرفين،
            ووضع برامج التعاون والتطوير لتحقيق المنافع المشتركة.
          </p>
          <p className={'text-sm text-sub_p xs:text-base'}>
            ومثّل الطرفين في توقيع الاتفاقية المدير التنفيذي للمركز السعودي
            للاعتماد الدكتور عادل القعيّد، ومدير عام المركز السعودي لكفاءة
            الطاقة ناصر بن عبد الله الغامدي.
          </p>
          <p className={'text-sm text-sub_p xs:text-base'}>
            وتأتي اتفاقية التعاون في العديد من المجالات منها: تحقيق الكفاية في
            تلبية متطلبات البنية التحتية لنظام إدارة الطاقة، والاستعانة بجهات
            تقويم المطابقة المعتمدة للقيام بالأعمال التي تخص الحصول على شهادات
            نظم الإدارة أو الاستفادة منها، والاستفادة من الخبرات والكفاءات
            الوطنية التي يمتلكها الطرفان.
          </p>
        </div>
        <h2 className={'mt-8 text-xl font-medium text-black md:text-2xl'}>
          «الاعتماد السعودي» و «كفاءة الطاقة» يوقعان اتفاقية تعاون
        </h2>
        <div className={'mt-4 flex flex-col gap-8'}>
          <p className={'text-sm text-sub_p xs:text-base'}>
            وقع المركز السعودي للاعتماد اتفاقية تعاون مع المركز السعودي لكفاءة
            الطاقة؛ بهدف تعزيز العمل في العديد من المجالات المشتركة بي الطرفين،
            ووضع برامج التعاون والتطوير لتحقيق المنافع المشتركة.
          </p>
          <p className={'text-sm text-sub_p xs:text-base'}>
            ومثّل الطرفين في توقيع الاتفاقية المدير التنفيذي للمركز السعودي
            للاعتماد الدكتور عادل القعيّد، ومدير عام المركز السعودي لكفاءة
            الطاقة ناصر بن عبد الله الغامدي.
          </p>
          <p className={'text-sm text-sub_p xs:text-base'}>
            وتأتي اتفاقية التعاون في العديد من المجالات منها: تحقيق الكفاية في
            تلبية متطلبات البنية التحتية لنظام إدارة الطاقة، والاستعانة بجهات
            تقويم المطابقة المعتمدة للقيام بالأعمال التي تخص الحصول على شهادات
            نظم الإدارة أو الاستفادة منها، والاستفادة من الخبرات والكفاءات
            الوطنية التي يمتلكها الطرفان.
          </p>
        </div>
      </section>
      <div className="container">
        <FooterCta lastUpdateDate={'12/5/2024'} className={'mb-20'} />
      </div>
      <OtherNews lang={lang} />
    </>
  );
}
