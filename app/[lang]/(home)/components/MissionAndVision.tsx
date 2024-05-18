import VisionIcon from '@/components/icons/VisionIcon';
import MissionIcon from '@/components/icons/MissionIcon';

export default function MissionAndVision() {
  return (
    <section className='relative w-full bg-[#F8FBF3] px-20 pt-24'>
      <div className={'grid grid-cols-12'}>
        <div className='col-span-12 md:col-span-6'>
          <VisionIcon className={'mb-4'} />
          <h2 className={'mb-2 text-[20px] font-medium text-black'}>رؤيتنا</h2>
          <p className={'text-black/50'}>
            أن يكون المركزُ مرجعاً دولياً في مجال كفاءة الطاقة، وأنموذجاً للحفاظ
            على الموارد الطبيعية لتعزيز الاستدامة والرفاهية الاقتصادية
            والاجتماعية بحلول عام 2030م.
          </p>
        </div>
        <div className='col-span-12 md:col-span-6'>
          <MissionIcon className={'mb-4'} />
          <h2 className={'mb-2 text-[20px] font-medium text-black'}>رسالتنا</h2>
          <p className={'text-black/50'}>
            رفع كفاءة إنتاج واستهلاك الطاقة وحسن إدارتها من خلال العمل مع جميع
            الشركاء المحليين والدوليين من القطاعين الحكومي والخاص، وتطوير
            المعرفة والقدرات في مجال كفاءة الطاقة، وتطبيق أفضل الممارسات في
            ترشيد وإدارة الطاقة في المملكة.
          </p>
        </div>
      </div>
    </section>
  );
}
