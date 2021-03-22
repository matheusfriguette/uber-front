import Icons from "components/core/icon/icons";

interface Props {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

const Icon = ({ name, ...props }: Props) => {
  const SelectedIcon = Icons[name];

  if (SelectedIcon === undefined) {
    return null;
  }

  return <SelectedIcon {...props} />;
};

export default Icon;
