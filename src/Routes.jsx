import { Routes, Route } from 'react-router-dom';
import Top from './top.jsx';
import Profile from './profile.jsx';
import Collection from './collection.jsx';
import Action from './action.jsx';

export const AppRoutes = () => {
   return (
       <Routes>
           <Route path='/' element={<Top />} />
           <Route path='/profile' element={<Profile />} />
           <Route path='/collection' element={<Collection />} />
           <Route path='/action' element={<Action />} />
       </Routes>
   )
}
