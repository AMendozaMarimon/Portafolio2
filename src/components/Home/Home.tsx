export const Home = () => {
  const IconColombia =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABL0lEQVR4nO3cwYnEQBBD0b45qsYxdLAOoCKrCWFhwWiGeh8qAUktHQxeCwAAAAAAAAAAABhF19Xuek0DBlQ2YAwoBoyuuGUDLgakU9heQF6IVkF5MWxAzTsjXAyIp7C9gLwQrYLyYtiAmndGuBgQT2F7AXkhWgXlxbABNe+McDEgnsL2AvJCtArKi2EDat4Z4WJAPIXtBeSFaBWUF8MG1LwzwsWAeArbC8gL0d9aQfd52j2vacCAkw0YAw4DRlfcsgEPA9IpvL2AvBC3CsqLYQPOvDPChwHxFN5eQF6IWwXlxbABZ979/UFmr3brNQ0YsLMBY8BmwOiKWzZgMSCdwvYC8kK0CsqLYQP2vDPCmwHxFLYXkBeiVVBeDBuw591/ficNAAAAAAAAAAAArJ/lA3lzKD223h8uAAAAAElFTkSuQmCC";

  return (
    <div className="flex relative justify-center w-full h-screen bg-gray_body">
      <div className="mt-40">
        <p className="font-glacial-indifference text-xl mb-2 text-center">
          Hi👍, my name is <strong>Aimar</strong> and I am a
        </p>
        <h1 className="font-league-spartan text-[110px] font-bold text-center">
          Front-End Developer
        </h1>
        <h1
          className="text-[110px] font-bold leading-[2rem] text-center"
          style={{
            fontFamily: "League Spartan, sans-serif",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "black",
            color: "transparent",
          }}
        >
          & Graphic Design
        </h1>
        <p className="flex items-center font-glacial-indifference text-2xl text-left mt-14">
          <>
            <strong>Colombia</strong>
            <img
              className="ml-2 w-8 h-8"
              src={IconColombia}
              alt="Colombia..."
              traggable="false"
              loading="lazy"
            />
          </>
        </p>
      </div>
    </div>
  );
};
