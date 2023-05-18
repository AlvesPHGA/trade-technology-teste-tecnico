import Button from '../../../components/Button/Button';

const Login = () => {
   return (
      <section className="flex items-center justify-center">
         <form className="w-2/3 py-10 px-10 rounded border border-trade_tech-cool_black/10">
            <div>
               <span className="text-xl">Login</span>
               <div className="border border-trade_tech-blue_ncs grid grid-cols-loginForm text-xl rounded-md mt-2">
                  <input
                     className="py-1 pl-1 border-r border-r-trade_tech-blue_ncs rounded-s-md"
                     type="text"
                     name=""
                     id=""
                     placeholder="Entre com a key"
                  />
                  <select
                     className="py-1 pl-1 text-trade_tech-cool_black border-none rounded-e-md"
                     name=""
                     id=""
                  >
                     <option value="">País</option>
                     <option value="brasil">Brasil</option>
                     <option value="espanha">Espanha</option>
                     <option value="alemanha">Alemanha</option>
                  </select>
               </div>
            </div>
            <Button legend="Entrar" />
            <a
               className="block mt-2 text-trade_tech-blue_ncs hover:underline"
               href="https://www.api-football.com/"
               target="_blank"
               rel="noopener noreferrer"
            >
               Ainda não possui uma conta?
            </a>
         </form>
      </section>
   );
};

export default Login;
