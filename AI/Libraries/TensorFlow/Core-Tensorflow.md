# Core Tensorflow

Created: 2018-07-04 20:14:50 +0500

Modified: 2021-06-19 14:14:15 +0500

---

tf_estimator to create, train and evaluate an ML model


-   Lazy Evaluation
-   Imperative programs
-   Work with graphs, sessions, and variables
-   Scalar numbers
-   Embeddings / Projectors
-   Visualize and debug tensorflow programs



TensorFlow is an open-source high-performance library for numerical computation that uses directed graphs

![media](media/TensorFlow_Core-Tensorflow-image1.png)



![media](media/TensorFlow_Core-Tensorflow-image2.png)



![media](media/TensorFlow_Core-Tensorflow-image3.png)





# TensorFlow API Hierarchy

![media](media/TensorFlow_Core-Tensorflow-image4.png)



![media](media/TensorFlow_Core-Tensorflow-image5.png)



![media](media/TensorFlow_Core-Tensorflow-image6.png)



tf.eager allows you to execute operations imperatively



![media](media/TensorFlow_Core-Tensorflow-image7.png)



# Graph and Session

![media](media/TensorFlow_Core-Tensorflow-image8.png)



![media](media/TensorFlow_Core-Tensorflow-image9.png)



![media](media/TensorFlow_Core-Tensorflow-image10.png)



![media](media/TensorFlow_Core-Tensorflow-image11.png)



![media](media/TensorFlow_Core-Tensorflow-image12.png)



![media](media/TensorFlow_Core-Tensorflow-image13.png)



![media](media/TensorFlow_Core-Tensorflow-image14.png)



![media](media/TensorFlow_Core-Tensorflow-image15.png)



![media](media/TensorFlow_Core-Tensorflow-image16.png)



![media](media/TensorFlow_Core-Tensorflow-image17.png)



![media](media/TensorFlow_Core-Tensorflow-image18.png)



![media](media/TensorFlow_Core-Tensorflow-image19.png)



![media](media/TensorFlow_Core-Tensorflow-image20.png)



# Tensor and Variable

![media](media/TensorFlow_Core-Tensorflow-image21.png)



![media](media/TensorFlow_Core-Tensorflow-image22.png)



![media](media/TensorFlow_Core-Tensorflow-image23.png)



![media](media/TensorFlow_Core-Tensorflow-image24.png)



![media](media/TensorFlow_Core-Tensorflow-image25.png)



![media](media/TensorFlow_Core-Tensorflow-image26.png)



A variable is usually used to define a tensor whose values can change during the training process. However, placeholders are used as an empty spot that can be fed with proper values when a session is being processed.

For instance, when training a neural network, weights need to be defined as variable because they change during the training process. However, network inputs probably need to be defined as placeholders. This is because we may want to read the inputs from a file and later use it.



# Debugging



![media](media/TensorFlow_Core-Tensorflow-image27.png)



![media](media/TensorFlow_Core-Tensorflow-image28.png)



![media](media/TensorFlow_Core-Tensorflow-image29.png)



![media](media/TensorFlow_Core-Tensorflow-image30.png)



![media](media/TensorFlow_Core-Tensorflow-image31.png)



![media](media/TensorFlow_Core-Tensorflow-image32.png)



![media](media/TensorFlow_Core-Tensorflow-image33.png)



![media](media/TensorFlow_Core-Tensorflow-image34.png)



![media](media/TensorFlow_Core-Tensorflow-image35.png)
