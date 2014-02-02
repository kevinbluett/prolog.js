var config = module.exports;

config["Basic Tests"] = {
    environment: "browser",  // or "node"
    rootPath: "../",
    libs: [
    	"lib/eventemitter.min.js"
    ],
    sources: [
    	"src/eventwaiter.js",
    	"src/query.js",       // Glob patterns supported  
    	"src/prover.js",       // Glob patterns supported  
     	"src/types/*.js",        // Glob patterns supported
        "src/parser.js",       // Glob patterns supported  
        "src/tokenizer.js",      // Glob patterns supported  
        "src/loader.js" 
    ],
    tests: [
        "test/*-test.js"
    ]
};