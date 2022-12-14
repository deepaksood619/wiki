# Industrial IoT (IIoT)

Created: 2018-11-20 15:12:57 +0500

Modified: 2018-11-20 15:19:13 +0500

---

## Reference Architecure

![image](media/Industrial-IoT-(IIoT)-image1.png)
## Sensors
-   Pressure
-   Temperature
-   Moisure
-   Air flow
-   Acceleration
-   Position/Velocity
-   Proximity
## Actuators
## Control Systems

Industrial Control Systems (ICSs) are used to monitor and control the processes and interactions between sensors and actuators.
<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>PLC</strong></th>
<th><p><strong>Programmable Logic Controller</strong></p>
<p>An Industrial computer used for automation of (often electromechanical) processes.</p>
<p>Often programmed with IEC 61131-3 languages such as Ladder Logic and Structured Text.</p>
<p>Continuously monitors input and determines necessary output based on programmed logic.</p>
<p>Similar to Programmable Automation Controllers (which can be programmed in languages like C, in addition to ladder logic).</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>SCADA</strong></td>
<td><p><strong>Supervisory Control and Data Acquisition</strong></p>
<p>Provides supervisory-level control over a larger-scale “system of systems” (e.g. systems that span over multiple areas of the plant rather than one local set of processes).</p>
<p>Often includes HMI/SCADA systems, remote terminal units, and local operator interfaces.</p>
<p>Evolved with the Industrial Internet of Things to allow for near-real-time state reports and increased security over more standard protocols such as OPC UA.</p></td>
</tr>
<tr class="even">
<td><strong>DCS</strong></td>
<td><p><strong>Distributed Control System</strong></p>
<p>Distributes elements of control across the system itself, rather than centralizing these through a single controller.</p>
<p>Generally used to control continuous plant processes (e.g. chemical production).</p>
<p>Increased Human-Machine Interface accessibility could simplify access, but could increase security concerns as well.</p></td>
</tr>
</tbody>
</table>

## Protocols**

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 85%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>MQTT</strong></th>
<th><p>A publish-subscribe protocol used over TCP/IP.</p>
<p>Lightweight, low code footprint, minimal bandwidth.</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>CoAP</strong></td>
<td><p>Constrained Application Protocol</p>
<p>Application layer protocol used for constrained (low-power, low-memory, etc.) nodes and networks.</p></td>
</tr>
<tr class="even">
<td><strong>AMQP</strong></td>
<td><p>Advanced Message Queuing Protocol</p>
<p>Application layer, wire-level protocol that supports a variety of messaging patterns.</p></td>
</tr>
<tr class="odd">
<td><strong>HTTP/2</strong></td>
<td><p>Updated version of Hypertext Transfer Protocol</p>
<p>Built with HTTP 1.1 compatibility and performance enhancement in mind.</p></td>
</tr>
<tr class="even">
<td><strong>IPv6</strong></td>
<td><p>Internet Protocol Version 6</p>
<p>Updated version of the Internet Protocol Version</p>
<p>4, necessary for assigning unique addresses to the rapidly growing number of machines connected to the Internet (due partially to the increase of Things and M2M connections).</p></td>
</tr>
<tr class="odd">
<td><strong>6LoWPAN</strong></td>
<td><p>IPv6 over Low power Wireless Personal Area Networks</p>
<p>The 6LoWPAN group has defined encapsulation and header compression mechanisms that allow IPv6 packets to be sent and received over IEEE 802.15.4 based networks.</p></td>
</tr>
</tbody>
</table>

## References**

Industrial Internet - DZone Guide

Industrial Internet Reference Architecture
