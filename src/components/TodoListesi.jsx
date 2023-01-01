import TodoElemani from "./TodoElemani";
import { useSelector } from "react-redux";

const TodoListesi = () => {
  const yapilacaklar = useSelector((state) => state.todos);

  return (
    <ul className='list-group'>
      {yapilacaklar.map((todo) => (
        <TodoElemani
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoListesi;
