import { ApiRequest } from '../models/apirequest.model';
import { Member } from '../models/member.model';
import _ from 'underscore';
import moment from 'moment';

import fs from 'fs';

export class MemberRepository {
    // get a member based on the query
    getOne(query: ApiRequest) {
        return Member.findOne({ 
            $or: [
                { memberCardNumber: query.memberCardNumber },
                { policyNumber: query.policyNumber }
            ]
        }).exec()
    }

    // returns list of members, sorted by DOB
    getAll() {
        return Member.find().sort('dataOfBirth').exec()
    }

    // this should only be used one time to load the data from the json file
    loadAll() {
        const data = fs.readFileSync(`${__dirname}/../data/MOCK_DATA.json`, 'utf-8');

        let members = JSON.parse(data);

        _.each(members, current => {
            const member = new Member({
                id: current.id,
                firstName: current.firstName,
                lastName: current.lastName,
                memberCardNumber: current.memberCardNumber,
                policyNumber: current.policyNumber,
                dataOfBirth: moment(current.dataOfBirth, 'DD/MM/YYYY').local()
            })
            member.save()
        })

        return members;
    }
}