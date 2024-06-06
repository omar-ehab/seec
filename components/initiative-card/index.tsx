import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  image: any;
  isReversed?: boolean;
};
export default function InitiativeCard({
  title,
  description,
  image,
  isReversed = false,
}: Props) {
  return (
    <div
      className={
        'about-center__list-bullet-gradient grid grid-cols-5 overflow-hidden rounded-3xl bg-white'
      }
    >
      {isReversed ? (
        <>
          <div className={'col-span-2 h-[350px] w-full'}>
            <Image
              src={image}
              alt={title}
              width={500}
              className={'h-full w-full object-cover'}
            />
          </div>
          <div
            className={'col-span-3 flex flex-col justify-center gap-4 px-12'}
          >
            <p className={'text-lg font-medium text-black'}>{title}</p>
            <p className={'text-sub_p'}>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div
            className={'col-span-3 flex flex-col justify-center gap-4 px-12'}
          >
            <p className={'text-lg font-medium text-black'}>{title}</p>
            <p className={'text-sub_p'}>{description}</p>
          </div>
          <div className={'col-span-2 h-[350px] w-full'}>
            <Image
              src={image}
              alt={title}
              width={500}
              className={'h-full w-full object-cover'}
            />
          </div>
        </>
      )}
    </div>
  );
}
