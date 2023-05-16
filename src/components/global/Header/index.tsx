const Header = () => {
   return (
      <header className="flex h-20 border-b border-b-trade_tech-bright_gray justify-between items-center px-10">
         <h1 className="text-6xl font-sans">Meu Time</h1>

         <div>
            <button className="border border-trade_tech-cool_black py-1 px-2 rounded font-sans text-xl text-trade_tech-cool_black">
               Entrar / Cadastrar
            </button>
         </div>
      </header>
   );
};

export default Header;
