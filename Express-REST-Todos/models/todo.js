import pg from '../lib/pg.js';

async function find() {
  const { rows } = await pg.query('SELECT * FROM todos');
  return rows;
}

async function findById(id) {
  id = Number(id);
  const { rows } = await pg.query('SELECT * FROM todos WHERE id = $1', [id]);
  return rows[0] || null;
}

async function create(todo) {
  if (!todo.completed) {
    todo.completed = false;
  }

  const { rows } = await pg.query(
    'INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *',
    [todo.title, todo.completed]
  );
  return rows[0];
}

async function findByIdAndDelete(id) {
  id = Number(id);
  const { rows } = await pg.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
  return rows[0] || null;
}


async function findByIdAndUpdate(id, newTodo) {
  id = Number(id);
  const { rows } = await pg.query('UPDATE todos SET title = $1, completed = $2 WHERE id = $3 RETURNING *', [newTodo.title, newTodo.completed, id]);
  return rows[0] || null;
}

export {
  find,
  findById,
  create,
  findByIdAndDelete,
  findByIdAndUpdate,
};
