interface ButtonType {
  children: React.ReactNode;
  classes?: string;
}

const Button: React.FC<ButtonType> = ({ children, classes }) => {
  return (
    <div>
      <span
        className={`flex justify-center mx-1 items-center px-3 py-0.5 rounded-2xl text-[0.8rem] font-light select-none ${classes}`}
      >
        {children}
      </span>
    </div>
  );
};

export default Button;
