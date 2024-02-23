import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';



export class News extends Component {

    static defaultProps = {
        country : 'in',
        pageSize : 8,
        category : 'science'
      }

    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string,
    }


    constructor(){
        console.log("hello I am constructor from News Component")
        super();
        this.state ={
            articles : [],
            loading: false,
            page: 1,
            
    }
}
    
    async componentDidMount(){
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce77274e0d7b49c1a1a2184fb491d8a8&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true});
        let data = await  fetch(url);
        //console.log(data);
        let parsedData = await data.json();
        //console.log(parsedData);
        this.setState ({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults,
            loading: false,
        });
    }
   
    handlePrevClick = async() =>{
    console.log('prev');
    console.log('next');
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce77274e0d7b49c1a1a2184fb491d8a8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data = await  fetch(url);
    //console.log(data);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState ({
        articles : parsedData.articles,
        page : this.state.page - 1 ,
        loading:false,
    });

    }
    handleNextClick = async() =>{
        if(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
        console.log('next');
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce77274e0d7b49c1a1a2184fb491d8a8&page=${this.state.page +1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true});
        let data = await  fetch(url);
       
        //console.log(data);
        let parsedData = await data.json();
        //console.log(parsedData);
        this.setState ({
            articles : parsedData.articles,
            page : this.state.page +1 ,
            loading:false,
        });
    }
    }


  render() {
    return (
      <div className ='container my-2'>
        <div className='text-center' style= {{margin: '80px'}}><h1>NewsMonkey Top Headlines</h1></div>
        {this.state.loading && <Spinner/>}
    
        <div className= 'row' >
            {!this.state.loading && this.state.articles && this.state.articles.map((element) => {
                return <div className ='col md-4' key ={element.url}>
                <NewsItem 
                title = {element.title} 
                description = {element.description} 
                imageUrl ={element.urlToImage}
                newsUrl = {element.url}
                author = {element.author}
                date = {element.publishedAt}
                source = {element.source.name}
                />   
                </div>
                 
            })
            }

        </div>
        <div className ='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} onClick={this.handlePrevClick} type="button" class="btn btn-dark">&larr; Previous</button>
        <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} type="button" class="btn btn-dark">Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News;
