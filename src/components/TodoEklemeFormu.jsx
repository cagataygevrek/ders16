import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TodoEklemeFormu = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault(); //tarayıcı yeniden sayfayı çalıştırmasın..

    if (value) {
      dispatch(addTodo({ title: value }));
    }
  };

  return (
    <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
      <label className='sr-only'>İş Adı</label>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Yapılacak işin adını girin...'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type='submit' className='btn btn-primary mb-2'>
        Kaydet
      </button>
    </form>
  );
};

export default TodoEklemeFormu;
