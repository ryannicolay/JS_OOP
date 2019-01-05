// Exercise 1
function Stopwatch(startTime, endTime, duration, running) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = duration;
        this.running = running;

        Object.defineProperty(this, 'startTime', {
                get: function() { return startTime; } 
        });
        Object.defineProperty(this, 'endTime', {
                get: function() { return endTime; } 
        });
        Object.defineProperty(this, 'duration', {
                get: function() { return duration; },
                set: function(value) { return value; } 
        });
        Object.defineProperty(this, 'running', {
                get: function() { return running; } 
        });
}

Stopwatch.prototype.start = function() {
        if(this.running)
                throw new Error('Stopwatch has already started.');
        this.running = true;

        this.startTime = new Date(); 
};

Stopwatch.prototype.stop = function() {
        if(!this.running)
        throw new Error('Stopwatch has not been started.');

        this.running = false;
        this.endTime = new Date();  

        const seconds = (this.endTime.getTime() - this.startTime.getTime())/ 1000;
        this.duration += seconds;
};

Stopwatch.prototype.reset = function() {
        this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.duration = 0;
};

// Bad Abstraction // Premature optimization Example
