type LabelProps = {
  htmlFor: string;
  tag: string;
};

export const Label: React.FC<LabelProps> = ({ htmlFor, tag }) => {
  return <label htmlFor={htmlFor}>{tag}</label>;
};
