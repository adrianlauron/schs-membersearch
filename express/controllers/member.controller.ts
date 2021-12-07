import { Request, Response } from 'express';
import { ApiRequest } from '../models/apirequest.model';
import { MemberRepository } from "../repositories/member.repository";

export class MemberController {
    async getMembers(req: Request, res: Response) {
        try {
            var repo = new MemberRepository();
            repo.getAll()
                .then(members => {
                    return res.status(200).json(members);
                });            
        }
        catch(error) {
            console.log(`getMembers error: ${error}`);
        }
    }

    async getMember(req: Request, res: Response) {
        try {
            var repo = new MemberRepository();
            const query: ApiRequest = JSON.parse(req.params.q);
    
            repo.getOne(query)
                .then(member => {
                    return res.status(200).json(member);
                });
        }
        catch(error) {
            console.log(`getMember error: ${error}`);
        }
    }

    async loadAll(req: Request, res: Response) {
        try {
            var repo = new MemberRepository();
            var results = repo.loadAll();
            return res.status(200).json(results);
        }
        catch(error) {
            console.log(`loadAll error: ${error}`);
        }
    }
}