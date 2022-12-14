# Others

Created: 2019-04-05 12:48:01 +0500

Modified: 2019-04-05 12:50:07 +0500

---

**Disruptions**

An Application Owner can create a**PodDisruptionBudget**object (PDB) for each application. A PDB limits the number of pods of a replicated application that are down simultaneously from voluntary disruptions. For example, a quorum-based application would like to ensure that the number of replicas running is never brought below the number needed for a quorum. A web front end might want to ensure that the number of replicas serving load never falls below a certain percentage of the total.



<https://kubernetes.io/docs/concepts/workloads/pods/disruptions
