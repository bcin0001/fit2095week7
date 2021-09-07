const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    fullName: String,
    fees: Number,
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
    },
});

modulw.export = mongoose.model('Student' ,studentSchema);