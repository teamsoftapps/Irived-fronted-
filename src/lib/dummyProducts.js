import {images} from '../utils';

export const // products = {
  products = [
    {
      id: '1',
      createdAt: '2024-06-07T12:00:00Z',
      title: 'Product A',
      desc: '20 mL 10mg',
      img: images.product,
      price: 49.99,
      isFeatured: true,
      options: [
        {size: 'Small', color: 'Red'},
        {size: 'Large', color: 'Blue'},
      ],
      category: {
        id: '1',
        createdAt: '2024-06-07T12:00:00Z',
        title: 'Category A',
        desc: 'Description for Category A',
        color: '#FF5733',
        img: 'category_a.jpg',
        slug: 'category-a',
      },
      catSlug: 'category-a',
    },
    {
      id: '2',
      createdAt: '2024-06-07T12:00:00Z',
      title: 'Product B',
      desc: '20 mL 10mg',
      img: images.product1,
      price: 29.99,
      options: [{size: 'Medium', color: 'Green'}],
      category: {
        id: '2',
        createdAt: '2024-06-07T12:00:00Z',
        title: 'Category B',
        desc: 'Description for Category B',
        color: '#3498db',
        img: 'category_b.jpg',
        slug: 'category-b',
      },
      catSlug: 'category-b',
    },
  ];
// };
