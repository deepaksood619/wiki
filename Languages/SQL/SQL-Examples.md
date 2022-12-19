-- SQL Examples

Created: 2019-12-16 19:55:35 +0500

Modified: 2021-08-13 01:15:43 +0500

---

```sql
-- Subtract with COUNT(DISTINCT *)
SELECT (SELECT COUNT(CITY) FROM STATION) - (SELECT COUNT(DISTINCT CITY) FROM STATION);

Select ROUND(LONG_W,4) from STATION WHERE LAT_N = (SELECT MAX(LAT_N) FROM STATION WHERE LAT_N<137.2345);

SELECT
    CASE
        WHEN A + B > C AND A+C>B AND B+C>A THEN
            CASE
                WHEN A = B AND B = C THEN 'Equilateral'
                WHEN A = B OR B = C OR A = C THEN 'Isosceles'
                WHEN A != B OR B != C OR A != C THEN 'Scalene'
            END ELSE 'Not A Triangle'
    END
FROM TRIANGLES;

SELECT
    CASE
        WHEN Occupation = 'Doctor' THEN CONCAT(Name, '(D)')
        WHEN Occupation = 'Actor' THEN CONCAT(Name, '(A)')
        WHEN Occupation = 'Professor' THEN CONCAT(Name, '(P)')
        WHEN Occupation = 'Singer' THEN CONCAT(Name, '(S)')
    END
FROM OCCUPATIONS
ORDER BY NAME;
SELECT Concat('There are a total of ', COUNT(*), ' ', LOWER(Occupation), 's.')
FROM OCCUPATIONS
GROUP BY Occupation
ORDER BY COUNT(*);

MySQL
set @r1=0, @r2=0, @r3=0, @r4=0;
select min(Doctor), min(Professor), min(Singer), min(Actor)
from(
  select case when Occupation='Doctor' then (@r1:=@r1+1)
            when Occupation='Professor' then (@r2:=@r2+1)
            when Occupation='Singer' then (@r3:=@r3+1)
            when Occupation='Actor' then (@r4:=@r4+1) end as RowNumber,
    case when Occupation='Doctor' then Name end as Doctor,
    case when Occupation='Professor' then Name end as Professor,
    case when Occupation='Singer' then Name end as Singer,
    case when Occupation='Actor' then Name end as Actor
  from OCCUPATIONS
  order by Name
) Temp
group by RowNumber;

SELECT N,
 IF (P IS NULL, 'Root',
     IF ((SELECT COUNT(*)
          FROM BST
          WHERE P=B.N)>0, 'Inner',
         'Leaf'))
FROM BST AS B
ORDER BY N;

SELECT N,
 CASE
    WHEN P IS NULL THEN 'Root'
    WHEN N IN (SELECT P FROM BST) then 'Inner'
    ELSE 'Leaf'
 END
FROM BST
ORDER BY N;

SELECT c.company_code,
    c.founder,
    COUNT(DISTINCT l.lead_manager_code),
    COUNT(DISTINCT s.senior_manager_code),
    COUNT(DISTINCT m.manager_code),
    COUNT(DISTINCT e.employee_code)
FROM Company c,
    Lead_Manager l,
    Senior_Manager s,
    Manager m,
    Employee e
WHERE c.company_code = l.company_code
    and l.lead_manager_code = s.lead_manager_code
    and s.senior_manager_code = m.senior_manager_code
    and m.manager_code = e.manager_code
GROUP BY c.company_code, c.founder
ORDER BY c.company_code;

SELECT h.hacker_id, h.name, s.submission_id, s.challenge_id, s.score
FROM Submissions s
JOIN Hackers h
ON s.hacker_id = h.hacker_id
WHERE s.score != 0
GROUP BY h.hacker_id
ORDER BY s.score DESC, h.hacker_id;

SELECT h.hacker_id, h.name, SUM(max_score.score) as total_score
FROM Hackers h JOIN
    (SELECT hacker_id, max(score) as score from submissions group by challenge_id, hacker_id) max_score
ON h.hacker_id = max_score.hacker_id
GROUP BY h.hacker_id, name
HAVING total_score > 0
ORDER BY total_score DESC, h.hacker_id;

SELECT w.id, wp.age, w.coins_needed, w.power
FROM Wands AS w
JOIN Wands_Property AS wp
ON w.code = wp.code
WHERE wp.is_evil = 0
    AND w.coins_needed = (
        SELECT MIN(coins_needed)
        FROM Wands as w1
        JOIN Wands_Property as p1
        ON w1.code = p1.code
        WHERE w1.power = w.power
            AND p1.age = wp.age
    )
ORDER BY w.power DESC, wp.age DESC;

SELECT MAX(max_window.max_salary), COUNT(*)
FROM Employee, (
    SELECT MAX(months*salary) AS max_salary
    FROM Employee
) max_window
WHERE months*salary = max_window.max_salary;

SELECT (salary*months) AS earnings, COUNT(*)
FROM Employee
GROUP BY earnings
ORDER BY earnings DESC
LIMIT 1;

SELECT s.hacker_id, h.name
FROM Submissions as s
JOIN Challenges as c
ON s.challenge_id = c.challenge_id
JOIN Difficulty as d
ON c.difficulty_level = d.difficulty_level
JOIN Hackers as h
ON s.hacker_id = h.hacker_id
WHERE s.score = d.score
GROUP BY s.hacker_id, h.name
HAVING COUNT(s.hacker_id) > 1
ORDER BY COUNT(s.hacker_id) DESC, s.hacker_id;

SELECT c.hacker_id, h.name ,count(c.hacker_id) AS c_count
FROM Hackers AS h
    inner join Challenges as c on c.hacker_id = h.hacker_id
GROUP BY c.hacker_id, h.name
HAVING
    c_count =
        (SELECT MAX(temp1.cnt)
        from (SELECT COUNT(hacker_id) as cnt
             from Challenges
             group by hacker_id
             order by hacker_id) temp1)
    OR c_count IN
        (select t.cnt
         from (select count(*) as cnt
               from challenges
               group by hacker_id) t
         group by t.cnt
         having count(t.cnt) = 1)
ORDER BY c_count DESC, c.hacker_id;

-- oracle prime numbers 2&3&5&7... till 1000
select listagg (num, '&') within group (order by num) from ( select n1.num num, sum(case when mod(n1.num,n2.num) = 0 then 1 else 0 end) as cnt from (select rownum num from dual connect by level <= 1000) n1, (select rownum num from dual connect by level <= 1000) n2 where n1.num<>1 and n2.num<>1 and n1.num>=n2.num group by n1.num) a where cnt = 1;

-- my sql ** sequence
SELECT REPEAT('* ', @NUMBER := @NUMBER - 1) FROM information_schema.tables, (SELECT @NUMBER:=21) t LIMIT 20

-- SQL Project Planning
SET sql_mode = '';
SELECT Start_Date, End_Date
FROM
    (SELECT Start_Date FROM Projects WHERE Start_Date NOT IN (SELECT End_Date FROM Projects)) a,
    (SELECT End_Date FROM Projects WHERE End_Date NOT IN (SELECT Start_Date FROM Projects)) b
WHERE Start_Date < End_Date
GROUP BY Start_Date
ORDER BY DATEDIFF(End_Date, Start_Date), Start_Date

Select S.Name
From ( Students S join Friends F Using(ID)
       join Packages P1 on S.ID=P1.ID
       join Packages P2 on F.Friend_ID=P2.ID)
Where P2.Salary > P1.Salary
Order By P2.Salary;

SELECT ct.contest_id,
        ct.hacker_id,
        ct.name,
        SUM(total_submissions) AS ts,
        SUM(total_accepted_submissions) AS tas,
        SUM(total_views) AS tv,
        SUM(total_unique_views) AS tuv
FROM Contests as ct
JOIN Colleges as cg ON ct.contest_id = cg.contest_id
JOIN Challenges as ch ON cg.college_id = ch.college_id
LEFT JOIN (
    SELECT challenge_id,
            SUM(total_views) AS total_views,
            SUM(total_unique_views) AS total_unique_views
    FROM View_Stats
    GROUP BY challenge_id
) vs ON ch.challenge_id = vs.challenge_id
LEFT JOIN (
    SELECT challenge_id,
            SUM(total_submissions) AS total_submissions,
            SUM(total_accepted_submissions) AS total_accepted_submissions
    FROM Submission_Stats
    GROUP BY challenge_id
) ss ON ch.challenge_id = ss.challenge_id
GROUP BY ct.contest_id, ct.hacker_id, ct.name
HAVING ts != 0
        or tas != 0
        or tv != 0
        or tuv != 0
ORDER BY ct.contest_id;

select submission_date ,
(SELECT COUNT(distinct hacker_id)
 FROM Submissions s2
 WHERE s2.submission_date = s1.submission_date AND    (SELECT COUNT(distinct s3.submission_date) FROM Submissions s3 WHERE s3.hacker_id = s2.hacker_id AND s3.submission_date < s1.submission_date) = dateDIFF(s1.submission_date , '2016-03-01')) ,
(select hacker_id  from submissions s2 where s2.submission_date = s1.submission_date
group by hacker_id order by count(submission_id) desc , hacker_id limit 1) as shit,
(select name from hackers where hacker_id = shit)
from
(select distinct submission_date from submissions) s1
group by submission_date;

-- MS SQL Server
select big_1.submission_date, big_1.hkr_cnt, big_2.hacker_id, h.name
from
(select submission_date, count(distinct hacker_id) as hkr_cnt
from
(select s.*, dense_rank() over(order by submission_date) as date_rank,
dense_rank() over(partition by hacker_id order by submission_date) as hacker_rank
from submissions s ) a
where date_rank = hacker_rank
group by submission_date) big_1
join
(select submission_date,hacker_id,
 rank() over(partition by submission_date order by sub_cnt desc, hacker_id) as max_rank
from (select submission_date, hacker_id, count(*) as sub_cnt
      from submissions
      group by submission_date, hacker_id) b ) big_2
on big_1.submission_date = big_2.submission_date and big_2.max_rank = 1
join hackers h on h.hacker_id = big_2.hacker_id
order by 1
```
