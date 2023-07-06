import * as tf from '@tensorflow/tfjs';

const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1], activation: 'relu'}));
//compile model
model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
// train the model
const xs = tf.tensor2d([1,2,3,4], [4,1]);
const ys = tf.tensor2d([1,3,5,7], [4,1]);

await model.fit(xs, ys);

//use the model

const input = tf.tensor2d([5], [1,1]);
const prediction = model.predict(input);
console.log(prediction.dataSync());