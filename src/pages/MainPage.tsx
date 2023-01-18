import AuthHOC from "../components/HOC/AuthHOC";
import NavBar from "../components/NavBar/NavBar";
import Todo from "../components/Todo/Todo";
import { needAuthMessage } from "../constant/auth";
import { needToken } from "../lib/utils/pageAuth";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Todo />
    </>
  );
};

export const ProtectedMainPage = AuthHOC(
  MainPage,
  needToken,
  needAuthMessage,
  "/"
);

export default MainPage;
