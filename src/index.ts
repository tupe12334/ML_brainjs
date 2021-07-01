import { shuffledData } from "./dataset";
import { getAccuracy } from "./getAccuracy";
export const work = () => {
  const SPLIT = 99;
  const trainData = shuffledData.slice(0, SPLIT);
  const testData = shuffledData.slice(SPLIT + 1);

  // https://github.com/BrainJS/brain.js
  //create a simple feed forward neural network with backpropagation
  const net = new brain.NeuralNetwork({
    activation: "sigmoid", // activation function
    hiddenLayers: [6],
    iterations: 200,
    learningRate: 0.0001, // global learning rate, useful when training using streams
  });

  net.train(trainData);

  const accuracy = getAccuracy(net, testData);
  console.log("accuracy: ", accuracy);
};
