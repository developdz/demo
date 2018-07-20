import * as tf from '@tensorflow/tfjs';

const a = tf.variable(tf.scalar(Math.random()));
const b = tf.variable(tf.scalar(Math.random()));
const c = tf.variable(tf.scalar(Math.random()));
const d = tf.variable(tf.scalar(Math.random()));

function predict(x) {
    // y = a * x ^ 3 + b * x ^ 2 + c * x + d
    return tf.tidy(() => {
        return a.mul(x.pow(tf.scalar(3))) // a * x^3
            .add(b.mul(x.square())) // + b * x ^ 2
            .add(c.mul(x)) // + c * x
            .add(d); // + d
    });
}


function loss(predictions, labels) {
    // Subtract our labels (actual values) from predictions, square the results,
    // and take the mean.
    const meanSquareError = predictions.sub(labels).square().mean();
    return meanSquareError;
}

// const learningRate = 0.5;
// const optimizer = tf.train.sgd(learningRate);


function train(xs, ys, numIterations = 75) {

    const learningRate = 0.00000001;
    const optimizer = tf.train.sgd(learningRate);
  
    for (let iter = 0; iter < numIterations; iter++) {
      optimizer.minimize(() => {
        let predsYs = predict(xs);
        let lossY=loss(predsYs, ys);
        lossY.print();
        return lossY;
      });
    }
    console.log(`${a},${b},${c},${d}`)
  }

  train(tf.tensor([1,2,3,4,5,6,7]),tf.tensor([4,5,6,7,8,9,10]),9999);