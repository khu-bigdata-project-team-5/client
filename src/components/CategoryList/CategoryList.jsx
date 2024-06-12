import * as S from "./CategoryList.style";
import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  return (
    <S.CategoryListContainer>
      {categories.map((category, index) => (
        <Link
          to={`/curriculum/keyword/${category.eng_category}`}
          key={index}
          style={{ textDecoration: "none" }}
        >
          <S.CategoryListItem>{category.ko_category}</S.CategoryListItem>
        </Link>
      ))}
    </S.CategoryListContainer>
  );
};

export default CategoryList;
