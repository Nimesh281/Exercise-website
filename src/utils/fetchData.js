export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": `18837e1004msh4c54b4a4d16bf4cp127600jsn3cd6f52e1921`,
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
  },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c40d9e3223mshc92b2153c4536f5p1a6e50jsndbf17f535a53',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);  
  const data = response.json();
  return data;
};
