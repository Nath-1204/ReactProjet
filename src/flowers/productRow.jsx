import { useState } from "react";

export function ProductRow ({product}) {
    const [best, setBest] = useState('👍')
    const style = product.visibility ? undefined : {color: 'blue'}
    const style1 = {width:"200px", height:"150px", display: "inline-block"}

    return(
        <tr>
            <td ><img src={product.photo} style={style1} alt="..."/></td>
            <td style={style}>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>
                {product.isBest ?
                    <button type="button" onChange={setBest}>👍</button>
                    : <button type="button" onChange={best}>👎</button>
                }
            </td>
        </tr>
    );
            
}