# Notifications

---

curl -X POST

<https://fcm.googleapis.com/fcm/send>

-H 'Authorization: key=AAAAZyOATmM:APA91bEyEjMW3dY4udlB7Dj8OxHyyOcwmOzCXTym3snygI3T4a59SXuHKNI71_TlpMZg30Q5uf7ILz0uuSRxoAkBYkcV_IQcya8n81a9ujEXQDpvFFMOqi0J0xAMgGoZz2-EYDFZufrr'

-H 'Content-Type: application/json'

-H 'Postman-Token: c8af5355-dbf2-4762-9b37-a6b89484cf07'

-H 'cache-control: no-cache'

-d '{

"to": "eg2BH6oBSM-0sxyvDJDFEH:APA91bFjS4arf6pk_ZhEA3VH0q0h-MsHInv1ydi8dzQv2X63YibeO6Shz4QgAFQWC1KUSbFgcU8Fw1zt5iII3WHP-CmfbRa-dvmHzeJ_A73u7qVSfmlQQ3QSlp-JMidbBDrZRYI4UHME",

"data":{

"body":"Test Notification !!!",

"title":"Test Title !!!"

}

}'
