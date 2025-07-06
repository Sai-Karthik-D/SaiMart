import logo from './logo.png';
import search_icon from './search-icon-png-21.png';
import cart_icon from './cart.jpg';
import menu_icon from './OIP.webp';
import profile_icon from './avatar.png';
import MB from './MB.jpg';
import buy_icon from './buy_icon.webp';
import arrow from './arrow.png';
import Fruits_img from './fruits.webp';
import Cerals_img from './Cerals.jpeg';
import Bakery_img from './Bakery.webp';
import Veg_img from './vegetables.webp'
import Drink_img from './drinks.jpg';
import Ins_img from './instant.webp';
import M_img from './milk.webp';
import Sweets_img from './sweets.webp';
import Choco_img from './choco.webp';
import Ice_img from './icec.webp';
import Banana1_img from './Banana1.webp';
import Banana2_img from './Banana2.webp';
import bread_image_1 from './Bread.webp';
import ketchup_image_1 from './Ket.webp';
import ketchup_image_2 from './Ket2.jpg';
import butter_image_1 from './butter.webp';
import oil_image_1 from './oil.webp';
import star_icon from './star.webp';
import star_dull_icon from './star-d.webp';
import deli_icon from './deli.png';
import fresh_icon from './fresh.jpg';
import securep from './securep.webp';
import cs from './cs.webp';
import bestp from './bestp.webp';
import milk1 from './full.jpeg';
import tomato from './tomato.webp';
import cake from './britania.jpeg';
import Cadbury from './Cadbury.webp';
import parle from './parlae.jpg';
import amulcheese from './amul.jpeg';
import apple from './apple.jpeg';
import coco from './coco.jpeg';
import noodles from './noodles.jpeg';
import vennila from './vennela.jpeg';
import gulab from './gulab.jpeg';
import ata from './ata.jpeg';
import rice from './rice.jpeg';
import icecube from './icecube.jpeg';
import mixed from './mixed.jpeg';
import samosa from './samosa.jpeg';
import sprite from './sprite.jpeg';
import silk from './silk.jpeg';
import amulapanner from './amulp.jpeg';
import remove from './remove.png';
import arrow_r from './arrow-r.png';
import address from './address.png';
import add_icon from './add.png';
import product_list_icon from './product.png';
import order_icon from './order.png';

export const assets = {
  logo,
  search_icon,
  cart_icon,
  menu_icon,
  profile_icon,
  MB,
  buy_icon,
  arrow,
  Fruits_img,
  Cerals_img,
  Bakery_img,
  Veg_img,
  Drink_img,
  Ins_img,
  M_img,
  Sweets_img,
  Choco_img,
  Ice_img,
  Banana1_img,
  Banana2_img,
  butter_image_1,
  ketchup_image_1,
  ketchup_image_2,
  bread_image_1,
  oil_image_1,
  star_icon,
  star_dull_icon,
  deli_icon,
  fresh_icon,
  cs,
  bestp,
  securep,
  remove,
  arrow_r,
  address,
  add_icon,
  product_list_icon,
  order_icon,
};

export const categories = [{
  text:"Fruits",
  path:"Fruits",
  image:Fruits_img,
  bgColor:"#e91e61",
},{
   text:"Cerals",
  path:"Cerals",
  image:Cerals_img,
  bgColor:"#9e9e9e",
},
{
   text:"Bakery",
  path:"Bakery",
  image:Bakery_img,
  bgColor:"#a4c0ce",
},
{
   text:"Vegetables",
  path:"Vegetables",
  image:Veg_img,
  bgColor:"#86bb47",
},
{
   text:"Drinks",
  path:"Drinks",
  image:Drink_img,
  bgColor:"#fff700",
},
{
   text:"InstantFood",
  path:"InstantFood",
  image:Ins_img,
  bgColor:"#4cae50",
},
{
   text:"Dairy",
  path:"Dairy",
  image:M_img,
  bgColor:"#795548",
},
{
   text:"Sweets",
  path:"Sweets",
  image:Sweets_img,
  bgColor:"#fd7a00",
},
{
   text:"Chocolate",
  path:"Chocolate",
  image:Choco_img,
  bgColor:"#ff0095",
},
{
   text:"Ice Cream",
  path:"IceCream",
  image:Ice_img,
  bgColor:"#607d8b",
},
]


