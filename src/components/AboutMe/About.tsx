import LINKEDIN from "../../assets/linkedin.webp";
import GITHUB from "../../assets/github.webp";
import GMAIL from "../../assets/email.webp";
import BIRRETE from "../../assets/BIRRETE.svg";
import DEGRADADO from "../../assets/DEGRADADO.webp";

export const About = () => {
  return (
    <section
      className="flex relative justify-center items-center w-full h-auto mt-6 mb-20"
      id="About"
    >
      {/* EDUCACION - AIMAR */}
      <div className="flex items-center gap-10 absolute bottom-[-7rem] z-10">
        <div className="flex flex-col justify-between w-64 h-64 bg-yelow_body p-5">
          <img
            className="w-12 h-auto"
            src={BIRRETE}
            alt={BIRRETE}
            draggable="false"
            loading="lazy"
          />
          <section>
            <p className="font-league-spartan font-bold text-xl leading-5">
              Técnico en Producción Gráfica y Multimedial
            </p>
            <p className="font-glacial-indifference mt-2 text-xs mb-2">
              UniBarranquilla
            </p>
            <p className="font-glacial-indifference font-bold mt-2 text-xs">
              2022 - 2023
            </p>
          </section>
        </div>
        <div className="flex flex-col justify-between w-64 h-64 bg-yelow_body p-5">
          <img
            className="w-12 h-auto"
            src={BIRRETE}
            alt={BIRRETE}
            draggable="false"
            loading="lazy"
          />
          <section>
            <p className="font-league-spartan font-bold text-xl leading-5">
              Full Stack Developer
            </p>
            <p className="font-glacial-indifference mt-2 text-xs mb-2">
              SoyHenry
            </p>
            <p className="font-glacial-indifference font-bold mt-2 text-xs">
              2023 - 2023
            </p>
          </section>
        </div>
      </div>
      {/* IMAGEN PERSONAL - AIMAR */}
      <div className="w-1/2">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      {/* ABOUT ME - AIMAR */}
      <div className="w-1/2 relative flex flex-col bg-gray_body px-20 pt-16 pb-48">
        {/* DEGRADADO */}
        <img
          className="absolute bottom-[-3rem] right-20 w-24 h-auto"
          src={DEGRADADO}
          alt={DEGRADADO}
          draggable="false"
          loading="lazy"
        />
        {/* TEXTO - AIMAR */}
        <h2 className="text-3xl font-league-spartan font-bold mb-10">
          About Me
        </h2>
        <p className="font-glacial-indifference mb-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          veniam pariatur, libero vel earum quaerat sequi maiores impedit magnam
          ex enim saepe debitis. Consectetur quidem eum molestias atque. Atque,
          possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia molestiae quos deleniti nihil ducimus ad possimus excepturi
          tempora sed, natus consequuntur temporibus ab, ea incidunt aliquam
          earum voluptatibus modi dignissimos.
        </p>
        <div className="flex items-center gap-7">
          <div className="p-4 bg-yelow_body rounded-full cursor-pointer transform transition duration-300 hover:scale-110">
            <img
              className="w-7 h-auto"
              src={LINKEDIN}
              alt={LINKEDIN}
              draggable="false"
              loading="lazy"
            />
          </div>
          <div className="p-4 bg-yelow_body rounded-full cursor-pointer transform transition duration-300 hover:scale-110">
            <img
              className="w-7 h-auto"
              src={GITHUB}
              alt={GITHUB}
              draggable="false"
              loading="lazy"
            />
          </div>
          <div className="p-4 bg-yelow_body rounded-full cursor-pointer transform transition duration-300 hover:scale-110">
            <img
              className="w-7 h-auto"
              src={GMAIL}
              alt={GMAIL}
              draggable="false"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
