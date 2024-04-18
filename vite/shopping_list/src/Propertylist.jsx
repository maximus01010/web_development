import Property from "./Property";
import "./Propertylist.css";
export default function Propertylist({ properties }) {
  return (
    <div className="Propertylist">
      {properties.map((p) => {
        return <Property {...p} key={p.id} />;
      })}
    </div>
  );
}