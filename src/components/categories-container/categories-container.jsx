import CategoryItem from "../category-item/category-item.component";
import "./categories-container.styles.scss";

const Categories = (prop) => {
  const { categories } = prop;
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
