interface BtnProps {
   legend: string;
}

const Button = ({ legend }: BtnProps) => {
   return <button>{legend}</button>;
};

export default Button;
