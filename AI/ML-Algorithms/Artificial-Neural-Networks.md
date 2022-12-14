# Artificial Neural Networks

Created: 2019-04-21 13:07:44 +0500

Modified: 2021-05-11 23:37:05 +0500

---

![Neural networks Networks of processing units (neurons) with con (synapses) between them Large number of neurons: 1010 Large connectitivity: 105 Parallel processing • Distributed computation/memory Robust to noise, failures ](media/Artificial-Neural-Networks-image1.png)

![Connectionism Alternative to symbolism Humans and evidence of connectionism/parallelism: Physical structure of brain: • Neuron switching time: 10-3 second --- Complex, short-time computations: • Scene recognition time: 10-1 second 100 inference steps doesn' t seem like enough *much parallel computation Artificial Neural Networks (ANNs) --- Many neuron-like threshold switching units --- Many weighted interconnections among units ](media/Artificial-Neural-Networks-image2.png)

![uouneu ](media/Artificial-Neural-Networks-image3.png)

![Biological neuron dendrites: nerve fibres carrying electrical Sigr cell cell body: computes a non-linear function of single long fiber that carries the electric from the cell body to other neurons the point of contact between the axo synapse: and the dendrite of another, regulating a cher ](media/Artificial-Neural-Networks-image4.png)

![Biological neuron • A variety of different neurons exist (moto on-center off-surround visual cells.. .), Wii branching structures • The connections of the network and the st the individual synapses establish the funct ](media/Artificial-Neural-Networks-image5.png)

![When to consider ANN Input is --- high-dimensional --- discrete or real-valued • e.g., raw sensor inputs --- noisy Long training times Form of target function is unknown Human readability is unimportant Especially good for complex recognition problems --- Speech recognition ](media/Artificial-Neural-Networks-image6.png)

![Problems too hard to proc ALVINN: a perception system which learns to control tl vehicles by watching a person drive 30 Output Hi ddea Vuits 30132 Sensor Input Retina ](media/Artificial-Neural-Networks-image7.png)

![Perceptron xo---I -wo: threshold value or bias •f (or 0()) : activation function (thresholding 1 ](media/Artificial-Neural-Networks-image8.png)

![Decision surface of a perce Decision surface is a hyperplane given by 2D case: the decision surface is a line Represents many useful functions: for example, Xl A ? XOR&? Not linearly separable! 1.5+ Generalization to higher dimensions ](media/Artificial-Neural-Networks-image9.png)

![Learning Boolean AND ](media/Artificial-Neural-Networks-image10.png)

![XOR O O No wo, WI, w'2 satisfy: VV2 + W (Minsky and Pk ](media/Artificial-Neural-Networks-image11.png)

![Boolean functions Solution: - network of perceptrons Any boolean function representable as DNF • 2 layers Disjunction (layer 1) of conjunctions (layer 2) • Example of XOR - (Xl=l AND X2=0) OR (Xl=o AND X2=1) Practical problem of representing high-dimensional functions ](media/Artificial-Neural-Networks-image12.png)

![Training rules Finding learning rules to build networks frc Will examine two major techniques - Perceptron training rule - Delta (gradient search) training rule (for perceptrons as well as general ANNs) Both focused on learning weights ](media/Artificial-Neural-Networks-image13.png)

![Perceptron training rule ITERATIVE RULE: + Awi --- where Awr (t --- o) Xi --- t is the target value --- o is the perceptron output for x --- is small positive constant, called the learning re Why rule works: --- E.g., t = 1, o = -1, 0.8, = 0.1 --- then AWF 0.16 and gets larger ](media/Artificial-Neural-Networks-image14.png)

![Perceptron training rul The process will converge if --- training data is linearly separable, and 77 is sufficiently small But if the training data is not linearly separable, it may not COI Pappert) --- Basis for Minsky/Pappert attack on NN approach Question: how to overcome problem: --- different model of neuron? ](media/Artificial-Neural-Networks-image15.png)

![Gradient descent Solution: use alternate rule --- More general --- Basis for networks of units --- Works in non-linearly separable cases Let O(X) = WO + + ... + wnxn --- Simple example of linear unit (will generalize) --- Omit the thresholding initially D is the set of training examples {d = (x, td)} We will learn Wi's that minimize the squared error ](media/Artificial-Neural-Networks-image16.png)

![Error minimization • Look at error E as a function of weights {wi} • Slide down gradient of E in weight space • Reach values of {wi} that correspond to minim --- Look for global minimum • Example of 2-dimensional case: --- E = WI + W2*W2 --- Minimum at w1=w2=0 ](media/Artificial-Neural-Networks-image17.png)

![Gradient descent Gradient "points" to the steepest increase: VE[W] = ---„/VE[W] Training rule: where is a positive constant (learning rate) Awi = ---17 ](media/Artificial-Neural-Networks-image18.png)

![ôwt 5 E(td 2 del) ôwt E2(td -Od) del) ¯ Od ) ¯ del) E Gd --- Od del) d) AWi = ---17 nE(td Od da '7E(td ](media/Artificial-Neural-Networks-image19.png)

![ra ten escen a gori Gradient-Descent (training examples, 27) Each training example is a pair (x, t): x is the vector of is the target output value. is the learning rate (e.g., .0. • Initialize each Wi to some small random value Repeat until the termination condition is met 1. 2. 3. Initialize each Am. to zero For each training example (x, t) Input x to the unit and compute the output o For each linear unit weight Wi Awi e--- AWi+ (t - O) Xi For each linear unit weight WI Also called • LMS (Lea ](media/Artificial-Neural-Networks-image20.png)

![Incremental (Stochastic) Gradient Desce Batch mode Gradient Descent: Repeat 1. Compute the gradient VED[W] Incremental mode Gradient Descent: Ed[w] Repeat For each training example d in D Compute the gradient V Ed [w] 1. Incremental can aooroximate batch if deD 1 2 is small eno ](media/Artificial-Neural-Networks-image21.png)

![Incremental Gradient Descent Algoritl Incremental-Gradient-Descent (training examples, Q) Each training example is a pair (x, t): x is the vector of input the target output value. 77 is the learning rate (e.g., .05). • Initialize each Wi to some small random value Repeat until the termination condition is met 1. Initialize each Awi to zero 2. For each (x, t) Input x to the unit and compute output o ](media/Artificial-Neural-Networks-image22.png)

![Perceptron vs. Delta rule ti • Perceptron training rule guaranteed to succeed --- Training examples are linearly separable --- Sufficiently small learning rate • Delta training rule uses gradient descent --- Guaranteed to converge to hypothesis with minimurr • Given sufficiently small learning rate • Even when training data contains noise • Even when training data not linearly separable ](media/Artificial-Neural-Networks-image23.png)

![erceptron vs. e ta ru e tra Delta/perceptron training rules appear same but --- Perceptron rule trains discontinuous units • Guaranteed to converge under limited conditions May not converge in general --- Gradient rules trains over continuous response (unthresholded o • Gradient rule always converges --- Even with noisy training data --- Even with non-separable training data --- Gradient descent generalizes to other continuous responses ](media/Artificial-Neural-Networks-image24.png)

![Multilayer networks of sigmo • Needed for relatively complex (i.e., typical) • Want non-linear response units in many syst --- Example (next slide) of phoneme recognitio --- Cascaded nets of linear units only give linea --- Sigmoid unit as example of many possibiliti • Want differentiable functions of weights --- So can apply gradient descent • Minimization of error function ](media/Artificial-Neural-Networks-image25.png)

![4000 2000 F 2 (Hz) 1000 SDeech recoonition exam 44 ](media/Artificial-Neural-Networks-image26.png)

![Multilayer networks Hid ](media/Artificial-Neural-Networks-image27.png)

![xo-I x f is the sigmoid function Sigmoid unit 0 1 Derivative can be easily computed: Logistic equation used m many applications --- other functions possible (tanh) Single unit: f(x)(l ](media/Artificial-Neural-Networks-image28.png)

![rror radiZht- Od)2 2 öWi E2(td -Od) or a lg 01 net: linear cc o (output): lc E(td Od) E(td Od) ¯ f (net d = o d (1 --- o d ) ö1Et d Do d Onet d Onet d Dwt Of (net d ) = f (net d )(1 Onet d ](media/Artificial-Neural-Networks-image29.png)

![ncrementa erstc • Batch gradient descent for a single Sigmoid un ED ---Od)2 del) OED E(td Stochastic approximation Ed ¯ ( d öEd --- Od)0d (1 --- Od)Xi --- ---(td --- Od)0d (1 --- Od)• ](media/Artificial-Neural-Networks-image30.png)

![Backpropagation proced( Create FFnet --- n i inputs --- n o output units • Define error by considering all output units --- n hidden units Train the net by propagating errors backwards from output units --- First output units --- Then hidden units Notation: x ji is input from unit i to unit j w ii is the corresponding weight ](media/Artificial-Neural-Networks-image31.png)

![Backpropagation (stochastic Initialize all weights to small random numbers Repeat For each training example 1. 2. 3. 4. Input the training example to the network and compute th For each output unit k 5k Ok (1 --- Ok) (tk--- Ok) For each hidden unit h Oh (1 --- Oh) E keoutputs k,h k Update each network weight wj ](media/Artificial-Neural-Networks-image32.png)

![Errors propagate backl = 03(1 2,5 1,5 1,7 i=1 ](media/Artificial-Neural-Networks-image33.png)

![Properties of Backpropo • Easily generalized to arbitrary direct (acyclic) graphs --- Backpropagate errors through the diffe • Training is slow but applying networ training is fast ](media/Artificial-Neural-Networks-image34.png)

![Convergence of Backpropc Convergence Training can take thousands of iterations ---+ slow! Gradient descent over entire network weight vector Speed up using small initial values of weights: --- Linear response initially --- Generally will find local minimum Typically can find good approximation to global minimum Solutions to local minimum trap problem Stochastic gradient descent Can run multiple times --- Over different initial weights Committee of networks Can modify to find better approximation to global minimum --- include weight momentum u AWiJ(tn ) = + U Awi • (tn_l ](media/Artificial-Neural-Networks-image35.png)

![Example of face recogn Task: recognize faces from sample of --- 20 people in 32 poses --- Choose output of 4 values for direction of gaze --- 120x128 images (256 gray levels) Can compute many functions --- Identity/direction of face (used in book)/... Design issues --- Input encoding (pixels/features/?) Reduced image encoding (30x32) --- Output encoding (1 or 4 values?) Convergence to .1/.9 and not 0/1 --- Network structure (1 layer of 3 hidden units) Algorithm parameters • Eta=.3; alpha=.3; stochastic descent method ](media/Artificial-Neural-Networks-image36.png)

![Some issues with AN • Interpretation of hidden units • Hidden units "discover" new patterns/regularitie • Often difficult to interpret • Overfitting • Expressiveness --- Generalization to different classes of functi( ](media/Artificial-Neural-Networks-image37.png)

![Dealing with overfittin Complex decision surface Divide sample into --- Training set --- Validation set Solutions --- Return to weight set occurring near minimum over ](media/Artificial-Neural-Networks-image38.png)

![36 2.5 0.5 100 1000 700 Training Epochs ](media/Artificial-Neural-Networks-image39.png)

![Expressiveness • Every Boolean function can be repre network with a single hidden layer --- Create 1 hidden unit for each possible 1 --- Create OR-gate at output unit --- but might require exponential (in numb ](media/Artificial-Neural-Networks-image40.png)

![Expressiveness • Every bounded continuous function can be approximated with arbitrarily small error, by with one hidden layer (Cybenko et al '89) --- Hidden layer of sigmoid åtnctions --- Output layer of linear functions Any function can be approximated to arbitrar by a network with two hidden layers (Cybenl --- Sigmoid units in both hidden layers ](media/Artificial-Neural-Networks-image41.png)

![Extension of ANN • Many possible variations • Alternative error functions --- Penalize large weights » Add weighted sum of squares of weights t • Structure of network --- Start with small network, and grow --- Start with large network and diminish ](media/Artificial-Neural-Networks-image42.png)

![Extensions of ANN • Recurrent networks --- Example of time series • Would like to have representation of behæ. from arbitrary past intervals (no set n • Idea of simple recurrent network --- hidden units that have feedback to inpt ](media/Artificial-Neural-Networks-image43.png)

![Summary • Practical method for learning continuom functions over continuous and discrete • Robust to noise • Slow to train but fast afterwards • Gradient descent search over space oft • Overfitting can be a problem ](media/Artificial-Neural-Networks-image44.png)














































