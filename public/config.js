const config = {
  currency: '₴',
  phone: '+380549793976',
  data: {
    plants_categories: [
      {
        title: 'Plants',
        sub_title: 'Stems Per Pot: 1Common Name: DownoiPlant Use: Foreground Difficulty\nLevel: Medium Light Demand: Medium Co2 Demand: Medium Fertilizer Demand: Medium',
        plants: [
          {
            id: 5,
            name: 'Plant name',
            photo: ['photo1', 'photo2'],
            description: 'Stems Per Pot: 1Common Name: DownoiPlant Use: Foreground Difficulty Level: Medium Light Demand: Medium Co2 Demand: Medium Fertilizer Demand: Medium',
            price: 10,
            discount_price: 5,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 6,
            name: 'Plant name',
            photo: ['photo2', 'photo3'],
            description: 'Plant description',
            price: 10,
            discount_price: 0,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 16,
            name: 'Plant name',
            photo: ['photo3', 'photo4'],
            description: 'Plant description',
            price: 10,
            discount_price: 10,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 7,
            name: 'Plant name',
            photo: ['photo4', 'photo1'],
            description: 'Plant description',
            price: 10,
            discount_price: 5,
            qty_stock: 0 // 0 is not in stock
          },
          {
            id: 8,
            name: 'Plant name',
            photo: ['photo1', 'photo2'],
            description: 'Plant description',
            price: 10,
            discount_price: 5,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 9,
            name: 'Plant name',
            photo: ['photo2', 'photo3'],
            description: 'Plant description',
            price: 10,
            discount_price: '5/null',
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 10,
            name: 'Plant name',
            photo: ['photo1', 'photo2'],
            description: 'Plant description',
            price: 10,
            discount_price: 5,
            qty_stock: 5 // 0 is not in stock
          },
        ]
      },
      {
        title: 'Goods',
        sub_title: 'Stems Per Pot: 1Common Name: DownoiPlant Use: Foreground Difficulty\nLevel: Medium Light Demand: Medium Co2 Demand: Medium Fertilizer Demand: Medium',
        plants: [
          {
            id: 5,
            name: 'Plant name',
            photo: ['photo1', 'photo2'],
            description: 'Plant description',
            price: 10,
            discount_price: 5,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 6,
            name: 'Plant name',
            photo: ['photo2', 'photo3'],
            description: 'Plant description',
            price: 10,
            discount_price: 5,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 16,
            name: 'Plant name',
            photo: ['photo3', 'photo4'],
            description: 'Plant description',
            price: 10,
            discount_price: 5,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 7,
            name: 'Plant name',
            photo: ['photo4', 'photo1'],
            description: 'Plant description',
            price: 10,
            discount_price: 5,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 8,
            name: 'Plant name',
            photo: ['photo1', 'photo2'],
            description: 'Plant description',
            price: 10,
            discount_price: 5,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 9,
            name: 'Plant name',
            photo: ['photo2', 'photo3'],
            description: 'Plant description',
            price: 10,
            discount_price: 5,
            qty_stock: 5 // 0 is not in stock
          },
          {
            id: 10,
            name: 'Plant name',
            photo: ['photo1', 'photo2'],
            description: 'Plant description',
            price: 10,
            discount_price: 5,
            qty_stock: 5 // 0 is not in stock
          },
        ]
      }
    ],
    min_total_price: 50,
    shipping_price: 30,
  },
  urls: {
    media: './assets/media/',
    plants_pic: './assets/plants/',
    pay_link: '/pay',
    order: 'https://api.bewebmaster.co.il/order-plants',
  },
  translations: {
    site_title: 'Make your unique aquarium',
    site_subtitle: 'And you will receive it right to your home',
    search_placeholder: 'Search',
    bestsellers_label: 'Bestsellers',
    in_stock_label: 'In stock',
    out_of_stock_label: 'Out of stock',
    add_to_card_label: 'Add to cart',
    added_to_card_label: 'Added to cart',
    free_label: 'Free',
    cart_title: 'Cart',
    copy_rights: '© {year} all rights reserved.',
    delivery_options: {
      title: 'Delivery Options',
      first_name_placeholder: 'First name',
      last_name_placeholder: 'Last name',
      email_placeholder: 'E-mail',
      phone_placeholder: 'Phone',
      address_placeholder: 'Address',
      city_placeholder: 'City',
      min_total_price: 'Total price: {price}',
      shipping_price: 'Shipping price: {price}',
    }
  }
};
