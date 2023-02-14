import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
// export default class News extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         articles: [],
    //         loading: false,
    //         page: 1,
    //     }
    // }

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    // const [totalResults, setTotalResults] = useState(0);

    async function fetchData() {
        props.setProgress(0);
        let url = `https://newsapi.org/v2/everything?q=apple&from=2023-02-09&to=2023-02-09&sortBy=popularity&apiKey=4a2aa5480c35478f8dd3895db41782c2&pageSize=${props.pageSize?props.pageSize:20}`;
        setLoading(true);
        let data = await fetch(url);
        data = await data.json();
        setArticles(data.articles);
        // setTotalResults(data.totalResults);
        setPage(1);
        setLoading(false);
        props.setProgress(100);
    }
    
    useEffect( () => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    
    // const componentDidMount = async () => {
    //     props.setProgress(0);
    //     let url = `https://newsapi.org/v2/everything?q=apple&from=2023-02-09&to=2023-02-09&sortBy=popularity&apiKey=4a2aa5480c35478f8dd3895db41782c2&pageSize=${props.pageSize?props.pageSize:20}`;
    //     setLoading(true);
    //     this.setState({
    //         loading: true,
    //     })
    //     let data = await fetch(url);
    //     data = await data.json();
    //     setArticles(data.articles);
    //     setTotalResults(data.totalResults);
    //     setPage(1);
    //     setLoading(false);
    //     this.setState({
    //         articles: data.articles,
    //         totalResults: data.totalResults,
    //         page: 1,
    //         loading: false,
    //     });
    //     props.setProgress(100);
    // }

    const fetchMoreData = async () => {
        props.setProgress(10);
        // this.setState({page: this.state.page + 1});
        let url = `https://newsapi.org/v2/everything?q=apple&from=2023-02-09&to=2023-02-09&sortBy=popularity&apiKey=4a2aa5480c35478f8dd3895db41782c2&page=${page+1}&pageSize=${props.pageSize?props.pageSize:20}`;
        setPage(page + 1);
        setLoading(true);
        // this.setState({
        //     loading: true,
        // })
        let data = await fetch(url);
        props.setProgress(40);
        data = await data.json();
        props.setProgress(70);
        setPage(page - 1);
        setArticles(articles.concat(data.articles));
        setLoading(false);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: this.state.articles.concat(data.articles),
        //     loading: false,
        // });
        props.setProgress(100);
    }

    // render() {
        return (
            <>
                <div className='container my-3'>
                    <h3 className='text-center'>Top Headlines</h3>
                    <InfiniteScroll
                        dataLength={articles?.length}
                        next={fetchMoreData}
                        hasMore={articles?.length ? true : false}
                        loader={<h4>Loading...</h4>}
                    >
                        <div className="container">
                            <div className="row">
                                {articles?.length && articles?.map((element) => { 
                                    return <div className="col-md-4"  key={element?.url}>
                                        <NewsItem title={element?.title} description={element?.description} imgUrl={element?.urlToImage} newsUrl={element?.url} />
                                    </div>
                                })}
                            </div>
                            {loading && <Spinner />}
                        </div>
                    </InfiniteScroll>    
                </div>
            </>
        )
    // }
}

export default News