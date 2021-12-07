import { Search } from "../models/search.model";

export class SearchRepository {
    getAll() {
        return Search.find()
            .sort('-dateAdded')
            .select('searchResult dateAdded')
            .exec()
    }

    create(item: any) {
        const search = new Search({
            searchResult: item,
            dateAdded: new Date()
        });
        search.save();
        return search;
    }
}