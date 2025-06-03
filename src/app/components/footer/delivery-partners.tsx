import Image from 'next/image';
import WarwickTechCrewLogo from '@/assets/delivery-partners/tech-crew-dark.svg';
import MtwLogo from '@/assets/delivery-partners/mtw-white-small.png';
import BandsocLogo from '@/assets/delivery-partners/bandsoc-small.jpg';
import LifesavingLogo from '@/assets/delivery-partners/warwick-lifesaving-small.png';
import SuLogo from '@/assets/delivery-partners/warwick-su.svg';

export default function DeliveryPartners() {
  return (
    <div className="-mt-2 items-center flex flex-wrap gap-1.5">
      <div className="items-center flex flex-wrap gap-1.5">
        <a
          href="https://warwicktechcrew.co.uk"
          target="_blank"
          className="group"
        >
          <Image
            src={WarwickTechCrewLogo}
            alt="Warwick Tech Crew Logo"
            className="w-8 group-hover:scale-105"
          />
        </a>
        <a
          href="https://www.instagram.com/musictheatrewarwick"
          target="_blank"
          className="group"
        >
          <Image
            src={MtwLogo}
            alt="Music Theatre Warwick Logo"
            className="w-16 group-hover:scale-105"
          />
        </a>
      </div>
      <div className="items-center flex flex-wrap gap-1.5">
        <a
          href="https://www.instagram.com/warwickbandsoc"
          target="_blank"
          className="group"
        >
          <Image
            src={BandsocLogo}
            alt="BandSoc Logo"
            className="w-8 bg-white group-hover:scale-105"
          />
        </a>
        <a
          href="https://www.warwickuniversitylifesaving.co.uk/"
          target="_blank"
          className="group"
        >
          <Image
            src={LifesavingLogo}
            alt="Warwick Lifesaving Logo"
            className="w-18 group-hover:scale-105"
          />
        </a>
        <a href="https://www.warwicksu.com/" target="_blank" className="group">
          <Image
            src={SuLogo}
            alt="Warwick SU Logo"
            className="w-10 group-hover:scale-105"
          />
        </a>
      </div>
    </div>
  );
}
