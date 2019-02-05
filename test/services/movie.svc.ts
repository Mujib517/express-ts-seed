import movieSvc from '../../src/services/movie.svc';
import { expect } from 'chai';

describe("Movie Service", () => {

    it('should return a promise', () => {
        const prms=movieSvc.get();
        expect(prms.then).to.not.be.undefined;
    });
});