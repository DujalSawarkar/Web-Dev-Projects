export default function Game({ val1, val2, val3 }) {
  const iswinner = val1 == val2 && val1 == val3;
  return (
    <div>
      <h1>
        {val1} {val2} {val3}
      </h1>
      <h2 style = {{color:iswinner ? "Green" : "Red"}}>{iswinner ? "you win" : "you loose"}</h2>
    </div>
  );
}
