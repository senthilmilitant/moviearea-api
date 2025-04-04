import Movie from "../../models/models.movie.js";


// Read movie info
export const movieIndex = async(req, res) => {
    try {
      const movies = await Movie.find()
      res.json(movies)
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  }
// creat movie info
export const movieCreate = async (req, res) => {
   //id,title,describtion
   // validate your data
   const newMovie = new Movie({
       title :req.body.title,
       desc : req.body.desc,
       rating:req.body.rating
   })
   
   try {
    const Movie = await newMovie.save()
    console.log(Movie)
    return res.status(201).json(Movie)
   } catch (error) {
        return res.status (400).json({message:error.message})
   }
  }  


export const moviedetails =async(req,res)=>{
  try {
    const Movie = await Movie.findById(req.params.id)
    if (Movie == null) {
        return res.status(404).json({message:"cannot find movie"})
    } else {
         res.json(Movie)
    }

   } catch (error) {
      return res.status(500).json({message:error.message})
   }
}

//update movie info
export const movieUpdate = async (req, res) => {
     try {
          const upDatedmovie = Movie.findOneAndUpdate(
            {_id:res.params.id},
            {
              title:req.body.title,
              desc : req.body.desc,
              rating : req.body.rating
            },
            { new:true}
          )
          res.status(200).json(upDatedmovie)
     } catch (error) {
      res.status(500).json({message:error.message})
     }
  }
  
export const movieDelete = async (req, res) => {
  const movieId = req.param.id

  try {
     await Movie.deleteOne({_id:movieId})
     res.json({message:"movie deleted"})
    
  } catch (error) {
    res.status(500).json({message:error.message})
  }
  }  

