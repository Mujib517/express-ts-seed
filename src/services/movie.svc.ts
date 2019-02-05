
class MovieService {
    get(): Promise<any> {
        //fake db call
        const movies = [{ id: 1, name: "Shashank Redemption", rating: 9.3 },
        { id: 2, name: "God Father", rating: 9.2 },
        { id: 3, name: "God Father 2", rating: 9.1 }]

        const prms = new Promise((success, failure) => {
            success(movies);
        });

        return prms;
    }

    add(movie): Promise<any> {
        const prms = new Promise((success, failure) => {
            failure("Cannot add movie");
        });

        return prms;
    }
}

export default new MovieService();