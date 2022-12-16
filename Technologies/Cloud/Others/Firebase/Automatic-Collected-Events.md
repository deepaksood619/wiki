# Automatic Collected Events

Created: 2020-11-10 16:33:53 +0500

Modified: 2020-11-10 16:42:41 +0500

---

Automatically collected events are triggered by basic interactions with your app. As long as you use the Firebase SDK, you don't need to write any additional code to collect these events.

Analytics collects these events for Android and iOS apps unless otherwise stated.

The following parameters are collected by default with every event, including [custom events you implement yourself](https://developers.google.com/analytics/devguides/collection/app-web/tag-guide):

- language
- page_location
- page_referrer
- page_title
- screen_resolution

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 34%" />
<col style="width: 31%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Event name</strong></th>
<th><strong>Automatically triggered</strong></th>
<th><strong>Parameters</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>ad_click</td>
<td><p>when a user clicks an ad</p>
<p>Publisher events coming from AdMob via the Google Mobile Ads SDK</p></td>
<td>ad_event_id</td>
</tr>
<tr class="even">
<td>ad_exposure</td>
<td>when at least one ad served by the Mobile Ads SDK is on screen</td>
<td>firebase_screen, firebase_screen_id, firebase_screen_class, exposure_time</td>
</tr>
<tr class="odd">
<td>ad_impression</td>
<td><p>when a user sees an ad impression</p>
<p>Publisher events coming from AdMob via the Google Mobile Ads SDK</p></td>
<td>ad_event_id</td>
</tr>
<tr class="even">
<td>ad_query</td>
<td>when an ad request is made by the Mobile Ads SDK</td>
<td>ad_event_id</td>
</tr>
<tr class="odd">
<td>ad_reward</td>
<td>when a reward is granted by a rewarded ad served by the Mobile Ads SDK</td>
<td>ad_unit_id, reward_type, reward_value</td>
</tr>
<tr class="even">
<td>adunit_exposure</td>
<td>when an ad unit served by the Mobile Ads SDK is on screen</td>
<td>firebase_screen, firebase_screen_id, firebase_screen_class, exposure_time</td>
</tr>
<tr class="odd">
<td>app_clear_data</td>
<td>when the user resets/clears the app data, removing all settings and sign-in data</td>
<td></td>
</tr>
<tr class="even">
<td>app_exception</td>
<td>when the app crashes or throws an exception</td>
<td>fatal, timestamp, engagement_time_msec</td>
</tr>
<tr class="odd">
<td>app_remove</td>
<td><p>when an application package is removed or "uninstalled" from an Android device</p>
<p>Android only</p>
<p></p>
<p>This event is different from theDaily uninstalls by deviceandDaily uninstalls by usermetrics, which are both<a href="https://support.google.com/googleplay/android-developer/answer/139628">reported by Google Play Developer Console</a>. Theapp_removeevent counts the removal of application packages, regardless of the installation source, and the count changes depending on the date range you are using for the report. TheDaily uninstalls by deviceandDaily uninstalls by usermetrics count the removal of application packages only when they were installed from Google Play, and are reported on a daily basis.</p></td>
<td></td>
</tr>
<tr class="even">
<td>app_store_refund</td>
<td><p>when an in-app purchase is refunded by Google Play</p>
<p>Android only</p>
<p>This event is not exported to BigQuery.</p></td>
<td>product_id, value, currency, quantity</td>
</tr>
<tr class="odd">
<td>app_store_subscription_cancel</td>
<td><p>when a paid subscription is cancelled in Google Play</p>
<p>Android only</p>
<p>Requires an initial subscription that was made on or after July 1, 2019.</p>
<p>This event is not exported to BigQuery.</p></td>
<td>product_id, price, value, currency, cancellation_reason</td>
</tr>
<tr class="even">
<td>app_store_subscription_convert</td>
<td><p>when a free-trial subscription is converted to a paid subscription</p>
<p>This event is set as a default conversion.</p>
<p>Androidrequires an initial subscription that was made on or after July 1, 2019. An initial free-trial subscription is logged as an in_app_purchase with the subscription parameter set to true.</p>
<p>This event is not exported to BigQuery.</p></td>
<td>product_id, price, value, currency, quantity</td>
</tr>
<tr class="odd">
<td>app_store_subscription_renew</td>
<td><p>when a paid subscription is renewed</p>
<p>This event is set as a default conversion.</p>
<p>Android requires an initial subscription that was made on or after July 1, 2019.</p>
<p>This event is not exported to BigQuery.</p></td>
<td>product_id, price, value, currency, quantity, renewal_count</td>
</tr>
<tr class="even">
<td>app_update</td>
<td><p>when the app is updated to a new version and launched again</p>
<p>The previous app version id is passed as a parameter.</p>
<p>This event is conceptually different from the Daily upgrades by device metric, which is<a href="https://support.google.com/googleplay/android-developer/answer/139628">reported by Google Play Developer Console</a>. An upgrade refers to the updating of the application binary, whereas an app_update event is triggered upon the subsequent launch of the upgraded app.</p></td>
<td>previous_app_version</td>
</tr>
<tr class="odd">
<td>dynamic_link_app_open</td>
<td>when a user re-opens the app via a dynamic link.</td>
<td>source, medium, campaign, link_id, accept_time</td>
</tr>
<tr class="even">
<td>dynamic_link_app_update</td>
<td><p>when the app is updated to a new version and is opened via a dynamic link.</p>
<p>Android only</p></td>
<td>source, medium, campaign, link_id, accept_time</td>
</tr>
<tr class="odd">
<td>dynamic_link_first_open</td>
<td>when a user opens the app for the first time via a dynamic link.</td>
<td>source, medium, campaign, link_id, accept_time</td>
</tr>
<tr class="even">
<td>first_open</td>
<td><p>the first time a user launches an app after installing or re-installing it</p>
<p></p>
<p>This event is not triggered when a user downloads the app onto a device, but instead when he or she first uses it. To see raw download numbers, look in Google Play Developer Console or in iTunesConnect.</p></td>
<td>previous_gmp_app_id, updated_with_analytics, previous_first_open_count, system_app, system_app_update, deferred_analytics_collection, reset_analytics_cause, engagement_time_msec</td>
</tr>
<tr class="odd">
<td>in_app_purchase</td>
<td><p>when a user completes an in-app purchase, including an initial subscription, that is processed by the App Store on iTunes or by Google Play</p>
<p>The product ID, product name (iOS only), currency, and quantity are passed as parameters.</p>
<p></p>
<p>To see in_app_purchase data for Android apps, you need to<a href="https://support.google.com/firebase/answer/6392038">link Firebase to Google Play</a>.</p>
<p>Analytics supports automatic subscription tracking on AndroidandiOS.</p>
<p></p>
<p>This event is triggered only by versions of your app that include the Firebase SDK. Note:paid-app purchase revenueand refunds (iOS only) are not automatically tracked.Your reported revenue may differ from the values you see in the Google Play Developer Console. Events that are flagged as being invalid or as sandbox (test) are ignored. Only iOS events are flagged as sandbox.<a href="https://developer.android.com/google/play/billing/billing_testing">Learn more</a>about testing Google Play billing.</p></td>
<td>product_id, price, value, currency, quantity, subscription, free_trial, introductory_price</td>
</tr>
<tr class="even">
<td>notification_dismiss</td>
<td><p>when a user dismisses a notification sent by FCM.</p>
<p>Android only</p></td>
<td>message_name, message_time, message_device_time, message_id, topic, label, message_channel</td>
</tr>
<tr class="odd">
<td>notification_foreground</td>
<td>when a notification sent by FCM is received while the app is in the foreground.</td>
<td>message_name, message_time, message_device_time, message_id, topic, label, message_channel, message_type</td>
</tr>
<tr class="even">
<td>notification_open</td>
<td>when a user opens a notification sent by FCM.</td>
<td>message_name, message_time, message_device_time, message_id, topic, label, message_channel</td>
</tr>
<tr class="odd">
<td>notification_receive</td>
<td>when a notification sent by FCM is received by a device. Android apps only.</td>
<td>message_name, message_time, message_device_time, message_id, topic, label, message_channel, message_type</td>
</tr>
<tr class="even">
<td>os_update</td>
<td><p>when the device operating system is updated to a new version.</p>
<p>The previous operating system version id is passed as a parameter.</p></td>
<td>previous_os_version</td>
</tr>
<tr class="odd">
<td>screen_view</td>
<td><p>when a screen transition occurs and any of the following criteria are met:</p>
<p></p>
<ul class="incremental">
<li><p>No screen was previously set</p></li>
<li><p>The new screen name differs from the previous screen name</p></li>
<li><p>The new screen-class name differs from the previous screen-class name</p></li>
<li><p>The new screen id differs from the previous screen id</p></li>
</ul></td>
<td>firebase_screen, firebase_screen_class, firebase_screen_id, firebase_previous_screen, firebase_previous_class, firebase_previous_id, engagement_time_msec</td>
</tr>
<tr class="even">
<td>session_start</td>
<td>when a user engages with your site or app.</td>
<td></td>
</tr>
<tr class="odd">
<td>user_engagement</td>
<td>periodically, while the app is in the foreground.</td>
<td>engagement_time_msec</td>
</tr>
</tbody>
</table>
