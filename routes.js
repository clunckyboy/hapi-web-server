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
    },
    {
        method: 'GET',
        path: '/users/{username?}',
        handler: (request, h) => {
            const { username = 'Stranger' } = request.params;
            return `Hello, ${username}`;
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'stranger' } = request.params;
            const { lang } = request.query;

            if(lang === 'id') return `Hai, ${name}`;
            return `Hello, ${name}!`;
        }
    }
];

module.exports = routes;