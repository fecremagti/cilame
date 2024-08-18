// Example model object
const model = {
    getName: function(value) {
        // Simulated logic to retrieve a name based on the value
        return `Name for ${value}`;
    }
};

// Example usage
const v = 'example';
const sizeSignal = model.getName(v);
console.log(sizeSignal);  // Outputs: Name for example
