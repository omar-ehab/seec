import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { BreadcrumbItemType } from '@/types/breadcrumb-item';

type Props = {
  items: BreadcrumbItemType[];
  className?: string;
};

export default function Breadcrumbs({ items, className }: Props) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, idx) => (
          <>
            <BreadcrumbItem key={item.title}>
              {idx === items.length - 1 ? (
                <BreadcrumbPage className={'font-medium text-[#7E8989]'}>
                  {item.title}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href} className={'text-[#7E8989]'}>
                  {item.title}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {idx !== items.length - 1 && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
