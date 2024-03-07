import { useState } from 'react';
import { InputTodo } from './components/InputTodos';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';
import './style.css';

export const Todo = () => {
  // ★機能追加テキストボックスの内容を保持するstate
  const [todoText, setTodoText] = useState('');
  // 追加したTodoは動的に未完了や完了に追加されたり削除されたりするため、
  // Stateを用いてレンダリングする。(初期値を配列で2個設定する)
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // テキストボックスの変更を検知するイベント
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンのイベント
  const onClickAdd = () => {
    if (todoText === '') {
      return;
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  // 削除ボタンのイベント
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンのイベント
  const onClickComplete = (index) => {
    // 未完了のTODOからボタンを押した項目を削除する
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    // 完了のTODOに削除した項目を追加する
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタンのイベント
  const onClickRevert = (index) => {
    //alert(index);
    // // 完了のTODOからボタンを押した項目を削除する
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    // // 未完了のTODOから削除した項目を追加する
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (
        <p style={{ color: 'red' }}>
          登録できるメッセージは5個までだよ～消化して～
        </p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteTodos todos={completeTodos} onClick={onClickRevert} />
    </>
  );
};
