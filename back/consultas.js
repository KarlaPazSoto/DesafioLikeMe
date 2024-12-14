const { pool } = require('./config');

const agregarPost = async (titulo, img, descripcion, likes) => {
    const consulta = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *';
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

const modificarPosts = async (id, likes) => { 
    const consulta = 'UPDATE posts SET likes = $1 WHERE id = $2';
    const values = [likes, id];
    
    try{
        const result = await pool.query(consulta, values);
        console.log('Post modificado.')
    }catch(error) {
        console.error('Error al modificar el post.', error);
        throw error;
    }
};

const eliminarPost = async (id) => {
    const consulta = 'DELETE FROM posts WHERE id = $1';
    const values = [id];

    try{
        const result = await pool.query(consulta, values);
    }catch (error){
        console.error('Error al eliminar el post.', error);
        throw error;
    }
};

module.exports = {
    agregarPost,
    obtenerPosts,
    modificarPosts,
    eliminarPost
};