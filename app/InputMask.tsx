import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLIFrameElement> & {
  mask: string;
  label?: string;
  placeholder?: string;
  text?: string;
};

export const InputMask = ({ mask, label, text, placeholder }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 mt-3 mb-0 justify-center">
      <label className="font-bold text-fuchsia-800">{label}</label>
      <div className="flex ">
        <input
          className={`border-2 text-fuchsia-800  focus:border-fuchsia-800 focus:outline-none p-2 rounded-md ${
            mask === "radio" ? "w-16" : "w-96"
          } font-semibold`}
          type={mask}
          placeholder={placeholder}
        />
        <label className="font-bold text-fuchsia-800 text-sm">{text}</label>
      </div>
    </div>
  );
};
