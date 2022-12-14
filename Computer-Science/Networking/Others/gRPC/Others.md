# Others

Created: 2020-05-06 09:13:38 +0500

Modified: 2020-11-02 23:16:07 +0500

---

**How to automate grpc generation using git hooks, why grpc over REST + JSON**

<https://medium.com/red-crane/grpc-and-why-it-can-save-you-development-time-436168fd0cbc>
JSON is not useful where:
-   Readability doesn't makes any sense and performance matters
-   A standard API contract between machines
-   No type safety
**Python**

<https://grpc.github.io/grpc/python>

<https://medium.com/@biplav.nep/grpc-using-flask-restful-code-2ed5607ae9a>

## grpc-web**

<https://www.freecodecamp.org/news/how-to-use-grpc-web-with-react-1c93feb691b5>

<https://medium.com/@karandeepahluwalia/grpc-web-and-react-a-match-made-in-heaven-51a7a8ec86e6>
<https://www.youtube.com/watch?v=_RiZkNR__60&ab_channel=GOTOConferences>

![](media/gRPC_Others-image1.png)
![](media/gRPC_Others-image2.png)
![](media/gRPC_Others-image3.png)
![API Specification with gRPC Default gRPC service definitions caters to: Service, Remote methods and Types. O Advanced API specification options for: o o O O o Authentication schemes are JWT, Basic Auth and API Key Authorization Granular authorization at method level. Rate limiting/Throttling Applied for per-service or per-method basis. Versioning Policy Enforcement ](media/gRPC_Others-image4.png)
![Cancellation When either the client or server application wants to terminate the RPC this can be done by Cance//ing the RPC. No further RPCs can be done over that connection. When one party cancels the RPC, the other party can determine it by checking the context of the RPC. E.g. stream. Context ( ) . Err ( ) o context . Canceled. ](media/gRPC_Others-image5.png)
![Multiplexing o Running multiple gRPC services on the same gRPC server. gRPC Server App grpcServer grpc . NewServer () // Register Order Management service on gRPC orderMgtServer ordermgt_pb. RegisterOrderManagementServer ( grpcServer , &orderMgtServer { ) // Register Greeter Service on gRPC orderMgtServer hello_pb.RegisterGreeterServer (grpcServer, &he110Server{ } ) Request Response Service Serqce # N ](media/gRPC_Others-image6.png)
![Metadata Information directly related to the service's business logic and consumer is part of the remote method invocation arguments. Use Metadata to share information about the RPC calls that are not related to the business context of the RPC (e.g. Security Headers) Structured as K-V pairs. Exchanged as gRPC headers. ](media/gRPC_Others-image7.png)
![Deadlines A deadline is expressed in absolute time from the beginning of a request and applied across multiple service invocations. gRPC client applications sets deadline when invoking remote functions. aRPC Client ADP clientDeadIine time .Now() . Add (time. Duration (2 * time . Second) ) context . WithDeadIine (context . Background () , ctx, cancel clientDead1ine) // Invoke RPC ](media/gRPC_Others-image8.png)
![gRPC Interceptors o Recpest Mechanism to execute some common logic before or after the execution of Respmse the remote function for server or client application. Server Side and Client Side interceptors. Unary Interceptors Phases : preprocessing, invoking the RPC o method, and postprocessing Streaming interceptors Intercepts any streaming RPC o Useful for logging, authentication, metrics etc. Interceptor 'N ](media/gRPC_Others-image9.png)