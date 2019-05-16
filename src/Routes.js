import Home from "./components/Home";
import About from "./components/Home/About";
import Forms from "./components/Modules/Forms";
import FormList from "./components/Modules/Forms/FormList";
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
        path: "/forms/formList",
        component: FormList
      },
      {
        path: "/forms/createForm",
        component: CreateForms
      },
      {
        path: "/forms/Form/:code",
        component: CreateForms
      }
    ]
  }
];

export default Routes;
