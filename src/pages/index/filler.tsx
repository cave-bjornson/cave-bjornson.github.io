export const Filler = () => {
  return (
    <main className="flex flex-col items-center">
      <article className="p-4 bg-white w-[520px] flex flex-col items-center">
        <header className="w-[420px]">
          <h1 className="text-2xl font-bold pt-4 text-center">Femte sidan</h1>
          <p className="">
            Jag behövde en 5e sida för uppgiften så här kommer en anka i css.
            Koden har jag tagit{" "}
            <a
              href="https://codingartistweb.com/2022/03/cute-duck-css-speed-art/"
              className="text-blue-600 visited:text-purple-600"
            >
              Härifrån
            </a>{" "}
            men skrivit om den till{" "}
            <a
              href="https://tailwindcss.com/"
              className="text-blue-600 visited:text-purple-600"
            >
              Tailwind
            </a>{" "}
            syntax.
          </p>
        </header>
        <div
          id="duck-container"
          className="bg-[#af315d] h-[500px] w-[420px] relative my-4"
        >
          <div
            id="duck-body"
            className="bg-[#fed72b] h-[150px] w-[150px] rounded-[50%] absolute top-[100px] left-[100px]
          before:absolute before:content-[''] before:bg-transparent before:h-[150px] before:w-[150px]
          before:shadow-[80px_45px_0_#fe9711] before:rounded-[50%] before:left-[10px] before:-top-[5px] before:rotate-[30deg]
          after:absolute after:content-[''] after:bg-[#fed72b] after:h-[130px] after:w-[220px] after:top-[140px] after:rounded-[70px]"
          ></div>
          <div
            id="feather"
            className="absolute bg-[#fef53a] w-[170px] h-[110px] top-[220px] left-[190px] rounded-[31%_69%_69%_31%/_50%_100%_0_50%]
          before:absolute before:content-[''] before:bg-[#fe9711] before:h-[20px] before:w-[80px] before:-top-[100px]
          before:-left-[15px] before:-z-[1] before:rounded-[0_5px_20px_0]
          after:absolute after:content-[''] after:bg-[#fed72b] after:w-[70px] after:h-[25px] after:-top-[120px]
          after:-left-[15px] after:rounded-[0_5px_20px_0]"
          ></div>
          <div
            id="eye"
            className="absolute bg-[#434453] h-[27px] w-[27px] top-[160px] left-[180px] rounded-[50%] shadow-[0_0_0_13px_#fefefe]
          before:absolute before:content-[''] before:bg-[#fef53a] before:h-[10px] before:w-[30px] before:rounded-[5px]
          before:bottom-[45px] before:-left-px
          after:absolute after:content-[''] after:bg-[#fed72b] after:h-[20px] after:w-[50px] after:top-[32px] after:-left-[10px]"
          ></div>
          <div
            id="beak"
            className="bg-[#d55326] h-[20px] w-[80px] absolute top-[190px] left-[70px] rounded-[35%_10%_16%_0_/_100%_0_30%_10%]
          before:absolute before:content-[''] before:h-[40px] before:w-[90px] before:bg-[#fe9711]
          before:rounded-[0_40%_0_40%/0_100%_0_100%] before:bottom-[12px] before:-right-px
          after:absolute after:content-[''] after:h-[7px] after:w-[15px] after:bg-[#d45326]
          after:bottom-[40px] after:right-[30px] after:rounded-[5px]"
          ></div>
          <div
            id="leg"
            className="absolute bg-[#fe9711] w-[12px] h-[30px] top-[370px] left-[220px] shadow-[-30px_0__#d45326]
          before:absolute before:content-[''] before:bg-[#fe9711] before:w-[52px] before:h-[12px] before:-left-[23px] before:top-[25px]
          before:rounded-[5px] before:shadow-[-30px_0_#d45326]
          after:absolute after:content-[''] after:bg-[#7e2e4e] after:h-[15px] after:w-[200px] after:top-[38px]
          after:-left-[100px] after:rounded-[7px]"
          ></div>
        </div>
      </article>
    </main>
  );
};

export default Filler;
