import Image from 'next/image';
import Subscribe from '@/components/footer/Subscribe';
import Link from 'next/link';
import TwitterIcon from '@/components/icons/TwitterIcon';
import YoutubeIcon from '@/components/icons/YoutubeIcon';
import LinedInIcon from '@/components/icons/LinedInIcon';
import VolumeUpIcon from '@/components/icons/VolumeUpIcon';
import EyeIcon from '@/components/icons/EyeIcon';
import SearchAddIcon from '@/components/icons/SearchAddIcon';
import RotateRightIcon from '@/components/icons/RotateRightIcon';
import Vision2030Image from '@/public/vision_2030.png';
import { Separator } from '@/components/ui/separator';
import FooterBg from './FooterBg';

export default function Footer() {
  return (
    <footer className={'-mt-24 overflow-hidden'}>
      <div className={'relative z-50 h-24 translate-y-24 bg-transparent'}>
        <span
          className={'skewed-t z-10 block h-full w-full scale-105 bg-[#F8FBF3]'}
        ></span>
        <span
          className={
            'skewed absolute top-0 block h-full w-full scale-110 bg-gradient-to-l from-[rgba(115,174,40,1)] to-[rgba(241,247,234,1)]'
          }
        ></span>
      </div>

      <div className={'relative h-full w-full'}>
        <span
          className={
            'absolute top-0 z-10 h-full w-full bg-gradient-to-b from-[rgba(115,174,40,1)] to-[rgba(0,111,89,1)] opacity-95'
          }
        ></span>
        <FooterBg />
        <div className={'relative z-10 pt-[196px]'}>
          <div className={'container px-6'}>
            <div
              className={
                'mb-8 flex w-full flex-col items-center justify-between gap-4 rounded-2xl md:py-[45px] lg:flex-row  lg:gap-0 lg:border lg:border-[rgba(255,255,255,.25)]  lg:px-[68px]'
              }
            >
              <div className='text-center lg:text-start'>
                <h3 className={'mb-4 text-2xl font-bold text-white'}>
                  تابع آخر أخبارنا
                </h3>
                <p className={'text-[#D7DAD7]'}>
                  تابع كل جديد عبر بريدك الإلكتروني
                </p>
              </div>
              <Subscribe />
            </div>
            <div
              className={
                'z-50 mb-12 grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6'
              }
            >
              <div className='md:order-0 order-2'>
                <p className={'mb-6 text-xl font-medium text-white'}>
                  روابط مهمة
                </p>
                <ul className={'flex flex-col gap-4'}>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>منصة ممكنات</Link>
                  </li>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>برنامج إدارة الطاقة</Link>
                  </li>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>
                      الشركة الوطنية لخدمات كفاءة الطاقة - ترشيد
                    </Link>
                  </li>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>الخدمات الإلكترونية</Link>
                  </li>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>رؤية المملكة 2030</Link>
                  </li>
                </ul>
              </div>
              <div className='md:order-0 order-1'>
                <p className={'mb-6 text-xl font-medium text-white'}>
                  اقسام الموقع
                </p>
                <ul className={'mb-4 flex flex-col gap-4'}>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>الرئيسية</Link>
                  </li>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>عن المركز</Link>
                  </li>
                </ul>
                <p className={'mb-4 text-xl font-medium text-white'}>
                  الخدمات الإلكترونية
                </p>
                <ul className={'flex flex-col gap-4'}>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>اللوائح والأنظمة</Link>
                  </li>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>المركز الإعلامي</Link>
                  </li>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>التوظيف</Link>
                  </li>
                </ul>
              </div>
              <div className='md:order-0 order-0'>
                <p className={'mb-6 text-xl font-medium text-white'}>
                  المساعدة والدعم
                </p>
                <ul className={'flex flex-col gap-4'}>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>تواصل معنا</Link>
                  </li>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>الأسئلة الشائعة</Link>
                  </li>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>اتفاقية مستوى الخدمة</Link>
                  </li>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>المشاركة الإلكترونية</Link>
                  </li>
                  <li className={'text-[#D7DAD7]'}>
                    <Link href={'#'}>الإحصاءات</Link>
                  </li>
                </ul>
              </div>
              <div className='md:order-0 order-3'>
                <p className={'mb-6 text-xl font-medium text-white'}>
                  معلومات التواصل
                </p>
                <div className={'mb-4'}>
                  <p className={'text-sm text-[#D7DAD7]'}>الرقم الموحد</p>
                  <p className={'text-white'}>920002724</p>
                </div>
                <div className={'mb-4'}>
                  <p className={'text-sm text-[#D7DAD7]'}>الموقع الجغرافي</p>
                  <p className={'text-white'}>الرياض-الميدنة الرقمية</p>
                </div>
                <div className={'mb-8'}>
                  <p className={'mb-2 text-sm text-[#D7DAD7]'}>تابعنا على</p>
                  <ul className={'flex items-center gap-4'}>
                    <li>
                      <Link
                        href={'#'}
                        className={
                          'bg group flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(202,214,219,.1)] hover:bg-white'
                        }
                      >
                        <TwitterIcon
                          className={'text-white group-hover:text-[#008E3D]'}
                          size={20}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'#'}
                        className={
                          'bg group flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(202,214,219,.1)] hover:bg-white'
                        }
                      >
                        <YoutubeIcon
                          className={'text-white group-hover:text-[#008E3D]'}
                          size={20}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'#'}
                        className={
                          'bg group flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(202,214,219,.1)] hover:bg-white'
                        }
                      >
                        <LinedInIcon
                          className={'text-white group-hover:text-[#008E3D]'}
                          size={20}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={''}>
                  <p className={'mb-4 text-xl font-medium text-white'}>
                    إمكانية الاستخدام والوصول
                  </p>
                  <ul className={'flex items-center gap-4'}>
                    <li>
                      <Link
                        href={'#'}
                        className={
                          'group flex h-8 w-8 items-center justify-center rounded-full border border-white hover:bg-white'
                        }
                      >
                        <VolumeUpIcon
                          className={'text-white group-hover:text-[#008E3D]'}
                          size={20}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'#'}
                        className={
                          'group flex h-8 w-8 items-center justify-center rounded-full border border-white hover:bg-white'
                        }
                      >
                        <EyeIcon
                          className={'text-white group-hover:text-[#008E3D]'}
                          size={20}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'#'}
                        className={
                          'group flex h-8 w-8 items-center justify-center rounded-full border border-white hover:bg-white'
                        }
                      >
                        <SearchAddIcon
                          className={'text-white group-hover:text-[#008E3D]'}
                          size={20}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'#'}
                        className={
                          'group flex h-8 w-8 items-center justify-center rounded-full border border-white hover:bg-white'
                        }
                      >
                        <RotateRightIcon
                          className={'text-white group-hover:text-[#008E3D]'}
                          size={20}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex w-full  flex-col items-center justify-between gap-4 bg-black/25 p-6 text-center md:px-20 lg:flex-row lg:gap-0 lg:py-2 lg:text-start'
            }
          >
            <div className={'flex flex-col gap-2 md:gap-1'}>
              <div className={'flex  items-center justify-center gap-4 '}>
                <Link
                  href={'#'}
                  className={'text-sm text-[#D7DAD7] hover:text-white'}
                >
                  سياسة الاستخدام
                </Link>
                <Separator
                  orientation={'vertical'}
                  className={'h-3 bg-[#D7DAD7]'}
                />
                <Link
                  href={'#'}
                  className={'text-sm text-[#D7DAD7] hover:text-white'}
                >
                  سياسة الخصوصية
                </Link>
                <Separator
                  orientation={'vertical'}
                  className={'h-3 bg-[#D7DAD7]'}
                />
                <Link
                  href={'#'}
                  className={
                    'hidden text-sm text-[#D7DAD7] hover:text-white md:block'
                  }
                >
                  حرية المعلومات
                </Link>
                <Separator
                  orientation={'vertical'}
                  className={'hidden h-3 bg-[#D7DAD7] md:block'}
                />
                <Link
                  href={'#'}
                  className={'text-sm text-[#D7DAD7] hover:text-white'}
                >
                  خارطة الموقع
                </Link>
              </div>
              <p className={'text-sm font-medium text-[#D7DAD7]'}>
                جميع الحقوق محفوظة للمركز السعودي لكفاءة الطاقة ©{' '}
                {new Date().getFullYear()}
              </p>
            </div>
            <div className={'m-0 lg:ml-[calc(25%-96px)]'}>
              <Image
                src={Vision2030Image}
                alt={'vision 2030'}
                width={81}
                height={56}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
