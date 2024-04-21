type BttnProps = {
  text: string;
};

export const ButtonSubmit = ({ text }: BttnProps) => {
  return (
    <button className=" bg-fuchsia-800 active:opacity-70 text-white mt-5 p-3 h-18 w-56 rounded-xl">
      {text}
    </button>
  );
};
