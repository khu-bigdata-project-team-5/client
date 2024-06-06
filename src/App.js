import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Lecture from "./pages/Lecture/Lecture";
import CurriculumCategory from "./pages/CurriculumCategory/CurriculumCategory";
import CurriculumKeyword from "./pages/CurriculumKeyword/CurriculumKeyword";
import Curriculum from "./pages/Curriculum/Curriculum";
import Other from "./pages/Other/Other";
import OtherCurriculum from "./pages/OtherCurriculum/OtherCurriculum";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lecture/:id" element={<Lecture />} />
      <Route path="/curriculum/category" element={<CurriculumCategory />} />
      <Route path="/curriculum/keyworld" element={<CurriculumKeyword />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/other" element={<Other />} />
      <Route path="/other/:id" element={<OtherCurriculum />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
