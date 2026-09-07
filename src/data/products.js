
import Cappuccino from '../assets/images/cappuccino.jpg'
import Americano from '../assets/images/americano.jpg'
import CoffeeChocolate from '../assets/images/coffeechocolate.jpg'
import Whitemocha from '../assets/images/whitemocha.jpg'
import Espresso from '../assets/images/espresso.jpg'
import Macchiato from '../assets/images/macchiato.jpg'
import Latte from '../assets/images/Latte.webp'
import BlackCoffee from '../assets/images/BlackCoffee.jpg'


const products = [

    {
        id: 1,
        name: "Cappuccino",
        price: 6.31,
        description: "Rich coffee with espresso, steamed milk, and a thick layer of foam. ",
        image: Cappuccino,
    },

    {
        id: 2,
        name: "Americano",
        price: 4.21,
        description: "Smooth coffee and made with espresso and hot water. ",
        image: Americano,

    },

    {
        id: 3,
        name: "Coffee Chocolate",
        price: 5.11,
        description: "Deliciosus combination or rich coffee and sweet chocolate.",
        image: CoffeeChocolate,
    },
    {
        id: 4,
        name: "Whitemocha",
        price: 8.47,
        description: "Creamy coffee made with espresso, steamed milk, and sweet white chocolate.",
        image: Whitemocha,
    },

    {
        id: 5,
        name: "Espresso",
        price: 10.21,
        description: "Strong and concentrated coffee with a rich, bold flavor.",
        image: Espresso,
    },
    {
        id: 6,
        name: "Macchiato",
        price: 3.99,
        description: "Strong espresso topped with a small amount of steamd milk and foam.",
        image: Macchiato,
    },
    {
        id: 7,
        name: "Latte",
        price:5.55,
        description: "Smooth and creamy coffee made with espresso and plenty of steamed milk.",
        image:Latte,
    },
    {
        id: 8,
        name: "Black Coffee",
        price: 3.19,
        description: "Simple, strong coffee served without milk or cream.",
        image:BlackCoffee,
    }
];
export default products;