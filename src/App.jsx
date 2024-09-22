import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.vercel.app/blog');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error al obtener los blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Blog Consulta</h1>
      <button onClick={fetchBlogs}>Consultar</button>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{blog.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
