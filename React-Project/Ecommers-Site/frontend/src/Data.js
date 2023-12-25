
import axios from "axios";

// const Data = [
//   {
//     imgUrl:
//       "https://res.cloudinary.com/ddtjfbyho/image/upload/v1703253228/a9rlxdtsna0jlbozmjqx.png",
//     title: "T-SHIRT WITH TAPE DETAILS",
//     rate: "4.5/5",
//     price: "$100",
//     DiscountPrice: "160",
//     DiscountPercent: "20%",
//     category: "formals",
//   },
//   {
//     id: 2,
//     img: image8,
//     title: "COURAGE GRAPHIC T-SHIRT",
//     rate: "4.5/5",
//     price: "$120",
//     DiscountPrice: "180",
//     DiscountPercent: "20%",
//   },
//   {
//     id: 3,
//     img: image9,
//     title: "LOOSE FIT BERMUDA SHORTS",
//     rate: "4.5/5",
//     price: "$120",
//     DiscountPrice: "160",
//     DiscountPercent: "20%",
//   },
//   {
//     id: 4,
//     img: image10,
//     title: "FADED SKINNY JEANS",
//     rate: "4.5/5",
//     price: "$120",
//     DiscountPrice: "160",
//     DiscountPercent: "20%",
//   },
//   {
//     id: 5,
//     img: image7,
//     title: "T-SHIRT WITH TAPE DETAILS",
//     rate: "4.5/5",
//     price: "$100",
//     DiscountPrice: "Null",
//     DiscountPercent: "20%",
//   },
//   {
//     id: 6,
//     img: image8,
//     title: "COURAGE GRAPHIC T-SHIRT",
//     rate: "4.5/5",
//     price: "$120",
//     DiscountPrice: "160",
//     DiscountPercent: "20%",
//   },
//   {
//     id: 7,
//     img: image9,
//     title: "LOOSE FIT BERMUDA SHORTS",
//     rate: "4.5/5",
//     price: "$120",
//     DiscountPrice: "160",
//     DiscountPercent: "20%",
//   },
//   {
//     id: 8,
//     img: image10,
//     title: "FADED SKINNY JEANS",
//     rate: "4.5/5",
//     price: "$120",
//     DiscountPrice: "160",
//     DiscountPercent: "20%",
//   },
// ];

// export default Data;

 const getdata = async () => {
  const { data } = await axios.get("http://localhost:3000/items/");
  console.log(data);
  return data;
};

export default getdata;
