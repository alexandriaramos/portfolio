import data from '../data';

describe('data', () => {
    test('data shape', () => {
        expect(typeof data.name).toBe('string');
        expect(data.name.length).toBeGreaterThan(0);

        expect(typeof data.location).toBe('string');
        expect(data.location.length).toBeGreaterThan(0);

        expect(typeof data.email).toBe('string');
        expect(data.email.length).toBeGreaterThan(0);

        expect(typeof data.phone).toBe('string');
        expect(data.phone.length).toBeGreaterThan(0);

        expect(typeof data.role).toBe('string');
        expect(data.role.length).toBeGreaterThan(0);

        expect(typeof data.bio).toBe('string');
        expect(data.bio.length).toBeGreaterThan(0);

        expect(typeof data.avatar).toBe('string');
        expect(data.avatar.length).toBeGreaterThan(0);

        expect(typeof data.displayPhoto).toBe('string');
        expect(data.displayPhoto.length).toBeGreaterThan(0);

        expect(typeof data.background).toBe('string');
        expect(data.background.length).toBeGreaterThan(0);

        expect(Array.isArray(data.skills)).toBe(true);
        expect(data.skills.length).toBeGreaterThan(0);
        expect(data.skills.length % 4).toBe(0);
        data.skills.forEach(s => {
            expect(typeof s).toBe('string');
            expect(s.length).toBeGreaterThan(0);
        });

        expect(typeof data.resume).toBe('string');
        expect(data.resume.length).toBeGreaterThan(0);

        expect(Array.isArray(data.jobs)).toBe(true);
        expect(data.jobs.length).toBeGreaterThan(0);
        data.jobs.forEach(j => {
            expect(typeof j.from).toBe('number');
            expect(typeof j.to).toBe('number');
            expect(typeof j.role).toBe('string');
            expect(j.role.length).toBeGreaterThan(0);
            expect(typeof j.company).toBe('string');
            expect(j.company.length).toBeGreaterThan(0);
            expect(typeof j.description).toBe('string');
            expect(j.description.length).toBeGreaterThan(0);
            expect(typeof j.type).toBe('string');
            expect(j.type.length).toBeGreaterThan(0);
        });

        expect(Array.isArray(data.projects)).toBe(true);
        expect(data.projects.length).toBeGreaterThan(0);
        data.projects.forEach(p => {
            expect(typeof p.title).toBe('string');
            expect(p.title.length).toBeGreaterThan(0);
            expect(typeof p.type).toBe('string');
            expect(p.type.length).toBeGreaterThan(0);
            expect(typeof p.url).toBe('string');
            expect(p.url.length).toBeGreaterThan(0);
            expect(typeof p.image).toBe('string');
            expect(p.image.length).toBeGreaterThan(0);
        });
    });
});
