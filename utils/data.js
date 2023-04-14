import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: process.env.ADMIN_NAME,
      email:  process.env.ADMIN_MAIL,
      password: bcrypt.hashSync(process.env.ADMIN_PASS),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Sport Earphones',
      slug: 'sport-earphones',
      category: 'Earphones',
      image: '/images/earphones_a_1.webp',
      price: 70,
      brand: 'Jabra',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'Get the most out of your workout with our Sport Earphones. Designed to stay in place during even the most intense exercise, these earphones offer high-quality audio and a comfortable fit. Perfect for athletes and fitness enthusiasts!',
      isFeatured: true,
      banner: '/images/',
    },
    {
      name: 'Sport Headphones',
      slug: 'Sport headphones',
      category: 'Earphones',
      image: '/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp',
      price: 80,
      brand: 'Bits',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'Block out the world around you with our Noise-Cancelling Earphones. These earphones feature advanced noise-cancellation technology to eliminate outside noise, allowing you to focus on your music or podcast. Perfect for travelers and commuters!',
      isFeatured: true,
      banner: '/images/',
    },
    {
      name: 'Noise-Cancelling Earphones',
slug: 'noise-cancelling-earphones',
category: 'Earphones',
image: '/images/earphones_a_3.webp',
price: 90,
brand: 'Bose',
rating: 4.5,
numReviews: 3,
countInStock: 20,
description: 'Block out the world around you with our Noise-Cancelling Earphones. These earphones feature advanced noise-cancellation technology to eliminate outside noise, allowing you to focus on your music or podcast. Perfect for travelers and commuters!',
    },
    {
     name: 'In-Ear Headphones',
slug: 'in-ear-headphones',
category: 'Earphones',
image: '/images/headphones_b_1.webp',
price: 90,
brand: 'Boat',
rating: 2.9,
numReviews: 13,
countInStock: 20,
description: 'Enjoy high-quality audio in a compact package with our In-Ear Headphones. These earphones fit snugly in your ears, providing a comfortable and secure fit while you listen to your favorite music or podcast. Perfect for daily use!',
},
    
    {
      name: 'True Wireless Earbuds',
slug: 'true-wireless-earbuds',
category: 'Earphones',
image: '/images/earphones_c_4.webp',
price: 95,
brand: 'Apple',
rating: 3.5,
numReviews: 7,
countInStock: 20,
description: 'Experience the future of audio with our True Wireless Earbuds. These earbuds feature the latest wireless technology, allowing for a seamless and hassle-free listening experience. With long battery life and high-quality audio, these earbuds are perfect for anyone on-the-go!',
    },
    {
      name: 'Wireless C1',
      slug: 'Earphones',
      category: 'earphones',
      image: '/images/headphones_a_4.webp',
      price: 75,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'Experience high-quality sound with our wireless earphones from Sony. These earphones are designed to provide a comfortable fit and a secure hold, making them perfect for workouts or commutes. With up to 15 hours of battery life and easy-to-use touch controls, you can enjoy your favorite music or take calls on the go. Our wireless earphones also come with a compact charging case that makes it easy to charge them on the go.',
    },
  ],
};

export default data;
