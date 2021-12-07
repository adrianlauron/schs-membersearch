import { Request, Response } from 'express';
import { SearchRepository } from '../repositories/search.repository';

export class SearchController {
    async getSearches(req: Request, res: Response) {
        try {
            var repo = new SearchRepository();
            repo.getAll()
                .then(searches => {
                    return res.status(200).json(searches);
                });
        }
        catch(error) {
            console.log(`getSearches error: ${error}`);
        }
    }

    async saveSearch(req: Request, res: Response) {
        try {
            var repo = new SearchRepository();
            const item = req.body;
            const search = repo.create(item);
            return res.status(200).json(search);            
        }
        catch(error) {
            console.log(`saveSearch error: ${error}`);
        }
    }
}