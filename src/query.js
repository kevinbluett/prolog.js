
Query.prototype = new EventWaiter();

Query.prototype.extendResults = function( variables ) {
    if ( !variables ) {
        return;
    }
    for ( var name in variables ) {
        console.log( 'var ' + name + ' = ' + variables[ name ] );
        if ( this.results[ name ] ) {
            Array.prototype.push.apply( this.results[ name ], variables[ name ] );
            continue;
        }
        // else 
        this.results[ name ] = variables[ name ].slice();
    }
};

Query.prototype.onComplete = function() {
    if ( this.completed ) {
        return console.warn( 'prologjs: query has been completed again warning' );
    }
    this.completed = true;
    this.callback( this.results );
};

Query.prototype.createResultCallback = function() {
    return this.createCallback();
};

function Query( queryString, callback ) {
    this.string = queryString;
    this.results = {};
    this.callback = callback;
    this.completed = false;

    this.addListener( 'one', this.extendResults.bind( this ) );
    this.addListener( 'complete', this.onComplete.bind( this ) );
};