import RocketIcon from '@/components/icons/colored/RocketIcon';
import HandOkIcon from '@/components/icons/colored/HandOkIcon';
import TeamIcon from '@/components/icons/colored/TeamIcon';
import PartnershipIcon from '@/components/icons/colored/PartnershipIcon';
import SquarePatterns from '@/components/shapes/SquarePatterns';

export default function CenterValues() {
  return (
    <section className='relative w-full bg-[#F8FBF3] px-20 pb-20 pt-12'>
      <SquarePatterns className={'absolute left-0 top-[-200px] z-0'} />
      <div className={'grid grid-cols-12'}>
        <div className='col-span-12 rounded-2xl bg-white px-16 pb-14 pt-4 drop-shadow-[0_16px_48px_rgba(128,178,65,0.2)]'>
          <h2 className={'mb-12 text-center text-3xl font-bold text-black'}>
            قيم المركز
          </h2>
          <div className={'flex items-center justify-between'}>
            <div
              className={
                'flex min-w-[200px] flex-col items-center justify-center gap-6'
              }
            >
              <RocketIcon />
              <p className={'text text-[20px] text-black'}>الكفاءة</p>
            </div>
            <div
              className={
                'flex min-w-[200px] flex-col items-center justify-center gap-6'
              }
            >
              <HandOkIcon />
              <p className={'text text-[20px] text-black'}>المسؤولية</p>
            </div>
            <div
              className={
                'flex min-w-[200px] flex-col items-center justify-center gap-6'
              }
            >
              <TeamIcon />
              <p className={'text text-[20px] text-black'}>العمل بروح الفريق</p>
            </div>
            <div
              className={
                'flex min-w-[200px] flex-col items-center justify-center gap-6'
              }
            >
              <PartnershipIcon />
              <p className={'text text-[20px] text-black'}>
                التكامل مع الشركاء
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
