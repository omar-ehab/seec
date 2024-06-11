import VisionIcon from '@/components/icons/VisionIcon';
import MissionIcon from '@/components/icons/MissionIcon';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon';

export default function MissionAndVision({ lang }: { lang: LangType }) {
  return (
    <section className='relative w-full bg-[#F8FBF3] pt-24'>
      <div className='container'>
        <div className={'grid grid-cols-3 gap-4'}>
          <div className='col-span-3 md:col-span-1'>
            <VisionIcon className={'mb-4'} />
            <h2 className={'mb-2 text-base font-medium text-black md:text-xl'}>
              رؤيتنا
            </h2>
            <p className={'text-sm text-black/50'}>
              أن يكون المركزُ مرجعاً دولياً في مجال كفاءة الطاقة، وأنموذجاً
              للحفاظ على الموارد الطبيعية لتعزيز الاستدامة والرفاهية الاقتصادية
              والاجتماعية بحلول عام 2030م.
            </p>
          </div>
          <div className='col-span-3 md:col-span-1'>
            <MissionIcon className={'mb-4'} />
            <h2 className={'mb-2 text-base font-medium text-black md:text-xl'}>
              رسالتنا
            </h2>
            <p className={'text-sm text-black/50'}>
              رفع كفاءة إنتاج واستهلاك الطاقة وحسن إدارتها من خلال العمل مع جميع
              الشركاء المحليين والدوليين من القطاعين الحكومي والخاص، وتطوير
              المعرفة والقدرات في مجال كفاءة الطاقة، وتطبيق أفضل الممارسات في
              ترشيد وإدارة الطاقة في المملكة.
            </p>
          </div>
          <div className='col-span-3 hidden md:col-span-1 md:block'>
            <MissionIcon className={'mb-4'} />
            <h2 className={'mb-2 text-base font-medium text-black md:text-xl'}>
              قيمنا
            </h2>
            <div className={'text-sm text-black/50'}>
              <ul className='grid grid-cols-[repeat(2,minmax(max-content,_1fr))]'>
                <li className='block'>
                  <span className='flex items-center gap-2 before:block before:h-2 before:w-2 before:bg-amber-600 before:bg-gradient-to-b before:from-[#999] before:to-[#595A5C]'>
                    الكـــفــــــاءة
                  </span>
                </li>
                <li className='block'>
                  <span className='flex items-center gap-2 before:block before:h-2 before:w-2 before:bg-amber-600 before:bg-gradient-to-b before:from-[#999] before:to-[#595A5C]'>
                    التكـــامل مع الشركاء
                  </span>
                </li>
                <li className='block'>
                  <span className='flex items-center gap-2 before:block before:h-2 before:w-2 before:bg-amber-600 before:bg-gradient-to-b before:from-[#999] before:to-[#595A5C]'>
                    المسـؤلـيـة
                  </span>
                </li>
                <li className='block'>
                  <span className='flex items-center gap-2 before:block before:h-2 before:w-2 before:bg-amber-600 before:bg-gradient-to-b before:from-[#999] before:to-[#595A5C]'>
                    العمــل بـروح الفـريـق
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <Link
            href={`/${lang}/center-strategy`}
            className={cn(
              buttonVariants({
                variant: 'outline',
              }),
              'text-medium mb-24 mt-8 hidden h-12 w-[181px] items-center justify-center rounded-full border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary md:flex'
            )}
          >
            <span className={'mb-1'}>استراتيجية المركز</span>
            <ChevronLeftIcon className={'size-5'} />
          </Link>
        </div>
      </div>
    </section>
  );
}
