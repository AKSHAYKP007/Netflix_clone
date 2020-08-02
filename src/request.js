const API_KEY='12b8d7631a3fa648e849b89c117e7d4f';

const requests = {
	fetchToprated : `/trending/all/day?api_key=${API_KEY}`,
	moviePopular : `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    tvPopular :`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    tvToprated: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests;