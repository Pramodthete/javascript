// Asynchronous iterable object
const asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            async next() {
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
                if (i < 3) {
                    return { value: i++, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Asynchronous function to consume the iterable
async function consumeAsyncIterable() {
    for await (let value of asyncIterable) {
        console.log(value); // Logs 0, 1, 2 with a delay of 1 second between each value
    }
}

consumeAsyncIterable();
