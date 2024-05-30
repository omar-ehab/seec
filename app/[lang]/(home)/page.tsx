import Header from '@/components/header';
import MissionAndVision from '@/app/[lang]/(home)/components/MissionAndVision';
import CenterValues from '@/app/[lang]/(home)/components/CenterValues';
import Numbers from '@/app/[lang]/(home)/components/Numbers';
import Services from '@/app/[lang]/(home)/components/Services';
import News from '@/app/[lang]/(home)/components/News';
import Partners from '@/app/[lang]/(home)/components/Partners';


type Props = {
  params: {
    lang: LangType;
  };
};
export default function Home({ params: { lang } }: Props) {
  return (
    <>
      <Header lang={lang} />
      <MissionAndVision />
      <CenterValues />
      <Numbers />
      <Services />
      <News />
      <Partners />
    </>
  );
}
