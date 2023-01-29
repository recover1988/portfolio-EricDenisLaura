export interface IProjects {
    id: number,
    name: string,
    img?: string,
    video: string,
    description: string,
    repository: string,
}


export const projects: IProjects[] = [
    {
        id: 1,
        name: 'Pawsitive',
        video: 'https://youtu.be/aog7KP-JIuE',
        description: 'Es una aplicacion para la adopción de mascotas y la venta de productos en la Petshop, esta desarrollada para poder mejorar la adopcion de mascotas entres los usuarios mediante formularios que facilitan obtener la información necesaria para llevar a cabo una adopcion exitosa. Tambien cuenta con una petshop de productos los cuales se puede poner en favorito o al carrito y realizar compras. La aplicacion esta desarrollada en NextJS y TypeScritpt, tambien usa Auth0, Stripe, TailwindCSS, Tailwind, Prisma, PostgreSQL, entre otras. Tiene un Dashboard donde se muestras diferentes registros en tablas y se puede ver mediante graficos en ChartJS diferentes estadisticas.',
        repository: 'https://pawsitive-app.vercel.app/',
    },
    {
        id: 2,
        name: 'Dogs APP',
        video: 'https://youtu.be/BFc267mgEpQ',
        description: 'Esta aplicacion esta desarrollada con el stack PERN (PostgreSQL, Express, React, NodeJS), es una aplicacion donde se aplican diferentes fundamentos como obtener datos de un Endpoint, manipular datos y mostrarlos en pantalla, aplicar filtros de busqueda, creacion de datos con verificacion atravez de formularios, y mas. Esta realizada en React con Javascript y tambien se uso Redux, Express, CSS Modules, PostgreSQL, Sequelize, NodeJS.',
        repository: 'https://github.com/recover1988/PI-SoyHenry-Dogs',
    },
    {
        id: 3,
        name: 'Teslo Shop',
        video: 'https://youtu.be/ZgaNCsbAu7A',
        description: 'Es una Tienda clon de Tesla Shop, fue desarrollada en NextJS con TypeScript. En esta aplicacion se usa Cookies para hacer la autentificacion por NextAuth, los pagos se realizan con Paypal, se uso MongoDb como base de datos para guardar los productos, usuarios y regitro de compras. Formularios para crear productos con Cloudinary para las imagenes. Cuenta con dashboard para ver los productos, usaurios y registros de venta. ',
        repository: 'https://github.com/recover1988/Teslo-Shop-NEXTJS-TS',
    },
]