export const AllProducts1 = [
  {
    _id: "bs001",
    name: "Fresh Bananas",
    category: "Fruits",
    price: 40,
    offerPrice: 30,
    image: [Banana1_img, Banana2_img],
    description: [
      "Naturally ripened",
      "High in potassium",
      "Great for smoothies and snacks",
    ],
    createdAt: "2025-03-25T08:00:00.000Z",
    updatedAt: "2025-03-25T08:30:00.000Z",
    inStock: true,
    rating: 5,
  },
  {
    _id: "bs002",
    name: "Brown Bread",
    category: "Bakery",
    price: 50,
    offerPrice: 35,
    image: [bread_image_1],
    description: [
      "High in fiber",
      "Perfect for sandwiches",
      "No added preservatives",
    ],
    createdAt: "2025-03-25T09:00:00.000Z",
    updatedAt: "2025-03-25T09:10:00.000Z",
    inStock: true,
    rating: 4,
  },
  {
    _id: "bs003",
    name: "Tomato Ketchup",
    category: "Sauces",
    price: 90,
    offerPrice: 75,
    image: [ketchup_image_1, ketchup_image_2],
    description: [
      "Made with 100% real tomatoes",
      "Perfect for snacks",
    ],
    createdAt: "2025-03-25T10:00:00.000Z",
    updatedAt: "2025-03-25T10:20:00.000Z",
    inStock: true,
    rating: 4,
  },
  {
    _id: "bs004",
    name: "Amul Butter",
    category: "Dairy",
    price: 55,
    offerPrice: 48,
    image: [butter_image_1],
    description: [
      "Rich and creamy",
      "Best for cooking and baking",
    ],
    createdAt: "2025-03-25T11:00:00.000Z",
    updatedAt: "2025-03-25T11:20:00.000Z",
    inStock: true,
    rating: 5,
  },
  {
    _id: "bs005",
    name: "Fortune Rice Bran Oil",
    category: "Oil",
    price: 180,
    offerPrice: 150,
    image: [oil_image_1],
    description: [
      "Cholesterol-friendly",
      "Light and healthy cooking oil",
    ],
    createdAt: "2025-03-25T12:00:00.000Z",
    updatedAt: "2025-03-25T12:30:00.000Z",
    inStock: true,
    rating: 4,
  },
  {
  _id: "bs006",
  name: "Organic Tomatoes",
  category: "Vegetables",
  price: 60,
  offerPrice: 45,
  image: [tomato],
  description: ["Fresh and organic", "Perfect for salads and cooking"],
  createdAt: "2025-03-26T08:00:00.000Z",
  updatedAt: "2025-03-26T08:30:00.000Z",
  inStock: true,
  rating: 4,
},
{
  _id: "bs007",
  name: "Full Cream Milk",
  category: "Dairy",
  price: 50,
  offerPrice: 45,
  image: [milk1],
  description: ["Rich and healthy", "Great for tea, coffee and drinking"],
  createdAt: "2025-03-26T09:00:00.000Z",
  updatedAt: "2025-03-26T09:10:00.000Z",
  inStock: true,
  rating: 5,
},
{
  _id: "bs008",
  name: "Britannia Cake",
  category: "Bakery",
  price: 35,
  offerPrice: 30,
  image: [cake],
  description: ["Soft and tasty", "Perfect evening snack"],
  createdAt: "2025-03-26T10:00:00.000Z",
  updatedAt: "2025-03-26T10:20:00.000Z",
  inStock: true,
  rating: 4,
},
{
  _id: "bs009",
  name: "Cadbury Dairy Milk",
  category: "Chocolate",
  price: 50,
  offerPrice: 40,
  image: [Cadbury],
  description: ["Silky smooth taste", "Everyone's favorite treat"],
  createdAt: "2025-03-26T11:00:00.000Z",
  updatedAt: "2025-03-26T11:20:00.000Z",
  inStock: true,
  rating: 5,
},
{
  _id: "bs010",
  name: "Parle-G Biscuits",
  category: "Bakery",
  price: 20,
  offerPrice: 15,
  image: [parle],
  description: ["Classic taste", "Great with tea"],
  createdAt: "2025-03-26T12:00:00.000Z",
  updatedAt: "2025-03-26T12:30:00.000Z",
  inStock: true,
  rating: 4,
},
{
  _id: "bs011",
  name: "Amul Cheese Cubes",
  category: "Dairy",
  price: 90,
  offerPrice: 75,
  image: [amulcheese],
  description: ["Soft & tasty", "Great for sandwiches"],
  createdAt: "2025-03-26T13:00:00.000Z",
  updatedAt: "2025-03-26T13:20:00.000Z",
  inStock: true,
  rating: 4,
},
{
  _id: "bs012",
  name: "Apple - Washington",
  category: "Fruits",
  price: 180,
  offerPrice: 160,
  image: [apple],
  description: ["Juicy and fresh", "Premium quality apples"],
  createdAt: "2025-03-26T14:00:00.000Z",
  updatedAt: "2025-03-26T14:20:00.000Z",
  inStock: true,
  rating: 5,
},
{
  _id: "bs013",
  name: "Coca Cola 1.5L",
  category: "Drinks",
  price: 60,
  offerPrice: 55,
  image: [coco],
  description: ["Chilled refreshment", "Ideal for parties"],
  createdAt: "2025-03-26T15:00:00.000Z",
  updatedAt: "2025-03-26T15:20:00.000Z",
  inStock: true,
  rating: 4,
},
{
  _id: "bs014",
  name: "Instant Maggi Noodles",
  category: "InstantFood",
  price: 15,
  offerPrice: 12,
  image: [noodles],
  description: ["Ready in 2 mins", "Loved by everyone"],
  createdAt: "2025-03-26T16:00:00.000Z",
  updatedAt: "2025-03-26T16:20:00.000Z",
  inStock: true,
  rating: 5,
},
{
  _id: "bs015",
  name: "Vanilla Ice Cream 500ml",
  category: "IceCream",
  price: 120,
  offerPrice: 100,
  image: [vennila],
  description: ["Rich vanilla flavor", "Perfect for dessert"],
  createdAt: "2025-03-26T17:00:00.000Z",
  updatedAt: "2025-03-26T17:20:00.000Z",
  inStock: true,
  rating: 4,
},
{
  _id: "bs016",
  name: "Gulab Jamun Tin",
  category: "Sweets",
  price: 180,
  offerPrice: 160,
  image: [gulab],
  description: ["Soft and sweet", "Ready to eat"],
  createdAt: "2025-03-26T18:00:00.000Z",
  updatedAt: "2025-03-26T18:20:00.000Z",
  inStock: true,
  rating: 5,
},
{
  _id: "bs017",
  name: "Chakki Atta 5kg",
  category: "Cerals",
  price: 250,
  offerPrice: 230,
  image: [ata],
  description: ["100% whole wheat", "Healthy and fresh"],
  createdAt: "2025-03-27T08:00:00.000Z",
  updatedAt: "2025-03-27T08:30:00.000Z",
  inStock: true,
  rating: 4,
},
{
  _id: "bs018",
  name: "Rice 10kg",
  category: "Cerals",
  price: 500,
  offerPrice: 470,
  image: [rice],
  description: ["Premium quality rice", "Great aroma and taste"],
  createdAt: "2025-03-27T09:00:00.000Z",
  updatedAt: "2025-03-27T09:30:00.000Z",
  inStock: true,
  rating: 4,
},
{
  _id: "bs019",
  name: "Mint Chutney",
  category: "Sauces",
  price: 60,
  offerPrice: 50,
  image: [ketchup_image_2],
  description: ["Fresh and tangy", "Great with snacks"],
  createdAt: "2025-03-27T10:00:00.000Z",
  updatedAt: "2025-03-27T10:30:00.000Z",
  inStock: true,
  rating: 4,
},
{
  _id: "bs020",
  name: "Ice Cubes Pack",
  category: "IceCream",
  price: 40,
  offerPrice: 30,
  image: [icecube],
  description: ["Hygienically packed", "Lasts long"],
  createdAt: "2025-03-27T11:00:00.000Z",
  updatedAt: "2025-03-27T11:30:00.000Z",
  inStock: true,
  rating: 4,
},
{
  _id: "bs021",
  name: "Mixed Vegetables Pack",
  category: "Vegetables",
  price: 120,
  offerPrice: 100,
  image: [mixed],
  description: ["Fresh seasonal veggies", "Ideal for curries and stir fry"],
  createdAt: "2025-03-27T12:00:00.000Z",
  updatedAt: "2025-03-27T12:30:00.000Z",
  inStock: true,
  rating: 4,
},
{
  _id: "bs022",
  name: "Samosa Pack of 4",
  category: "Bakery",
  price: 40,
  offerPrice: 35,
  image: [samosa],
  description: ["Crispy & Spicy", "Ready to eat"],
  createdAt: "2025-03-27T13:00:00.000Z",
  updatedAt: "2025-03-27T13:30:00.000Z",
  inStock: true,
  rating: 4,
},
{
  _id: "bs023",
  name: "Sprite 750ml",
  category: "Drinks",
  price: 45,
  offerPrice: 40,
  image: [sprite],
  description: ["Refreshing lemon flavor", "Serve chilled"],
  createdAt: "2025-03-27T14:00:00.000Z",
  updatedAt: "2025-03-27T14:30:00.000Z",
  inStock: true,
  rating: 4,
},
{
  _id: "bs024",
  name: "Dairy Milk Silk",
  category: "Chocolate",
  price: 85,
  offerPrice: 75,
  image: [silk],
  description: ["Soft & creamy", "Perfect gift chocolate"],
  createdAt: "2025-03-27T15:00:00.000Z",
  updatedAt: "2025-03-27T15:30:00.000Z",
  inStock: true,
  rating: 5,
},
{
  _id: "bs025",
  name: "Amul Paneer 200g",
  category: "Dairy",
  price: 80,
  offerPrice: 70,
  image: [amulapanner],
  description: ["Fresh paneer", "Rich in protein"],
  createdAt: "2025-03-27T16:00:00.000Z",
  updatedAt: "2025-03-27T16:30:00.000Z",
  inStock: true,
  rating: 5,
},

];

