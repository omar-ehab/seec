'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import FirstImage from '@/app/[lang]/(media)/media-library/images/1.png';
import SecondImage from '@/app/[lang]/(media)/media-library/images/2.png';
import ThirdImage from '@/app/[lang]/(media)/media-library/images/3.png';
import FourthImage from '@/app/[lang]/(media)/media-library/images/4.png';
import FifthImage from '@/app/[lang]/(media)/media-library/images/5.png';
import SixthImage from '@/app/[lang]/(media)/media-library/images/6.png';
import SingleAlbumImage from '@/app/[lang]/(media)/media-library/components/Images/SingleAlbumImage';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import AlbumSlider from '@/app/[lang]/(media)/media-library/components/Slider';

export default function Albums() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);
  const handleOpenAlbum = (id: string) => {
    setSelectedAlbumId(id);
    setDialogOpen(true);
  };
  return (
    <>
      <div
        className={
          'mb-14 xs:gap-4 xs:[column-count:2]  md:[column-count:3] lg:gap-6'
        }
      >
        <SingleAlbumImage id={'1'} image={FirstImage} number_of_inner_images={3} openGallery={handleOpenAlbum} />
        <SingleAlbumImage id={'2'} image={SecondImage} number_of_inner_images={3} openGallery={handleOpenAlbum} />
        <SingleAlbumImage id={'3'} image={ThirdImage} number_of_inner_images={3} openGallery={handleOpenAlbum} />
        <SingleAlbumImage id={'4'} image={FourthImage} number_of_inner_images={3} openGallery={handleOpenAlbum} />
        <SingleAlbumImage id={'5'} image={FifthImage} number_of_inner_images={3} openGallery={handleOpenAlbum} />
        <SingleAlbumImage id={'6'} image={SixthImage} number_of_inner_images={3} openGallery={handleOpenAlbum} />
      </div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className={'shadow-none max-w-full h-full overflow-hidden p-0 bg-transparent border-none'}>
          <AlbumSlider setDialogOpen={setDialogOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
}