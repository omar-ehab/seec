import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header/PageHeader';
import SubLinks from '@/app/[lang]/(about)/components/SubLinks';
import FooterCta from '@/components/footer-cta';
import Image from 'next/image';
import PatternImage from '@/app/[lang]/(about)/board-members/images/pattern.png';
import MemberCard from '@/app/[lang]/(about)/board-members/MemberCard';
import FirstImage from '@/app/[lang]/(about)/board-members/images/1.png';
import SecondImage from '@/app/[lang]/(about)/board-members/images/2.png';
import ThirdImage from '@/app/[lang]/(about)/board-members/images/3.png';
import FourthImage from '@/app/[lang]/(about)/board-members/images/4.png';
import FifthImage from '@/app/[lang]/(about)/board-members/images/5.png';
import SixthImage from '@/app/[lang]/(about)/board-members/images/6.png';
import SeventhImage from '@/app/[lang]/(about)/board-members/images/7.png';
import eighthImage from '@/app/[lang]/(about)/board-members/images/8.png';
import ninthImage from '@/app/[lang]/(about)/board-members/images/9.png';
import tenthImage from '@/app/[lang]/(about)/board-members/images/10.png';
import eleventhImage from '@/app/[lang]/(about)/board-members/images/11.png';
import twelfthImage from '@/app/[lang]/(about)/board-members/images/12.png';
import thirteenthImage from '@/app/[lang]/(about)/board-members/images/13.png';
import fourteenthImage from '@/app/[lang]/(about)/board-members/images/14.png';
import fifteenthImage from '@/app/[lang]/(about)/board-members/images/15.png';
import sixteenthImage from '@/app/[lang]/(about)/board-members/images/16.png';
import seventeenthImage from '@/app/[lang]/(about)/board-members/images/17.png';
import eighteenthImage from '@/app/[lang]/(about)/board-members/images/18.png';
import nineteenthImage from '@/app/[lang]/(about)/board-members/images/19.png';
import twentiethImage from '@/app/[lang]/(about)/board-members/images/20.png';
import twentyFirstImage from '@/app/[lang]/(about)/board-members/images/21.png';
import twentySecondImage from '@/app/[lang]/(about)/board-members/images/22.png';
import twentyThirdImage from '@/app/[lang]/(about)/board-members/images/23.png';

