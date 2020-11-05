
export const gifFetch=async(categoria)=>{

    const url=`http://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(categoria)}&api_key=44VyrZbkuSjPiI5HY9OAqSePsiOUqrPB`
    const res=await fetch(url);
    const data=await res.json();

    return data;
}