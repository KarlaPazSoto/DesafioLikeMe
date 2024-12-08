const express = require('express');
const cors = require('cors');
const { obtenerPosts, agregarPost } = require('./consultas');
const portfinder = require('portfinder');
const port = 3456;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/posts', async (req, res) => {
    try {
        const posts = await obtenerPosts();
        res.json(posts);
    } catch (error) {
        console.error('Error al obtener los posts:', error);
        res.status(500).json({ error: 'Error al obtener los posts' });
    }
});

app.post('/posts', async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    if (!titulo || !img || !descripcion || likes === undefined) {
        return res.status(400).json({ error: 'Faltan datos del post' });
    }

    try {
        await agregarPost(titulo, img, descripcion, likes);
        res.send('Post agregado correctamente.');
    } catch (error) {
        console.error('Error al agregar el post:', error);
        res.status(500).json({ error: 'Error al agregar el post' });
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}
    visit: http://localhost:${port}`);
  });