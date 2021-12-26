import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import {Route, Routes} from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
import TodosItemPage from "./components/TodosItemPage";

const App = () => {
  return (
         <>
             <div>
                 <NavLink to='/users'>Пользователи</NavLink>
                 <NavLink to='/todos'>Тудушки</NavLink>
             </div>
             <Routes>
                 <Route path='/users' element={<UserPage />}/>
                 <Route path='/todos' element={<TodosPage />}/>
                 <Route path='/users/:id' element={<UserItemPage />}/>
                 <Route path='/todos/:id' element={<TodosItemPage />}/>
             </Routes>
         </>
  );
};

export default App;