export const features = [
  {
    icon: deli_icon,
    title: "Fastest Delivery",
    description: "Groceries delivered in under 30 minutes"
  },
  {
    icon: fresh_icon,
    title: "Fresh Produce Guaranteed",
    description: "We source directly from local farms and markets every day"
  },
  {
    icon: securep,
    title: "Secure Payments",
    description: "Pay safely with UPI, cards, or cash on delivery"
  },
  {
    icon: cs,
    title: "24/7 Customer Support",
    description: "We're always here to help you with your orders"
  },
  {
    icon: bestp,
    title: "Best Prices Everyday",
    description: "Get top deals and discounts across all grocery categories"
  }
];

export const footerLinks =[
  {
    title : "Quick Links",
    links : [
      {text : "Home", url : "/products"},
      {text : "Best Sellers", url : "/products"},
      {text : "Offers & Deals", url : "/products"},
      
    ],
  },
  {
    title : "Need Help?",
    links : [
      {text : "Return & Refund Policy", url : "/contact"},
      {text : "Contact Us", url : "/contact"},
      {text : "Gmail", url : "https://mail.google.com/mail/?view=cm&fs=1&to=saimart.grcy@gmail.com&su=SUBJECT&body=BODY"},
    ],
  },
  {
    title : "Follow Us",
    links : [
      {text : "Instagram", url : "https://www.instagram.com/saimart_grocery"},
      {text : "Twitter", url : "https://www.instagram.com/saimart_grocery"},
      {text : "Facebook", url : "https://www.facebook.com/share/1AnhqQtfNF/"},
      {text : "YouTube", url : "https://youtube.com/@saimart-l4v?si=O3zsre-dWaEEz6_9"},
      
    ],
  },
]

