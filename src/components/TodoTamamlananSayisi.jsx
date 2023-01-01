import { useSelector } from "react-redux";

const TodoTamamlananSayisi = () => {
  const tamamlananIsler = useSelector((state) => {
    return state.todos.filter((is) => is.completed === true);
  });

  return (
    <h4 className='mt-3'>Tamamlanan İş Sayısı: {tamamlananIsler.length}</h4>
  );
};

export default TodoTamamlananSayisi;
