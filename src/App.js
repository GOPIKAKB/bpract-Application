import './App.css';
import Login from './Component/Login/Login';
import Document from './Component/Document/Document';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const newContext = createContext()

function App() {
  const [token, setTocken] = useState()
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
      <newContext.Provider value={{ token, setTocken}}>
        <BrowserRouter>
          <Routes>
            {!isLogin ?
              <Route path='/' element={<Login />}></Route>
              : <Route path='/' element={<Document />}></Route>
            }
          </Routes>
        </BrowserRouter>
      </newContext.Provider>
    </div>
  );
}

export default App;