export const dummyAddress = [
  {
    _id: "e19cc12fbe5749b6a78d508c",
    userId: "a2385fb81f0d4bc5a545cd7c",
    firstName: "Sai",
    lastName: "Mart",
    email: "sai.mart@example.com",
    street: "123 Grocery Street",
    city: "Hyderabad",
    state: "Telangana",
    zipcode: 500001,
    country: "IN",
    phone: "9876543210",
  },
];

export const dummyOrders = [
  {
    _id: "58cf813fd71648c9bf99cc27",
    userId: "a2385fb81f0d4bc5a545cd7c",
    items: [
      {
        product: {
          _id: "bs001",
          name: "Fresh Bananas",
          offerPrice: 30,
          image: [Banana1_img, Banana2_img],
        },
        quantity: 2,
        _id: "77f10707bdef4adaaf1e7c8e",
      },
    ],
    amount: 60,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T00:00:00Z",
    updatedAt: "2025-03-25T00:00:00Z",
  },
  {
    _id: "ff22f7c8111043349ca3f711",
    userId: "a2385fb81f0d4bc5a545cd7c",
    items: [
      {
        product: {
          _id: "bs004",
          name: "Amul Butter",
          offerPrice: 48,
          image: [butter_image_1],
        },
        quantity: 1,
        _id: "52f43cce1cf74cd7afacb85e",
      },
      {
        product: {
          _id: "bs007",
          name: "Full Cream Milk",
          offerPrice: 45,
          image: [milk1],
        },
        quantity: 2,
        _id: "e9394426967b4ed4a38217ca",
      },
    ],
    amount: 138,
    address: dummyAddress[0],
    status: "Out for Delivery",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-26T00:00:00Z",
    updatedAt: "2025-03-26T00:00:00Z",
  },
  {
    _id: "6e10ceb2fd4d4a829edfc9a6",
    userId: "a2385fb81f0d4bc5a545cd7c",
    items: [
      {
        product: {
          _id: "bs009",
          name: "Cadbury Dairy Milk",
          offerPrice: 40,
          image: [Cadbury],
        },
        quantity: 1,
        _id: "46a5f71b1acf45d5922db15b",
      },
      {
        product: {
          _id: "bs013",
          name: "Coca Cola 1.5L",
          offerPrice: 55,
          image: [coco],
        },
        quantity: 3,
        _id: "5106490f4a0941e0a30af600",
      },
    ],
    amount: 205,
    address: dummyAddress[0],
    status: "Delivered",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-27T00:00:00Z",
    updatedAt: "2025-03-27T00:00:00Z",
  },
];
