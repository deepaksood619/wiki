# Parameter Servers

## Parameter Servers and Stale Synchronous Parallel Model

## ML Systems

![image](media/Big-Data_Parameter-Servers-image1.jpeg)

![image](media/Big-Data_Parameter-Servers-image2.png)

![image](media/Big-Data_Parameter-Servers-image3.png)

## Parameter Server

- A machine learning framework
- Distributes a model over multiple machines
- Offers two operations:
  - Pull: query parts of the model
  - Push: update parts of the model
- Machine learning update equation

W~i~ <- W~i~ + Δ

- (Stochastic) gradient descent
- Collapsed Gibbs sampling for topic modeling
- Aggregate push updates via addition (+)

![image](media/Big-Data_Parameter-Servers-image4.png)

![image](media/Big-Data_Parameter-Servers-image5.png)

![image](media/Big-Data_Parameter-Servers-image6.png)

![image](media/Big-Data_Parameter-Servers-image7.png)

![image](media/Big-Data_Parameter-Servers-image8.png)

![image](media/Big-Data_Parameter-Servers-image9.png)

![image](media/Big-Data_Parameter-Servers-image10.png)

![image](media/Big-Data_Parameter-Servers-image11.png)

![image](media/Big-Data_Parameter-Servers-image12.png)

![image](media/Big-Data_Parameter-Servers-image13.png)

![image](media/Big-Data_Parameter-Servers-image14.png)

## Parameter Servers

## Stale Synchronous Parallel Model

![image](media/Big-Data_Parameter-Servers-image15.png)

![image](media/Big-Data_Parameter-Servers-image16.png)

![image](media/Big-Data_Parameter-Servers-image17.png)

![image](media/Big-Data_Parameter-Servers-image18.png)

![image](media/Big-Data_Parameter-Servers-image19.png)

![image](media/Big-Data_Parameter-Servers-image20.png)

![image](media/Big-Data_Parameter-Servers-image21.png)

![image](media/Big-Data_Parameter-Servers-image22.png)

![image](media/Big-Data_Parameter-Servers-image23.png)

## Asynchronous Execution

- Async lacks theoretical guarantee as distributed environment can have arbitrary delays from networks & stragglers

![image](media/Big-Data_Parameter-Servers-image24.png)

![image](media/Big-Data_Parameter-Servers-image25.png)

![image](media/Big-Data_Parameter-Servers-image26.png)

![image](media/Big-Data_Parameter-Servers-image27.png)

![image](media/Big-Data_Parameter-Servers-image28.png)

![image](media/Big-Data_Parameter-Servers-image29.png)

<https://medium.com/coinmonks/parameter-server-for-distributed-machine-learning-fd79d99f84c3>
