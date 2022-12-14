# Regularization

Created: 2018-07-13 01:44:47 +0500

Modified: 2021-07-05 09:41:19 +0500

---

**Regularization** - Techniques used to generalize a model



![Factor in model complexity when calculating error Minimize: loss(DatalModel) + complexity(Model) aim for low training e ...but balance inst complex Optimal model complexity is data-dependent, so requires hyperparameter tuning. ](media/Regularization-image1.png)



**Methods**
-   Early Stopping
-   Parameter Norm Penalties
    -   L1 regularization
    -   L2 regularization
    -   Max-norm regularization
-   Dataset Augmentation
-   Noise Robustness
-   Sparse Representations



We use regularization method that penalize model complexity

Both L1 and L2 regularization techniques represent the model complexity as the magnitude of the weight vector, and try to keep that in check.



Magnitude of a vector is represented by the norm function

![L2 Norm Ll Norm 112 (W02 L 2 vs. Ll Norm Euclidean distance or L2 Norm: c = a2+ n n2)l/2 + W12+ Ll Norm = a+b ](media/Regularization-image2.png)



![L 2 vs. Ll Norm n n2)l/2 + W12+ L2 Norm 112 (W02 Ll Norm ](media/Regularization-image3.png)



![In L 2 regularization, complexity of model is defined by the L2 norm of the weight vector for L(w,D) + Xllw112 Lambda controls how these are balanced ](media/Regularization-image4.png)



Here lambda, is a simple scalar value that allows us to control how much emphasis we want to put on model simplicity over minimizing training error.



![In Ll regularization, complexity of model is defined by the Ll norm of the weight vector + llwlll Ll regularization can be used as a feature selection mechanism. ](media/Regularization-image5.png)



![Art of ML Quiz, 1 question Congratulations! You passed! 1/1 point (100.00%) Next Item points Regularization is useful because it can Limit overfitting Correct Yes, this is the key reason to use regularization Make models more linear Un-selected is correct Make models smaller Correct For example, it is possible to prune the graph by removing nodes whose outgoing edges all have zero weight. Make models more non-linear Un-selected is correct 0 ](media/Regularization-image6.png)

# Learning Rate and Batch Size

