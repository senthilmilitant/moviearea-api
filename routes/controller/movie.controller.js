import Movie from "../../models/models.movie.js";


// Read all movie info
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


//read movie info by id
export const moviedetails =async(req,res)=>{
  try {
    const movie = await Movie.findById(req.params.id)
    if (! movie ) {
        return res.status(404).json({message:"cannot find movie"})
    } else {
         res.json(movie)
    }
    
   } catch (error) {
      return res.status(500).json({message:error.message})
   }
}

//update movie info
export const movieUpdate = async (req, res) => {
     try {
          const upDatedmovie = await Movie.findOneAndUpdate(
            {_id:req.params.id},
            {
              title:req.body.title,
              desc : req.body.desc,
              rating : req.body.rating
            },
            { new:true}
          )
          if (!upDatedmovie) {
            return res.status(404).json({ message: "Movie not found" });
          }
          res.status(200).json(upDatedmovie)
     } catch (error) {
      res.status(500).json({message:error.message})
     }
  }


  //delete movie
export const movieDelete = async (req, res) => {
  const movieId = req.params.id

  try {
     await Movie.deleteOne({_id:movieId})
     res.json({message:"movie deleted"})
    
  } catch (error) {
    res.status(500).json({message:error.message})
  }
  }  

