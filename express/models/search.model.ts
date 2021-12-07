import mongoose, { Schema } from 'mongoose';

const SearchSchema = new Schema({
    searchResult: { type: {} },
    dateAdded: { type: Date }
});

const Search = mongoose.model('searches', SearchSchema);

export { Search }