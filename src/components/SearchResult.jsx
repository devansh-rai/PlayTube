/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useEffect,useState,useContext} from 'react'
import { useParams } from 'react-router-dom'
import {fetchDataFromApi} from '../utils/api'
import {Context} from '../context/contextApi'
import LeftNav from './LeftNav'
import SearchResultVideoCard from './SearchResultVideoCard'

const SearchResult = () => {

  const [result,setResult] = useState();
  const {searchQuery} = useParams();
  const {setLoading} = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fethcSearchResult();
  },[searchQuery])

  const fethcSearchResult = async () => {
    setLoading(true);
    const data = await fetchDataFromApi(`search/?q=${searchQuery}`);
    console.log(data);
    setResult(data.contents);
    setLoading(false);
  }

  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav />
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
        <div className='grid grid-cols-1 gap2 p-5'>
          {result?.map((item) => {
            if(item?.type !== 'video') return false;
            return <SearchResultVideoCard key={item?.video?.videoId} video={item?.video} />
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchResult