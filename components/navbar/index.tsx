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

type Props = {
  lang: LangType;
  className?: string;
};
export default function Navbar({ lang, className }: Props) {
  const pathname = usePathname();
  const controls = useAnimationControls();
  const [isTransparent, setIsTransparent] = useState<boolean>(
    pathname === `/${lang}`
  );
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    controls
      .start({
        height: activeTab ? '10.75rem' : 0,
        transition: { duration: 0.2 },
      })
      .then(() => {
        if (activeTab === null) {
          setIsTransparent(true);
        }
      });
  }, [activeTab, controls]);

  const openMenu = (activeTab: string) => {
    setActiveTab((oldTab) => {
      if (oldTab === activeTab) {
        return null;
      }
      setIsTransparent(false);
      return activeTab;
    });
  };

  return (
    <>
      <nav
        className={cn(
          'relative z-20 flex h-[4.5rem] w-full items-center justify-between bg-white px-[5.25rem]',
          className,
          {
            'bg-[rgba(0,0,0,.25)]': isTransparent,
          }
        )}
        role='navigation'
        aria-label='Main Navigation'
      >
        <div className={'flex h-full grow items-center gap-8'}>
          <Link href={`/${lang}`}>
            <Image
              priority
              src={isTransparent ? WhiteLogo : ColoredLogo}
              alt={'SEEC'}
            />
          </Link>
          <ul className={'flex h-full items-center gap-6'}>
            <li
              className={'flex h-full flex-col items-center justify-center'}
              role='listitem'
            >
              <Link
                href={`/${lang}`}
                className={cn('', {
                  'text-[#7E8989]': !isTransparent && pathname !== `/${lang}`,
                  'text-black': !isTransparent && pathname === `/${lang}`,
                  'text-white/75': isTransparent && pathname !== `/${lang}`,
                  'text-white': isTransparent && pathname === `/${lang}`,
                })}
              >
                الرئيسية
              </Link>
            </li>
            <li
              className={'flex h-full flex-col items-center justify-center'}
              role='listitem'
            >
              <button
                type={'button'}
                className={cn('flex grow items-center gap-1', {
                  'text-[#7E8989] hover:text-black': !isTransparent,
                  'text-white/75 hover:text-white': isTransparent,
                })}
                onClick={() => openMenu('about_center')}
              >
                <span>عن المركز</span>
                <ArrowDownIcon
                  size={16}
                  className={cn('mt-2 transition-transform', {
                    'rotate-180': activeTab === 'about_center',
                  })}
                />
              </button>
              {activeTab === 'about_center' && (
                <motion.span
                  layoutId='bubble'
                  className='block h-[2px] w-full rounded-full bg-[#006F59]'
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </li>
            <li
              className={'flex h-full flex-col items-center justify-center'}
              role='listitem'
            >
              <Link
                href={'/'}
                className={cn('', {
                  'text-[#7E8989] hover:text-black': !isTransparent,
                  'text-white/75 hover:text-white': isTransparent,
                })}
              >
                الخدمات الإلكترونية
              </Link>
            </li>
            <li
              className={'flex h-full flex-col items-center justify-center'}
              role='listitem'
            >
              <Link
                href={'/'}
                className={cn('', {
                  'text-[#7E8989] hover:text-black': !isTransparent,
                  'text-white/75 hover:text-white': isTransparent,
                })}
              >
                اللوائح والانظمة
              </Link>
            </li>
            <li
              className={'flex h-full flex-col items-center justify-center'}
              role='listitem'
            >
              <button
                type={'button'}
                className={cn('flex grow items-center gap-1', {
                  'text-[#7E8989] hover:text-black': !isTransparent,
                  'text-white/75 hover:text-white': isTransparent,
                })}
                onClick={() => openMenu('media_center')}
              >
                <span>المركز الإعلامي</span>
                <ArrowDownIcon
                  size={16}
                  className={cn('mt-2 transition-transform', {
                    'rotate-180': activeTab === 'media_center',
                  })}
                />
              </button>
              {activeTab === 'media_center' && (
                <motion.span
                  layoutId='bubble'
                  className='block h-[2px] w-full rounded-full bg-[#006F59]'
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </li>
            <li
              className={'flex h-full flex-col items-center justify-center'}
              role='listitem'
            >
              <Link
                href={'/'}
                className={cn('', {
                  'text-[#7E8989] hover:text-black': !isTransparent,
                  'text-white/75 hover:text-white': isTransparent,
                })}
              >
                التوظيف
              </Link>
            </li>
            <li
              className={'flex h-full flex-col items-center justify-center'}
              role='listitem'
            >
              <Link
                href={'/'}
                className={cn('', {
                  'text-[#7E8989] hover:text-black': !isTransparent,
                  'text-white/75 hover:text-white': isTransparent,
                })}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
        <Actions lang={lang} isTransparent={isTransparent} />
      </nav>
      <motion.div
        initial={{ height: 0 }}
        animate={controls}
        className={cn('relative z-20 w-full overflow-hidden bg-white')}
      >
        <div className={'h-full w-full px-[5.25rem] py-6'}>
          <ul
            className={cn(
              'flex h-full w-[600px] flex-col flex-wrap justify-start gap-x-6 gap-y-2',
              {
                'mr-[200px]': activeTab === 'about_center',
                'mr-[558px]': activeTab === 'media_center',
              }
            )}
            role='list'
          >
            <li className={'w-[164px]'} role='listitem'>
              <Link
                href={`/${lang}`}
                className={
                  'block w-full rounded p-2 text-sm leading-5 text-black hover:bg-primary/5 hover:font-medium hover:text-primary'
                }
              >
                إنشاء المركز
              </Link>
            </li>
            <li className={'w-[164px]'} role='listitem'>
              <Link
                href={`/${lang}`}
                className={
                  'block w-full rounded p-2 text-sm leading-5 text-black hover:bg-primary/5 hover:font-medium hover:text-primary'
                }
              >
                استراتيجية المركز
              </Link>
            </li>
            <li className={'w-[164px]'} role='listitem'>
              <Link
                href={`/${lang}`}
                className={
                  'block w-full rounded p-2 text-sm leading-5 text-black hover:bg-primary/5 hover:font-medium hover:text-primary'
                }
              >
                اختصاصات المركز
              </Link>
            </li>
            <li className={'w-[164px]'} role='listitem'>
              <Link
                href={`/${lang}`}
                className={
                  'block w-full rounded p-2 text-sm leading-5 text-black hover:bg-primary/5 hover:font-medium hover:text-primary'
                }
              >
                مجلس الإدارة
              </Link>
            </li>
            <li className={'w-[164px]'} role='listitem'>
              <Link
                href={`/${lang}`}
                className={
                  'block w-full rounded p-2 text-sm leading-5 text-black hover:bg-primary/5 hover:font-medium hover:text-primary'
                }
              >
                الهيكل التنظيمي
              </Link>
            </li>
            <li className={'w-[164px]'} role='listitem'>
              <Link
                href={`/${lang}`}
                className={
                  'block w-full rounded p-2 text-sm leading-5 text-black hover:bg-primary/5 hover:font-medium hover:text-primary'
                }
              >
                قطاعات كفاءة الطاقة
              </Link>
            </li>
            <li className={'w-[164px]'} role='listitem'>
              <Link
                href={`/${lang}`}
                className={
                  'block w-full rounded p-2 text-sm leading-5 text-black hover:bg-primary/5 hover:font-medium hover:text-primary'
                }
              >
                ممكنات كفاءة الطاقة
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
