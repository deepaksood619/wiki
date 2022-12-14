# Commands

Created: 2019-12-17 14:31:05 +0500

Modified: 2021-09-19 01:04:39 +0500

---

curl -L <https://istio.io/downloadIstio> | sh - #installing istioctl

brew install istioctl

istioctl manifest apply --set profile=demo

kubectl label namespace default istio-injection=enabled

kubectl get VirtualService --all-namespaces

kubectl get DestinationRule --all-namespaces

istioctl x precheck #pre flight checks before installing istio

istioctl verify-install

istioctl proxy-status

istioctl analyze --timeout 60s

istioctl analyze -L

annotations:

sidecar.istio.io/proxyCPU: "10m"

sidecar.istio.io/proxyMemory: "50Mi"

sidecar.istio.io/inject: "false"

![Troubleshooting Guide Step 1 Oistioctl analyze' step 2 *istioctl proxy-status* step 3 "istiod• logs Access logs Resp flags Step 5 Envoy config dump Step 6 "istiod" metrics Step 7 Odebug• logging step 8 Profiling ](../../../media/DevOps-Monitoring-Commands-image1.png)

<https://istio.io/latest/docs/reference/commands/istioctl>
