import Categories from "../../components/categories-container/categories-container";

const Home=()=>{

    const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.imgur.com/ab9f5sQ.jpg",
    },
    {
      id: 2,
      title: "shoes",
      imageUrl: "https://i.imgur.com/mBZMztG.jpg",
    },
    {
      id: 3,
      title: "shirts",
      imageUrl: "https://i.imgur.com/oR8qLLy.jpg",
    },
    {
      id: 4,
      title: "jackets",
      imageUrl: "https://i.imgur.com/LM4xloH.jpg",
    },
    {
      id: 5,
      title: "pants",
      imageUrl: "https://i.imgur.com/Z7iPI7L.jpg",
    },
  ];

  return (
    <Categories categories={categories} />
  );  
}

export default Home;