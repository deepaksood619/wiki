# Video / Live Streaming

## Tools

- **Zoom**
- <https://meet.jit.si>
- <https://jitsi.org>
- Google Meet
- Skype
- <https://goodmeetings.ai>
RTMP - Real-Time Messaging Protocol

<https://github.com/facebookincubator/rtmp-go-away>
HLS - <https://www.toptal.com/apple/introduction-to-http-live-streaming-hls>
MPEG-DASH - Dynamic Adaptive Streaming over HTTP

## WebRTC

## Peer to peer live streaming protocol

## ICE - Interactivity Connection Establishment

- A framework for connecting peers
- Tries to find the best path for each call
- Vast majority of calls can use STUN
- ICE Agent
- ICE Candidates

## SDP - Session Description Protocol

- What capabilities are there in a call (Audio/Video)
- What codecs can be used
- What bandwidth is available for the call

## STUN - Session Traversals Utility for NAT

- What is my public IP address (because of NAT)
- NAT Hole punching
- A server that is publicly available on internet and that server will respond with your public ip and port that you requested with.
- Google/Twilio hosts STUN server / CoTurn/ Xirsys (<https://xirsys.com>)

## TURN - Traversal Using Relay around NAT

- Provide a cloud fallback if peer-to-peer communication fails
- Data is sent through server, uses server environment
- Ensures the call works in almost all environments
- Relays packet from point A to point B
- All TURN servers are also STUN servers
![image](media/Video-Live-Streaming-image1.png)
![image](media/Video-Live-Streaming-image2.png)
[WebRTC Crash Course](https://youtu.be/FExZvpVvYxA)

## FFMPEG Streaming

ffmpeg (fast forward motion pictures expert group) for streaming videos over rtp to any number of different locations using multicasting

## Commands

ffmpeg -i demo.mp4 -v 0 -vcodec mpeg4 -f mpegts udp://192.168.1.119:1234

ffplay udp://192.168.1.119:1234

ffmpeg -i rtp://@239.35.10.4:10000 -map 0:0 -map 0:2 -vcodec copy -acodec

copy -t 10 -y test.mkv-  Wowza Streaming Server

- Red5 FOSS Streaming Server
FFMPEG stitching multiple files into one

<https://trac.ffmpeg.org/wiki/Concatenate>

## References

<https://www.wowza.com/docs/tutorials>

<http://red5.org>

<https://www.wowza.com/docs/how-to-publish-a-video-file-as-a-live-stream>
<https://s3-ap-southeast-1.amazonaws.com/shivamexample/Test-Deepak/demo.mp4>
<https://aws.amazon.com/cloudfront/streaming>

<https://aws.amazon.com/answers/media-entertainment/live-streaming>
<https://trac.ffmpeg.org/wiki/Map>

<https://trac.ffmpeg.org/wiki/StreamingGuide>

<https://trac.ffmpeg.org/wiki/Capture/Webcam>
[**https://go.bitmovin.com/ultimate-guide-container-formats**](https://go.bitmovin.com/ultimate-guide-container-formats)

![image](media/Video-Live-Streaming-image3.png)

![image](media/Video-Live-Streaming-image4.png)

![image](media/Video-Live-Streaming-image5.png)

![image](media/Video-Live-Streaming-image6.png)

![image](media/Video-Live-Streaming-image7.png)

![image](media/Video-Live-Streaming-image8.png)

![image](media/Video-Live-Streaming-image9.png)

![image](media/Video-Live-Streaming-image10.png)
![image](media/Video-Live-Streaming-image11.jpg)

![image](media/Video-Live-Streaming-image13.png)

![image](media/Video-Live-Streaming-image14.png)

![image](media/Video-Live-Streaming-image15.png)
