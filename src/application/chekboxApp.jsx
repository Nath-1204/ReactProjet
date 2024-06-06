
function CheckboxApp ({id, checked, onChange, label}){

    const style = {marginLeft: '2%'}
    const labelStyle = {color: 'brown', fontSize: '25px'}

    return (
        <>
            <input 
                style={style}
                type="checkbox"
                id={id}
                className="form-checked-input"
                checked={checked}
                onChange={e => onChange(e.target.checked)}
            />
            <label htmlFor={id} className="form-checked-label" style={labelStyle}>{label}</label>
        </>
    )
}

export default CheckboxApp;