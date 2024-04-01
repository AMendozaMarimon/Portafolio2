import { IconColombia } from "../../assets/IconColombia";
import { DonwloadPDFNotification } from "../Notis/NotiStack";
import AIMAR from "../../assets/AIMAR-Home.webp";
import ArrowR from "../../assets/Arrow_Rigth.webp";
import ArrowL from "../../assets/Arrow_Left.webp";
import PDF from "../../assets/Aimar_FD_CV.pdf";

export const Home = () => {
  return (
    <div className="flex relative justify-center w-full h-auto px-24 xs:px-10 bg-gray_body overflow-hidden" id="Home">
      {/* IMAGEN PERSONAL - AIMAR */}
      <img
        className="absolute bottom-0 w-auto h-[34rem]"
        src={AIMAR}
        alt={AIMAR}
        draggable="false"
        loading="lazy"
        style={{
          maskImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
      {/* ARROWS DISEÑO */}
      <img
        className="absolute left-0 bottom-20 xs:bottom-[7rem] w-auto 2xl:h-[8rem] xl:h-[8rem] lg:h-[8rem] md:h-[6rem] sm:h-[5rem] xs:h-[5rem]"
        src={ArrowR}
        alt={ArrowR}
        draggable="false"
        loading="lazy"
      />
      <img
        className="absolute right-0 xs:right-[-6rem] top-24 w-auto h-[8.5rem] 2xl:h-[8rem] 2xl:right-[1rem] 2xl:top-28 xl:h-[7rem] lg:h-[7rem] md:h-[6rem] sm:h-[5rem] xs:h-[5rem] transform rotate-180"
        src={ArrowL}
        alt={ArrowL}
        draggable="false"
        loading="lazy"
      />
      {/* BOTONES DE NAVEGACIÓN */}
      <div className="flex gap-6 absolute bottom-10">
        {/* BOTON PARA DESCARGAR PDF */}
        <a href={PDF} download="AimarMendoza_FD_CV">
          <button
            className="px-6 py-2 bg-black font-glacial-indifference text-white transform transition duration-300 hover:bg-white hover:text-black hover:font-bold  hover:scale-105"
            onClick={DonwloadPDFNotification}
          >
            Download Cv
          </button>
        </a>
        {/* BOTON DE CONTACTO */}
        <button className="px-9 py-2 bg-yelow_body font-glacial-indifference transform transition duration-300 hover:bg-white hover:text-black hover:font-bold hover:scale-105">
          Text Me!
        </button>
      </div>
      {/* TEXTO PRINCIPAL */}
      <div className="mt-40 pb-[15.8rem] xs:mt-[9rem]">
        <p className="font-glacial-indifference text-xl xs:text-[1.1rem] sm:text-[1.1rem] mb-10 xs:mb-7 text-center text-balance">
          Hi👋, my name is <strong>Aimar</strong> and I am a
        </p>
        <h1 className="font-league-spartan text-[6.5rem] leading-[5rem] xs:text-[4.3rem] sm:text-[4.3rem] xs:leading-[3.7rem] sm:leading-[3.7rem] mb-2 font-bold text-center text-balance">
          Front-End Developer
        </h1>
        <h1
          className="text-[6.5rem] font-bold leading-[5rem] xs:text-[4.3rem] sm:text-[4.3rem] xs:leading-[3.7rem] sm:leading-[3.7rem] text-center text-balance"
          style={{
            fontFamily: "League Spartan, sans-serif",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "black",
            color: "transparent",
          }}
        >
          & Graphic Design
        </h1>
        {/* COLOMBIA + BANDERA */}
        <p className="flex items-center font-glacial-indifference text-2xl text-left mt-12">
          <>
            <strong className="xs:hidden sm:hidden">Colombia</strong>
            <IconColombia />
          </>
        </p>
      </div>
    </div>
  );
};
