# Drivers / Clients

Created: 2019-12-29 12:51:28 +0500

Modified: 2019-12-29 16:25:34 +0500

---

pip install cassandra-driver



from cassandra.cluster import Cluster

cluster = Cluster(protocol_version = 3)

session = cluster.connect('killrvideo')



for val in session.execute("select * from videos_by_tag"):

print(val)


