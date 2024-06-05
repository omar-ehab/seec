'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import WhiteLogo from '@/public/logo_white.svg';
import ColoredLogo from '@/public/logo_colored.svg';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Actions from '@/components/navbar/Actions';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon';
import { motion, useAnimationControls } from 'framer-motion';

const isAboutCenterActive = (lang: LangType, pathname: string) =>
  pathname === `/${lang}/about-center` ||
  pathname === `/${lang}/center-strategy` ||
  pathname === `/${lang}/center-specializations` ||
  pathname === `/${lang}/board-members` ||
  pathname === `/${lang}/energy-efficiency-sectors` ||
  pathname === `/${lang}/energy-efficiency-enablers`;

type Props = {
  lang: LangType;
  className?: string;
};
export default function Navbar({ lang, className }: Props) {
  const pathname = usePathname();
  const controls = useAnimationControls();

  const [isTransparent, setIsTransparent] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  useEffect(() => {
    controls
      .start({
        height: activeTab ? '10.75rem' : 0,
        transition: { duration: 0.2 },
      })
      .then(() => {
        if (pathname === `/${lang}`) {
          setIsTransparent(true);
        } else {
          setIsTransparent(false);
        }
      });
  }, [activeTab, controls]);

  const openMenu = (activeTab: string) => {
    setActiveTab((oldTab) => {
      if (oldTab === activeTab) {
        return null;
      }
      if (pathname === `/${lang}`) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
      return activeTab;
    });
  };
  return (
    <>
      <nav
        className={cn('relative z-20 h-[4.5rem] w-full bg-white', className, {
          'bg-[rgba(0,0,0,.45)]': isTransparent,
        })}
        role='navigation'
        aria-label='Main Navigation'
      >
        <div className='container grid h-full grid-cols-[115px,75px,170px,141px,122px,137px,77px,92px,1fr,196px] items-center justify-between'>
          <Link href={`/${lang}`}>
            <Image
              priority
              src={isTransparent ? WhiteLogo : ColoredLogo}
              alt={'SEEC'}
            />
          </Link>
          <ul
            className={'col-span-7 col-start-2 flex h-full items-center gap-3'}
          >
            <li
              className={
                'flex h-full flex-col items-center justify-center px-3'
              }
              role='listitem'
            >
              <Link
                href={`/${lang}`}
                className={cn('', {
                  'text-sub_p': !isTransparent && pathname !== `/${lang}`,
                  'text-black': !isTransparent && pathname === `/${lang}`,
                  'text-white/75': isTransparent && pathname !== `/${lang}`,
                  'text-white': isTransparent && pathname === `/${lang}`,
                })}
              >
                الرئيسية
              </Link>
            </li>
            <li
              className={'flex flex-col items-center justify-center'}
              role='listitem'
            >
              <button
                type={'button'}
                className={cn(
                  'relative flex h-12 grow items-center gap-1 px-3',
                  {
                    'text-sub_p hover:text-black': !isTransparent,
                    'text-white/75 hover:text-white': isTransparent,
                  }
                )}
                onClick={() => openMenu('about_center')}
              >
                {activeTab === 'about_center' ||
                pathname === `/${lang}/about-center` ? (
                  <motion.span
                    layoutId='bubble'
                    className='absolute -start-[2px] top-[1px] z-0 block h-full w-full rounded-lg bg-[#D7DAD7]/35'
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                ) : null}
                <span
                  className={cn({
                    'relative z-10 font-medium text-black': isAboutCenterActive(
                      lang,
                      pathname
                    ),
                  })}
                >
                  عن المركز
                </span>
                <ArrowDownIcon
                  size={16}
                  className={cn('mt-2 transition-transform', {
                    'rotate-180': activeTab === 'about_center',
                  })}
                />
              </button>
            </li>
            <li
              className={
                'flex h-full flex-col items-center justify-center px-3'
              }
              role='listitem'
            >
              <Link
                href={`/${lang}/online-services`}
                className={cn('', {
                  'text-sub_p hover:text-black': !isTransparent,
                  'text-white/75 hover:text-white': isTransparent,
                })}
              >
                الخدمات الإلكترونية
              </Link>
            </li>
            <li
              className={
                'flex h-full flex-col items-center justify-center px-3'
              }
              role='listitem'
            >
              <Link
                href={`/${lang}/rules`}
                className={cn('', {
                  'text-sub_p hover:text-black': !isTransparent,
                  'text-white/75 hover:text-white': isTransparent,
                  'font-medium text-black':
                    pathname === `/${lang}/rules` && !isTransparent,
                })}
              >
                اللوائح والانظمة
              </Link>
            </li>
            <li
              className={'flex flex-col items-center justify-center'}
              role='listitem'
            >
              <button
                type={'button'}
                className={cn(
                  'relative flex h-12 grow items-center gap-1 px-3',
                  {
                    'text-sub_p hover:text-black': !isTransparent,
                    'text-white/75 hover:text-white': isTransparent,
                  }
                )}
                onClick={() => openMenu('media_center')}
              >
                {activeTab === 'media_center' ||
                pathname === `/${lang}/media-center` ? (
                  <motion.span
                    layoutId='bubble'
                    className='absolute -start-[2px] top-[1px] z-0 block h-full w-full rounded-lg bg-[#D7DAD7]/35'
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                ) : null}
                <span className={'relative z-10'}>المركز الإعلامي</span>
                <ArrowDownIcon
                  size={16}
                  className={cn('mt-2 transition-transform', {
                    'rotate-180': activeTab === 'media_center',
                  })}
                />
              </button>
            </li>
            <li
              className={
                'flex h-full flex-col items-center justify-center px-3'
              }
              role='listitem'
            >
              <Link
                href={`/${lang}/careers`}
                className={cn('', {
                  'text-sub_p hover:text-black': !isTransparent,
                  'text-white/75 hover:text-white': isTransparent,
                })}
              >
                التوظيف
              </Link>
            </li>
            <li
              className={
                'flex h-full flex-col items-center justify-center px-3'
              }
              role='listitem'
            >
              <Link
                href={`/${lang}/contact-us`}
                className={cn('', {
                  'text-sub_p hover:text-black': !isTransparent,
                  'text-white/75 hover:text-white': isTransparent,
                })}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
          <Actions lang={lang} isTransparent={isTransparent} />
        </div>
      </nav>
      <motion.div
        initial={{ height: 0 }}
        animate={controls}
        className={cn('relative z-20 w-full overflow-hidden', {
          'bg-white': !isTransparent,
          'bg-[rgba(0,0,0,.45)]': isTransparent,
        })}
      >
        <div
          className={
            'container grid h-full grid-cols-[115px,75px,145px,141px,122px,137px,77px,92px,1fr,196px]'
          }
        >
          <ul
            className={cn(
              'grid grid-cols-[repeat(3,max-content)] grid-rows-[repeat(3,max-content)] gap-x-3 gap-y-2 py-6',
              {
                'col-start-3': activeTab === 'about_center',
                'col-start-6': activeTab === 'media_center',
              }
            )}
            role='list'
          >
            {activeTab === 'about_center' ? (
              <>
                <li className={'w-[164px]'} role='listitem'>
                  <Link
                    href={`/${lang}/about-center`}
                    className={cn(
                      'block rounded p-2 text-sm leading-5 hover:font-medium',
                      {
                        'text-white hover:bg-primary': isTransparent,
                        'text-black hover:bg-primary/5 hover:text-primary':
                          !isTransparent,
                        'bg-primary/5 font-medium text-black text-primary':
                          pathname === `/${lang}/about-center`,
                      }
                    )}
                  >
                    إنشاء المركز
                  </Link>
                </li>
                <li className={'w-[164px]'} role='listitem'>
                  <Link
                    href={`/${lang}/center-strategy`}
                    className={cn(
                      'block rounded p-2 text-sm leading-5 hover:font-medium',
                      {
                        'text-white hover:bg-primary': isTransparent,
                        'text-black hover:bg-primary/5 hover:text-primary':
                          !isTransparent,
                        'bg-primary/5 font-medium text-black text-primary':
                          pathname === `/${lang}/center-strategy`,
                      }
                    )}
                  >
                    استراتيجية المركز
                  </Link>
                </li>
                <li className={'w-[164px]'} role='listitem'>
                  <Link
                    href={`/${lang}/center-specializations`}
                    className={cn(
                      'block rounded p-2 text-sm leading-5 hover:font-medium',
                      {
                        'text-white hover:bg-primary': isTransparent,
                        'text-black hover:bg-primary/5 hover:text-primary':
                          !isTransparent,
                        'bg-primary/5 font-medium text-black text-primary':
                          pathname === `/${lang}/center-specializations`,
                      }
                    )}
                  >
                    اختصاصات المركز
                  </Link>
                </li>
                <li className={'w-[164px]'} role='listitem'>
                  <Link
                    href={`/${lang}/board-members`}
                    className={cn(
                      'block rounded p-2 text-sm leading-5 hover:font-medium',
                      {
                        'text-white hover:bg-primary': isTransparent,
                        'text-black hover:bg-primary/5 hover:text-primary':
                          !isTransparent,
                        'bg-primary/5 font-medium text-black text-primary':
                          pathname === `/${lang}/board-members`,
                      }
                    )}
                  >
                    مجلس الإدارة
                  </Link>
                </li>
                <li className={'w-[164px]'} role='listitem'>
                  <Link
                    href={`/${lang}/energy-efficiency-sectors`}
                    className={cn(
                      'block rounded p-2 text-sm leading-5 hover:font-medium',
                      {
                        'text-white hover:bg-primary': isTransparent,
                        'text-black hover:bg-primary/5 hover:text-primary':
                          !isTransparent,
                        'bg-primary/5 font-medium text-black text-primary':
                          pathname === `/${lang}/energy-efficiency-sectors`,
                      }
                    )}
                  >
                    قطاعات كفاءة الطاقة
                  </Link>
                </li>
                <li className={'w-[164px]'} role='listitem'>
                  <Link
                    href={`/${lang}/energy-efficiency-enablers`}
                    className={cn(
                      'block rounded p-2 text-sm leading-5 hover:font-medium',
                      {
                        'text-white hover:bg-primary': isTransparent,
                        'text-black hover:bg-primary/5 hover:text-primary':
                          !isTransparent,
                        'bg-primary/5 font-medium text-black text-primary':
                          pathname === `/${lang}/energy-efficiency-enablers`,
                      }
                    )}
                  >
                    ممكنات كفاءة الطاقة
                  </Link>
                </li>
              </>
            ) : activeTab === 'media_center' ? (
              <>
                <li className={'w-[164px]'} role='listitem'>
                  <Link
                    href={`/${lang}/about-center`}
                    className={cn(
                      'block rounded p-2 text-sm leading-5 hover:font-medium',
                      {
                        'text-white hover:bg-primary': isTransparent,
                        'text-black hover:bg-primary/5 hover:text-primary':
                          !isTransparent,
                      }
                    )}
                  >
                    إنشاء المركز
                  </Link>
                </li>
                <li className={'w-[164px]'} role='listitem'>
                  <Link
                    href={`/${lang}`}
                    className={cn(
                      'block rounded p-2 text-sm leading-5 hover:font-medium',
                      {
                        'text-white hover:bg-primary': isTransparent,
                        'text-black hover:bg-primary/5 hover:text-primary':
                          !isTransparent,
                      }
                    )}
                  >
                    استراتيجية المركز
                  </Link>
                </li>
                <li className={'w-[164px]'} role='listitem'>
                  <Link
                    href={`/${lang}`}
                    className={cn(
                      'block rounded p-2 text-sm leading-5 hover:font-medium',
                      {
                        'text-white hover:bg-primary': isTransparent,
                        'text-black hover:bg-primary/5 hover:text-primary':
                          !isTransparent,
                      }
                    )}
                  >
                    اختصاصات المركز
                  </Link>
                </li>
                <li className={'w-[164px]'} role='listitem'>
                  <Link
                    href={`/${lang}`}
                    className={cn(
                      'block rounded p-2 text-sm leading-5 hover:font-medium',
                      {
                        'text-white hover:bg-primary': isTransparent,
                        'text-black hover:bg-primary/5 hover:text-primary':
                          !isTransparent,
                      }
                    )}
                  >
                    مجلس الإدارة
                  </Link>
                </li>
                <li className={'w-[164px]'} role='listitem'>
                  <Link
                    href={`/${lang}`}
                    className={cn(
                      'block rounded p-2 text-sm leading-5 hover:font-medium',
                      {
                        'text-white hover:bg-primary': isTransparent,
                        'text-black hover:bg-primary/5 hover:text-primary':
                          !isTransparent,
                      }
                    )}
                  >
                    الهيكل التنظيمي
                  </Link>
                </li>
                <li className={'w-[164px]'} role='listitem'>
                  <Link
                    href={`/${lang}`}
                    className={cn(
                      'block rounded p-2 text-sm leading-5 hover:font-medium',
                      {
                        'text-white hover:bg-primary': isTransparent,
                        'text-black hover:bg-primary/5 hover:text-primary':
                          !isTransparent,
                      }
                    )}
                  >
                    قطاعات كفاءة الطاقة
                  </Link>
                </li>
                <li className={'w-[164px]'} role='listitem'>
                  <Link
                    href={`/${lang}`}
                    className={cn(
                      'block rounded p-2 text-sm leading-5 hover:font-medium',
                      {
                        'text-white hover:bg-primary': isTransparent,
                        'text-black hover:bg-primary/5 hover:text-primary':
                          !isTransparent,
                      }
                    )}
                  >
                    ممكنات كفاءة الطاقة
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </motion.div>
    </>
  );
}
