'use client';

import { Button } from '@/components/ui/button';
import ImageIcon from '@/components/icons/ImageIcon';
import Image from 'next/image';

type Props = {
  id: string;
  image: any;
  number_of_inner_images: number;
  openGallery: (id: string) => void;
};
export default function SingleAlbumImage({ id, image, number_of_inner_images, openGallery }: Props) {
  return (
    <div
      className={
        'relative overflow-hidden rounded-2xl [&:not(:last-child)]:mb-4 lg:[&:not(:last-child)]:mb-6 '
      }
    >
      <span className={'absolute inset-0 z-10 bg-black/15'}></span>
      <Button
        variant={'outline'}
        className={
          'absolute start-4 top-4 z-20 flex items-center gap-1 border-none bg-black/70 px-1 text-white hover:bg-black/60 hover:text-white'
        }
        onClick={() => openGallery(id)}
      >
        <ImageIcon className={'text-white'} />
        <span className={'text-base font-normal'}>{number_of_inner_images}</span>
      </Button>
      <Image
        src={image}
        alt={'Sixth Image'}
        className={'h-full w-full object-cover'}
      />
    </div>
  );
}