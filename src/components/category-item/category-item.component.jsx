import  "./category-item.styles.scss";


const CategoryItem=({category,id})=>{
    return (
      <div key={id} className="category-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        />
        <div key={id} className="category-body-container">
          <h2>{category.title}</h2>
          <p>Shop now</p>
        </div>
      </div>
    );
}

export default CategoryItem;