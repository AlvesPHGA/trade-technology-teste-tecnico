import Login from './Login/page';
import Intro_home from './intro_home/intro';

const Home = () => {
   return (
      <main className="grid grid-cols-2 h-[calc(90vh-80px)]">
         <Intro_home />
         <Login />
      </main>
   );
};

export default Home;
