interface TextComponentProps {
  name?: string;
}
const TextComponent = ({name}:TextComponentProps) => {
  return <div className="text-red-700">{name ||'Text component'}</div>;
};

export default TextComponent;
