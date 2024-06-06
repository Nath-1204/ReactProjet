export function Checkbox ({checked, onChange, label, id}) {
    return(
        <>
            <input
                type="checkbox"
                id={id}
                className="form-check-input"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <label htmlFor={id} className="form-check-label">{label}</label>
        </>
    )
}