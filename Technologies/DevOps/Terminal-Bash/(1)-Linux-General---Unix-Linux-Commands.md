# (1) Linux General / Unix / Linux Commands

Created: 2018-05-03 22:39:47 +0500

Modified: 2022-10-14 15:19:26 +0500

---

## Display

1. cat "file" //display a file
2. less "file" //display a file a page at a time
3. head "file" //display the first few lines of a file
4. tail "file" //display the last few lines of a file
 tail -F <file> #to follow log-rotated files
5. head
6. less ( spacebar - forward, b - backward, q - quit)

## Copy / Move

1. cp "file1" "file2" //copy file1 and call it file2
2. mv "file1" "file2" //move or rename file1 to file2

## ssh to server

chmod 400 devec2.pem

ssh -i devec2.pem ec2-user@18.237.184.186

ssh ubuntu@energy.example.com (simple ssh)

ssh -L 8889:localhost:8888 ubuntu@bepemis.example.com (port forwarding from server to local)

ssh -i private.pem ubuntu@energy.example.com (using key)

ssh -i id_rsa ubuntu@openvpn.example.com

## Other

ssh-add

ssh-copy-id

ssh-keygen

ssh-keyscan

ssh-old

sshd

ssh-agent

ssh-import-id

## SSH KeyGen

ssh-keygen -t rsa -b 4096 -C "deepaksood619@gmail.com"

ssh-keygen -t rsa -b 4096 -C "username@example.com"

ssh-keygen -R energy.example.com # reset the saved key of server

ssh-keygen -t ecdsa -b 521 -C "deepaksood619@gmail.com"

## ssh config (man ssh_config - OpenSSH SSH client configuration files)

Add all the details for a server ssh to ~/.ssh/config file

Host dev

HostName dev.example.com

Port 1234

User ubuntu

ForwardAgent yes

IdentityFile ~/.ssh/dev.key

LocalForward 8888 0.0.0.0:8888

Host git-codecommit.*.amazonaws.com

User APKAU2R6AAK3AIIGFLW3

IdentityFile ~/.ssh/id_rsa

Without LocalForward ssh - **ssh dev**

For using LocalForward ssh - **ssh -f -N dev**

## SSH Agent Forwarding

It allows you to use your local SSH keys instead of leaving keys (without passphrases!) sitting on your server.

<https://dev.to/levivm/how-to-use-ssh-and-ssh-agent-forwarding-more-secure-ssh-2c32>

## References

<https://www.ssh.com/ssh/config>

<https://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file>

## SCP from server (Copy a file from server to local, from local machine)

scp username@remoteHost:/remote/dir/file.txt /local/dir/

scp -i ../ec2_ssh_key.pem ubuntu@15.206.94.125:/home/ubuntu/workspace/cred-stuff .

-r # for recursive copying a directory

## SCP to server (Copy a file from local to server, from local machine)

scp /local/dir/ username@remoteHost:/remote/dir/file.txt

## SCP directory (use -r option)

scp -r ubuntu@energy.example.com:/home/ubuntu/sources/example/media /home/ubuntu/sources/example/media

## Grep

- Search a file for keywords

grep 'keyword' "file"

- Grep regex

ls | grep "metrics-[^su]"

ls | grep "metrics-[^su]" | xargs rm -f

- This prints 10 lines of trailing context after matching lines

grep -i -A 10 "my_regex" /var/log/syslog

- If you need to print 10 lines of leading context before matching lines,

grep -i -B 10 "my_regex" /var/log/syslog

- And if you need to print 10 lines of leading and trailing output context.

grep -i -C 10 "my_regex" /var/log/syslog

- Common Flags
  - -c: print a count of matching lines rather than the lines themselves
  - -h: donotprint the names of files when searching multiple files
  - -i: ignore case (e.g., treat "Regression" and "regression" as matches)
  - -l: print the names of files that contain matches, not the matches
  - -n: print line numbers for matching lines
  - **-v: invert the match**, i.e., only show lines thatdon'tmatch

grep -v "172.18.0.1"

- -E 'abc|*de': or with regex

