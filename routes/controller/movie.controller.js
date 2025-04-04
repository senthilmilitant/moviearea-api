export const movieIndex = (req, res) => {
    res.send("Get all movie list");
  }

export const movieCreate =  (req, res) => {
   //id,title,describtion


   console.log(req.body)

   // validate your data
   return res.json(req.body)
   // creat a movie info

  }  

export const movieUpdate =  (req, res) => {
    res.send("Update a movie");
  }
  
export const movieDelete =  (req, res) => {
    res.send("Delete a movie");
  }  

