var mongoose = require('mongoose')


var showSchema = mongoose.Schema(
    {
        id: Number,
        name: String,
        image: String,
        details: {
            genres: Array,
            year: String,
            description: String,
            cast: Array,
            episodes: Array
        }
    }
)
module.exports=mongoose.model('shows', showSchema)
// module.exports=

// export default mongoose.model('shows', showSchema)