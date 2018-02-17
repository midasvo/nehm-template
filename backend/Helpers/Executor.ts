class Executor {
    constructor(fn: Function) {
        console.log("Execution started for: " );
        fn();
    }
}

export = Executor;