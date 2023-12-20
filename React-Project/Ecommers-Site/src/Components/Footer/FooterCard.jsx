import React from "react";
import "./FooterCard.css"
const FooterCard = (props) => {
  const FooterData = props.FooterData;
  console.log(FooterData);
  return (
    <div className="Footer-Card-Main">
      <p>{FooterData.title}</p>
      <ul>
        <li>{FooterData.about}</li>
        <li>{FooterData.feature}</li>
        <li>{FooterData.work}</li>
        <li>{FooterData.career}</li>
      </ul>
    </div>
  );
};
export default FooterCard;
