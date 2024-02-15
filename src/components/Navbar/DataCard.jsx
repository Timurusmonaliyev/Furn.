import React, { useState } from "react";

const DataCard = () => {
  const initialData = [
    {
      img: "",
      title: "salom",
      text: "salom",
    },
  ];

  // useState hook'ini ishlatib, malumot va uning o'zgartirish funktsiyasini olish
  const [malumot, setMalumot] = useState(initialData);

  // Malumotni o'chirish funktsiyasi
  const Delete = () => {
    setMalumot([]); // Bo'sh massiv yuborish orqali malumotni o'chirish
  };

  return (
    <div className="absolute mt-[70px] bg-purple-700 px-[27px] left-[77%]">
      <div>
        {malumot.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.img} alt="" />
              <div>
                <p>{item.title}</p>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          Delete();
        }}
        style={{ marginLeft: "10px", cursor: "pointer" }}
      >
        X
      </button>
    </div>
  );
};

export default DataCard;
