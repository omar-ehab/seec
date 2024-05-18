import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import React from 'react';
import { getDir } from '@/lib/utils';

const myFont = localFont({
  src: [
    {
      path: '../fonts/DIN_Next_LT_W23_Ultra_Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/DIN_Next_LT_W23_Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/DIN_Next_LT_W23_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/DIN_Next_LT_W23_Medium.otf',
      weight: '500',
      style: 'normal',
    },

    {
      path: '../fonts/DIN_Next_LT_W23_Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/DIN_Next_LT_W23_Black.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/DIN_Next_LT_W23_Heavy.otf',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'SEEC',
  description: 'SEEC Description',
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: LangType };
}>) {
  return (
    <html lang={lang} dir={getDir(lang)}>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
