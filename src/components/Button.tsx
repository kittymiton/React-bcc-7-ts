import { FC } from "react";

type ButtonProps = {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  tag: string;
  onClick?: (value: string) => void;
};

export const Button: FC<ButtonProps> = ({ type, tag, onClick }) => {
  return (
    <button
      type={type}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        if (typeof onClick === "function") {
          const value = event.currentTarget.getAttribute("data-value") || "";
          onClick(value);
        }
      }}
    >
      {tag}
    </button>
  );
};
