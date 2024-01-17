import React from 'react'
function Categories({ categoryList, categoryLoader, setCurrCategory }) {
    return (
        <div className="categories_wrapper">
            {
                categoryLoader == true ? <h1>...Loading</h1> :
                    <main className="product_wrapper">
                        <>{categoryList.length == 0 ? <h1>Nothing here</h1> : <>
                            <button className="category_option"
                                onClick={() => { setCurrCategory("All categories") }}
                            >All categories</button>
                            {categoryList.map((category, idx) => {
                                return <button className="category_option" key={idx}
                                    onClick={() => { setCurrCategory(category) }}
                                > {category}</button>
                            })}
                        </>
                        }</>
                    </main>
            }
        </div>
    )
}

export default Categories;