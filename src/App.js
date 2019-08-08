import React, { Component } from 'react';
import './App.css';
import MovieRow from './component/MovieRow';

class App extends Component {
  constructor( props ){ 
    super( props );
    this.state = { }
    
    this.performSearch()
   }

   async performSearch(searchTerm){ 
     console.log( 'Perform search using MovieDB' )
     try{ 
      const uri =  await fetch('https://api.themoviedb.org/3/search/movie?api_key=3ec3cb61329ff7e52ea7e15e5311d341&query='+searchTerm )
      const data = await uri.json()
      const results = data.results
      let movieRows = []
      results.forEach( ( movie ) =>{ 
        movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`
        const movieRow = <MovieRow key={ movie.id } movie={ movie }/>
        movieRows.push( movieRow )
       } )
       this.setState( { rows: movieRows } )
      console.log( 'Fetching data Complete' )
      }catch(e){ 
        console.log( e )
        console.log( 'Failed to Fetch data' )
       }
    }

    handleChange = ( e ) =>{ 
      const query = e.target.value
      this.performSearch( query )
      
     }

  render(){ 
    return (
      <div className="App">
        <table className='titleBar'>
          <tbody>
            <tr>
              <td>
                <img width='50' src='https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg' alt=''/>
              </td>
              <td width='8'/>
              <td>
                <h1> MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
  
        <input onChange={ this.handleChange } className='searchInput container' placeholder='Enter search term'/>
        { this.state.rows }
      </div>
    );
   }
}

export default App;
