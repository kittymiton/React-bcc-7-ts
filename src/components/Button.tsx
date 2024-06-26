import type { ButtonProps } from "../types/ButtonProps";
export const Button = ({ type, tag, onClick }: ButtonProps) => {
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
