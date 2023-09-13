import { useState } from "react";
// import { preview } from "vite";

export default function Score({ numPlayers }) {
  const [score, setScore] = useState(new Array(numPlayers).fill(0));
  // const [scores, setScores] = useState(0);

  const insNo = (idx) => {
    setScore((prevScore) => {
      const copy = [...prevScore];
      copy[idx] += 1;
      return copy[idx];
    });
  };

  
  
  return (
    
    <div>
      <ul>
        <h1>Heyyy</h1>
        <ul>
          {score.map((score, idx) => {
            return (
              <li key={idx}>
                Player{idx + 1} : {score}
                <button onClick={() => insNo(idx)}>+1</button>
                
              </li>
              
            );
          })}
          
        </ul>
      </ul>
    </div>
  );
}
