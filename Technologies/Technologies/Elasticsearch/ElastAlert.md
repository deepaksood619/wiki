# ElastAlert

Created: 2019-05-22 18:14:55 +0500

Modified: 2021-08-29 16:14:32 +0500

---

ElastAlert is a simple framework for alerting on anomalies, spikes, or other patterns of interest from data in Elasticsearch.

It works by combining Elasticsearch with two types of components, rule types and alerts. Elasticsearch is periodically queried and the data is passed to the rule type, which determines when a match is found. When a match occurs, it is given to one or more alerts, which take action based on the match.

This is configured by a set of rules, each of which defines a query, a rule type, and a set of alerts.

Several rule types with common monitoring paradigms are included with ElastAlert:

- "Match where there are X events in Y time" (frequencytype)
- "Match when the rate of events increases or decreases" (spiketype)
- "Match when there are less than X events in Y time" (flatlinetype)
- "Match when a certain field matches a blacklist/whitelist" (blacklistandwhitelisttype)
- "Match on any event matching a given filter" (anytype)
- "Match when a field has two different values within some time" (changetype)

In addition to this basic usage, there are many other features that make alerts more useful:

- Alerts link to Kibana dashboards
- Aggregate counts for arbitrary fields
- Combine alerts into periodic reports
- Separate alerts by using a unique key field
- Intercept and enhance match data

## Rule Types

- 'flatline' -- when there are less than X events in Y time
- 'blacklist/whitelist' -- when a certain field matches 'blacklist' or 'whitelist'
- 'any' -- when an event that matches a given filter happens
- 'change' -- when a field has two different values within a specified period of time

## Types

1. spike

2. frequency

3. flatline

4. new_term

5. change

## Common Configuration Example

1. Required settings

    a.  es_host

    b.  es_port

    c.  index

    d.  name

    e.  type

    f.  alert

2. Optional settings

    a.  import

    b.  use_ssl

    c.  verify_certs

    d.  client_cert

    e.  client_key

    f.  ca_certs

    g.  es_username

    h.  es_password

    i.  es_url_prefix

    j.  es_send_get_body_as

    k.  use_strftime_index

    l.  search_extra_index

    m.  **aggregation**

aggregation:
schedule: '2 4 ** mon,fri'

aggregation:
hours: 2

14. aggregate_by_match_time

15. **realert**

16. **exponential_realert**

17. buffer_time

18. query_delay

19. owner

20. priority

21. category

22. max_query_size

23. filter

24. include

25. top_count_keys

26. top_count_number

27. raw_count_keys

28. description

29. generate_kibana_link

30. kibana_url

31. use_kibana_dashboard

32. use_kibana4_dashboard

33. kibana4_start_timedelta

34. kibana4_end_timedelta

35. use_local_time

36. match_enhancements

37. run_enhancements_first

38. query_key

39. aggregation_key

40. summary_table_fields

41. timestamp_type

42. timestamp_format

43. timestamp_format_expr

44. _source_enabled

45. scan_entire_timeframe

<https://elastalert.readthedocs.io/en/latest/ruletypes.html#common-configuration-options>

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 4%" />
<col style="width: 8%" />
<col style="width: 9%" />
<col style="width: 7%" />
<col style="width: 10%" />
<col style="width: 6%" />
<col style="width: 7%" />
<col style="width: 10%" />
<col style="width: 10%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>RULE TYPE</strong></th>
<th><strong>Any</strong></th>
<th><strong>Blacklist</strong></th>
<th><strong>Whitelist</strong></th>
<th><strong>Change</strong></th>
<th><strong>Frequency</strong></th>
<th><strong>Spike</strong></th>
<th><strong>Flatline</strong></th>
<th><strong>New_term</strong></th>
<th><strong>Cardinality</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>compare_key(list of strs, no default)</td>
<td></td>
<td>Req</td>
<td>Req</td>
<td>Req</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>blacklist(list of strs, no default)</td>
<td></td>
<td>Req</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>whitelist(list of strs, no default)</td>
<td></td>
<td></td>
<td>Req</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>ignore_null(boolean, no default)</td>
<td></td>
<td></td>
<td>Req</td>
<td>Req</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>query_key(string, no default)</td>
<td>Opt</td>
<td></td>
<td></td>
<td>Req</td>
<td>Opt</td>
<td>Opt</td>
<td>Opt</td>
<td>Req</td>
<td>Opt</td>
</tr>
<tr>
<td>aggregation_key(string, no default)</td>
<td>Opt</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>summary_table_fields(list, no default)</td>
<td>Opt</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>timeframe(time, no default)</td>
<td></td>
<td></td>
<td></td>
<td>Opt</td>
<td>Req</td>
<td>Req</td>
<td>Req</td>
<td></td>
<td>Req</td>
</tr>
<tr>
<td>num_events(int, no default)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Req</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>attach_related(boolean, no default)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Opt</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><p>use_count_query(boolean, no default)</p>
<p>doc_type(string, no default)</p></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Opt</td>
<td>Opt</td>
<td>Opt</td>
<td></td>
<td></td>
</tr>
<tr>
<td><p>use_terms_query(boolean, no default)</p>
<p>doc_type(string, no default)</p>
<p>query_key(string, no default)</p>
<p>terms_size(int, default 50)</p></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Opt</td>
<td>Opt</td>
<td></td>
<td>Opt</td>
<td></td>
</tr>
<tr>
<td>spike_height(int, no default)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Req</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>spike_type([up|down|both], no default)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Req</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>alert_on_new_data(boolean, default False)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Opt</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>threshold_ref(int, no default)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Opt</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>threshold_cur(int, no default)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Opt</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>threshold(int, no default)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Req</td>
<td></td>
<td></td>
</tr>
<tr>
<td>fields(string or list, no default)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Req</td>
<td></td>
</tr>
<tr>
<td>terms_window_size(time, default 30 days)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Opt</td>
<td></td>
</tr>
<tr>
<td>window_step_size(time, default 1 day)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Opt</td>
<td></td>
</tr>
<tr>
<td>alert_on_missing_fields(boolean, default False)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Opt</td>
<td></td>
</tr>
<tr>
<td>cardinality_field(string, no default)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Req</td>
</tr>
<tr>
<td>max_cardinality(boolean, no default)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Opt</td>
</tr>
<tr>
<td>min_cardinality(boolean, no default)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Opt</td>
</tr>
</tbody>
</table>

<https://elastalert.readthedocs.io/en/latest/ruletypes.html>

<https://elastalert.readthedocs.io/en/latest/ruletypes.html#rule-types>

## Example

# deadman_slack: |-

# ---

# name: Deadman Switch Slack

# type: frequency

# index: containers-*

# num_events: 3

# timeframe

# minutes: 3

# filter

# - term

# message: "deadmanslack"

# alert

# - "slack"

# slack

# slack_webhook_url: dummy

# deadman_pagerduty: |-

# ---

# name: Deadman Switch PagerDuty

# type: frequency

# index: containers-*

# num_events: 3

# timeframe

# minutes: 3

# filter

# - term

# message: "deadmanpd"

# alert

# - "pagerduty"

# pagerduty

# pagerduty_service_key: dummy

# pagerduty_client_name: Elastalert Deadman Switch

## References

<https://elastalert.readthedocs.io/en/latest/index.html>

<https://engineeringblog.yelp.com/2015/10/elastalert-alerting-at-scale-with-elasticsearch.html>

<https://github.com/bitsensor/elastalert>

## Other Plugins

<https://github.com/sivasamyk/logtrail>
