import mongoose,{ Schema  } from "mongoose";

//write the schema
const schema = new Schema({
    title: {
        type:String,
        required:true,
        unique :true
    },
    description : {
        type: String,
        required: true
    },
    rating : {
        type: Number,
        required: true
    },
},{
    versionKey:false
})

//creat your model

const Movie = mongoose.model("Movie",schema)

export default Movie
