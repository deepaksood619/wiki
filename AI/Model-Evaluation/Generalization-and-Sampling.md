# Generalization and Sampling

Created: 2018-07-02 02:31:51 +0500

Modified: 2021-06-19 14:19:55 +0500

---

**Learn how to**
-   Assess if your model is overfitting
-   Gauge when to stop model training
-   Create repeatable training, evaluation, and test datasets
-   Establish performance benchmarks



**Loss Metrics**
-   MSE = Mean Squared Error
-   RMSE = Root Mean Squared Error



![Red = Blue Model 1 is a linear model using linear regression o o o Weight gain in pounds RMSE = 2.224 training examples model prediction for each baby ](media/Generalization-and-Sampling-image1.png)



![Model 2 has more free parameters Weight gain in pounds Which model is bettero How can we telP RMSE = o ](media/Generalization-and-Sampling-image2.png)



![Does the model generalize to o o new data? Weight gain in pounds ](media/Generalization-and-Sampling-image3.png)



![Model 1 generalizes well Weight gain in pounds Old RMSE = 2.224 New RMSE 2.198 Pretty similar = good ](media/Generalization-and-Sampling-image4.png)



![Model 2 does not generalize well Weight gain in pounds Old RMSE -O New RMSE = 3.2 This is a red flag ](media/Generalization-and-Sampling-image5.png)



![Split the dataset and experiment with models Training Dataset Validation ](media/Generalization-and-Sampling-image6.png)



![Underfit Fit Overfit ](media/Generalization-and-Sampling-image7.png)



![Start with a NN model with one set of hyperparameters hyperparameters Train model using training dataset Increase model complexity Is it overfittlng? (evaluate using validation dataset) Yes' STOP Use model with hyperparameters of last non-overfit model for prediction ](media/Generalization-and-Sampling-image8.png)



![Evaluate the final model with independent test data Dataset Training Experimental Validation Test ](media/Generalization-and-Sampling-image9.png)



![Evaluate the final model with cross-validation Training Dataset Validation ](media/Generalization-and-Sampling-image10.png)



![If you have lots of data, use a held-out test dataset If you have little data, use cross-validation ](media/Generalization-and-Sampling-image11.png)



![It is easy to get a random 80% of your dataset for training... #standardSQL SELECT date, airline, departure_airport, departure_schedule, arrival _ airport, arrival_delay F ROM bigquery- samples. airline_ontime_data. flights WHERE RAND() < Ø.8 t-eåq..rn a o ard d ](media/Generalization-and-Sampling-image12.png)



![Solution: split a dataset into training/validation/test #standardSQL SELECT date, airline, using the hashing and modulo operators k)ote: Even u.2 departure_airport, departure_schedule, arrival_airport, arrival_delay FROM bigquery- samples. flights • WHERE Hash v&ae refurn fre sat-e vaae. Ten a fo W6 of haf data Osed Bs bash dbiis. ](media/Generalization-and-Sampling-image13.png)



![ROM •jrtino Trainin 2 3 öoparture_schodulc 55 2117 2000 Validation 5 •rrtml_aırport INC IND 14.0 - 7121198747837285029 ](media/Generalization-and-Sampling-image14.png)



![You've just got 80% of the data using the below query for training. How could you modify the query below to get a new 10% dataset for validation? Hint: look at the WHERE clause 1 2 3 4 5 6 7 8 9 10 11 12 13 #standardSQL SELECT date , ai ine, departure_ai rport , departure_schedule, arrival_airport, arrival_delay FROM bigquery-samples . ai rl i ne_ontime_data. fl ights WHERE Change the < 8 to an = 9 or = 10 Correct Change the < 8 to > 8 ](media/Generalization-and-Sampling-image15.png)



![Carefully choose which field will split your data • Hash on date? • Hash on airport? • Hash on carrier name? on a can fo bse ](media/Generalization-and-Sampling-image16.png)



![胆 」 ロ ](media/Generalization-and-Sampling-image17.png)



![Pitfall: Chaining hashes to create subsets will not work #standardSQL SELECT date, airline, departure_airport, departure_schedule, arrival_airport, arrival_delay FROM bigquery- samples. flights s WHERE AND Ten fake d 30 Q9ås T&-e 8096 fre Otaset2. t-eca-as ](media/Generalization-and-Sampling-image18.png)



**Summary**
-   Taking a derivative of our loss services as our guide towards a minima
-   We could have more than one minima for complex services
-   Loss functions
    -   RMSE for regression problems
    -   Cross entropy for classification

<https://machinelearningmastery.com/cross-entropy-for-machine-learning
-   Perfectly accurate model with an RMSE of zero, can perform badly against a set of new data that it had not seen before
-   Generalization
-   Data preparation
    -   training
    -   evaluation
    -   testing
-   Overfitting
-   underfitting
-   ![](media/Generalization-and-Sampling-image19.png)

























