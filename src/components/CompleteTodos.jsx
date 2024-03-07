export const CompleteTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="complete-area">
      <p className="tytle">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-item">
              <p className="todo-item">{todo}</p>
              <button
                onClick={() => {
                  onClick(index);
                }}
              >
                戻す
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
