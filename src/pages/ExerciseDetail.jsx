import { Box } from '@mui/material'
import React , {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions , fetchData } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const {id} = useParams();

  useEffect(() => {

    const fetchExercisesData = async() => {
    const excerciseDbUrl = "https://exercisedb.p.rapidapi.com";
    const youtubSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

    // const exerciseDetailData = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest`,exerciseOptions);
    // setExerciseDetail(exerciseDetailData);
    // console.log(exerciseDetailData.json());

    const exerciseDetailData = await fetchData(`${excerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
    setExerciseDetail(exerciseDetailData);

    // const url = 'https://exercisedb.p.rapidapi.com/exercises/exercise/%7Bid%7D';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'content-type': 'application/octet-stream',
    //     'X-RapidAPI-Key': 'c40d9e3223mshc92b2153c4536f5p1a6e50jsndbf17f535a53',
    //     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //   }
    // };
    
    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.text();
    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }
    
    }

    fetchExercisesData();


    

  }, [id])
  

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail