import { createServer } from 'http'

const server = createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Giris Sayfasina Hosgeldiniz</h2>');
    }
    else if (url === '/index') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Index Sayfasina Hosgeldiniz</h2>');
    }
    else if (url === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Hakkimda Sayfasina Hosgeldiniz');

    }
    else if (url === '/iletisim') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Iletisim Sayfasina Hosgeldiniz');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h2>Sayfa bulunamadi</h2>');
    }
})


const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu port ${port}'de baslatildi`);
})