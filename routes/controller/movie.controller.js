import Movie from "../../models/models.movie.js";

//get all the movie
export const movieIndex = async(req, res) => {
    try {
      const movies = await Movie.find({})
      res.status(200).json(movies)
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  }

//get movie by id
export const moviedetails =async(req,res)=>{
  try {
    const {id} = req.params
    const movie = await Movie.findById(id)
    if (!movie ) {
        return res.status(404).json({message:"cannot find movie"})
    } 
     res.status(200).json(movie)
   } 
   catch (error) {
      return res.status(500).json({message:error.message})
   }
}
// creat movie 
export const movieCreate = async (req, res) => {
  try {
      const { title, description, rating } = req.body;

      // Manual validation before creating the movie
      if (!title || !description || !rating) {
          return res.status(400).json({ message: "Invalid input data" });
      }
      const newMovie = await Movie.create({ title, description, rating });

      console.log(newMovie);
       res.status(200).json(newMovie);
  } catch (error) {
      return res.status(400).json({ message: error.message });
  }
};

//update movie info
export const movieUpdate = async (req, res) => {
     try {
      const {id } = req.params
          const upDatedmovie = await Movie.findByIdAndUpdate(id,req.body)
          if (!upDatedmovie) {
            return res.status(404).json({ message: "Movie not found" });
          }
          const UpDatedmovie =await Movie.findById(id)
          console.log(UpDatedmovie)
          res.status(200).json(UpDatedmovie)
     } catch (error) {
      res.status(500).json({message:error.message})
     }
  }

  //delete movie
export const movieDelete = async (req, res) => {
  try {
    const{id}= req.params
     const deletemovie =await Movie.findByIdAndDelete(id)
     if(! deletemovie){
      return res.status(400).json({message:" Movie not found "})
     }
     res.status(200).json({message:"movie deleted"})
  } 
  catch (error) {
    res.status(500).json({message:error.message})
  }
  }  

