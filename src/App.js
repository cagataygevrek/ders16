import "bootstrap/dist/css/bootstrap.min.css";
import TodoEklemeFormu from "./components/TodoEklemeFormu";
import TodoListesi from "./components/TodoListesi";
import TodoTamamlananSayisi from "./components/TodoTamamlananSayisi";

function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
      <h1>Yapılacaklar Listem</h1>
      <TodoEklemeFormu />
      <TodoListesi />
      <TodoTamamlananSayisi />
    </div>
  );
}

export default App;
