const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return `Halaman tidak dapat diakses dengan method ${request.method.toUpperCase()}`;
        }
    },  
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return `Halaman tidak dapat diakses dengan method ${request.method.toUpperCase()}`;
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        }
    }
];

module.exports = routes;