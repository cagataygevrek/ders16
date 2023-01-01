import { useDispatch } from "react-redux";
import { isSil, tamamlamaDurumuDegistir } from "../redux/todoSlice";

const TodoElemani = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  function checkBoxTiklandi() {
    dispatch(tamamlamaDurumuDegistir({ id, completed: !completed }));
  }

  function silTiklandi() {
    dispatch(isSil({ id }));
  }

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className='d-flex justify-content-between'>
        <span className='d-flex align-items-center'>
          <input
            type='checkbox'
            className='mr-3'
            checked={completed}
            onClick={checkBoxTiklandi}
          ></input>
          {title}
        </span>
        <button onClick={silTiklandi} className='btn btn-danger'>
          Sil
        </button>
      </div>
    </li>
  );
};

export default TodoElemani;
