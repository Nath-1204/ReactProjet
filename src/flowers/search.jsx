import { Input } from "./input";
import { Checkbox } from "./checkbox";

export function SearchBar( {search, onSearch, showAnimal, onShowAnimal, showPlanteOnly, onShowPlanteOnly}){
    return(
        < div className='ab-3'>
            <div>
                <Input value={search} onChange={onSearch} placeholder="Rechercher..."/>
            </div>
            <br/><br/>
            <Checkbox 
                id="plante"
                checked={showPlanteOnly}
                onChange={onShowPlanteOnly}
                label="Plantes"
            />
            <Checkbox 
                id="animal"
                checked={showAnimal}
                onChange={onShowAnimal}
                label="Animals"
            />
        </div>
    )
}

