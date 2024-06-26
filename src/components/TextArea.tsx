import type { TextAreaProps } from "../types/TextAreaProps";

export const TextArea = ({ id, value, onChange, rows }: TextAreaProps) => {
  return <textarea id={id} value={value} onChange={(e) => onChange(e.target.value)} rows={rows} />;
};
