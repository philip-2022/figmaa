import React from 'react';
import myimg from '../../assets/frame01.jpg';
import myimg2 from '../../assets/frame02.jpg';
import myimg3 from '../../assets/frame03.jpg';
import myimg4 from '../../assets/Frame 6 (1).png';
import myimg5 from '../../assets/frame05.jpg';
import myimg6 from '../../assets/frame06.jpg';
import myimg7 from '../../assets/frame07.jpg';
import myimg8 from '../../assets/frame08.jpg';
import myimg9 from '../../assets/frame09.jpg';
import myimg10 from '../../assets/frame10.jpg';
import myimg11 from '../../assets/frame11.jpg';
import myimg12 from '../../assets/frame12.jpg';
import myimg13 from '../../assets/frame13.jpg';
import myimg14 from '../../assets/frame14.jpg';
import myimg15 from '../../assets/frame15.jpg';
import myimg16 from '../../assets/frame16.jpg';
import myimg17 from '../../assets/frame17.jpg';
import myimg18 from '../../assets/frame18.jpg';
import myimg19 from '../../assets/frame19.jpg';
import myimg20 from '../../assets/frame20.jpg';

const myList = [
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.1, image: myimg, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.2, image: myimg2, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.3, image: myimg3, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.3, image: myimg4, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg5, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg6, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg7, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg8, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg9, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg10, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg11, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg12, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.5, image: myimg13, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.1, image: myimg14, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.2, image: myimg15, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.9, image: myimg16, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.7, image: myimg17, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.6, image: myimg18, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.4, image: myimg19, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.5, image: myimg20, date: "22–27 Oct · Individual Host" },
];

function Hero() {
  return (
    <div className="mx-4">
      {/*👇👇*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {myList.map((item, index) => (
          <div
            key={index}
            className="relative border border-gray-400 rounded-lg overflow-hidden shadow-md"
          >
            {/*👇👇*/}
            <img
              src={item.image}
              alt="Listing"
              className="w-full h-48 object-cover"
            />
            {/*👇👇*/}
            <div className="absolute top-2 right-2">
              🖤
            </div>
            {/*👇👇*/}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.location}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-600">{item.date}</p>
              <p className="font-semibold mt-2 animate-bounce text-amber-900">{item.price}</p>
              <p className="text-sm text-green-500 animate-pulse">⭐ {item.rating}</p>
            </div>
          </div>
        ))}
      </div>
      {/*👇👇*/}
      <div className='flex justify-center pt-5 font-bold'>Continue exploring amazing views</div>
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Hero;
