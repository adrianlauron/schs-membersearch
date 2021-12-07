import { MemberRepository } from '../../repositories/member.repository';

describe("MemberRepository", () =>{
    test('return members', () => {
        const instance = new MemberRepository();
        instance.getAll().then(members => {
            expect(members.length).toBeGreaterThan(0);
        })
    });

    test('return member containing policyNumber 8992382103', () => {
        const instance = new MemberRepository();
        instance.getAll().then(members => {
            expect(members).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ policyNumber: '8992382103' })
                ])
            )
        })
    });    
})