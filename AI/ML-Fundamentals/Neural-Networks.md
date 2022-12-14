# Neural Networks

Created: 2021-06-19 15:25:21 +0500

Modified: 2022-03-06 12:01:38 +0500

---

In computer programming, humans instruct a computer to solve a problem by specifying each step using many lines of code. With machine learning and neural networks, you instead get the computer to solve the problem through examples.

A neural network is a mathematical function that can learn the expected output for a given input from training datasets.

The following figure illustrates a neural network that has been trained to output "cat" from a cat image.

![](media/Neural-Networks-image1.png)

You can see that a neural network model consists of multiple layers of calculation units, in which each layer has configurable parameters. The goal of training the model is to optimize the parameters to get results with the highest accuracy. The training algorithm makes adjustments as it processes batches of training datasets through the model. If you distribute the training process to multiple computational nodes, you need a way to keep track of the changing parameters to be shared by all nodes.



# Perceptron

![The perceptron was a computational model of a neuron Linear Regression For predicting planets and pea growth 1800s 1940s Perceptron Precursor to neural networks ](media/Neural-Networks-image2.png)



![The single layer perceptron was modeled on the human brain, but there are simple functions (like XOR) that it cannot learn Ire.-its webhts l*kbhted Sum unit Step Fur-etion outputs x ](media/Neural-Networks-image3.png)



![What component of a biological neuron is analogous to the input portion of a perceptron? ratite Ax Oucleus Axon Nucleus Dendrites Correct Myelin Sheath Myelin Sheath ](media/Neural-Networks-image4.png)



**Neural Network**

Neural networks combine layers of perceptrons, making them more powerful but also harder to train effectively

![Linear Regression For predicting planets and pea growth 1940s 1800s Neural Networks 1960s Perceptron Precursor to neural networks ](media/Neural-Networks-image5.jpg)



![Neural networks: Multi-layer perceptron u.E9fs u.E9fed Stern weqhfs we&fed Sum ST-od Oafeats x 3 x FUrcf'on *tern ](media/Neural-Networks-image6.png)



![Neural network: Common activation functions Linear f (x) ELU Input value -4 Input Oue ](media/Neural-Networks-image7.png)



![Neural network: Common activation functions Sigmoid a(x) Linear Sigrno•d T anh ELU Input value -4 Sjgrr.o.d Input Oue ](media/Neural-Networks-image8.png)



![Neural network: Common activation functions Sigmo•d ReLU ELU Input value tanh(x) -4 1 + e---2x Input Oue ](media/Neural-Networks-image9.png)



![Neural network: Common activation functions ReLU Sigmoed ELU Input value for a; < 0 for a; 2 0 Recu -4 0 a; Input Oue ](media/Neural-Networks-image10.png)



![Neural network: Common activation functions ELU Sigmoed ELU Input value 1) a(cx Input Oue for a; < 0 for a; 2 0 Etu -4 ](media/Neural-Networks-image11.png)



![If I wanted my outputs to be in the form of probabilities which activation function should I use in the final layer? Sigmoid Correct Tanh ReLU ELU ](media/Neural-Networks-image12.png)



# Mordern Neural Networks

![With the advantage of technical improvements, more data, and computational power, neural networks made a comeback Linear Regression For predicting planets and pea growth 1940s 1800s Neural Networks Kernel Methods Support Vector Machines (SVMs) Neural Networks (again) Perceptron Precursor to neural networks Decision Trees Random Forests, Boosted Trees ](media/Neural-Networks-image13.png)



![Inception/GoogLeNet Deep Neural Network Ixl+ltsj 3x3+1(S) 5x5+1(S) Cmv Conv maxPool 3x3+2(S) maxPool ](media/Neural-Networks-image14.png)



![What is important when creating deep neural networks? Lots of data Having good generalization Experimentation All of the above Correct ](media/Neural-Networks-image15.png)



![Deep neural networks showed dramatic improvements in areas such as image classification Team XRCE Supervision (AlexNet) Clarifai GoogLeNet (Inception) Andrej Karpathy (human) BN-lnception (Arxiv) Inception-v3 (Arxiv) Year Place 2011 2012 2013 2014 2014 2015 2015 Source: 1st 1st 1st 1st N/A N/A Err0r 25.8% 16.4% 11.7% 6.7% 5.1% 4.90/0 3.5% Rethinking the Inception Architecture for Computer Vision ](media/Neural-Networks-image16.png)



![Discussion Prompt Explain how you would apply ML to the problem? (there could be more than one right answer) 1. You own a winter ski resort and want to predict the traffic levels of ski runs based on four types of customers (beginner, intermediate, advanced, expert) that have bought tickets and the amount of previous snowfall. ](media/Neural-Networks-image17.png)



<https://www.youtube.com/watch?v=dPWYUELwIdM>

[Neural Networks Demystified](https://www.youtube.com/playlist?list=PLiaHhY2iBX9hdHaRr6b7XevZtgZRa1PoU)

















