interface BtnProps {
   legend: string;
}

const Button = ({ legend }: BtnProps) => {
   return (
      <button className="py-2 px-7 mt-5 bg-trade_tech-blue_ncs rounded text-[#fff] text-xl uppercase">
         {legend}
      </button>
   );
};

export default Button;
