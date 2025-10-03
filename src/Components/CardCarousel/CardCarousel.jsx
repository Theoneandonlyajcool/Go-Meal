import React from "react";
import "./CardCarousel.css";

// interface CardData  {
//   id: number
//   title: string
//   description: string
//   image: string
// }

const breakfastData = [
  {
    id: 1,
    title: "Custard and Akara",
    description:
      "Silky custard served with crispy Akara for a delicious traditional breakfast treat.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Spaghetti and Chicken",
    description:
      "Hearty spaghetti tossed with savory sauce, paired with seasoned grilled chicken.",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Egg and Plantain",
    description:
      "Fluffy eggs seasoned with fresh herbs, served with perfectly fried sweet golden plantain.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Tea and Pancakes",
    description:
      "Pancakes served warm with butter and syrup alongside a comforting hot cup of tea.",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "French Toast Delight",
    description:
      "Golden French toast topped with fresh berries, powdered sugar, and maple syrup.",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Avocado Toast",
    description:
      "Creamy avocado on crispy sourdough with cherry tomatoes and a poached egg.",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    title: "Oatmeal Bowl",
    description:
      "Warm oatmeal topped with bananas, nuts, honey and a sprinkle of cinnamon.",
    image:
      "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    title: "Breakfast Burrito",
    description:
      "Scrambled eggs, cheese, salsa and bacon wrapped in a warm flour tortilla.",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    title: "Yogurt Parfait",
    description:
      "Layers of Greek yogurt, granola, fresh berries and drizzled honey.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    title: "Waffles & Berries",
    description:
      "Crispy Belgian waffles topped with whipped cream and mixed fresh berries.",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    title: "Breakfast Sandwich",
    description: "Egg, cheese and sausage stacked on a toasted English muffin.",
    image:
      "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    title: "Smoothie Bowl",
    description:
      "Thick blended smoothie topped with fresh fruits, coconut flakes and chia seeds.",
    image:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
  },
];

const CardCarousel = () => {
  // Duplicate the data to create seamless infinite loop
  const duplicatedData = [...breakfastData, ...breakfastData, ...breakfastData];

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h1 className="carousel-title">Breakfast Made For Every Morning</h1>
        <p className="carousel-subtitle">Your perfect start to the day</p>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {breakfastData.map((item, index) => (
            <div key={`${item.id}-${index}`} className="carousel-card">
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.title} className="card-image" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
