import WsafFullLogo from '@/assets/press/wsaf-full-logo.png';
import WsafWordmark from '@/assets/press/wsaf-wordmark.png';
import WsafAlternateFullLogo from '@/assets/press/wsaf-alternate-full-logo.png';
import WsafAlternateWordmark from '@/assets/press/wsaf-alternate-wordmark.png';
import WsafMaskIcon from '@/assets/press/wsaf-mask-icon.png';
import { LogoDownload } from '@/app/press/LogoDownload';

export function Logos() {
  return (
    <div className="mt-2 mb-6 flex flex-col gap-6 mx-auto max-w-3xl px-4 justify-center items-center">
      <div className="w-full gap-4 flex flex-wrap justify-center">
        <LogoDownload image={WsafFullLogo} name="Main Logo (preferred)" />
        <LogoDownload image={WsafWordmark} name="Wordmark (preferred)" />
      </div>
      <div className="w-full gap-4 flex flex-wrap justify-center">
        <LogoDownload image={WsafAlternateFullLogo} name="Alternate Logo" />
        <LogoDownload image={WsafAlternateWordmark} name="Alternate Wordmark" />
      </div>
      <LogoDownload image={WsafMaskIcon} name="Mask Icon" />
    </div>
  );
}
