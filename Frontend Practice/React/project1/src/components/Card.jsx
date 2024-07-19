import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "amazon basics",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "tooth brush",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      image:
        "https://media.istockphoto.com/id/1362289872/photo/women-razors-on-yellow-background.webp?s=170667a&w=0&k=20&c=cjdcKt7Uw4tYCO33MvNg-VUhKDtxKudxd8wXtEBr5Pk=",
      name: "razor",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ];
  return (
    <div className="w-full h-screen bg-zinc-200 flex item-center justify-center gap-10">
      {data.map((elem, index) => (
        <div key={index} className="w-52 h-fit bg-zinc-100  rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img className="w-full h-full object-cover" src={elem.image} />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-5">{elem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
