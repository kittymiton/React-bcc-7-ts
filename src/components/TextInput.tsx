import type { TextInputProps } from "../types/TextInputProps";

export const TextInput = ({ id, type, value, onChange }: TextInputProps) => {
  return <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} />;
};
