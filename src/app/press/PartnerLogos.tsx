import BandsocLogo from '@/assets/press/bandsoc.png';
import MtwLogo from '@/assets/press/mtw-square.png';
import MtwWhiteLogo from '@/assets/press/mtw-white.png';
import TechCrewLogo from '@/assets/press/techcrew-logo-light-medium.png';
import WarwickSuLogo from '@/assets/press/warwick-su.png';
import { LogoDownload } from '@/app/press/LogoDownload';

export function PartnerLogos() {
  return (
    <div className="mt-2 mb-6 flex flex-wrap gap-6 mx-auto max-w-3xl px-4 justify-center">
      <LogoDownload
        image={TechCrewLogo}
        name="Tech Crew (click to see all versions)"
        size="w-18 max-w-32"
        href="https://wwtc.uk/brand"
      />
      <LogoDownload
        image={BandsocLogo}
        name="Warwick Bandsoc"
        size="w-18 max-w-32"
      />
      <LogoDownload
        image={MtwLogo}
        name="Music Theatre Warwick (Square)"
        size="w-18 max-w-32"
      />
      <LogoDownload
        image={MtwWhiteLogo}
        name="Music Theatre Warwick (White)"
        size="w-24 max-w-48"
        style="bg-slate-400 p-2"
      />
      <LogoDownload
        image={WarwickSuLogo}
        name="Warwick SU (click to see all versions)"
        size="w-24 max-w-48"
        href="https:/wwtc.uk/brand#additional-resources"
      />
    </div>
  );
}
