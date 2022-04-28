import "./item.css"

interface Props {
  label: string
}

const Item = (props: Props) => {
  const { label } = props;
  return <span className="item-label">{label}</span>;
}

export default Item;