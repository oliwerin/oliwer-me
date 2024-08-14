type Props = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: Props) {
  return (
    <button
      className="block h-9 border-2 border-solid border-white dark:border-black px-2 rounded-md bg-black dark:bg-white font-serif text-white dark:text-black leading-8 sm:hover:shadow-dark dark:sm:hover:shadow
      transition-all duration-200 ease-in"
      type="button"
      onClick={() => {
        onClick();
      }}
    >
      {label}
    </button>
  );
}

export default Button;
