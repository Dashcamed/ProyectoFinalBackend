import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductModel from "../src/models/product.model.js"

//archivos de configuracion
dotenv.config({path: "../.env"})

const productsEjemplos = [
//     "title": "Pan de trigo integral",
//     "description": "Pan elaborado con harina de trigo integral orgánica.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 2200,
//     "stock": 15
//   },
//   {
//     "title": "Baguette rústica",
//     "description": "Clásica baguette francesa con corteza crujiente.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 1800,
//     "stock": 20
//   },
//   {
//     "title": "Pan de masa madre",
//     "description": "Pan artesanal de fermentación lenta con sabor único.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 2500,
//     "stock": 12
//   },
//   {
//     "title": "Pan de centeno y semillas",
//     "description": "Pan nutritivo con semillas de girasol y calabaza.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 2300,
//     "stock": 18
//   },
//   {
//     "title": "Pan de ajo y hierbas",
//     "description": "Pan aromático con ajo fresco y hierbas provenzales.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 2100,
//     "stock": 16
//   },
//     {
//     "title": "Pan de pasas y nueces",
//     "description": "Pan dulce con pasas sultanas y nueces pecanas.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 2400,
//     "stock": 14
//   },
//   {
//     "title": "Pan de molde integral",
//     "description": "Pan de molde con harina integral para tostadas.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 1900,
//     "stock": 22
//   },
//   {
//     "title": "Pan de hamburguesa",
//     "description": "Pan suave y esponjoso para hamburguesas caseras.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 1700,
//     "stock": 25
//   },
//   {
//     "title": "Pan de pita",
//     "description": "Pan plano ideal para rellenar con tus ingredientes favoritos.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 1600,
//     "stock": 28
//   },
//   {
//     "title": "Pan de centeno 100%",
//     "description": "Pan de centeno puro, denso y con sabor intenso.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 2600,
//     "stock": 10
//   },
//     {
//     "title": "Pan de aceitunas",
//     "description": "Pan mediterráneo con aceitunas negras y verdes.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 2200,
//     "stock": 17
//   },
//   {
//     "title": "Pan de cebolla caramelizada",
//     "description": "Pan dulce y salado con cebolla caramelizada.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 2300,
//     "stock": 15
//   },
//   {
//     "title": "Pan de espelta",
//     "description": "Pan ligero y digestivo elaborado con harina de espelta.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 2400,
//     "stock": 13
//   },
//   {
//     "title": "Pan de payés",
//     "description": "Pan tradicional catalán de corteza gruesa y miga esponjosa.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 2100,
//     "stock": 19
//   },
//   {
//     "title": "Pan de leche",
//     "description": "Pan dulce y tierno ideal para el desayuno o la merienda.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 1800,
//     "stock": 21
//   },
//     {
//     "title": "Pan de Viena",
//     "description": "Pan de miga suave y corteza dorada, perfecto para sándwiches.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 1900,
//     "stock": 20
//   },
//   {
//     "title": "Pan de molde sin gluten",
//     "description": "Pan de molde apto para celíacos, elaborado con harinas sin gluten.",
//     "category": "panaderia",
//     "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
//     "price": 2800,
//     "stock": 8
//   },
    // {
    //   "title": "Pan de maíz",
    //   "description": "Pan dulce elaborado con harina de maíz.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 1800,
    //   "stock": 23
    // },
    // {
    //   "title": "Pan de brioche",
    //   "description": "Pan dulce y esponjoso con mantequilla y huevos.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 2700,
    //   "stock": 9
    // },
    // {
    //   "title": "Pan de centeno y arándanos",
    //   "description": "Pan agridulce con arándanos rojos deshidratados.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 2500,
    //   "stock": 11
    // },
    // {
    //   "title": "Pan de centeno y queso",
    //   "description": "Pan salado con queso cheddar y centeno.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 2400,
    //   "stock": 16
    // },
    // {
    //   "title": "Pan de centeno y nueces",
    //   "description": "Pan nutritivo con nueces y centeno.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 2300,
    //   "stock": 18
    // },
    // {
    //   "title": "Pan de centeno y pasas",
    //   "description": "Pan agridulce con pasas sultanas y centeno.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 2200,
    //   "stock": 20
    // },
    // {
    //   "title": "Pan de centeno y pipas",
    //   "description": "Pan con semillas de girasol y centeno.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 2100,
    //   "stock": 22
    // },
    // {
    //   "title": "Pan de centeno y sésamo",
    //   "description": "Pan con semillas de sésamo y centeno.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 2000,
    //   "stock": 24
    // },
    //   {
    //   "title": "Pan de centeno y zanahoria",
    //   "description": "Pan dulce con zanahoria rallada y centeno.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 2600,
    //   "stock": 10
    // },
    // {
    //   "title": "Panecillos de centeno",
    //   "description": "Panecillos individuales de centeno.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 1500,
    //   "stock": 30
    // },
    // {
    //   "title": "Hogaza de centeno",
    //   "description": "Pan grande de centeno para compartir.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 3000,
    //   "stock": 8
    // },
    // {
    //   "title": "Pan de centeno con miel",
    //   "description": "Pan dulce con miel y centeno.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 2800,
    //   "stock": 12
    // },
    //   {
    //   "title": "Pan de centeno y calabaza",
    //   "description": "Pan con puré de calabaza y centeno.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 2700,
    //   "stock": 14
    // },
    // {
    //   "title": "Pan de centeno y higos",
    //   "description": "Pan dulce con higos secos y centeno.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 2900,
    //   "stock": 13
    // },
    // {
    //   "title": "Pan de centeno y avena",
    //   "description": "Pan nutritivo con copos de avena y centeno.",
    //   "category": "panaderia",
    //   "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
    //   "price": 2500,
    //   "stock": 17
    // }
    {
      "title": "Croissant de mantequilla",
      "description": "Clásico croissant francés con mantequilla de alta calidad.",
      "category": "bolleria",
      "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
      "price": 1800,
      "stock": 25
    },
    {
      "title": "Pain au chocolat",
      "description": "Bollo hojaldrado relleno de chocolate negro.",
      "category": "bolleria",
      "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
      "price": 2200,
      "stock": 20
    },
    {
      "title": "Ensaimada mallorquina",
      "description": "Bollo espiral dulce típico de Mallorca.",
      "category": "bolleria",
      "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
      "price": 2500,
      "stock": 15
    },
    {
      "title": "Napolitana de crema",
      "description": "Bollo hojaldrado relleno de crema pastelera.",
      "category": "bolleria",
      "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
      "price": 2000,
      "stock": 18
    },
    {
      "title": "Berlina rellena de mermelada",
      "description": "Bollo frito relleno de mermelada de fresa.",
      "category": "bolleria",
      "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
      "price": 1900,
      "stock": 22
    },
    {
      "title": "Palmerita de hojaldre",
      "description": "Clásica palmerita de hojaldre crujiente.",
      "category": "bolleria",
      "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
      "price": 1700,
      "stock": 28
    },
    {
      "title": "Lazo de hojaldre y manzana",
      "description": "Bollo de hojaldre con relleno de manzana caramelizada.",
      "category": "bolleria",
      "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
      "price": 2300,
      "stock": 16
    },
      {
      "title": "Donut glaseado",
      "description": "Clásico donut americano con glaseado dulce.",
      "category": "bolleria",
      "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
      "price": 1600,
      "stock": 30
    },
    {
      "title": "Caña de crema",
      "description": "Bollo alargado relleno de crema pastelera.",
      "category": "bolleria",
      "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
      "price": 2100,
      "stock": 19
    },
    {
      "title": "Rollito de canela",
      "description": "Bollo dulce con canela y glaseado.",
      "category": "bolleria",
      "imageUrl": "https://res.cloudinary.com/dpisx0ysb/image/upload/v1738280263/BREAD-SVG_qm9b6q.svg",
      "price": 2400,
      "stock": 14
    }
  ]

//variables de entorno
const URI_MONGODB = process.env.URI_MONGODB;

const enviromentInit = async () => {
    await mongoose.connect(URI_MONGODB)

    let result = await ProductModel.insertMany(productsEjemplos)

    console.log("Products inserted", result)
}

enviromentInit()
