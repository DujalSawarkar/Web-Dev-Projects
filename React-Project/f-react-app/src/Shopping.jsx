// import { Linter } from "eslint";

export default function Shopping({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <li key={i.id}
          style={{
            color: i.completed ? "green" : "red",
            textDecoration: i.completed ? "line-through" : " ",
          }}
        >
          {i.item} - {i.quantity}
        </li>
      ))}
    </ul>
  );
}
