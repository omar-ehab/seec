import RocketIcon from '@/components/icons/colored/RocketIcon';
import HandOkIcon from '@/components/icons/colored/HandOkIcon';
import TeamIcon from '@/components/icons/colored/TeamIcon';
import PartnershipIcon from '@/components/icons/colored/PartnershipIcon';
import SquarePatterns from '@/components/shapes/SquarePatterns';

export default function CenterValues() {
  return (
    <section className='relative block w-full bg-[#F8FBF3] pb-20 pt-12 md:hidden'>
      <SquarePatterns className={'absolute left-0 top-[-200px] z-0'} />
      <div className='container'>
        <div className={'grid grid-cols-12'}>
          <div className='col-span-12 rounded-2xl bg-white p-10 px-4 pt-4  drop-shadow-[0_16px_48px_rgba(128,178,65,0.2)] md:px-16 md:pb-14'>
            <h2
              className={
                'mb-12 text-center text-2xl font-bold text-black md:text-3xl'
              }
            >
              قيم المركز
            </h2>
            <div
              className={
                'flex flex-wrap items-center justify-between gap-y-6 xl:flex-nowrap xl:gap-4'
              }
            >
              <div
                className={
                  'flex w-1/2 flex-col items-center justify-center gap-4 lg:w-1/4  lg:gap-6'
                }
              >
                <RocketIcon className='h-8 w-8 lg:h-10 lg:w-10' />
                <p className={'text-base text-black lg:text-[20px]'}>الكفاءة</p>
              </div>
              <div
                className={
                  'flex w-1/2 flex-col items-center justify-center gap-4 lg:w-1/4  lg:gap-6'
                }
              >
                <HandOkIcon className='h-8 w-8 lg:h-10 lg:w-10' />
                <p className={'text-base text-black lg:text-[20px]'}>
                  المسؤولية
                </p>
              </div>
              <div
                className={
                  'flex w-1/2 flex-col items-center justify-center gap-4 lg:w-1/4  lg:gap-6'
                }
              >
                <TeamIcon className='h-8 w-8 lg:h-10 lg:w-10' />
                <p className={'text-base text-black lg:text-[20px]'}>
                  العمل بروح الفريق
                </p>
              </div>
              <div
                className={
                  'flex w-1/2 flex-col items-center justify-center gap-4 lg:w-1/4  lg:gap-6'
                }
              >
                <PartnershipIcon className='h-8 w-8 lg:h-10 lg:w-10' />
                <p className={'text-base text-black lg:text-[20px]'}>
                  التكامل مع الشركاء
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