## Redirection and Pipes

program_command 2>&1 | tee -a outfile.log

- command > output.txt

The standard output stream will be redirected to the file only, it will not be visible in the terminal. If the file already exists, it gets overwritten.

- command >> output.txt

The standard output stream will be redirected to the file only, it will not be visible in the terminal. If the file already exists, the new data will get appended to the end of the file.

- command 2> output.txt

The standard error stream will be redirected to the file only, it will not be visible in the terminal. If the file already exists, it gets overwritten.

- command 2>> output.txt

The standard error stream will be redirected to the file only, it will not be visible in the terminal. If the file already exists, the new data will get appended to the end of the file.

- command &> output.txt

Both the standard output and standard error stream will be redirected to the file only, nothing will be visible in the terminal. If the file already exists, it gets overwritten.

- command &>> output.txt

Both the standard output and standard error stream will be redirected to the file only, nothing will be visible in the terminal. If the file already exists, the new data will get appended to the end of the file..

- command | tee output.txt
    The standard output stream will be copied to the file, it will still be visible in the terminal. If the file already exists, it gets overwritten.
- command | tee -a output.txt
    The standard output stream will be copied to the file, it will still be visible in the terminal. If the file already exists, the new data will get appended to the end of the file.

- command |& tee output.txt
    Both the standard output and standard error streams will be copied to the file while still being visible in the terminal. If the file already exists, it gets overwritten.
- command |& tee -a output.txt
    Both the standard output and standard error streams will be copied to the file while still being visible in the terminal. If the file already exists, the new data will get appended to the end of the file.

- "command" < "file" //redirect standard input from a file
- "command1" | "command2" //pipe the output of command1 to the input of command2
- cat "file1" "file2" > "file0" //concatenate file1 and file2 to file0
- sort //sort data
- who //list users currently logged in

|| visible in terminal || visible in file || existing
Syntax || StdOut | StdErr || StdOut | StdErr || file
==========++==========+==========++==========+==========++===========
> || no | yes || yes | no || overwrite
>> || no | yes || yes | no || append
|| | || | ||
2> || yes | no || no | yes || overwrite
2>> || yes | no || no | yes || append
|| | || | ||
&> || no | no || yes | yes || overwrite
&>> || no | no || yes | yes || append
|| | || | ||
| tee || yes | yes || yes | no || overwrite
| tee -a || yes | yes || yes | no || append
|| | || | ||
n.e. (*) || yes | yes || no | yes || overwrite
n.e. (*) || yes | yes || no | yes || append
|| | || | ||
|& tee || yes | yes || yes | yes || overwrite
|& tee -a || yes | yes || yes | yes || append

<http://www.tldp.org/LDP/abs/html/io-redirection.html>

## Example

vmq-admin trace client client-id=/Samhi-42 >> trace.log 2>&1 &

python test_de_script.py de_run_final.csv 2>&1 | tee -a outfile.log

## Wildcards and Help

- `*` //match any number of characters
- `?` //match one character
- `man "command"` //read the online manual page for a command
- `whatis "command"` //brief description of a command
- `apropos "keyword"` //match commands with keyword in their man pages
  - apropos compress

## rm command

rm -Rdf <dir_name> #remove directory

sudo rm -rvf * #delete everything

rmdir #remove an empty directory

rm <file_name> #remove a file

## date

display or set date and time

echo $(($(date +%s%N)/1000000)) # using nanoseconds

## List directory contents

ls #listing

ls -laf

ls -alst

ls -R #Show contents of directory recursively

ls -l # long listing format

-rwxrw-r-- 1 root root 2048 Jan 13 07:11 afile.exe

- file permissions,
- number of links,
- owner name,
- owner group,
- file size,
- time of last modification, and
- file/directory name

File permissions is displayed as following;

- first character is-orlord, d indicates a directory, a line represents a file, l is a symlink (or soft link) - special type of file
- three sets of characters, three times, indicating permissions for owner, group and other:
  - r = readable
  - w = writable
  - x = executable

## lsof

