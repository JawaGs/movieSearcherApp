import React, { Component } from 'react'

export default class MovieRow extends Component{ 
    
    render(){ 
        const uri = `https://www.themoviedb.org/movie/${ this.props.movie.id }`
        return( 
            <table key={ this.props.movie.id } className='container'>
            <tbody >
              <tr >
                <td className='my-5'>
                  <img src={ this.props.movie.poster_src } alt='poster' width='120' />
                </td>
                <td>
                  <h3>{ this.props.movie.title }</h3>
                  <p>{ this.props.movie.overview }</p>
                  <a href={ uri } target='_blank' rel="noopener noreferrer" className='btn btn-success' >View</a>
                </td>
              </tr>
            </tbody>
          </table>
         )
     }
 }