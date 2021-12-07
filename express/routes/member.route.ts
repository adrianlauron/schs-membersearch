import express from 'express';
import { MemberController } from '../controllers/member.controller';
import { SearchController } from '../controllers/search.controller';

export class MemberRoute {
    private _memberController;
    private _searchController;

    constructor(app: express.Router) {
        this._memberController = new MemberController();
        this._searchController = new SearchController();

        app.get('/api/members', this._memberController.getMembers)
        app.get('/api/members/:q?', this._memberController.getMember)
        app.get('/api/load', this._memberController.loadAll)
    
        app.get('/api/search', this._searchController.getSearches)
        app.post('/api/search', this._searchController.saveSearch);
    }
}


