const { pool } = require('./config');

const agregarPost = async (titulo, img, descripcion, likes) => {
    const consulta = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)';
    const values = [titulo, img, descripcion, likes];

    try {
        const result = await pool.query(consulta, values);
        console.log('Post agregado.');
        return result;
    } catch (error) {
        console.error('Error al agregar el post:', error);
        throw error;
    }
};

const obtenerPosts = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM posts');
        console.log(rows);
        return rows;
    } catch (error) {
        console.error('Error al obtener los posts:', error);
        throw error;
    }
};

obtenerPosts();

module.exports = {
    agregarPost,
    obtenerPosts
};