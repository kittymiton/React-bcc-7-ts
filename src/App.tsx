import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { NoMatch } from "./components/NoMatch";
import { Post } from "./components/Post";
import { Posts } from "./components/Posts";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        {/*データがidをキーとして持つ場合、URLパスも:id形式で定義*/}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};
