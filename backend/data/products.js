const products = [
  {
    name: 'Popular Hoodie',
    imageUrl:
      'https://i.pinimg.com/originals/1b/36/b7/1b36b74eec13cba252aac5db1b9c2a2f.jpg',
    description:
      'A closet staple, the Popular Hoodie combines a classic embroidered logo on the left chest with the soft comfort of fleece for an elevated everyday look.',
    price: 120.0,
    category: 'Hoodies',
  },
  {
    name: 'Blank Hoodie',
    imageUrl:
      'https://i.pinimg.com/originals/68/d2/b0/68d2b07556fc64ebf0603f481a3f8b7f.jpg',
    description:
      'A closet staple, the Blank Hoodie combines a classic embroidered logo on the left chest with the soft comfort of fleece for an elevated everyday look.',
    price: 120.0,
    category: 'Hoodies',
  },
  {
    name: 'Camo Hoodie',
    imageUrl:
      '//cdn.shopify.com/s/files/1/0337/9413/0052/products/Mens-Camo-Hoodie-4_2048x2048.jpg?v=1638840259',
    description:
      'A closet staple, the Camo Hoodie combines a classic embroidered logo on the left chest with the soft comfort of fleece for an elevated everyday look.',
    price: 120.0,
    category: 'Hoodies',
  },
  {
    name: 'Goals Hoodie',
    imageUrl:
      '//cdn.shopify.com/s/files/1/0337/9413/0052/products/plainhoodie_stepup_setgoals_goforit_2048x2048.jpg?v=1607694496',
    description:
      'A closet staple, the Goals Hoodie combines a classic embroidered logo on the left chest with the soft comfort of fleece for an elevated everyday look.',
    price: 120.0,
    category: 'Hoodies',
  },
  {
    name: 'Dab Hoodie',
    imageUrl: 'https://m.media-amazon.com/images/I/71ABETA6brL._UX679_.jpg',
    description:
      'A closet staple, the Dab Hoodie combines a classic embroidered logo on the left chest with the soft comfort of fleece for an elevated everyday look.',
    price: 120.0,
    category: 'Hoodies',
  },
  {
    name: 'Blue Hoodie',
    imageUrl: 'https://m.media-amazon.com/images/I/31Dw1PDRu8S.jpg',
    description:
      'A closet staple, the Blue Hoodie combines a classic embroidered logo on the left chest with the soft comfort of fleece for an elevated everyday look.',
    price: 120.0,
    category: 'Hoodies',
  },
  {
    name: 'Puma Black',
    imageUrl:
      'https://imgcentauro-a.akamaihd.net/900x900/95195931/tenis-puma-flyer-runner-bdp-masculino-img.jpg',
    description:
      'Praised by the streets for its classic simplicity and comfort, the Puma Black returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.',
    price: 80.0,
    category: 'Shoes',
  },
  {
    name: 'Puma Carina',
    imageUrl:
      'https://imgcentauro-a.akamaihd.net/900x900/M0IJ0F40/tenis-puma-carina-l-bdp-feminino-img.jpg',
    description:
      'Praised by the streets for its classic simplicity and comfort, the Puma Carina returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.',
    price: 80.0,
    category: 'Shoes',
  },
  {
    name: 'Adidas Racer',
    imageUrl:
      'https://imgcentauro-a.akamaihd.net/900x900/9453810P/tenis-adidas-lite-racer-2-0-feminino-img.jpg',
    description:
      'Praised by the streets for its classic simplicity and comfort, the Adidas Racer returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.',
    price: 80.0,
    category: 'Shoes',
  },
  {
    name: 'Nike Revolution',
    imageUrl:
      'https://imgcentauro-a.akamaihd.net/900x900/96831431/tenis-nike-revolution-6-masculino-img.jpg',
    description:
      'Praised by the streets for its classic simplicity and comfort, the Nike Revolution returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.',
    price: 80.0,
    category: 'Shoes',
  },
  {
    name: 'Puma Smash',
    imageUrl:
      'https://imgcentauro-a.akamaihd.net/900x900/95141405/tenis-puma-smash-v3-bdp-unissex-img.jpg',
    description:
      'Praised by the streets for its classic simplicity and comfort, the Puma Smash returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.',
    price: 80.0,
    category: 'Shoes',
  },
  {
    name: 'Nike Flex',
    imageUrl:
      'https://imgcentauro-a.akamaihd.net/900x900/94212631/tenis-infantil-nike-flex-runner-img.jpg',
    description:
      'Praised by the streets for its classic simplicity and comfort, the Nike Flex returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.',
    price: 80.0,
    category: 'Shoes',
  },
  {
    name: 'Black Joggers',
    imageUrl:
      'https://i5.walmartimages.com/asr/5b7706a7-bbf0-44d1-85ce-c532af8fe83a_1.aac2f862a2fa323b9453887633602fc6.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
    description:
      'The Black Joggers Pants are a style staple made with heavyweight fleece for an extra cozy feel. With room in the thighs and a taper past knee, this relaxed style is ideal for everyday wear.',
    price: 100.0,
    category: 'Sweatpants',
  },
  {
    name: 'Black Fleece',
    imageUrl:
      'https://file-uploads-cr.s3.amazonaws.com/atcf2800_form_front_black_062019.jpg',
    description:
      'The Black Fleece Pants are a style staple made with heavyweight fleece for an extra cozy feel. With room in the thighs and a taper past knee, this relaxed style is ideal for everyday wear.',
    price: 100.0,
    category: 'Sweatpants',
  },
  {
    name: 'Black Trousers',
    imageUrl:
      'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/30/131276/1.jpg?6859',
    description:
      'The Black Trousers Pants are a style staple made with heavyweight fleece for an extra cozy feel. With room in the thighs and a taper past knee, this relaxed style is ideal for everyday wear.',
    price: 100.0,
    category: 'Sweatpants',
  },
  {
    name: 'Grey Joggers',
    imageUrl:
      'https://i.pinimg.com/originals/bb/64/af/bb64af2decc112ee90b777d7c03a024b.png',
    description:
      'The Grey Joggers Pants are a style staple made with heavyweight fleece for an extra cozy feel. With room in the thighs and a taper past knee, this relaxed style is ideal for everyday wear.',
    price: 100.0,
    category: 'Sweatpants',
  },
  {
    name: 'Grey Fleece',
    imageUrl:
      'https://www.dhresource.com/0x0/f2/albu/g11/M00/BF/B8/rBNaFl8YS--AG1TRAADsu_YcL60501.jpg/women-100-cotton-fleece-sweat-pants-with.jpg',
    description:
      'The Grey Fleece Pants are a style staple made with heavyweight fleece for an extra cozy feel. With room in the thighs and a taper past knee, this relaxed style is ideal for everyday wear.',
    price: 100.0,
    category: 'Sweatpants',
  },
  {
    name: 'Grey Classic',
    imageUrl:
      'https://media.endclothing.com/media/f_auto,w_600,h_600/prodmedia/media/catalog/product/2/1/21-08-2020_CS1009-HGR_1_1.jpg',
    description:
      'The Grey Classic Pants are a style staple made with heavyweight fleece for an extra cozy feel. With room in the thighs and a taper past knee, this relaxed style is ideal for everyday wear.',
    price: 100.0,
    category: 'Sweatpants',
  },
  {
    name: 'New Cap',
    imageUrl:
      'https://images-americanas.b2w.io/produtos/3293284237/imagens/bone-new-2021-aba-curva-920-st-mlb-ny-yankees-era-2021-colors-preto/3293284237_1_large.jpg',
    description:
      'The New Cap puts a fresh spin on a course classic with a leather back strap and lightweight, sweat-wicking technology.',
    price: 50.0,
    category: 'Caps',
  },
  {
    name: 'Black Cap',
    imageUrl: 'https://m.media-amazon.com/images/I/419DHgF1nqL.jpg',
    description:
      'The Black Cap puts a fresh spin on a course classic with a leather back strap and lightweight, sweat-wicking technology.',
    price: 50.0,
    category: 'Caps',
  },
  {
    name: 'Ediko Cap',
    imageUrl:
      'https://i.pinimg.com/originals/56/d7/58/56d7582315b421b95c8361120a648678.jpg',
    description:
      'The Ediko Cap puts a fresh spin on a course classic with a leather back strap and lightweight, sweat-wicking technology.',
    price: 50.0,
    category: 'Caps',
  },
  {
    name: 'Liverpool Cap',
    imageUrl:
      'https://www.merchandisingplaza.com.br/402255/2/Bones-de-beisebol-Liverpool-FC-Bone-de-beisebol-Liverpool-FC-2020-21--Vermelho--l.jpg',
    description:
      'The Liverpool Cap puts a fresh spin on a course classic with a leather back strap and lightweight, sweat-wicking technology.',
    price: 50.0,
    category: 'Caps',
  },
  {
    name: 'Nec Nyc Cap',
    imageUrl:
      'https://d1taioma509ygp.cloudfront.net/Custom/Content/Products/10/55/105521_bone-940-af_s4_637758563228927698.png',
    description:
      'The Nec Nyc Cap puts a fresh spin on a course classic with a leather back strap and lightweight, sweat-wicking technology.',
    price: 50.0,
    category: 'Caps',
  },
  {
    name: 'Pena Cap',
    imageUrl:
      'https://www.pena.com.br/wp-content/uploads/2020/05/bone-logo-basico-pena-02-920533.jpg',
    description:
      'The Pena Cap puts a fresh spin on a course classic with a leather back strap and lightweight, sweat-wicking technology.',
    price: 50.0,
    category: 'Caps',
  },
  {
    name: 'Apple Watch Black',
    imageUrl: 'https://m.media-amazon.com/images/I/71XfFQfFCsL._AC_SX679_.jpg',
    description:
      'Powerful features to help keep you connected, active, healthy, and safe. Advanced sensors to track all the ways you move and to measure your favorite workouts.',
    price: 200.0,
    category: 'Watches',
  },
  {
    name: 'Apple Watch Pink',
    imageUrl: 'https://m.media-amazon.com/images/I/71w25AhzYeL._AC_SX522_.jpg',
    description:
      'Powerful features to help keep you connected, active, healthy, and safe. Advanced sensors to track all the ways you move and to measure your favorite workouts.',
    price: 200.0,
    category: 'Watches',
  },
  {
    name: 'Garmin Watch',
    imageUrl: 'https://m.media-amazon.com/images/I/51isczcLiHL._AC_SX522_.jpg',
    description:
      'Powerful features to help keep you connected, active, healthy, and safe. Advanced sensors to track all the ways you move and to measure your favorite workouts.',
    price: 200.0,
    category: 'Watches',
  },
  {
    name: 'Strat-3 Watch',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0090/7044/4603/products/strat-3-black-titanium-swiss-sport-chrono-watch-813715_900x.png?v=1619540119',
    description:
      'Powerful features to help keep you connected, active, healthy, and safe. Advanced sensors to track all the ways you move and to measure your favorite workouts.',
    price: 200.0,
    category: 'Watches',
  },
  {
    name: 'SHIFT Watch',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0090/7044/4603/products/shift-green-swiss-sport-chrono-watch-520602_900x.png?v=1619540131',
    description:
      'Powerful features to help keep you connected, active, healthy, and safe. Advanced sensors to track all the ways you move and to measure your favorite workouts.',
    price: 200.0,
    category: 'Watches',
  },
  {
    name: 'Motorsport Watch',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0090/7044/4603/products/motorsport-burnout-red-341920_300x300.png?v=1644437414',
    description:
      'Powerful features to help keep you connected, active, healthy, and safe. Advanced sensors to track all the ways you move and to measure your favorite workouts.',
    price: 200.0,
    category: 'Watches',
  },
];

module.exports = products;
