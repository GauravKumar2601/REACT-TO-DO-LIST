export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            toggleTodo(id, e.target.checked);
          }}
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        //       ^This is passing a function,
        //whereas using onClick={deleteTodo(todo.id) is calling a fxn and putting the result}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
