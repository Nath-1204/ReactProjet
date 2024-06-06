export function Input({placeholder, value, onChange}){
    const style = {width: "280px", height: "30px", border: "2px solid brown"}
    
    return (
        <>
            <input 
                style={style}
                type="text"
                className="form-control"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    )
}