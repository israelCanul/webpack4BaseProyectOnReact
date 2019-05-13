import Home from "./components/Home";
import About from "./components/Home/About";
import Forms from "./components/Modules/Forms";
import CreateForms from "./components/Modules/Forms/createForm.js";

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
    component: Forms,
    routes: [
      {
        path: "/forms/createForm",
        component: CreateForms
      },
      {
        path: "/forms/updateForm/:code",
        component: CreateForms
      }
    ]
  }
];

export default Routes;
