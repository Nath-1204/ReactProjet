
function InputApp ( {value, onChange, placeholder}) {

    const styleInput = {with: '800px', height: '30px', border: '1px solid brown', marginLeft: '2%'}
    return (
        <>
            <input 
                type="texte"
                style={styleInput}
                className="form-control"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </>
    )
}

export default InputApp;