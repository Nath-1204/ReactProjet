import React from 'react'
import PlanteListes from './components/plantList';
import Header from './components/header';
import Plante from './components/plante';
import Footer from './components/footer';
import Checkbox from './components/checkbox';


class App extends React.Component{
    render(){
        const c1 = "classique";
        const c2 = "extérieure";
        const c3 = 'plante grasse';

        const planteList = PlanteListes.map(e => {
           return <Plante key={e.id} name={e.nom} categorie={e.categorie} photo={e.photo}/>
          });

        return(
            <>
                <Header/>
                <div>
                    <Checkbox option={c1}/>
                    <Checkbox option={c2}/>
                    <Checkbox option={c3}/>
                </div>
                <div>
                    {planteList}
                </div>
                <div className='prix'>
                    <Footer/>
                </div>
            </>
        )
    }
}

export default App;