const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    pilihan : {
        type : Map,
        of: Number,
        required : true,
        unique : false
    },
    pemilih : {
        type : mongoose.Schema.ObjectId,
        required : true,
        unique : true,
        ref: 'User'
    }
});

// Login
voteSchema.statics.findByCredentials = async (pilihan) => {
    console.log(name);
    const search_pilihan = await User.findOne({pilihan : pilihan});
    if (!search_pilihan) {
        throw new Error('Wrong password or email!');
    }
    return search_pilihan;
}

const Voter = mongoose.model('voteesUKOR', voteSchema);

module.exports = Voter;



