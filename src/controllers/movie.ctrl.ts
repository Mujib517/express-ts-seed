import movieSvc from '../services/movie.svc';

class MovieCtrl {
    async get(req, res) {
        try{
            const movies = await movieSvc.get();
            res.status(200).json(movies);
        }
        catch(error){
            //log the error
            res.status(500).send("Internal Server Error");
        }
    }

    async post(req, res) {
        try{
            await movieSvc.add(req.body);
            res.status(201).send("Created");
        }
        catch(error){
            //log the error
            res.status(500).send("Internal Server Error");
        }
    }
}

export default new MovieCtrl();