type Props = {
  params: {
    lang: LangType;
  };
};
export default function BoardMembersPage({ params: { lang } }: Props) {
  return (
    <>
      <Navbar lang={lang} />
      <PageHeader
        title='مجلس الإدارة'
        breadcrumbItems={[
          { title: 'الرئيسية', href: `/${lang}` },
          { title: 'مجلس الإدارة' },
        ]}
      >
        <SubLinks lang={lang} activeTab='board-members' />
      </PageHeader>
      <section className={'relative overflow-hidden'}>
        <Image
          src={PatternImage}
          alt=''
          className={'absolute inset-0 z-0 h-full w-full'}
        />
        <div className={'container relative z-10 pt-16'}>
          <div className={'mb-16 flex w-full items-center justify-center'}>
            <MemberCard
              image={FirstImage}
              size='lg'
              title='صاحب السمو الملكي الأمير'
              name='عبدالعزيز بن سلمان بن عبدالعزيز'
              position='وزارة الطاقة - وزير الطاقة رئيس مجلس الإدارة'
            />
          </div>
          <div
            className={
              'mb-16 flex w-full flex-wrap items-start justify-evenly gap-x-1 gap-y-6 px-6 md:px-32'
            }
          >
            <MemberCard
              image={SecondImage}
              size='sm'
              title='معالي الدكتور'
              name='سعد بن عثمان القصبي'
              position='عضو - الهيئة السعودية للمواصفات والمقاييس والجودة'
            />
            <MemberCard
              image={ThirdImage}
              size='sm'
              title='معالي الدكتور'
              name='خالد بن محمد السالم'
              position='عضو - وزارة الصناعة والثروة المعدنية'
            />
            <MemberCard
              image={FourthImage}
              size='sm'
              title='معالي الدكتور'
              name='عبدالله بن أحمد المغلوث'
              position='عضو - وزارة الإعلام'
            />
          </div>
          <div
            className={
              'grid w-full grid-cols-2 items-start gap-x-6 gap-y-16 pb-28 sm:grid-cols-3'
            }
          >
            <MemberCard
              image={FifthImage}
              size='sm'
              title='الدكتور'
              name='محمد بن إبراهيم السعود'
              position='عضو - وزارة البيئة والمياه والزراعة'
              className='w-full'
            />
            <MemberCard
              image={SixthImage}
              size='sm'
              title='المهندس'
              name='يحيى بن إبراهيم عبده'
              position='عضو - وزارة التجارة'
              className='w-full'
            />
            <MemberCard
              image={SeventhImage}
              size='sm'
              title='المهندس'
              name='ماجد بن عبدالله المبدل'
              position='عضو - ووزارة الشؤون البلدية والقروية والإسكان'
              className='w-full'
            />
            <MemberCard
              image={eighthImage}
              size='sm'
              title='الأستاذ'
              name='إبراهيم بن صالح الدويش'
              position='عضو - وزارة المالية'
              className='w-full'
            />
            <MemberCard
              image={ninthImage}
              size='sm'
              title='المهندس'
              name='أيمن بن إسحاق أفغاني'
              position='عضو - وزارة الاقتصاد والتخطيط'
              className='w-full'
            />
            <MemberCard
              image={tenthImage}
              size='sm'
              title='المهندس'
              name='أحمد بن موسى الزهراني'
              position='عضو -وزارة الطاقة'
              className='w-full'
            />
            <MemberCard
              image={eleventhImage}
              size='sm'
              title='الدكتور'
              name='طلال بن أحمد السديري'
              position='عضو - مدينة الملك عبدالعزيز للعلوم والتقنية'
              className='w-full'
            />
            <MemberCard
              image={twelfthImage}
              size='sm'
              title='المهندس'
              name='خالد بن إبراهيم السلطان'
              position='عضو - وزارة النقل والخدمات اللوجستية'
              className='w-full'
            />
            <MemberCard
              size='sm'
              title='المهندس'
              name='عبدالعزيز بن ماجد الأحمدي'
              position='عضو - وزارة الصناعة والثروة المعدنية'
              className='w-full'
            />
            <MemberCard
              image={thirteenthImage}
              size='sm'
              title='المهندس'
              name='محمد بن علي القحطاني'
              position='عضو - الهيئة الملكية للجبيل وينبع'
              className='w-full'
            />
            <MemberCard
              image={fourteenthImage}
              size='sm'
              title='المهندس'
              name='علي بن سعيد الغامدي'
              position='عضو - المركز الوطني للرقابة على الالتزام البيئي'
              className='w-full'
            />
            <MemberCard
              image={fifteenthImage}
              size='sm'
              title='الأستاذ'
              name='عبدالله بن محمد السدحان'
              position='عضو - الهيئة العامة للزكاة والضريبة والجمارك'
              className='w-full'
            />
            <MemberCard
              image={sixteenthImage}
              size='sm'
              title='الأستاذ'
              name='عبداالله بن ناصر السرحان'
              position='عضو - وزارة الاقتصاد والتخطيط'
              className='w-full'
            />
            <MemberCard
              size='sm'
              title='المهندس'
              name='وليد بن عبداللطيف النعيم'
              position='عضو - شركة أرامكو السعودية'
              className='w-full'
            />
            <MemberCard
              image={seventeenthImage}
              size='sm'
              title='الدكتور'
              name='فهد بن عبدالعزيز الشريهي'
              position='عضو - الشركة السعودية للصناعات الأساسية (سابك)'
              className='w-full'
            />
            <MemberCard
              image={eighteenthImage}
              size='sm'
              title='الأستاذ'
              name='ناصر بن عبداالله الغامدي'
              position='عضو - مدير عام المركز السعودي لكفاءة الطاقة'
              className='w-full'
            />
            <MemberCard
              image={nineteenthImage}
              size='sm'
              title='المهندس'
              name='خالد بن حمد القنون'
              position='عضو - مدينة الملك عبدالعزيز للعلوم والتقنية'
              className='w-full'
            />
            <MemberCard
              image={twentiethImage}
              size='sm'
              title='المهندس'
              name='حسين بن جنيد شبلي'
              position='عضو - مدينة الملك عبدالله للطاقة الذرية والمتجددة'
              className='w-full'
            />
            <MemberCard
              image={twentyFirstImage}
              size='sm'
              title='الأستاذ'
              name='عبداالله بن ناصر السرحان'
              position='عضو مستقل'
              className='w-full'
            />
            <MemberCard
              image={twentySecondImage}
              size='sm'
              title='المهندس'
              name='مازن بن محمد جوهر'
              position='عضو مستقل'
              className='w-full'
            />
            <MemberCard
              image={twentyThirdImage}
              size='sm'
              title='المهندس'
              name='عمر بن صالح بازهير'
              position='عضو مستقل'
              className='w-full'
            />
          </div>
        </div>
      </section>
      <FooterCta lastUpdateDate={'12/5/2024'} className={'container mb-24'} />
    </>
  );
}
