export type ButtonProps = {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  tag: string;
  onClick?: (value: string) => void;
};
