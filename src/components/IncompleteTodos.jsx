export const IncompleteTodos = (props) => {
  const { todos, onClickDelete, onClickComplete } = props;
  return (
    <div className="incomplete-area">
      <p className="tytle">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          /* 配列の中身を繰り返し出力したいのでmapを用いる */
          return (
            // 仮想DOMをレンダリングするため、一意となるキーを持たせる
            // returnは省略できる。完了のTODO参照
            <li key={todo}>
              <div className="list-item">
                <p className="todo-item">{todo}</p>
                <button
                  onClick={() => {
                    onClickComplete(index);
                  }}
                >
                  完了
                </button>
                {/* ここでonClickDelete(index)としてしまうと、レンダリングのたびに関数実行されてしまう。
                  したがって、{}の中にアロー関数を書いて引数を渡す。この時、定義したアロー関数の中に引数は書かない
                  それを渡したいわけではないので。 */}
                <button
                  onClick={() => {
                    onClickDelete(index);
                  }}
                >
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
