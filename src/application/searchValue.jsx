import InputApp from "./inputApp";
import CheckboxApp from "./chekboxApp";

function SearchBar ({search, onSearch, showModule, onShowModule, showEdt, onShowEdt, showProjet, onShowProjet}) {

    return (
        <div className="ab-3">
            <div >
                <InputApp 
                    value={search} 
                    onChange={onSearch} 
                    placeholder="Rechercher ..."
                />
            </div>
            <br/><br/>
            <div>
                <CheckboxApp 
                    id="Module" 
                    onChange={onShowModule} 
                    checked={showModule} 
                    label="Module"
                />
                <br/>
                <CheckboxApp 
                    id="EDT" 
                    checked={showEdt} 
                    onChange={onShowEdt} 
                    label="Emploi du temps"
                />
                <br/>
                <CheckboxApp 
                    id="Projet" 
                    checked={showProjet} 
                    onChange={onShowProjet} 
                    label="Projet"
                />
            </div>
        </div>
    )
}

export default SearchBar;