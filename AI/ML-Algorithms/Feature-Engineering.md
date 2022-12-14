# Feature Engineering

Created: 2018-07-06 02:56:35 +0500

Modified: 2021-06-19 14:21:55 +0500

---
-   Scale to large datasets
-   Find good features
    -   Synthetic features
-   Preprocess with Cloud MLE
-   Hyperparameter tuning

## Good vs Bad features
-   **Good Feature**
    -   Be related to objective
    -   Be known at prediction-time
    -   Be numeric with meaningful magnitude
        -   Numeric features
        -   Able to do mathematical operations
    -   Have enough examples
    -   Bring human insight to problem

![media](media/Feature-Engineering-image1.png)

![media](media/Feature-Engineering-image2.png)


-   Sparse Columns
-   If don't know the list of keys, Create a Vocabulary (This is what preprocessing is)

![media](media/Feature-Engineering-image3.png)
-   The vocabulary and the mapping of the vocabulary needs to be identical at prediction time.

![media](media/Feature-Engineering-image4.png)

![media](media/Feature-Engineering-image5.png)

PS - Take care of cases where user doesn't provide a value, i.e. missing values.

![media](media/Feature-Engineering-image6.png)

ML - lot of data, keep outliers and build model for them

Statistics - I've got all the data I'll ever get, throw away outliers

![media](media/Feature-Engineering-image7.png)

![media](media/Feature-Engineering-image8.png)

![media](media/Feature-Engineering-image9.png)

# Preprocessing and Feature Creation

![media](media/Feature-Engineering-image10.png)

# 
-   Apache Beam
-   BigQuery
-   TensorFlow

![media](media/Feature-Engineering-image11.png)

![media](media/Feature-Engineering-image12.png)

![media](media/Feature-Engineering-image13.png)

![media](media/Feature-Engineering-image14.png)

![media](media/Feature-Engineering-image15.png)

![media](media/Feature-Engineering-image16.png)

![media](media/Feature-Engineering-image17.png)

![media](media/Feature-Engineering-image18.png)

# Apache Beam and Cloud Dataflow

![media](media/Feature-Engineering-image19.png)

![media](media/Feature-Engineering-image20.png)

![media](media/Feature-Engineering-image21.png)

![media](media/Feature-Engineering-image22.png)

![media](media/Feature-Engineering-image23.png)

![media](media/Feature-Engineering-image24.png)

![media](media/Feature-Engineering-image25.png)

![media](media/Feature-Engineering-image26.png)

![media](media/Feature-Engineering-image27.png)

![media](media/Feature-Engineering-image28.png)

![media](media/Feature-Engineering-image29.png)

![media](media/Feature-Engineering-image30.png)

# Preprocessing with Cloud Dataprep

![media](media/Feature-Engineering-image31.png)

![media](media/Feature-Engineering-image32.png)

![media](media/Feature-Engineering-image33.png)

![media](media/Feature-Engineering-image34.png)

# 
-   Ingesting, Transforming and Analyzing Taxi Data

# Feature Crosses

Way to bring non-linear inputs to a linear learner

![media](media/Feature-Engineering-image35.png)

![media](media/Feature-Engineering-image36.png)

![media](media/Feature-Engineering-image37.png)

![media](media/Feature-Engineering-image38.png)

A feature cross memorizes the input space

![media](media/Feature-Engineering-image39.png)

![media](media/Feature-Engineering-image40.png)

![media](media/Feature-Engineering-image41.png)

![media](media/Feature-Engineering-image42.png)

Beware - Feature cross are a temptation for a model to overfit

![media](media/Feature-Engineering-image43.png)

![media](media/Feature-Engineering-image44.png)

![media](media/Feature-Engineering-image45.png)

# Implementing Feature Crosses

![media](media/Feature-Engineering-image46.png)

![media](media/Feature-Engineering-image47.png)

![media](media/Feature-Engineering-image48.png)

![media](media/Feature-Engineering-image49.png)

![media](media/Feature-Engineering-image50.png)

![media](media/Feature-Engineering-image51.png)

![media](media/Feature-Engineering-image52.png)

![media](media/Feature-Engineering-image53.png)

![media](media/Feature-Engineering-image54.png)

![media](media/Feature-Engineering-image55.png)

![media](media/Feature-Engineering-image56.png)

![media](media/Feature-Engineering-image57.png)

![media](media/Feature-Engineering-image58.png)

![media](media/Feature-Engineering-image59.png)

![media](media/Feature-Engineering-image60.png)

By Feature Crossing the two grids.

Embeddings allow to generalize two grid cells, like all the grid cells that are on the ocean front should have a similar value.

![media](media/Feature-Engineering-image61.png)

## Feature Creation in TensorFlow

![media](media/Feature-Engineering-image62.png)

Data Type - Python Dictionary

Ex - Distance between house and metro station (public transport) is a key for house prices

![media](media/Feature-Engineering-image63.png)

Feature engineering can be done in 3 places
-   Training
-   Evaluation
-   Serving

![media](media/Feature-Engineering-image64.png)

## Using DataFlow

tf.transform allows users to define preprocessing pipelines and run these using large scale data processing frameworks, while also exporting the pipeline in a way that can be run as part of a TensorFlow graph

![media](media/Feature-Engineering-image65.png)

![media](media/Feature-Engineering-image66.png)

![media](media/Feature-Engineering-image67.png)


-   Feature cross is only useful when we have a large dataset since it's memorization so for each bucket there must be enough samples.

# TensorFlow Transform

![media](media/Feature-Engineering-image68.png)

# 

![media](media/Feature-Engineering-image69.png)

![media](media/Feature-Engineering-image70.png)

![media](media/Feature-Engineering-image71.png)

# Analysis Phase

![media](media/Feature-Engineering-image72.png)

![media](media/Feature-Engineering-image73.png)


![media](media/Feature-Engineering-image74.png)

# Transform Phase

![media](media/Feature-Engineering-image75.png)

![media](media/Feature-Engineering-image76.png)

![media](media/Feature-Engineering-image77.png)

![media](media/Feature-Engineering-image78.png)

![media](media/Feature-Engineering-image79.png)

### Summary
-   Convert raw data into features
-   Preprocess data in such a way that the preprocessing is also done during serving
-   Choose among the various feature columns in TensorFlow
-   Memorize large datasets using feature crosses and simple models
-   Simplify preprocessing pipelines using TensorFlow Transform
