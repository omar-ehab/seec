'use client';
import { usePathname, useSearchParams } from 'next/navigation';

export default function SubPage() {
  const params = useSearchParams();

  if (params.get('sub_type') === null) {
    return (
      <div className={'mt-4'}>
        <h4 className={'mb-6 text-xl font-medium text-black md:text-2xl'}>
          خطوات التسجيل بالخدمة
        </h4>
        <ul className={'flex flex-col gap-4 text-sm xs:text-base'}>
          <li className={'flex items-start gap-2  xs:gap-4'}>
            <span
              className={
                'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
              }
            >
              1
            </span>
            <p>الدخول على الخدمة من خلال الضغط على بدء الخدمة.</p>
          </li>
          <li className={'flex items-start gap-2  xs:gap-4'}>
            <span
              className={
                'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
              }
            >
              2
            </span>
            <p>
              اختر &quot;بادر بالتسجيل&quot; ثم قم بإنشاء حساب لمنشأتك، ومن ثم
              قم باستكمال البيانات المطلوب.
            </p>
          </li>
          <li className={'flex items-start gap-2  xs:gap-4'}>
            <span
              className={
                'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
              }
            >
              3
            </span>
            <p>الدخول الى لوحة التحكم بحسابك</p>
          </li>
          <li className={'flex items-start gap-2  xs:gap-4'}>
            <span
              className={
                'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
              }
            >
              4
            </span>
            <p>قم باختيار أحد خيارات تنفيذ نظام إدارة الطاقة</p>
          </li>
          <li className={'flex items-start gap-2  xs:gap-4'}>
            <span
              className={
                'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
              }
            >
              5
            </span>
            <p>تسليم الوثائق والبيانات المطلوبة</p>
          </li>
          <li className={'flex items-start gap-2  xs:gap-4'}>
            <span
              className={
                'bullet-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-medium text-black xs:size-8'
              }
            >
              6
            </span>
            <p>مراجعة المتطلبات من قبل المركز</p>
          </li>
        </ul>
      </div>
    );
  }
}
