import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lecture/:id" element={<Lecture />} />
      <Route path="/curriculum/category" element={<CurriculumCategory />} />
      <Route path="/curriculum/keyworld" element={<CurriculumKeyword />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/another" element={<AnotherCurriculums />} />
      <Route path="/another/:id" element={<AnotherCurriculumDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
