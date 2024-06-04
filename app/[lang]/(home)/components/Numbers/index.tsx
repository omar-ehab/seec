import Image from 'next/image';
import NumbersImage from '@/public/numbers_bg.png';
import NumberCard from '@/app/[lang]/(home)/components/Numbers/NumberCard';
import UserSharingIcon from '@/components/icons/colored/UserSharingIcon';
import UserStarIcon from '@/components/icons/colored/UserStarIcon';
import FactoryIcon from '@/components/icons/colored/FactoryIcon';
import LearnIcon from '@/components/icons/colored/LearnIcon';
import MoneyBagIcon from '@/components/icons/colored/MoneyBagIcon';
import EcoEnergyIcon from '@/components/icons/colored/EcoEnergyIcon';
import RoundedPolygonFilter from '@/components/svg-filters/RoundedPolygonFilter';

export default function Index() {
  return (
    <section className={'relative  bg-[#F4F9F7]'}>
      <div className={'relative h-24 bg-[#F4F9F7]'}>
        <span className={'skewed-t block h-full w-full bg-[#F8FBF3]'}></span>
        <span
          className={
            'skewed absolute top-0 block h-full w-full bg-gradient-to-l from-[rgba(115,174,40,1)] to-[rgba(241,247,234,1)]'
          }
        ></span>
      </div>
      <div className={'container grid grid-cols-12 gap-6 pb-16'}>
        <div className={'col-span-12'}>
          <h2 className={'text-2xl font-bold text-black md:text-4xl'}>
            كفاءة في الأرقام
          </h2>
        </div>
        <div
          className={
            'col-span-full grid grid-cols-2 gap-4 md:gap-6 lg:col-span-7 xl:col-span-6'
          }
        >
          <NumberCard
            title={'توفير'}
            number={425}
            unit={'الف'}
            description={'برميل مكافئ يومياً'}
            Icon={MoneyBagIcon}
          />
          <NumberCard
            title={'تقليل انبعاث أكسيد الكربون'}
            number={51}
            unit={'مليون'}
            description={'طن مكافئ ثاني'}
            Icon={EcoEnergyIcon}
          />
          <NumberCard
            title={'تنفيذ'}
            number={9}
            description={'حملة توعوية'}
            hasPlus
            Icon={UserSharingIcon}
          />
          <NumberCard
            title={'تأهيل'}
            number={940}
            description={'مهني معتمد'}
            hasPlus
            Icon={UserStarIcon}
          />
          <NumberCard
            title={'اعتماد'}
            number={5}
            description={'مصانع'}
            Icon={FactoryIcon}
          />
          <NumberCard
            title={'تطوير'}
            number={17}
            description={'برنامج تدريبي'}
            hasPlus
            Icon={LearnIcon}
          />
        </div>
        <div className={'relative hidden lg:col-span-5 lg:block xl:col-span-6'}>
          <div
            className={'relative z-10 h-full'}
            style={{
              filter: "url('#flt_tag')",
            }}
          >
            <Image
              src={NumbersImage}
              alt={'numbers'}
              width={625}
              height={580}
              className={'h-full w-full object-cover'}
              style={{
                clipPath: 'polygon(0 12%, 100% 0, 100% 100%, 0 88%)',
              }}
            />
            <RoundedPolygonFilter />
          </div>
          <div
            className={
              'glow absolute left-[40%] top-1/2 z-0 h-3/5 w-4/5 -translate-x-1/2 -translate-y-1/2'
            }
          ></div>
        </div>
      </div>
      <div className={'relative h-24 bg-[#F4F9F7]'}>
        <span
          className={
            'skewed absolute top-0 block h-full w-full bg-gradient-to-l from-[rgba(115,174,40,1)] to-[rgba(241,247,234,1)]'
          }
        ></span>
        <span
          className={'skewed-b absolute top-0 block h-full w-full bg-[#F7F9FA]'}
        ></span>
      </div>
    </section>
  );
}
