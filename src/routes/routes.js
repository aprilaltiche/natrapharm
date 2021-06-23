import LandingPage from "../components/views/Layouts/LandingPage.vue";

import Findoctor from "../components/views/Content/Findoctor.vue";
import Benefits from "../components/views/Content/Benefits.vue";
import Consult from "../components/views/Content/Consult.vue";
import AboutUs from "../components/views/Content/AboutUs.vue";
import LogIn from "../components/views/Content/LogIn.vue";
import SignUp from "../components/views/Content/SignUp.vue";
import Home from "../components/views/Content/Home.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    redirect: "/home",
    component: LandingPage,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/findoctor",
    name: "Findoctor",
    component: Findoctor,
  },
  {
    path: "/benefits",
    name: "Benefits",
    component: Benefits,
  },
  {
    path: "/consult",
    name: "Consult",
    component: Consult,
  },
  {
    path: "/aboutus",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
];

export default routes;
