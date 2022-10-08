import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Home from './components/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/posts';

import Products from './components/Products/Products';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/home', element: <Home></Home> },
        { path: 'about', element: <About></About> },
        { path: '/products', element: <Products></Products> },
        {
          path: '/friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            // console.log(params.friendId);
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: '/posts' ,
          loader: async()=>{
            return fetch ('https://jsonplaceholder.typicode.com/posts')
          },
           element: <Posts></Posts>
        },
        {
          path: '/post/:postId',
          loader: async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }
      ]
    },
    {
      path: '*', element: <div>This route not found: 404</div>
    }



  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
