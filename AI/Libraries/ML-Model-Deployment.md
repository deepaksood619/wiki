# ML Model Deployment

Created: 2021-05-12 14:56:54 +0500

Modified: 2021-08-05 23:55:30 +0500

---

![. a production solution requires so much more M •chin e Resouce Oat. Venfratm Data Analysis rcds Future prrxess Tools ](media/ML-Model-Deployment-image1.jpg)



**Offline Deployment**

The model is deployed to an offline container and run in a Spark job to generate batch predictions either on demand or on a repeating schedule.



**Online Deployment**

The model is deployed to an online prediction service cluster (generally containing hundreds of machines behind a load balancer) where clients can send individual or batched prediction requests as network RPC calls.



**Monitor predictions**

![GET DATA Engtne ONLINE Data Prep Job Spark / Data Lake OFFLINE TRAIN MODELS EVAL MODELS DEPLOY. PREDICT a MONITOR Cassaruira Feature Store Feature Store Set) Predictions) Batch Training Job Training Model Repo Realtime Predict Service Trained Batch Ptedict Job Trained Performance Monitor Job (Spark) Features Prediction Predictions Metrics Client Service To Hive & Kafka To System ](media/ML-Model-Deployment-image2.jpg)



**MLOps**

**ML Lifecycle**
-   Framing ML problems from business goals
-   Access, prepare and process data for the model
-   Architect ML solution and develop ML models
-   Deploy ML models
-   Iterate - Monitor, optimize and maintain the performance of the model



<https://www.freecodecamp.org/news/what-is-mlops-machine-learning-operations-explained




