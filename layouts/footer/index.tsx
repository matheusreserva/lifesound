"use client";
import Image from "next/image";
import Facebook from "../../assets/svg/facebook.svg";
import LinkdIn from "../../assets/svg/linkedIn.svg";
import Tiktok from "../../assets/svg/tiktok.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Twitter from "../../assets/svg/twitter.svg";
import Youtube from "../../assets/svg/youtube.svg";
import BrandSvg from "../../assets/svg/brand.svg";


export default function footer() {
  return (
    <>
      <footer className="flex items-start justify-center gap-x-60 bg-primary p-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-secondary">Páginas</h2>
          <div className="flex flex-col gap-3">
            <a className="w-80 text-lg font-medium text-quarter">
              Como Funciona
            </a>
            <a className="text-lg font-medium text-quarter">Quem Somos</a>
            <a className="text-lg font-medium text-quarter">Nossa equipe</a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-secondary">Redes Sociais</h2>
          <div className="flex gap-3">
            <Image src={Facebook} alt="Facebook" width={40} height={40} />
            <Image src={LinkdIn} alt="LinkdIn" width={40} height={40} />
            <Image src={Tiktok} alt="Tiktok" width={40} height={40} />
            <Image src={Instagram} alt="Instagram" width={40} height={40} />
            <Image src={Twitter} alt="Twitter" width={40} height={40} />
            <Image src={Youtube} alt="Youtube" width={40} height={40} />
          </div>
          <Image src={BrandSvg} alt="Youtube" width={80} height={40} />
        </div>
      </footer>
      <div className="w-full justify-center bg-gradient py-2 text-center ">
        © 2023 Life Sound. Todos os direitos reservados.
      </div>
    </>
  );
}
