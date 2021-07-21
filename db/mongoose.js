const mongoose = require('mongoose');

const uri = "mongodb+srv://daru:tadaimakai123@cluster0.jggoz.mongodb.net/VoteMaranatha?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false
}).then(() => console.log("connected to mongodb.."))
.catch(err => console.error("could not connect to mongodb", err));