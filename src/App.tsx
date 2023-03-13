import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import BoardDetail from "./pages/BoardDetail";
import NotFound from "./pages/NotFound";
import Switch from "react-switch";
import "./App.scss";

const App: React.FC = () => {
  const [checked, setChecked] = React.useState(false);
  const [boardId] = React.useState("0");
  const params = { id: boardId };

  return (
      <div className="App">
          <Header />
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-3">
                      <Sidebar />
                  </div>
                  <div className="col-md-9">
                      <Switch checked={checked} onChange={() => setChecked(!checked)} />
                      <Routes>
                          <Route path="/" element={<Home />} />
                          {/*<Route path="/" element={<div>*/}
                          {/*    asdfsfsdf*/}
                          {/*</div>} />*/}
                          <Route path="/boards/:id" element={<BoardDetail match={{ params }}/>} />
                          <Route path="*" element={<NotFound />} />
                      </Routes>
                  </div>
              </div>
          </div>
          <Footer />
      </div>
  );
};

export default App;
