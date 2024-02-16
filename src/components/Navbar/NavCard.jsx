import React, { useState } from "react";
import img1 from "../../assets/collection/arrivals1.png";
import img2 from "../../assets/collection/arrivals2.png";
import img3 from "../../assets/collection/arrivals3.png";
import img4 from "../../assets/collection/arrivals4.png";
import img5 from "../../assets/collection/arrivals5.png";

const NavCard = () => {
  const initialData = [
    {
      img: img1,
      title: "Arm Chair ",
      text: "1 X - $180.00",
    },
    {
      img: img2,
      title: "Arm Chair ",
      text: "1 X - $180.00",
    },
    {
      img: img3,
      title: "Arm Chair ",
      text: "1 X - $180.00",
    },
    {
      img: img4,
      title: "Arm Chair ",
      text: "1 X - $180.00",
    },
    {
      img: img5,
      title: "Arm Chair ",
      text: "1 X - $180.00",
    },
  ];

  // useState hook'ini ishlatib, malumot va uning o'zgartirish funktsiyasini olish
  const [malumot, setMalumot] = useState(initialData);

  // Malumotni o'chirish funktsiyasi
  const Delete = (index) => {
    const updatedMalumot = [...malumot];
    updatedMalumot.splice(index, 1); // Remove the item at the specified index
    setMalumot(updatedMalumot);
  };

  return (
    <div className="absolute mt-[70px] overflow-y-scroll h-[180px] py-[18px] z-50 bg-[#ffffff] left-[70%]">
      <div className="flex items-start gap-[30px] justify-center">
        <div>
          {malumot.map((item, index) => {
            return (
              <div className="grid justify-center items-center py-[10px]">
                <div className="flex items-start justify-between px-[8%]">
                  <div
                    className="flex gap-[30px] items-center justify-center"
                    key={index}
                  >
                    <img className="h-[50px]" src={item.img} alt="" />
                    <div>
                      <p className="text-[0.7em] w-[60px]">{item.title}</p>
                      <p className="text-[0.6em]">{item.text}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      Delete();
                    }}
                    className="text-[0.7em]"
                    style={{ cursor: "pointer" }}
                  >
                    X
                  </button>
                </div>
                <p className="w-[270px] h-[1px] my-[1em] bg-red-900"></p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="xl:w-[300px] flex justify-around text-xl font-bold items-center">
        <p> Total: $0.00</p>
        <button className="bg-[#e99c2e] text-white py-2 px-4 rounded"> View Cart</button>
      </div>
    </div>
  );
};

export default NavCard;
