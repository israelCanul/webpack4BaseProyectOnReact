import Home from "./components/Home";
import About from "./components/Home/About";
import Forms from "./components/Modules/Forms";

const Routes = [
  {
    path: "/Dashboard",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/forms",
    component: Forms
  }
];

export default Routes;
