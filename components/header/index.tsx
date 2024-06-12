import Navbar from '@/components/navbar';
import Slider from '@/components/header/Slider';

type Props = {
  lang: LangType;
};
export default function Header({ lang }: Props) {
  return (
    <header className='relative h-[100dvh]'>
      <Navbar lang={lang} />
      <Slider lang={lang} />
    </header>
  );
}
