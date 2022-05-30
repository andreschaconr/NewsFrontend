import React from 'react'
import { useState, useEffect } from 'react';
import { News } from '../News/News';
import { getData } from '../../helpers/fetch';
import { Button, Form,FormInput} from '../../globalStyles';

export function InfoSection() {
const [ Technews, setTechnews ] = useState([]); 
const [ page, setpage ] = useState(0); 
const [ search, setSearch ] = useState('');

 const news = async () => {
    let data = await getData ();
    data = await data.map((data)=>(data.articles));
    setTechnews(data[0])
 }

 useEffect(() =>{ 
       news()
  }, []) 

  const filternews  =() =>{
    if( search.length === 0 ) 
      return Technews.slice(page, page + 5)

      const filtered = Technews.filter( article => article.title.includes( search ) );
        return filtered.slice( page, page + 5);
  }

  const Nextpage = () =>{
    if( Technews.filter( article => article.title.includes( search ) ).length > page + 5 )
      setpage(page+5);
  }
  const Prevpage = () =>{
      if( page > 0 )
          setpage(page-5);
}

const onSearchChange = ({ target }) => {
    setpage(0);
    setSearch( target.value );
}

    return(
<>

        <Form>
        <FormInput 
        name="search" 
        type="text" 
        placeholder="Buscar..."
        value={ search }
        onChange={ onSearchChange }
        />
        
        </Form>
        <div className='container_cards'>        
            {filternews().map(
                (articles,index) => (
            <News 
            key={index}
            title={articles.title}
            description={articles.description}
            urlToImage= {articles.urlToImage}
            author= {articles.author}
            url={articles.url}
            />
        ))}
        </div>       
        <Button primary="true" onClick={Prevpage}  >anterior</Button>
        <Button primary="true" onClick={Nextpage}>siguiente</Button>
        </>
    );
}





