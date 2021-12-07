import { SearchRepository } from '../../repositories/search.repository';

describe("SearchRepository", () =>{
    test('return searches', () => {
        const instance = new SearchRepository();
        instance.getAll().then(searches => {
            expect(searches.length).toBeGreaterThan(0);
        })
    });

    test('return member containing policyNumber 8992382103', () => {
        const instance = new SearchRepository();
        instance.getAll().then(searches => {
            expect(searches).toEqual(
                expect.arrayContaining([
                    expect.objectContaining(
                        expect.objectContaining({ firstname: 'Tailor' })
                    )
                ])
            )
        })
    });    
})