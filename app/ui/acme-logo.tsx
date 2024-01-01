import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { noto_sans_kr } from '@/app/ui/styles/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${noto_sans_kr.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
