# System Design - Twitter

[System Design: How to design Twitter? Interview question at Facebook, Google, Microsoft](https://www.youtube.com/watch?v=KmAyPUv9gOY)

[Twitter system design | twitter Software architecture | twitter interview questions](https://www.youtube.com/watch?v=wYk0xPP_P_8)
![image](media/System-Design-Twitter-image1.jpg)

## Core Features

1. Tweeting

2. Timeline
    - User (Own tweets in profile)
    - Home (All tweets from people you follow)

3. Following

4. Full Text Search

5. HashTags

6. Push Notifications

7. Text Notifications

8. How to incorporate Advertisments

## Database

1. Tweets database

2. Users database

Problem with this structure is that to get a tweet corresponding to user, if would take a lot of time because there would be a big select query. (Every time we open twitter home statement)

- This is not feasible

## Characteristics

- Twitter is ready heavy (showing home profile for a user should be super fast)
- Prefer availability over consitency. (Eventual Consistency - Consistency over a time frame)

## Optimized Solution

- When we tweet we do a Put / Post request
- Request goes to a Load Balancer
  - Does Fan Out - put tweet on every follower home timeline (in-memory DB / Redis)
- Twitter has redis cluster
  - Every user has a redis database
  - Every redis database for each user is replicated 3 times
  - Every redis database is in-memory
  - Can store the redis database for a period of time tied to user login activity
  - If a user has 100 followers than 3*100 = 300 redis databases will be updated
  - Problem - If a celebrity tweet there would be million of updates.
  - Solution - Can use a mixed approach, where sql can be used for very large updates.
  - In-memory + Syncronous calls
- Followers
  - Followers table will give all the redis database hashes where we have to update the home profile
- Tradeoffs
  - Read heavy
  - Eventual consistency
  - Space
- Accessing Timeline
  - Get Request
  - Load Balancer
    - Very fast hash lookup for getting redis databases
  - One of the three redis databases reponds with bob's timeline

## TwitterBot / Twitter Bot

<https://www.labnol.org/twitter-bots-tutorial-4796>

<https://www.labnol.org/twitter-search-examples-203>
