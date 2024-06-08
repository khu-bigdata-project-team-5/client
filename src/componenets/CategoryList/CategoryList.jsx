import * as S from "./CategoryList.style";
import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  return (
    <S.CategoryListContainer>
      {categories.map((category) => (
        <Link
          to={`/curriculum/keyword/${category.name}`}
          key={category.id}
          style={{ textDecoration: "none" }}
        >
          <S.CategoryListItem>{category.name}</S.CategoryListItem>
        </Link>
      ))}
    </S.CategoryListContainer>
  );
};

export default CategoryList;
