import { useState } from 'react'
import { Input } from './composants/forms/input';
import { Checkbox } from './composants/forms/checkebox';
import { ProductCategoryRow } from './composants/produits/productCategoryRow';
import { ProductRow } from './composants/produits/productRow';

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]

function App () {

    const [showStockedOnly, setShowStockedOnly] = useState(false)
    const [search, setSearch] = useState('')
    const visibleProducts = PRODUCTS.filter((product) => {
        if(showStockedOnly && !product.stocked){
            return false
        }

        if(search && !product.name.includes(search)){
            return false
        }
        return true
    })

    return( <div className='container my-3'>
                <SearchBar 
                    search={search}
                    onSearch={setSearch}
                    showStockedOnly={showStockedOnly} 
                    onShowStockedOnly={setShowStockedOnly}
                />
                <ProductTable products={visibleProducts}/>
            </div>
    )
        
}

function SearchBar ( {showStockedOnly, onShowStockedOnly, search, onSearch}){
    return (<>
        <div className='ab-3'>
            <Input value={search} onChange={onSearch} placeholder="Rechercher..."/>
            <Checkbox 
                id="stocked" 
                checked={showStockedOnly} 
                onChange={onShowStockedOnly} 
                label="N'afficher que les produits en stock"
            />
        </div>
    </>)
}

function ProductTable ({products}){

    const rows = [];
    let lastCategory = null;

    for(let product of products) {
        if(product.category !== lastCategory){
            rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
        }
        lastCategory = product.category
        rows.push(<ProductRow product={product} key={product.name} />)
    }

    return (<table className='table'>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>)
}

export default App;
