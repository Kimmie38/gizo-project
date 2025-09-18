// app/page.js
import ProductSection from "./ProductSection";

const mockProducts = [
  {
    id: 1,
    name: "10 Basket of Tomatoes",
    image: "/images/tomatoes.png",
    rating: 4.7,
    reviews: 120,
    description:
      "Freshly harvested tomatoes from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 2,
    name: "Spinach",
    image: "/images/vegetables.png",
    rating: 4.7,
    reviews: 80,
    description: "Freshly harvested spinach from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 3,
    name: "Bananas",
    image: "/images/apple.png",
    rating: 4.7,
    reviews: 150,
    description: "Freshly harvested bananas from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 4,
    name: "Apples",
    image: "/images/app.png",
    rating: 4.7,
    reviews: 200,
    description: "Freshly harvested apples from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 4,
    name: "Apples",
    image: "/images/material.png",
    rating: 4.7,
    reviews: 200,
    description: "Freshly harvested apples from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 4,
    name: "Apples",
    image: "/images/material2.png",
    rating: 4.7,
    reviews: 200,
    description: "Freshly harvested apples from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 3,
    name: "Bananas",
    image: "/images/materials.png",
    rating: 4.7,
    reviews: 150,
    description: "Freshly harvested bananas from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 1,
    name: "10 Basket of Tomatoes",
    image: "/images/tshirt.png",
    rating: 4.7,
    reviews: 120,
    description:
      "Freshly harvested tomatoes from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 1,
    name: "10 Basket of Tomatoes",
    image: "/images/iphone.png",
    rating: 4.7,
    reviews: 120,
    description:
      "Freshly harvested tomatoes from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },

  {
    id: 1,
    name: "10 Basket of Tomatoes",
    image: "/images/iphone2.png",
    rating: 4.7,
    reviews: 120,
    description:
      "Freshly harvested tomatoes from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 1,
    name: "10 Basket of Tomatoes",
    image: "/images/tomatoes.png",
    rating: 4.7,
    reviews: 120,
    description:
      "Freshly harvested tomatoes from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 1,
    name: "10 Basket of Tomatoes",
    image: "/images/tomatoes.png",
    rating: 4.7,
    reviews: 120,
    description:
      "Freshly harvested tomatoes from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
];

export default function Home() {
  return (
    <main className='p-6'>
      <ProductSection title='Vegetables' products={mockProducts} />
    </main>
  );
}
