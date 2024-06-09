import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  image: any;
};
export default function InitiativeCard({ title, description, image }: Props) {
  return (
    <div
      className={
        'about-center__list-bullet-gradient flex flex-col overflow-hidden rounded-3xl bg-white md:odd:flex-row-reverse  md:even:flex-row'
      }
    >
      <div className={'h-64 w-full md:h-[350px] md:w-[42%]'}>
        <Image
          src={image}
          alt={title}
          width={500}
          className={'h-full w-full object-cover'}
        />
      </div>
      <div
        className={
          'flex w-full flex-col justify-center gap-4 px-4 py-10 sm:p-12 md:w-[58%]'
        }
      >
        <p className={'text-lg font-medium text-black'}>{title}</p>
        <p className={'text-sm text-sub_p sm:text-base'}>{description}</p>
      </div>
    </div>
  );
}
