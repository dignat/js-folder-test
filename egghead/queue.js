//FIFO

function createQueue() {
    const queue = []
    return {
        enqueue(item) {
            queue.unshift(item)
        },
        dequeue() {
            return queue.pop();
        },
        peek() {
            return queue[queue.length - 1];
        },
        length() {
            return queue.length;
        },
        isEmpty() {
            return queue.length === 0;
        },
        print() {
            for (let i of queue) {
                console.log(i)
            }
        }
    }
}

const q = createQueue();

q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.enqueue('d');

q.dequeue()
q.print();
