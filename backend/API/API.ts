import express = require("express");
import path = require("path");
import cookieParser = require("cookie-parser");
import bodyParser = require("body-parser");
import Executor = require("./../Helpers/Executor");
class API { //kek
    protected _api: express.Application;

    constructor() {

        console.log("is executor thigny work?");
        new Executor(()=> {
            console.log("Executor is work!!!!!");
        });
        console.log("Creating new API...");
        this._api = this._api || this.getInstance();
        
        console.log("Created API instance.");
        this.setup();
        console.log()
        return this._api;
    }

    public set(attribute: string, value: string) {
        this._api.set(attribute, value);
    }

    public getAPI() : express.Application {
        return this._api;
    }

    private getInstance() : express.Application {
        return express();
    }

    private setup() {
        this.setViewEngine('hbs'); // Set handlebars
        this.catch404();
        this.handleErrors();
        this.setBodyParser();
        this.registerRoutes();
    }

    /**
     * Sets the desired view engine
     * @param viewEngine abbreviation of desired view engine, e.g. 'hbs' for handlebars
     */
    private setViewEngine(viewEngine: string) {
        this._api.set('views', path.join(__dirname, 'Views'));
        this._api.set('view engine', viewEngine);    
    }

    /**
     * Uses instance of API (_api)
     * catch 404 and forward to error handler
     */
    private catch404() {
        this._api.use(function(req, res, next) {
            let err : any;
            err = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    }

    /**
     * Uses instance of API (_api)
     * Handle errors
     */
    private handleErrors() {
        this._api.use(function(err, req, res, next) {
            // set locals, only providing error in development
            // res.locals.message = err.message;
            // console.log(req);
            // res.locals.error = req.API.get('env') === 'development' ? err : {};

            // // render the error page
            // res.status(err.status || 500);
            // res.render('error');
        });
    }

    /**
     * Sets the body parser
     */
    private setBodyParser() {
        this._api.use(bodyParser.json());
        this._api.use(bodyParser.urlencoded({ extended: false }));
    }

    /**
     * Register Express routes to files. << Should be in seperate helper! TODO >>
     */
    private registerRoutes() {

        let index = require('./Routes/Index');
        this._api.use('/', index);

    }
}

export = API;