![Learning rate controls the size of the step in If too small, training will take a long time weight space If too large, training will bounce around Default learning rate in Estimator's LinearRegressor is smaller of 0.2 or l/sqrt(num_features) this assumes that your feature and label values are small numbers ](media/Regularization-image7.png)



![The batch size controls the number of samples that gradient is calculated on. If too small, training will bounce around If too large, training will take a very long time 40-100 tends to be a good range for batch size Can go up to as high as 500 ](media/Regularization-image8.png)



![Regularization provides a way to define model complexity based on the values of the weights horse horse racing horseback riding horseradish horse trading 4 5 af Ork I's Kor The examples are ordered alphabetically; this ordering results in high correlation between successive examples. ](media/Regularization-image9.png)



By properly shuffling the dataset, you'll ensure each batch is representative of the entire dataset. Remember, the gradient are computed within the batch. If the batch is not representative, the loss will jump around too much from batch to batch.



![Optimization is a major field of ML research GradientDescent The traditional approach, typically implemented stochastically i.e. with batches Momentum Reduces learning rate when gradient values are small AdaGrad Give frequently occurring features low learning rates AdaDelta Improves AdaGrad by avoiding reducing LR to zero Adam AdaGrad with a bunch of fixes Follow the regularized leader", works well on wide models Ftrl " Good defaults for DNN and Linear models ](media/Regularization-image10.png)



![How to change optimizer, learning rate, batchsize train_fn = tf.estimator.inputs.pandas_input_fn( batch_size=10) myopt = tf.train. model = tf.estimator. LinearRegressor( optimizer=myopt) model. train(input_fn=train_fn, steps=1ØOØ0) 1. 2. 3. 4. 5. Control batch size via the input function Control learning rate via the optimizer passed into model Set up regularization in the optimizer Adjust number of steps based on batch _ size, learning rate Set number of steps, not number of epochs because distributed training doesn't play nicely with epochs. ](media/Regularization-image11.png)



![Learning Rate and Batch Size Quiz, 5 questions Congratulations! You passed! 5/5 points (100.00%) Next Item points points points points points 1. 2. 3. 4. 5. What is the key reason that we want to penalize models for over-complexity? Overly-complex models may not be generalizable to real-world scenarios on unseen data Correct Correct. This is just another way of saying that overly complex models have a greater tendency to overfit. O O Overly-complex models are slower to train Overly-complex models are harder to implement or maintain in production environments. If your learning rate is too small, your loss function will: O Converge very slowly Correct O Converge very fast If your learning rate is too high, your loss function O Will converge rapidly to the lowest error value possible O Will converge slowly to the lowest error value possible O Will converge rapidly, but then start to increase again (D Will converge rapidly, but not reach the lowest error value possible Correct If your batch size is too high, your loss function will O Converge slowly Correct O Oscillate wildly If your batch size is too low, your loss function will: O Oscillate wildly Correct O Converge slowly 0 ](media/Regularization-image12.png)

# Hyperparameter Tuning
-   Differentiate between parameters and hyperparameters
-   Think beyond simple grid search algorithms



Parameter - real valued variable that changes during model training like all weights and biases

Hyperparameter - is a setting that we set before training and it doesn't change afterwards
-   learning rate
-   regularization rate
-   batch size
-   number of hidden layers in neural net
-   number of neurons in each layer

![ML models are mathematical functions with parameters and hyper-parameters Parameters Changed during model training ML Model Hyper-parameters Set before training ](media/Regularization-image13.png)



![](media/Regularization-image14.png)



There are a variety of model parameters too
-   Size of model
-   Number of hash buckets
-   Embedding size



Wouldn't it be nice to have the NN training loop do meta-training across all these parameters



![](media/Regularization-image15.png)



How to use Cloud ML Engine for hyperparameter tuning

1.  Make the parameter a command-line argument

2.  Make sure outputs don't clobber each other

3.  Supply hyperparameters to training job

![Hyper-parameter tuning O mod Model ](media/Regularization-image16.jpg)



![1. Make the hyperparameters as command-line arguments parser. add_argument ( ' --nbuckets' , help = 'Number of buckets into which to discretize lats and Ions' , default = 10, type = int parser. add ar ument ' --hidden units', help = 'List of hidden layer sizes to use for DNN feature columns' , nargs = [128, 32, 4] default = ](media/Regularization-image17.png)



![2. Make sure that outputs don't clobber each other output_dir = os.path.join( output_dir, json. loads( os.environ.get( 'TF CONFIG' , ) . get( 'task" Buckets / cloud-training-demos-ml / taxifare / ch4 / taxi_trained / 10 checkpoint eval/ events.out.tfevents.14882S0047.master•2dScefSObfO--- export/ graph.pbtxt model.ckptO.dat&OOOOO-of-00003 model.ckpt-O.data-00001-of-00003 132B 3.25 MB MB 9.28 MB 532.07 KB ](media/Regularization-image18.png)



![3. Supply hyperparameters to training job %writefile hyperparam.yaml traininglnput : scaleTier: STANDARD 1 hyperparameters : oal: MINIMIZE hyperparameterMetricTag: rms max r a s: maxPara11e1Tria1s: 1 params : - parameterName: train_batch type: INTEGER minVa1ue: 64 maxVa1ue: 512 scaleType: - parameterName: nbuckets type: INTEGER minVa1ue: 10 maxVa1ue: 20 size scaleType: UNIT_LINEAR SCALE - parameterName: hidden_units type: CATEGORICAL categoricalVa1ues: ["128 64 32", " 256 128 gcloud ml-engine jobs submit training $JOBNAME  --region=$REGION  --module-name=trainer.task  - -config-hyperparam.yaml  16", "512 128 64") ](media/Regularization-image19.png)



![Hyperparameter Tuning Quiz, 4 questions Congratulations! You passed! 4/4 points (100.00%) Next Item points points points points 2. 3. 4. If searching among a large number of hyperparameters, you should do a systematic grid search rather than start from random values, so that you are not relying on chance. True or False? True O False Correct Correct. Because you don't know which hyperparamerters are more important than others, use a smart algorithm that can choose the direction and granularity of your search. In such a smart algorithm, it is a good idea to start with well- distributed, random initial starting points. It is a good idea to use the training loss itself as the hyperparameter tuning metric. True or False? True (O) False Correct Correct, you want to use an eval-metric as your hyperparameter tuning metric so that you are not rewarding models that overfit. Hyperparameter tuning in Cloud ML Engine involves adding the appropriate TensorFIow function call to your model code. True or False? O True (O False Correct Correct. Often, it is simply a matter of submitting a training job with an additional configuration setting You are creating a model to predict the outcome (final score difference) of a basketball game between Team A and Team B. Your initial model is a neural network with [64, 32] nodes, learning_rate = 0.05, batch_size = 32. The input features include whether the game was played "at home" for Team A, the fraction of the last 7 games that Team A won, the average number of points scored by Team A in its last 7 games, the average score of Team A's opponents in its last 7 games, etc. Which of these are hyperparameters to the model? The number of nodes in each layer of the DNN Correct The number of previous games that the input features are averaged over Correct Correct. It is possible that we need to look back only 3 games, or that we have to look back 15 games. We don't know before hand what the right number is. Because this is the creation of the input feature itself, formulating it as a hyperparameter is a little tricky. However, this is a hyperparameter, and in practice, you do want to experiment. he batch size Correct The number of layers in the DNN Correct The learning rate Correct 0 ](media/Regularization-image20.png)




-   Regularization for sparsity
-   Logistic regression
-   Introduction to Neural Networks
-   Training Neural Networks



# Regularization for Sparsity

![Zeroing out coefficients can help with performance, especially with large models and sparse inputs Action Fewer coefficients to store/load Fewer multiplications needed Impact Reduce memory, model size Increase prediction speed L2 regularization only makes weights small, not zero ](media/Regularization-image21.png)



![Feature crosses lead to lots of input nodes, so having zero weights is especially important 7+24=31 inputs After feature engineering becornes Sa-O Sa-l F -16 F -17 su-23 su-24 7 *24=168 inputs! ](media/Regularization-image22.png)



![LO-norm (the count of non-zero weights) is an NP-hard, non-convex optimization problem ](media/Regularization-image23.png)



![Ll norm (sum of absolute values of the weights) is convex and efficient; it tends to encourage sparsity in the model Regularization Norms Wetght ](media/Regularization-image24.png)



![There are many possible choices of norms Lo norm Ll norm --- 142 norm llr112 1/2 nor tn = tna:r ](media/Regularization-image25.png)



Some other norms or the L0 norm that we already covered which is the count of the non-zero values in a vector, and the L infinity norm which is the maximum absolute value of any value in a vector. In practice though, usually the L2-norm provides more generalizable models and the L1 norm. However, we will end up with much more complex heavy models if we use L2 instead of L1. This happens because often features have high correlation with each other,and L1 regularization which use one of them and throw the other away,whereas L2 regularization will keep both features and keep their weight magnitudes small.So with L1, you can end up with a smaller model but it may be less predictive.Is there any way to get the best of both worlds?



[The elastic net is just a linear combination of the L1 and L2 regularizing penalties.]{.underline}This way, you get the benefits of sparsity for really poor predictive features whilealso keeping decent and great featureswith smaller weights to provide a good generalization.The only trade off now is there aretwo instead of one hyper parameters totune with the two different Lambda regularization parameters.



![Elastic nets combine the feature selection of Ll regularization with the generalizability of L2 regularization geometry of the elastic net penalty ](media/Regularization-image26.png)



![What does Ll regularization tend to do to a model's low predictive features' parameter weights? Have small magnitudes Have all positive values Have zero values Correct Have large magnitudes ](media/Regularization-image27.png)



<https://goo.gl/281mPF>

![With Ll Regularization Note that with Ll regularization, the useless features all go to zero. Without Ll Regularization Without Ll regularization, they retain some value. ](media/Regularization-image28.png)



Question

1.  Which type of regularization is more likely to lead to zero weights? **- L1**

2.  Which type of regularization penalizes large weight values more? **- L2**



# Logistic Regression



![Logistic Regression: transform linear regression by a sigmoid activation function linear model squish through a sigmoid Logits(Sum of Xi * w. + b) ](media/Regularization-image29.png)



![Typically, use cross-entropy (related to Shannon's information theory) as the error metric target value = 0.0 ' target value = 1.0 o o 06 predicted value LogLoss Less emphasis on errors where the output is relatively close to the label. D) ](media/Regularization-image30.png)



![Regularization is important in logistic regression because driving the loss to zero is difficult and dangerous Probability Weights will be driven to -inf and +inf the longer we train 1.0 0.8 0.6 0.2 0.0 -2 2 4 Near the asymptotes, gradient is really small 6 Logits ](media/Regularization-image31.png)



![Why is it important to add regularization to logistic regression? Helps stops weights being driven to +/- infinity Helps logits stay away from asymptotes which can halt training Transforms outputs into a calibrated probability estimate Both A & B Correct Both A & C ](media/Regularization-image32.png)



![Often we do both regularization and early stopping to counteract overfitting Regularization O Epoch Early stopping + llwlf Early Stop Point Epoch Validation data set Training data set ](media/Regularization-image33.png)



![In many real-world problems, the probability is not enough; we need to make a binary decision • NO JUNK MAIL Send the mail to spam folder or not? Approve the loan or not? Which road should we route the user through? Choice of threshold is important and can be tuned ](media/Regularization-image34.png)



![Logistic Regression predictions should be unbiased average of predictions == average of observations Look for bias in slices of data, this can guide improvements. ](media/Regularization-image35.png)



![Use calibration plots of bucketed bias to find slices where your model performs poorly Calibration scatter plot -2-000 -3.000 .4 coo 000 -7.coo 8000' O OOO --- Prediction --- Label OverpredictionLine --- CalibrationLine --- UnderpredictionLine Each dot represents many examples in the same bucketed prediction range 000 -7 000 -6.000 Prediction -4.000 -3000 ](media/Regularization-image36.png)



![Which of these is important when performing logistic regression? Adding regularization Choosing a tuned threshold Checking for bias All of the above Correct ](media/Regularization-image37.png)



![You are training your classification model and are using Logistic Regression. Which is true? O Adding lots of new features will prevent the model from overfitting O Your last layer has no weights that can be tuned Correct Correct. The logistic function has no weights. O Adding regularization will result in the same or better model performance ](media/Regularization-image38.png)

# Introduction to Neural Networks

![Combine features as an alternative to feature crossing Structure the model so that features are combined Then the combinations may be combined How to choose the combinations? Get the model to learn them ](media/Regularization-image39.png)



![A Linear Model can be represented as nodes and edges Output Input ](media/Regularization-image40.png)



![output * 111 + * 112 + * 113 (WIC) * WI + WII * W2 -F * IL'3) * X 1 + (WIC) + WII * + * u'6) * X2 4- * '11'7 4- WII * + * u'9) * X 3 Output Hidden Layer Input ](media/Regularization-image41.png)



![Û ıv15 ıv18 1114 1117 ıx3 [IVII ili] ıx3 3x3 1112 1118 3x3 1116 1119 12 3xı 12 13 3xı ](media/Regularization-image42.png)



![Adding a Non-Linearity Output Hidden Layer 2 We Usually Don't Draw Non-Linear Transforms Non-Linear Transformation Layer aka Activation Function Hidden Layer 1 Input ](media/Regularization-image43.png)



![ıvı 1117 IXI ıx3 11'13 3x3 IVI 4 3x3 1112 1118 3x3 1113 1119 12 3xı 11'1() ıx3 + 1112T2 + 1113T3) ıııı:rı + ıız:r2 + 1116173) + 11185172 + 1119T3) 3xı ](media/Regularization-image44.png)

#  

![Why is it important adding non-linear activation functions to neural networks? Adds regularization Increases the number of dimensions Invokes early stopping Stops the layers from collapsing back into just a linear model Correct ](media/Regularization-image45.png)



![Our favorite non-linearity is the Rectified Linear Unit ReLU Rectified Linear Unit ](media/Regularization-image46.png)



![There are many different ReLU variants RcLU f(x) - Recu ReUJ6 0 for x < 0 a: for 20 R.ctJ Input vaue ](media/Regularization-image47.png)



![Softplus ln(1 + ](media/Regularization-image48.png)



![for < 0 sr for 0 RKO ](media/Regularization-image49.png)



Parametric ReLU

![PRcLC = for x < 0 for a: 0 ](media/Regularization-image50.png)



![RcLUC) ](media/Regularization-image51.png)



Exponential Linear Unit

![ELU (e for < 0 for a: 0 ](media/Regularization-image52.png)



![Neural Nets Can Be Arbitrarily Complex Output Training done via BackProp algorithm: gradient descent in very non-convex space Hidden 1 Input ](media/Regularization-image53.png)



![Neural Nets Can Be Arbitrarily Complex Output Hidden 2 Hidden 1 Input Training done via BackProp algorithm: gradient descent in very non-convex space ](media/Regularization-image54.png)



Neural networks can be arbitrarily complex,there can be many layers,neurons per layer, outputs, inputs,different types activation functions et cetra.



What does the purpose of multiple layers?Each layer I add,adds the complexity of the functions I can create.Each subsequent layer is a composition of the previous functions.Since we are using nonlinear activation functions in my hidden layers,I'm creating a stack of data transformations that rotate,stretch and squeeze my data.Remember, the purpose of doing all of this isto transfer my data in such a way that can nicelyfit hyper plane to it for regression orseparate my data with a hyper planes for classification.We are mapping from the original feature space to some new convoluted feature space.



What does adding additional neurons to a layer do?Each neuron I add, adds a new dimension to my vector space.If I begin with three input neurons,I start in R3 vector space.But if my next layer has four neurons that I moved to an R4 vector space.Back when we talked about Kernel methods in our previous course,we had a data set that couldn't be easily separatedwith a hyper plane in the original input vector space.But, by adding the dimension and then transformthe data to fill that new dimension in just the right way,we were then easily able to make a clean slice between the classes of data.The same applies here with neural networks.



What might having multiple output nodes do?Having multiple output nodes allows you tocompare to multiple labels and then propagate the corresponding areas backwards.You can imagine doing image classification where there aremultiple entities or classes within each image.We can't just predict one class because there maybe many,so having this flexibility is great.



![Neural networks can be arbitrarily complex. To increase hidden dimensions, I can add To increase function composition, I can add Layers, neurons, outputs Neurons, layers, outputs Correct Layers, outputs, neurons Neurons, outputs, layers . If I have multiple labels per example, I can add ](media/Regularization-image55.png)

# 

# Training Neural Networks

![DNNRegressor usage is similar to LinearRegressor = tf.train.AdamOptimizer(1earning_rate=Ø.Ø1) myopt = tf.estimator.DNNRegressor(mode1_dir=outdir model hidden 50, 20], feature columns-INPUT COLS, optimizer-myopt; dropout-e. 1) (100 * len(traindf)) / BATCH_SIZE NSTEPS = model. train(input_fn=train_input_fn, steps=NSTEPS) Use momentum-based optimizers e.g. Adagrad (the default) or Adam. Specify number of hidden nodes. Optionally, can also regularize using dropout ](media/Regularization-image56.png)



![Three common failure modes for gradient descent Gradients can vanish Each additional layer can successively reduce signal vs. noise Using ReLu instead of sigmoid/tanh can help Gradients can explode Learning rates are important here Batch normalization (useful knob) can help ReLu layers can die Problem Monitor fraction of zero weights in TensorBoard Lower your learning Solution rates ](media/Regularization-image57.png)



![There are benefits if feature values are 1 Roughly zero-centered, [-1, 1] range often works well numbers Small magnitudes help gradient descent converge and avoid NaN trap Avoiding outlier values helps with generalization ](media/Regularization-image58.png)

# 

![We can use standard methods to make feature values scale to small numbers 1.0 1000 Linear scaling 1.0 .1 Hard cap (clipping) to max, min 2 Log scaling ](media/Regularization-image59.png)



![Which of these is good advice if my model is experiencing exploding gradients? Lower the learning rate Add weight regularization Add gradient clipping Add batch normalization See a doctor Both C and D Correct ](media/Regularization-image60.png)



![Dropout layers are a form of regularization Dropout works by randomly "dropping out" unit activations in a network for a single gradient step During training only! In prediction all nodes are kept Helps learn "multiple paths" think: ensemble models, random forests Output Dropout Hidden 2 Hidden 1 Input ](media/Regularization-image61.png)



![Dropout simulates ensemble learning 00 Q Q 00 --- 000 ](media/Regularization-image62.png)



![The more you drop out, the stronger 0.0 = no dropout regularization 0.0 the regularization Intermediate values more useful, a value of dropout=O.2 is typical 1.0 = drop everything out! learns nothing 1.0 ](media/Regularization-image63.png)



![Dropout acts as another form of . It forces data to flow down paths so that there is a more even spread. It also simulates learning. Don't forget to scale the dropout activations by the inverse Of the We remove dropout during A. B. C. D. E. F. G. Hyperparameter tuning, similar, deep, drop probability, training Hyperparameter tuning, multiple, deep, drop probability, inference Regularization, multiple, ensemble, keep probability, training Regularization, multiple, ensemble, drop probability, inference Regularization, multiple, ensemble, keep probability, inference Hyperparameter tuning, multiple, deep, keep probability, inference Regularization, similar, ensemble, keep probability, inference ](media/Regularization-image64.png)



![Training Neural Networks Quiz, 4 questions Congratulations! You passed! 4/4 points (100.00%) Next Item points points points points 1. 2. 3. 4. Which of these is a common way that neural network training can fail? Entire layers can die with all their weights becoming zero Correct Gradients can vanish, making it harder to train networks the deeper they are Correct Classification networks can yield outputs greater than 1.0 Un-selected is correct Gradients can explode if the learning rate is too high Correct If you see a dead layer (fraction of zero weights close to 1), what is a reasonable thing to try? O Increase the learning rate O Lower the learning rate Correct I am training a classification neural network with 5 hidden layers, sigmoid activation function, and [1 28, 64, 32, 16, 8] with learning_rate=0.05 and batch_size=32. I notice from TensorBoard that gradients in the third layer are near-zero. Is this a problem? Yes Correct If the gradients are near-zero, then gradient descent will not be able to optimize the weights well. No I am training a classification neural network with 5 hidden layers, sigmoid activation function, and [1 28, 64, 32, 1 6, 8] with learning_rate=0.05 and batch_size=32. I notice from TensorBoard that gradients in the third layer are near-zero. What would you try to fix this? O Increase the learning rate O Try using ReLU activation function Correct Correct. A ReLU will tend not to get taught in diminishing returns, the way a sigmoid can. O Add more layers to the DNN 0 ](media/Regularization-image65.png)

# Multi-Class Neural Networks

![Logistic regression provides useful probabilities for binary-class problems 10 08 04 0.2 0.0 logrts ](media/Regularization-image66.png)



![There are lots of multi-class problems Model 1 Positive Class Pit Model 3 Pqsitive CI?$S Circle Negative Class Other Negative Other Model 2 Positive Class Stalls Model 4 Positive Class Suite Negative Class Other Negative Class Other ](media/Regularization-image67.png)



![Model 1 Positive Class Pit Model 4 Positive Class Stalls Negative Class Stalls Negative Class Circle Model 2 Positive Class Pit Model 5 Positive Class Stalls Negative Class Circle Negative Class Suite Model 3 Positive Class Pit Model 6 Positive Class Circle Negative Class Suite Negative Class Suite ](media/Regularization-image68.png)



![Idea: Use separate output nodes for each possible class Pit: yes/nO? Stalls: yes/no? one-vs-all ](media/Regularization-image69.png)



![Add additional constraint, that total of outputs = 1 0 cerp(wTx + b)) jlx) Pit: yes/no? Stalls: yes/no? softmax ](media/Regularization-image70.png)



![Use one softmax loss for all possible classes = tf.matmul( logits labels = logits for each output - > shape [batch _ size, one-hot encoding in [e, - > shape - [batch _ size, _entropy_with_10gits_v2( node num _ classes] num_classes) num_classes] loss = tf.reduce tf. nn. softmax mean( cross logits, labels) -Y shape [batch _ size] ](media/Regularization-image71.png)



![Use softmax only when classes are mutually exclusive "Multi-Class, Single-Label Classification" An example may be a member of only one class. Are there multi-class settings where examples may belong to more than one class? tf. nn. ( logits, labels) -> shape - [batch_size, num_classes) ](media/Regularization-image72.png)



![If you have hundreds or thousands of classes, loss computation can become a significant bottleneck Need to evaluate every output node for every example Pit: yes/no? Stalls: yes/no? softmax ](media/Regularization-image73.png)



![Approximate versions of softmax exist Candidate Sampling calculates for all the positive labels, but only for a random sample of negatives: tf.nn.sampled_softmax_loss Noise-contrastive approximates the denominator of softmax by modeling the distribution of outputs: tf.nn.nce_loss ](media/Regularization-image74.png)



![For our classification output, if we have both mutually exclusive labels and probabilities, we should use . If the labels are mutually exclusive, but the probabilities aren't, we should use . If our labels aren't mutually exclusive, we should use l. tf.nn.sigmoid_cross_entropy_with_logits ll. tf.nn.sparse_softmax_cross_entropy_with_logits tf.nn.softmax_cross_entropy_with_logits_v2 Ill. C. Ill, l, Il D. Il, Ill, I ](media/Regularization-image75.png)



![2. If you have a classification problem with multiple labels, how does the neural network architecture change? O Instead of a logistic layer, use a softmax layer (O Have a logistic layer for each label, and send the outputs of the logistic layer to a softmax layer Correct If you have thousands of classes, computing the cross-entropy loss can be very slow. Which of these is a way to help address that problem? O Use a noise-contrastive loss function Correct O Combine the categories hierarchically and train multi-stage neural networks ](media/Regularization-image76.png)












































































