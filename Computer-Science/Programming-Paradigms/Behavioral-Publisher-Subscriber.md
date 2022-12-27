# Behavioral - Publisher Subscriber

Created: 2018-05-09 21:15:49 +0500

Modified: 2018-08-20 15:55:11 +0500

---

In 'Publisher-Subscriber' pattern, senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers.
This means that the publisher and subscriber don't know about the existence of one another. There is a third component, called broker or message broker or event bus, which is known by both the publisher and subscriber, which filters all incoming messages and distributes them accordingly.
pub-sub is a pattern used to communicate messages between different system components without these components knowing anything about each other's identity
