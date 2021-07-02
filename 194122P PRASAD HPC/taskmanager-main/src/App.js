import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainMenu from './components/MainMenu/MainMenu';
import TasksList from './components/TasksList/TasksList';
import TaskForm from './components/TaskForm/TaskForm';

import CommentMenu from './components/CommentMenu/CommentMenu';
import CommentList from './components/CommentList/CommentList';
import CommentForm from './components/CommentForm/CommentForm';

import './App.css';
import Navbar from './navbar';
import Carouselcontainer from './component/Carouselcontainer';
import Desices from './Desices';



function App() {
  return (
    <>
     <div>
       <Navbar></Navbar>
      <Carouselcontainer/>
       <Desices/>
     </div>
      <BrowserRouter>
        <MainMenu />
        <Switch>
          <Route path="/newtask">
            <TaskForm />
          </Route>
          <Route path="/">
            <TasksList />
          </Route>
        </Switch>
      </BrowserRouter>
      <CommentMenu />
      <CommentList />
      <CommentForm />
    </>
  );
}

export default App;
