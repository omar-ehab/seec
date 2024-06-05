import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import FirstImage from '@/app/[lang]/(media)/events/[slug]/1.png';
import Image from 'next/image';
import FooterCta from '@/components/footer-cta';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function SingleEventPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='مبادرة برنامج إدارة الطاقة'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'الفعاليات', href: `/${lang}/events` },
          {
            title: 'مبادرة برنامج إدارة الطاقة',
          },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <section className={'container mb-20 mt-10 px-6 md:px-20'}>
        <div className={'h-[420px] w-full overflow-hidden rounded-xl'}>
          <Image
            src={FirstImage}
            alt={'first image'}
            height={420}
            className={'h-full w-full object-cover'}
          />
        </div>
        <h2 className={'mt-8 text-2xl font-medium text-black'}>
          «الاعتماد السعودي» و «كفاءة الطاقة» يوقعان اتفاقية تعاون
        </h2>
        <p className={'mt-2 text-xl text-sub_p'}>شعبان 1444</p>
        <div className={'mt-4 flex flex-col gap-8'}>
          <p className={'text-sub_p'}>
            وقع المركز السعودي للاعتماد اتفاقية تعاون مع المركز السعودي لكفاءة
            الطاقة؛ بهدف تعزيز العمل في العديد من المجالات المشتركة بي الطرفين،
            ووضع برامج التعاون والتطوير لتحقيق المنافع المشتركة.
          </p>
          <p className={'text-sub_p'}>
            ومثّل الطرفين في توقيع الاتفاقية المدير التنفيذي للمركز السعودي
            للاعتماد الدكتور عادل القعيّد، ومدير عام المركز السعودي لكفاءة
            الطاقة ناصر بن عبد الله الغامدي.
          </p>
          <p className={'text-sub_p'}>
            وتأتي اتفاقية التعاون في العديد من المجالات منها: تحقيق الكفاية في
            تلبية متطلبات البنية التحتية لنظام إدارة الطاقة، والاستعانة بجهات
            تقويم المطابقة المعتمدة للقيام بالأعمال التي تخص الحصول على شهادات
            نظم الإدارة أو الاستفادة منها، والاستفادة من الخبرات والكفاءات
            الوطنية التي يمتلكها الطرفان.
          </p>
        </div>
        <FooterCta lastUpdateDate={'12/5/2024'} />
      </section>
    </>
  );
}
