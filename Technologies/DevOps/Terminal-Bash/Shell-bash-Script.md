# Shell/bash Script

Created: 2018-11-14 18:03:43 +0500

Modified: 2020-05-06 23:56:29 +0500

---

A**shell script**is a[computer program](https://en.wikipedia.org/wiki/Computer_program)designed to be run by the[Unix shell](https://en.wikipedia.org/wiki/Unix_shell), a[command-line interpreter](https://en.wikipedia.org/wiki/Command-line_interpreter).[^[1]^](https://en.wikipedia.org/wiki/Shell_script#cite_note-1)The various dialects of shell scripts are considered to be[scripting languages](https://en.wikipedia.org/wiki/Scripting_language). Typical operations performed by shell scripts include file manipulation, program execution, and printing text. A script which sets up the environment, runs the program, and does any necessary cleanup, logging, etc. is called a**wrapper**.

#!/bin/sh

echo "What is your name?"

read USER_NAME

echo "Hello $USER_NAME"

echo "I will create you a file called $USER_NAME_file"

touch $USER_NAME_file

## Passing Variables

#!/bin/bash

var_name=$1

echo ${var_name}

echo $2

## ./test hello 2

## Shortcuts

$0 - Script name

$# - Argument count

$? - Most recent exit code

$@ and $* - All the args

## Reference

<https://dev.to/rpalo/handling-arguments-in-bash-scripts-3o5m>

## Loops

#!/bin/sh
for i in 1 2 3 4 5
do
echo "Looping ... number $i"
done

for i in {1..10}

do

echo "$i"

done

#!/bin/sh
for i in hello 1 * 2 goodbye
do
echo "Looping ... i is set to $i"
done

#!/bin/sh
INPUT_STRING=hello
while [ "$INPUT_STRING" != "bye" ]
do
echo "Please type something in (bye to quit)"
read INPUT_STRING
echo "You typed: $INPUT_STRING"
done

#!/bin/zsh

# check if server name is passed

if [ "$1" ]; then

# server name is passed, ssh

ssh ubuntu@$1.zenatix.com

else

# get server name since not passed

echo "Enter server name to ssh - "

read SERVER_NAME

ssh ubuntu@$SERVER_NAME.zenatix.com

fi

## Examples

## # Write date to a file every second

#!/bin/bash

mkdir -p /var/log/apache

touch /var/log/apache/access.log

while true

do

echo $(date) >> /var/log/apache/access.log

sleep 1

done

## # Loop through and run all commands

#!/bin/bash

VAL="$(kubectl get pods -n zenalytix | awk '{if (NR!=1) { print $1 }}')"

for i in $VAL

do

kubectl delete -n zenalytix pods $i

done

while true; do echo `date` | kafkacat -P -b my-cluster-kafka-brokers.kafka:9092 -t test; done

## References

<https://en.wikipedia.org/wiki/Shell_script>

<https://www.shellscript.sh>

<https://www.shellscript.sh/loops.html>