## lsof is a command meaning "list open files", which is used in many [Unix-like](https://en.m.wikipedia.org/wiki/Unix-like) systems to report a list of all open files and the processes that opened them

Open files in the system include disk files, [named pipes](https://en.wikipedia.org/wiki/Named_pipe), network [sockets](https://en.wikipedia.org/wiki/Internet_socket) and devices opened by all processes. One use for this command is when a disk cannot be unmounted because (unspecified) files are in use. The listing of open files can be consulted (suitably filtered if necessary) to identify the process that is using the files.

## see open ports

```bash
sudo lsof -i -P -n | grep LISTEN
sudo lsof -i:22 #see a specific port such as 22
lsof -a -i -s TCP:SYN_RECV
[lsof - Wikipedia](https://en.wikipedia.org/wiki/Lsof)
```

## Count

 ls -l <folder> | wc -l  (Count number of files in a directory)
 find . -type f | wc -l  (Count number of files in a directory recursively)
 wc - l file.txt (lines)
 wc -w file.txt (words)

## Head (Show the top 2 lines in the file)

$ head -n 2 adult.data

## Tail (Show the last lines in the file)

$ tail -n 10 adult.data

## Finding duplicates withuniq

With theuniqcommand you can find adjacent repeated lines in a file.uniqtakes several flags, the more useful ones being:

- uniq -c: which adds the repetition count to each line;
- uniq -d: which only outputs duplicate lines; And
- uniq -u: which only outputs unique lines.

However, uniqis not a smart command. Repeated lines will not be detected if they are not adjacent. Which means that you first need thesortthe file. This command counts the number of duplicated lines inadult.csv.

$ sort adult.csv | uniq -d | wc -l
23

and shows that there are 23 duplicates. The next command takes the output of all lines with added repetition counts, sorts in reverse and outputs the first 3 duplicates:

$ sort adult.csv | uniq -c | sort -r | head -n 3
3 25, Private, 195994, 1st-4th, 2, Never-married, ...
2 90, Private, 52386, Some-college, 10, Never-married, ...
2 49, Self-emp-not-inc, 43479, Some-college, 10, Married-civ-spouse, ...

## Hexdump

$ cat test.txt

hi

$ hexdump test.txt

0000000 68 69

Here 68 is 'h' in ASCII and 69 is 'i' in ASCII

## Source

[source](http://ss64.com/bash/source.html) is a bash shell built-in command that executes the content of the file passed as argument, ***in the current shell***. It has a synonym in.(period).

## source ~/.bash_profile

## . ~/.bash_profile

## Make

## BitBake

## BitBakeis a [make](https://en.wikipedia.org/wiki/Make_(software))-like [build tool](https://en.wikipedia.org/wiki/Build_tool) with the special focus of [distributions](https://en.wikipedia.org/wiki/Linux_distributions) and packages for [embedded Linux](https://en.wikipedia.org/wiki/Embedded_Linux)[cross compilation](https://en.wikipedia.org/wiki/Cross_compilation), although it is not limited to that. It is inspired by [Portage](https://en.wikipedia.org/wiki/Portage_(software)), which is the [package management system](https://en.wikipedia.org/wiki/Package_management_system) used by the [Gentoo Linux](https://en.wikipedia.org/wiki/Gentoo_Linux) distribution. BitBake existed for some time in the [OpenEmbedded](https://en.wikipedia.org/wiki/OpenEmbedded) project until it was separated out into a standalone, maintained, distribution-independent tool. BitBake is co-maintained by the [Yocto Project](https://en.wikipedia.org/wiki/Yocto_Project) and the [OpenEmbedded](https://en.wikipedia.org/wiki/OpenEmbedded) project

<https://en.wikipedia.org/wiki/BitBake>

## Add new user

useradd username

## Change current user

su username

sudo -u telegraf /bin/bash

## See current user

whoami

## Seq command

- print sequences of number

seq [-w] [-f format] [-s string] [-t string] [first [incr]] last

## Netstat command (list open ports)

netstat -a #list all network ports

netstat -at #list all TCP Ports

netstat -s #show statistics for all ports

netstat -atn # For tcp
netstat -aun # For udp
netstat -atun # For both

netstat -an | grep :9105 | grep -v TIME_WAIT | wc -l

netstat -an | grep :9105 | grep ESTABLISHED | wc -l

sudo netstat -planet | grep 1883 | wc -l

## nslookup command

## A network utility program used to obtain information about internet servers

nslookup -query=mx google.com #Query Mail Exchanger Record

nslookup -type=ns google.com #Query Name Server

nslookup -type=any google.com #Query DNS Record

nslookup -type=soa google.com #Query Start of Authority

nslookup kafka0.example.com

## dig command

## A dig is a tool for querying DNS nameservers for information about host addresses, mail exchanges, nameservers and related information

dig google.com +nocomments #turn off comment lines

dig google.com +noauthority #turn off authority section

dig google.com +noall #disable all section at once

dig +trace [www.google.com](http://www.google.com)

dig @8.8.8.8 +trace github.com

dig @ns-421.awsdns-52.com github.com

## dig -x 172.217.167.132 #will do a reverse lookup, doesn't always work -- it depends on there being an accurate PTR record

## uptime

## show how long system has been running

The uptime utility displays the current time, the length of time the system has been up, the number of users, and the load average of the system over the last 1, 5, and 15 minutes.

## w

Combination of uptime and who commands given one immediately after the other, in that order

## sort

Unix Sort uses an External R-Way merge sorting algorithm. It divides the input up into smaller portions (that fit into memory) and then merges each portion together at the end.

Ex - sort -t $'n' -g -o sorted_large.txt 1.txt

## alias <alias_command_name>

Return the full command for the passed alias_command_name

alias dc='docker-compose'

## cut

cut out selected portions of each line of a file

Can use **awk** instead of cut for better results

## paste

merge corresponding or subsequent lines of files

## ln (Create links)

*make links*

*ln test.txt link.txt*

The ln utility creates a new directory entry (linked file) which has the same modes as the original file. It is useful for maintaining multiple copies of a file in many places at once without using up storage for the ``copies''; instead, a link``points'' to the original copy. There are two types of links; hard links and symbolic links. How a link ``points'' to a file is one of the differences between a hard and symbolic link.

ln -s /bin/zsh /usr/local/bin/zsh #create a symbolic link

## find

find . -name "zookeeper*"

# ignore case

find . -iname "ipify*"

## # find and delete

find . -name "*.pyc" -type f

find . -name "*.pyc" -type f -delete

find . -type f -mtime +30 -exec -f {} ;

## # find and replace in shole directory except 'config.yaml'

find ./ ! -name 'config.yaml' -type f -exec sed -i "s~${ecr_name}.*$~${ecr_name}/${app_name}/${env_name}:${app_name}-${env_name}-${timestamp}-${build_no}~" {} ;

## hostname

hostname -- set or print name of current host system

hostname -i #server

hostname #mac

## environments

printenv | less #print all loaded environment variables

echo $<VARIABLE> #print value for environment variable

echo $? #print last call execution return value

env #print all environments loaded in current session

## tr (translate characters)

The tr utility copies the standard input to the standard output with substitution or deletion of selected characters.

cat domains.txt | tr [:lower:] [:upper:]

cat linux.txt | tr [a-z] [A-Z]

<https://www.tecmint.com/tr-command-examples-in-linux>

## tcpdump (wireshark)

sudo tcpdump -i any port 9101 -w tcpdump

## sed

sed -i '' 's+telegraf:.*+telegraf:x:0:0::/etc/telegraf:/bin/false+g' passwd #on macos

sed -i 's+telegraf:.*+telegraf:x:0:0::/etc/telegraf:/bin/false+g' passwd #on unix

find ./ ! -name 'config.yaml' -type f -exec sed -i "s~${ecr_name}.*$~${ecr_name}/${app_name}/${env_name}:${app_name}-${env_name}-${timestamp}-${build_no}~" {} ;

find ./ ! -name 'config.yaml' -type f -exec sed -i "s~

331916247734.dkr.ecr.ap-south-1.amazonaws.com/loan-tape-etl/prod:loan-tape-etl-prod-2020-08-07-20-10

$~331916247734.dkr.ecr.ap-south-1.amazonaws.com/loan-tape-etl/prod:loan-tape-etl-prod-test~" {} ;

## killall

kill processes by name

The killall utility kills processes selected by name, as opposed to the selection by pid as done by kill(1). By default, it will send a TERM signal to all processes with a real UID identical to the caller of killall that match the name procname. The super-user is allowed to kill any process.

- The program gets sent a SIGTERM signal. kill -9 sends a SIGKILL signal
- CTRL-C

The program gets sent a SIGINT signal. By default that stops the program immediately, but the program can choose to ignore the signal or do something else before quitting

- Is it possible for a program to ignore a SIGKILL signal

Programs can't ignore SIGKILL.

killall kubectl

killall -v kubectl

## openssl

openssl rand -hex 16

openssl rand -hex 32

openssl rand -base64 32 #base64 encoded password generation

openssl base64 -in samhi.log -out samhi1_64.log

# creating a self-signed certificate

openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout tls.key -out tls.crt -subj "/CN=example.com" -days 365

openssl genrsa -out ca.key 2048

openssl req -x509 -new -nodes -key ca.key -sha256 -subj "/CN=sampleissuer.local" -days 1024 -out ca.crt -extensions v3_ca -config openssl-with-ca.cnf

## # public private key pair

You can generate a public-private keypair with thegenrsacontext (the last number is the keylength in bits):

openssl genrsa -out key.pem 2048

## To extract the public part, use thersacontext

openssl rsa -in keypair.pem -out publickey.crt -pubout

openssl rsa -in key.pem -out key.pub -pubout

## Finally, convert the original keypair to PKCS#8 format with thepkcs8context

openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in keypair.pem -out pkcs8.key

## # Encrypt and Decrypt a file (using public key to encrypt)

echo --pass-- > pass.txt

openssl rsautl -in pass.txt -out pass.enc -pubin -inkey key.pub -encrypt

openssl rsautl -in pass.enc -out pass.dec -inkey key.pem -decrypt

cat pass.dec

## # Compress, Encrypt, Decyrpt, Uncompress a file (using password in pass.txt)

echo content > file.txt

gzip file.txt

openssl bf -in file.txt.gz -out file.enc -pass [file:pass.txt](file://pass.txt) -e

openssl bf -in file.enc -out file.dec.gz -pass [file:pass.dec](file://pass.dec) -d

gzip -d file.dec.gz

cat file.dec

## ts

openssl-ts, ts - Time Stamping Authority tool (client/server)

The ts command is a basic Time Stamping Authority (TSA) client and server application as specified in RFC 3161 (Time-Stamp Protocol, TSP). A TSA can be part of a PKI deployment and its role is to provide long term proof of the existence of a certain datum before a particular time.

A convenient tool is the **ts (timestamp)** tool which is available on many systems. If the trace output is piped to this command each line is prefixed with a timestamp.

## ps

report a snapshot of the current processes.

# get minor page fault, major page fault

ps -eo min_flt, maj_flt, cmd

ps -eaf

ps aux / auxf (tree view)

ps aux --sort=-%mem

- **Theaoption** tellspsthe display the processes of all users, with except those processes that not associated with a terminal and processes of group leaders.
- **Theu** stands for a user-oriented format which provides detailed information about the processes.
- **Thex** option will casepsto list the processes without a controlling terminal. Those are mainly processes that are started on boot time and running in the background.

- **PID-** The process ID. In most situations when running thepscommand the most important information the user is looking for is the process PID. Knowing the PID allows you to kill a malfunctioning process.
- **TTY-** The name of the controlling terminal for the process.
- **TIME-** The cumulative CPU time of the process, shown in minutes and seconds.
- **CMD-** The name of the command that was used to start the process.
- **USER-** The user who runs the process.
- **%CPU-** The process [cpu](https://linuxize.com/post/get-cpu-information-on-linux/) utilization.
- **%MEM-** The percentage of the process's resident set size to the physical memory on the machine.
- **VSZ-** Virtual memory size of the process in KiB.
- **RSS-** The size of the physical [memory](https://linuxize.com/post/free-command-in-linux/) that the process is using.
- **STAT-** The the process state code, which can beZ(zombie), S(sleeping), R(running) ..etc
- **START-** The time when the command started.

ps $$

Output the shell that is running

<https://linuxize.com/post/ps-command-in-linux>

## tree

list contents of directories in a tree-like format

tree -L 2

## /usr/bin/time

run programs and summarize system resource usage

## time

Shell command for given shell statistics

## Compression

tar -czvf all.tar.gz error.log.* (gzip all files together in a directory)

tar -xzvf all.tar.gz -C /tmp (unzip all files to particular location)

tar -xzvf all.tar.gz (unzip all files at current location)

tar -c <directory> -xvf all.tar.gz

tar -xvf all.tar.xz (unzip xz files)

gzip -d <file>.gz #unzip gz file

!tar --exclude='*.csv' --exclude='**pycache**' --exclude='.ipynb_checkpoints' --exclude='*.json' --exclude='*.xml' --exclude='*.pdf' --exclude='*.pkl' -zcvf backup.tar.gz*

!find . -name "*.ipynb" -o -name "*.py" | tar -zcvf backup.tar.gz -T -

!find . -name "*.ipynb" -o -name "*.py" | **tar -zcvf backup-ipynb-$(date +%Y-%m-%d).tar.gz -T -**

## tar -zcvf backup-ipynb-$(date +%Y-%m-%d).tar.gz folder_to_zip

## tar -zcf backup-ipynb-$(date +%Y-%m-%d).tar.gz folder_to_zip # no output - without v

brew install rar

unrar x.rar

## df - report file system disk space usage

There might come a situation while using Linux when you want to know the amount of space consumed by a particular file system on your LINUX system or how much space is available on a particular file system.

df -h, --human-readable

## du (disk usage) - estimate file space usage

The du command can be used to track the files and directories which are consuming excessive amount of space on hard disk drive.

du -h, --human-readable

# depth = 1

du -h -d 1

To list the largest directories from the current directory in human readable format, with retricting number of rows

du -sh * | sort -hr | head -n10

du -sh file_path

## Explanation

- du(**d** isc**u** sage) command estimates file_path space usage
- The options-share (fromman du):
    -s, --summarize
    display only a total for each argument

    -h, --human-readable
    print sizes in human readable format (e.g., 1K 234M 2G)

    To check more than one directory and see the total, usedu -sch:
    -c, --total
    produce a grand total

## NetCat (NC)

The nc (or netcat) utility is used for just about anything under the sun involving TCP or UDP. It can open TCP connections, send UDP packets, listen on arbitrary TCP and UDP ports, do port scanning, and deal with both IPv4 and IPv6. Unlike telnet(1), nc scripts nicely, and separates error messages onto standard error instead of sending them to standard output, as telnet(1) does with some.

Common uses include:

- simple TCP proxies
- shell-script based HTTP clients and servers
- network daemon testing
- a SOCKS or HTTP ProxyCommand for ssh(1)

nc -l 8000 -u

## strace

trace system calls and signals

In the simplest casestraceruns the specifiedcommanduntil it exits. It intercepts and records the system calls which are called by a process and the signals which are received by a process. The name of each system call, its arguments and its return value are printed on standard error or to the file specified with the-ooption.

straceis a useful diagnostic, instructional, and debugging tool. System administrators, diagnosticians and trouble-shooters will find it invaluable for solving problems with programs for which the source is not readily available since they do not need to be recompiled in order to trace them. Students, hackers and the overly-curious will find that a great deal can be learned about a system and its system calls by tracing even ordinary programs. And programmers will find that since system calls and signals are events that happen at the user/kernel interface, a close examination of this boundary is very useful for bug isolation, sanity checking and attempting to capture race conditions.

MacOS - dtrace

<https://linux.die.net/man/1/strace>

<https://8thlight.com/blog/colin-jones/2015/11/06/dtrace-even-better-than-strace-for-osx.html>

## nice/renice

While the nice command lets you execute a program/process with modified scheduling priority, the renice command allows you to change the scheduling priority of an already running process. Following is the generic syntax forboth these commands:

nice [OPTION] [COMMAND [ARG]...]

renice [-n] priority [[-p] pid ...] [[-g] pgrp ...] [[-u] user ...]

## Nice

Run COMMAND with an adjusted niceness, which affects process scheduling. With no COMMAND, print the current niceness. Niceness values range from -20 (most favorable to the process) to 19 (least favorable to the process).

## Renice

Renice alters the scheduling priority of one or more running processes. The following who parameters are interpreted as process ID's, process group ID's, or user names. Renice'ing a process group causes all processes in the process group to have their scheduling priority altered. Renice'ing a user causes all processes owned by the user to have their scheduling priority altered. By default, the processes to be affected are specified by their process ID's.

<https://www.howtoforge.com/linux-nice-command>

## nohup

The nohup utility invokes utility with its arguments and at this time sets the signal SIGHUP to be ignored. If the standard output is a terminal, the standard output is appended to the file nohup.out in the current directory. If standard error is a terminal, it is directed to the same place as the standard output.

If you use thenohupcommand, you can continue processing even if you log out of the terminal.

nohup jupyter notebook &

## sample

Profile a process during a time interval

sample is a command-line tool for gathering data about the running behavior of a process. It suspends the process at specified intervals (by default, every 1 millisecond), records the call stacks of all threads in the process at that time, then resumes the process. The analysis done by sample is called ``sampling'' because it only checks the state of the program at the sampling points. The analysis may miss execution of some functions that are not executing during one of the samples, but sample still provides useful data about commonly executing functions.

At the end of the sampling duration, sample produces a report showing which functions were executing during the sampling. The data is condensed into a call tree, showing the functions seen on the stack and how they were called. (This tree is a subset of the actual call tree for the execution, since some functions may not have been executing during any of the sampling events.) The tree is displayed textually, with called functions indented one level to the right of the callee.

In the call tree, if a function calls more than one function then a vertical line is printed to visually connect those separate children functions, making it easier to see which functions are at the same level. The characters used to draw those lines, such as + | : ! are arbitrary and have no specific meaning.

## Others

1. !! / sudo !! (repeat last command with sudo)

2. pwd (Print working Directory)

3. xrandr -o normal (Screen rotation)

4. sudo shred -n 1 -v -z /dev/sd (format full hard disk, first write random bits, than with zeros, to every address)

5. bash install-missing.sh (running set of bash commands from a file)

6. wc "file" //count number of lines/words/characters in file

7. banner <anything> #prints a banner for <anything>

8. file [path] #to check the type of file

## Others

## taskset

tasksetis used to set or retrieve the CPU affinity of a running process given its PID or to launch a new COMMAND with a given CPU affinity. CPU affinity is a scheduler property that "bonds" a process to a given set of CPUs on the system. The Linux scheduler will honor the given CPU affinity and the process will not run on any other CPUs. Note that the Linux scheduler also supports natural CPU affinity: the scheduler attempts to keep processes on the same CPU as long as practical for performance reasons. Therefore, forcing a specific CPU affinity is useful only in certain applications.

The CPU affinity is represented as a bitmask, with the lowest order bit corresponding to the first logical CPU and the highest order bit corresponding to the last logical CPU. Not all CPUs may exist on a given system but a mask may specify more CPUs than are present. A retrieved mask will reflect only the bits that correspond to CPUs physically on the system. If an invalid mask is given (i.e., one that corresponds to no valid CPUs on the current system) an error is returned. The masks are typically given in hexadecimal. For example,

<https://linux.die.net/man/1/taskset>

## References

<https://dev.to/awwsmm/101-bash-commands-and-tips-for-beginners-to-experts-30je>

<https://www.toptal.com/linux/tips-and-practices>

<https://www.freecodecamp.org/news/the-linux-commands-handbook>
