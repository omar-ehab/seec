import LanguageSwitcher from '@/components/navbar/Actions/LanguageSwitcher';
import Settings from '@/components/navbar/Actions/Settings';

type Props = {
  lang: LangType;
  isTransparent: boolean;
};
export default function Actions({ lang, isTransparent }: Props) {
  return (
    <div className='flex items-center justify-end gap-4'>
      <LanguageSwitcher lang={lang} isTransparent={isTransparent} />
      <Settings isTransparent={isTransparent} />
    </div>
  );
}
