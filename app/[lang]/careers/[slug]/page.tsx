import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import HeaderCallToAction from '@/components/page-header/HeaderCallToAction';
import DoubleSquareMonoColor from '@/components/shapes/DoubleSquareMonoColor';
import { Button } from '@/components/ui/button';
import InfoCard from '@/app/[lang]/careers/[slug]/components/InfoCard';
import UserMultipleIcon from '@/components/icons/colored/UserMultipleIcon';
import SubFilters from '@/app/[lang]/careers/[slug]/components/SubFilters';
import SubPage from '@/app/[lang]/careers/[slug]/components/SubPage';
import CommentCta from '@/components/comment-cta';
import CalenderIcon from '@/components/icons/colored/CalenderIcon';
import ClockIcon from '@/components/icons/colored/ClockIcon';
import MoneyIcon from '@/components/icons/colored/MoneyIcon';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CareerForm from '@/app/[lang]/careers/[slug]/components/CareerForm';

export default function ServicePage({
  params: { lang, slug },
}: {
  params: { slug: string; lang: LangType };
}) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='مطلوب مطور IOS'
        skewBottomClass={'bg-[#F7F8F7]'}
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'التوظيف', href: `/${lang}/online-services` },
          { title: slug },
        ]}
      >
        <HeaderCallToAction numberOfViews={124} rate={4.5} />
      </PageHeader>
      <div
        className={'relative overflow-hidden bg-[#F7F8F7] px-20 pb-36 pt-16'}
      >
        <DoubleSquareMonoColor className={'absolute bottom-0 left-0 z-0'} />
        <div className={'grid grid-cols-2'}>
          <div className={'mb-6'}>
            <h3 className={'mb-4 text-2xl font-medium text-black'}>
              عن الوظيفة
            </h3>
            <p className={'text-sub_p'}>
              المركز السعودي لكفاءة الطاقة يعتبر مرجعا دوليا في مجال كفاءة
              الطاقة وذلك من خلال العمل مع الجهات المعنية المحلية والدولية في كل
              من القطاعين الحكومي والخاص بهدف تطوير المعرفة والخبرة في مجال
              كفاءة الطاقة وتطبيق أفضل الممارسات في المملكة العربية وخارجها.
              ويهدف المركز الى رفع كفاءة انتاج واستهلاك الطاقة وحسن ادارتها وذلك
              حفاظا على الموارد الطبيعية وتعزيزا للرفاهية الاقتصادية
              والاجتماعية.
            </p>
            <p className={'my-4 text-sub_p'}>وصف الدور</p>
            <p className={'text-sub_p'}>
              هذا الدور هو دور تدريب مهني لمطور تطبيقات iOS في معهد مركز كفاءة
              الطاقة . كمطور تطبيقات iOS، ستكون مسؤولاً عن تطوير التطبيقات
              المحمولة، وتحديداً في نظام iOS. مهامك اليومية ستشمل تطوير
              البرمجيات وإنشاء تطبيقات محمولة. هذا الدور مدمج، يستند بشكل أساسي
              ، مع مرونة للعمل عن بُعد.
            </p>
          </div>
          <div></div>
          <div className={'flex items-center gap-6'}>
            <Dialog>
              <DialogTrigger
                className={
                  'rounded-full bg-primary px-4 py-2 font-normal text-white'
                }
              >
                التقدم للوظيفة
              </DialogTrigger>
              <DialogContent className={'sm:rounded-3xl'}>
                <h2 className={'mb-8 text-2xl font-bold text-black'}>
                  استمارة التقدم
                </h2>
                <CareerForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className={'bg-white px-20 pb-24'}>
        <div
          className={
            'z-20 flex w-full -translate-y-1/2 items-center justify-between rounded-2xl bg-white p-6 shadow-[0_1px_24px_0px_rgba(32,32,33,0.1)]'
          }
        >
          <div className={'flex w-full items-center justify-between gap-6'}>
            <InfoCard
              icon={<UserMultipleIcon />}
              title={'مستوى الخبرة'}
              value={'متوسط - احتراف'}
              className={'min-w-[280px]'}
            />
            <InfoCard
              icon={<CalenderIcon />}
              title={'تاريخ إصدار الوظيفة'}
              value={'11/08/1440'}
              className={'min-w-[280px]'}
            />
            <InfoCard
              icon={<ClockIcon />}
              title={'مدة التقدم للوظيفة'}
              value={'15 يوم'}
              className={'min-w-[280px]'}
            />
            <InfoCard
              icon={<MoneyIcon />}
              title={'الراتب'}
              value={'4000 ر.س'}
              className={'min-w-[280px]'}
            />
          </div>
        </div>
        <div>
          <SubFilters lang={lang} />
          <SubPage />
          <div className={'xl:mt-24'}>
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
      </div>
    </>
  );
}
