import mongoose from 'mongoose';

const resourceManagmentSchema = new mongoose.Schema({
    land_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shelter',
        required: true
    },
    labor: {
        type: String,
        required: true
    },
    feed: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

const ResourceManagment = mongoose.model('resourceManagment', resourceManagmentSchema);

export default ResourceManagment;
