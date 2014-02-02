var EventWaiter = function() {
    this.waiting = 0;
    this.enabled = true;

    // Add some listeners.
    //this.ee.addListener('create-user', sendCreateRequest);
    //this.ee.addListener('request-complete', displayResponse);  
};

EventWaiter.prototype = new EventEmitter();

EventWaiter.prototype.enable = function() {
    if ( !this.waiting ) {
        events.emitEvent( 'complete' );
    }
};

EventWaiter.prototype.disable = function() {
    this.enabled = false;
};

EventWaiter.prototype.createCallback = function() {
    ++this.waiting;

    var self = this;
    return function() {
        if ( !self.waiting ) {
            console.warn( 'prologjs: callback called when not waiting' );
            return;
        }
        --self.waiting;
        var args = [ 'one' ];
        for ( var i in arguments ) {
            args.push( arguments[ i ] );
        }
        events.emitEvent.apply( self, args );
        if ( self.enabled && !self.waiting ) {
            events.emitEvent( 'complete' );
        }
    };
};