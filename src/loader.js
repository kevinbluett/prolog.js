function runPrologQuery( data, callback ) {
    var db = data.split( '\n' );
    var rules = [];
    for ( var i in db ) {
        var prologRule = db[ i ];
        if ( !prologRule || prologRule == "" || prologRule[ 0 ] == '%'  || prologRule[ 0 ] == '#' ) {
            continue;
        }
        

        var parsedRule = parser.getRule( prologRule );

        rules.push( parsedRule );
    }

    callback( new Prover( rules ) );
}