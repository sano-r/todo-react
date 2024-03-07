export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  const style = {
    backgroundColor: '#c6e5d9',
    width: '400px',
    height: '30px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px',
  };
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="Todoを入力"
        value={todoText}
        // onChange: テキストボックスに変更があったら検知する
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
