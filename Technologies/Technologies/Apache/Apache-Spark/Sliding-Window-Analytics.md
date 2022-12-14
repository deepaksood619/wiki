# Sliding Window Analytics

Created: 2019-03-24 14:03:17 +0500

Modified: 2021-11-09 21:14:15 +0500

---

## Conclusion

Stream processing framework that is
-   Scalable to large clusters
-   Achieves second-scale latencies
-   Has simple programming model
-   Integrates with batch & interactive workloads
-   Ensures efficient fault-tolerance in stateful computations

In time-streaming scenarios, performing operations on the data contained in temporal windows is a common pattern.

There are four kinds of temporal windows to choose from

1.  **Tumbling Windows**

Tumbling window functions are used to segment a data stream into distinct time segments and perform a function against them, such as the example below. The key differentiators of a Tumbling window are that they repeat, do not overlap, and an event cannot belong to more than one tumbling window.

![Stream Analytics tumbling window](../../../media/Technologies-Apache-Sliding-Window-Analytics-image1.png)

2.  **Hopping Windows**

Hopping window functions hop forward in time by a fixed period. It may be easy to think of them as Tumbling windows that can overlap, so events can belong to more than one Hopping window result set. To make a Hopping window the same as a Tumbling window, specify the hop size to be the same as the window size.

![Stream Analytics hopping window](../../../media/Technologies-Apache-Sliding-Window-Analytics-image2.png)

3.  **Sliding Windows**

Sliding window functions, unlike Tumbling or Hopping windows, produce an output**only**when an event occurs. Every window will have at least one event and the window continuously moves forward by an € (epsilon). Like hopping windows, events can belong to more than one sliding window.

![Stream Analytics sliding window](../../../media/Technologies-Apache-Sliding-Window-Analytics-image3.png)

4.  **Session Windows**

Session window functions group events that arrive at similar times, filtering out periods of time where there is no data. It has three main parameters: timeout, maximum duration, and partitioning key (optional).

![Stream Analytics session window](../../../media/Technologies-Apache-Sliding-Window-Analytics-image4.png)

A session window begins when the first event occurs. If another event occurs within the specified timeout from the last ingested event, then the window extends to include the new event. Otherwise if no events occur within the timeout, then the window is closed at the timeout.

If events keep occurring within the specified timeout, the session window will keep extending until maximum duration is reached. The maximum duration checking intervals are set to be the same size as the specified max duration. For example, if the max duration is 10, then the checks on if the window exceed maximum duration will happen at t = 0, 10, 20, 30, etc.

When a partition key is provided, the events are grouped together by the key and session window is applied to each group independently. This partitioning is useful for cases where you need different session windows for different users or devices.

<https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-window-functions>

5.  **Other Window Functions**
    -   **Global window**
    -   **Interval window**
    -   **Calendar window**
    -   **Stagger window**

<https://dev.to/frosnerd/window-functions-in-stream-analytics-1m6c>
