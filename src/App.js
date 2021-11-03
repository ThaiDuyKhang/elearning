import React, { Suspense, lazy } from "react";
import Loading from "./components/Loading/loading";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";
import { Switch,Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import HomeTemplate from "./templates/Home/HomeTemplate";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";

export const history = createBrowserHistory();

function App() {

  return (
    <div>
      <Router history={history}>
        <Suspense fallback={<Loading />}>
          <ScrollToTop />
          <Switch>
            <HomeTemplate
              path="/"
              exact
              Component={lazy(() => import("./templates/Home/Pages/HomeContent"))}
            />
            <HomeTemplate
              path="/about"
              exact
              Component={lazy(() => import("./templates/Home/Pages/About"))}
            />
            <HomeTemplate
              path="/courses"
              exact
              Component={lazy(() => import("./templates/Home/Pages/Courses"))}
            />
            <HomeTemplate
              path="/courses/detail/:id"
              exact
              Component={lazy(() =>
                import("./templates/Home/Pages/DetailsCourse")
              )}
            />
            <HomeTemplate
              path="/courses/BackEnd"
              exact
              Component={lazy(() =>
                import("./templates/Home/Pages/Courses/BackEnd")
              )}
            />
            <HomeTemplate
              path="/courses/FrontEnd"
              exact
              Component={lazy(() =>
                import("./templates/Home/Pages/Courses/FrontEnd")
              )}
            />
            <HomeTemplate
              path="/courses/Design"
              exact
              Component={lazy(() =>
                import("./templates/Home/Pages/Courses/Design")
              )}
            />
            <HomeTemplate
              path="/courses/DiDong"
              exact
              Component={lazy(() =>
                import("./templates/Home/Pages/Courses/DiDong")
              )}
            />
            <HomeTemplate
              path="/courses/TuDuy"
              exact
              Component={lazy(() =>
                import("./templates/Home/Pages/Courses/TuDuy")
              )}
            />
            <HomeTemplate
              path="/courses/FullStack"
              exact
              Component={lazy(() =>
                import("./templates/Home/Pages/Courses/FullStack")
              )}
            />
            <HomeTemplate
              path="/instructor"
              exact
              Component={lazy(() => import("./templates/Home/Pages/Instructor"))}
            />
            <HomeTemplate
              path="/gallery"
              exact
              Component={lazy(() => import("./templates/Home/Pages/Gallery"))}
            />
            <HomeTemplate
              path="/contact"
              exact
              Component={lazy(() => import("./templates/Home/Pages/Contact"))}
            />
            <UserTemplate
              path="/signup"
              exact
              Component={lazy(() =>
                import("./templates/Home/Pages/UserPages/SignUp")
              )}
            />
            <UserTemplate
              path="/signin"
              exact
              Component={lazy(() =>
                import("./templates/Home/Pages/UserPages/SignIn")
              )}
            />
            <HomeTemplate
              path="/admin"
              exact
              Component={lazy(() => import("./templates/Admin"))}
            />

            <CheckoutTemplate
              path="/checkout/:id"
              exact
              Component={lazy(() =>
                import("./templates/CheckoutTemplate/CheckoutPage/checkout")
              )}
            />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
