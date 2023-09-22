import Property from "./Property";
import rent from "./Property.css";
export default function Propertylist({properties}) {
  return (
    <div className="rent">
      {properties.map((i) => {
        return < Property {...i} key={i.id} />;
      })}
    </div>
  );
}
