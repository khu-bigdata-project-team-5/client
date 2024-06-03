import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Lecture from "./pages/Lecture/Lecture";
import CurriculumCategory from "./pages/CurriculumCategory/CurriculumCategory";
import CurriculumKeyword from "./pages/CurriculumKeyword/CurriculumKeyword";
import Curriculum from "./pages/Curriculum/Curriculum";
import Another from "./pages/Another/Another";
import AnotherCurriculum from "./pages/AnotherCurriculum/AnotherCurriculum";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lecture/:id" element={<Lecture />} />
      <Route path="/curriculum/category" element={<CurriculumCategory />} />
      <Route path="/curriculum/keyworld" element={<CurriculumKeyword />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/another" element={<Another />} />
      <Route path="/another/:id" element={<AnotherCurriculum />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
