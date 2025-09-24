import buttonVariants from "./buttonVariants";

function ButtonR({name, type, variant, onClick, className }) {
  return <button type={type} className={`${buttonVariants({ variant })} ${className}`} onClick={onClick} >{name}</button>;
}

export default ButtonR;
