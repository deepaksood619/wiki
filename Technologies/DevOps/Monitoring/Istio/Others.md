# Others

Created: 2020-06-05 13:10:37 +0500

Modified: 2021-07-22 10:02:34 +0500

---

## Istio Ingress vs Kubernetes Ingress

![c:iææ:::] Servee (L'NdBaarrer) DNS. Traditional Istio I rwessCo n role r tÜSt (name) baed routig co#uræ TLS nne basai route (LcRdB*arEer) r&rmces DNS. LC*d Baenc« cor#uræ Isto Ingræs Gatavay (Envoy) TL S seaet Gateway md MrtuaService must exSt and tEfore Envoy End;X'iMs • • • " • tack assocüted pod Envoy App ](../../../media/DevOps-Monitoring-Others-image1.png)

## Automatic Reconfiguration

![1 query for Ingress resources (e.g. nginx) 2 compare current state of Irvess resources to the current state configuration Ingress 3 Proxy Configuratio write new configuratim on current state of Ingress resources .query fcy ingress related resources Istb Ingress Gateway (Envoy) 2 compare current state of I rwess resources to the current state configuration 3 write new configuratbn based on current state Proxy Configuratio related resources Gateway VirtualService DestinationRule ](../../../media/DevOps-Monitoring-Others-image2.png)

<https://software.danielwatrous.com/istio-ingress-vs-kubernetes-ingress

[**https://medium.com/@zhaohuabing/which-one-is-the-right-choice-for-the-ingress-gateway-of-your-service-mesh-21a280d4a29c**](https://medium.com/@zhaohuabing/which-one-is-the-right-choice-for-the-ingress-gateway-of-your-service-mesh-21a280d4a29c)

![O K8S Ingress Load balancing SSL termination Virtual hosting Istio Gateway Load balancing SSL termination Virtual hosting Advanced traffic routing Fault injection Other benifits brought by Istio API Gateway Load balancing SSL termination Virtual hosting Traffic routing API lifecycle management API Operation Monitoring API access authorization API key management API transformation API Billing and Rate limiting ](../../../media/DevOps-Monitoring-Others-image3.png)

## Shared Control Plane

<https://istio.io/docs/setup/install/multicluster/shared

## Access Log

Default turn off, only on in demo profile
-   Can be enabled globally or per namespace too

kubectl describe cm istio -n istio-system

![Globally Enabling Access Logs Globally enabling using "istioctl install" istioctl install ---set profile-deno ------set Globally customizing encoding which defaults to "TEXT istiocti install ------set profile---demo ------set Reverting back to no access log istiocti instati ------set profile-deno ------set meshConfig.aecessLogFiie=•• ------set This configuration is stored in "istio" configmap as default "mesh" configuration kubecti ---n istio---system get cm istio ---o yami I grep accessLog accessLogEneoding: TEXT accessLogFiie: • accessLogFormat: ](../../../media/DevOps-Monitoring-Others-image4.png)

![](../../../media/DevOps-Monitoring-Others-image5.png)

[Webinar: Debugging your debugging tools; What to do when your service mesh goes down in production?](https://www.youtube.com/watch?v=XAKY24b7XjQ)

![Debugging your debugging tools; What to do when your service mesh goes down in production? ](../../../media/DevOps-Monitoring-Others-image6.jpg)

![](../../../media/DevOps-Monitoring-Others-image7.png)

![Istiod Debug Logging Default level is "info".Available options: "debug", "info", "warn", "error", Enable debug logging without restarting "istiod" o istiocti dashboard controlz Toggle logging for a scope or for all scopes o Loog.ng none" Enable debug logging via "istioctl" o istiocti install ------set profile-deno ----set values.globai.iogging.ievel=debugl ](../../../media/DevOps-Monitoring-Others-image8.png)

![Troubleshooting Guide Step 1 Oistioctl analyze' step 2 *istioctl proxy-status* step 3 "istiod• logs Access logs Resp flags Step 5 Envoy config dump Step 6 "istiod" metrics Step 7 Odebug• logging step 8 Profiling ](../../../media/DevOps-Monitoring-Others-image9.png)

## Production Istio Installation
-   Metrics & logs from control & data plane
    -   Setup alerts
-   Enable access logs
-   Outbound traffic control
-   Strint mTLS instead of "auto"
-   Scale out control plane
    -   Configure HPA
    -   Configure pod anti-affinity
-   Non self signed CA certificates
-   Locking down ingress GW ports
-   Auto sidecar injection
-   Production grade Prometheus & Jaeger
