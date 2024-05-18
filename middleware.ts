import { NextRequest, NextResponse } from 'next/server';
import { fallbackLng, languages } from '@/app/i18n/settings';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = languages.some(
    (language) =>
      pathname.startsWith(`/${language}/`) || pathname === `/${language}`
  );
  if (pathnameHasLocale) return;
  request.nextUrl.pathname = `/${fallbackLng}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // matcher: '/:lng*'
  matcher: [
    '/((?!api|_next/static|_next/image|assets|videos|favicon.ico|sw.js).*)',
  ],
};
