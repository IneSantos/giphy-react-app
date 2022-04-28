interface Props {
  title: string
}

const Label = (props: Props) => {
  const { title } = props;
  return <h1 className="item-label">{title}</h1>;
}

export default Label;