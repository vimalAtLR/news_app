import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=apple&from=2023-02-09&to=2023-02-09&sortBy=popularity&apiKey=4a2aa5480c35478f8dd3895db41782c2&pageSize=${this.props.pageSize?this.props.pageSize:20}`;
        this.setState({
            loading: true,
        })
        let data = await fetch(url);
        data = await data.json();
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            page: 1,
            loading: false,
        });
    }

    fetchMoreData = async () => {
        console.log("fetch more")
        this.setState({page: this.state.page + 1});
        let url = `https://newsapi.org/v2/everything?q=apple&from=2023-02-09&to=2023-02-09&sortBy=popularity&apiKey=4a2aa5480c35478f8dd3895db41782c2&page=${this.state.page+1}&pageSize=${this.props.pageSize?this.props.pageSize:20}`;
        this.setState({
            loading: true,
        })
        let data = await fetch(url);
        data = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: this.state.articles.concat(data.articles),
            loading: false,
        });
    }

    render() {
        return (
            <>
                <div className='container my-3'>
                    <h3 className='text-center'>Top Headlines</h3>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                    >
                        <div className="container">
                            <div className="row">
                                {this.state.articles?.map((element) => { 
                                    return <div className="col-md-4"  key={element.url}>
                                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} />
                                    </div>
                                })}
                            </div>
                            {this.state.loading && <Spinner />}
                        </div>
                    </InfiniteScroll>    
                </div>
            </>
        )
    }
}
