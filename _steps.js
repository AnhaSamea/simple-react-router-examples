/* 
1. install react router: npm i react-router-dom
2. create a router by using createBrowserRouter
3. Add RouterProvider and pass router props
4. Create some route inside the router
*/
/* 
Things you need to create a route:
1. Create a Link : so that you can go this route
2. Create a component: to add what you will show once you go to that route
3. Add route so that react router knows the component it needs to display while you are visiting to that route
 */
const data = [ { name: "hero", id: 1221 }, { name: "Karim", id: 1222 }, { name: "Rahim", id: 1223 } ];
const result = data.find(person => person.id === 1221);
console.log(result);