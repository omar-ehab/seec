'use client';
import { usePathname, useSearchParams } from 'next/navigation';

export default function SubPage() {
  const pathname = usePathname();
  const params = useSearchParams();

  if (params.get('sub_type') === null) {
    return (
      <div className={'mt-4'}>
        <h4 className={'mb-6 text-2xl font-medium text-black'}>
          خطوات التسجيل بالخدمة
        </h4>
        <ul className={'flex flex-col gap-4'}>
          <li className={'flex items-center gap-4'}>
            <span
              className={
                'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
              }
            >
              1
            </span>
            <p>الدخول على الخدمة من خلال الضغط على بدء الخدمة.</p>
          </li>
          <li className={'flex items-center gap-4'}>
            <span
              className={
                'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
              }
            >
              2
            </span>
            <p>
              اختر "بادر بالتسجيل" ثم قم بإنشاء حساب لمنشأتك، ومن ثم قم باستكمال
              البيانات المطلوب.
            </p>
          </li>
          <li className={'flex items-center gap-4'}>
            <span
              className={
                'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
              }
            >
              3
            </span>
            <p>الدخول الى لوحة التحكم بحسابك</p>
          </li>
          <li className={'flex items-center gap-4'}>
            <span
              className={
                'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
              }
            >
              4
            </span>
            <p>قم باختيار أحد خيارات تنفيذ نظام إدارة الطاقة</p>
          </li>
          <li className={'flex items-center gap-4'}>
            <span
              className={
                'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
              }
            >
              5
            </span>
            <p>تسليم الوثائق والبيانات المطلوبة</p>
          </li>
          <li className={'flex items-center gap-4'}>
            <span
              className={
                'bullet-gradient flex size-8 items-center justify-center rounded-full text-sm font-medium text-black'
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
