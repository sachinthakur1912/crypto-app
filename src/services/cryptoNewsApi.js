import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '59f002d725mshc0062227462c1b1p189342jsn78808f7d8447',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl='https://bing-news-search1.p.rapidapi.com';

const createRequests = (url)=>({url,headers:cryptoNewsApiHeaders})
export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=>createRequests(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});
export const {useGetCryptoNewsQuery}=cryptoNewsApi;