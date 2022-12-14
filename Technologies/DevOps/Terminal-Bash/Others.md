# Others

Created: 2018-12-27 10:16:04 +0500

Modified: 2022-02-05 01:27:44 +0500

---

## systemd / initd

systemdis a collection of tools for a range of different tasks.Its primary purpose is initializing, managing and tracking system services and daemons in Fedora, both during startupand while the system is running.

The **init system** is the first process started on Fedora after the kernel starts. In fact, the init system always gets the Process ID (PID) of 1 on a system. This process is always executed by the Linux kernel after the early stages of bootup arecompleted by the BIOS and bootloader (GRUB).

The init system thenmuststart all the necessary daemons, background processes and services required to make the operating system work. Examples of such processes include starting up a bootscreen,various parts of the networking stack, andhardware in your machine.

Often these processes continue to run in the background after they start, and are calleddaemons.These daemonsmanage many parts of your system, such as logging information, watching for devices you insert or remove, and managing user login.

<https://fedoramagazine.org/what-is-an-init-system>

<https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units>

## systemctl

systemctl list-units | grep .service

systemctl status ssh.service

systemctl --failed

systemctl is-enabled ssh

systemctl reboot

systemctl poweroff

systemctl suspend

sudo systemctl start ssh.service

sudo systemctl stop ssh.service

sudo systemctl restart ssh.service

sudo systemctl disable ssh.service #will not run automatically on next startup

sudo systemctl enable ssh.service

## Journald

Journald replaces the plain text files of syslog with a binary format that:

- Allows for log messages with multiple fields and multi-line text
- Stores these messages in a space-efficient way that does not require renaming files for maintenance
- Gives fast access to messages given specific criteria, much like a database would

## Commands

- journalctl #view blob messages
- journalctl -a #view decoded messages
- journalctl -k #view kernel messages
- journalctl -f #follow messages
- journalctl -b #messages from this boot
- journalctl --since "2015-06-26 23:15:00" --until "2015-06-26 23:20:00"
- journalctl --since "2 days ago"
- journalctl --since "1 hour ago"
- journalctl -u nginx.service #only show nginx.service unit logs

## bashplotlib

pip install bashplotlib #graphs in the console

## jq

jq is likesedfor JSON data - you can use it to slice and filter and map and transform structured data with the same ease thatsed,awk,grepand friends let you play with text.

brew install jq

<https://stedolan.github.io/jq>

## Networking - socat

## Socatis a command line based utility that establishes two bidirectional byte streams and transfers data between them. Because the streams can be constructed from a large set of different types of data sinks and sources (see[address types](http://www.dest-unreach.org/socat/doc/socat.html#ADDRESS_TYPES)), and because lots of[address options](http://www.dest-unreach.org/socat/doc/socat.html#ADDRESS_OPTIONS)may be applied to the streams, socat can be used for many different purposes

<http://www.dest-unreach.org/socat/doc/socat.html>

## Networking - tshark

Dump and analyze network traffic

<https://www.wireshark.org/docs/man-pages/tshark.html>

## Logrotate

logrotateis designed to ease administration of systems that generate large numbers of log files. It allows automatic rotation, compression, removal, and mailing of log files. Each log file may be handled daily, weekly, monthly, or when it grows too large.

## Config file - /etc/logrotate.conf

## Options - man logrotate.conf

## Example

/tmp/email.log {
compress

delaycompress

daily

create 666 ubuntu syslog

missingok
rotate 14
}

/var/log/access.log {
compress

delaycompress

daily

create 666 root root

missingok
rotate 14
}

## Manually trigger logrotate

sudo logrotate -f /etc/logrotate.conf

## File watchers (uses this to know how to see changes to a file)

1. inotify

2. poll

The biggest difference is that epoll can be used for ANY fd. This means it's good for watching all types of ways to communicate data. Sockets, IPC, files, printers.. anything. inotify is for filesystems only.

However, because inotify is specific to filesystems, you can receive notifications on a wide array of filesystem-specific attributes, such as file attributes and the file being read. These things are not possible via epoll.

In fact, inotify returns a file descriptor - which means you can use epoll to determine which inotify FD's you should call read on. So the two go hand in hand to some extent.

<http://en.wikipedia.org/wiki/Inotify>

## htop

htop - an interactive process viewer for Unix.

It shows a frequently updated list of the processes running on a computer, normally ordered by the amount of CPU usage. Unlike top, htop provides a full list of processes running, instead of the top resource-consuming processes. htop uses color and gives visual information about[processor](https://en.wikipedia.org/wiki/Central_processing_unit),[swap](https://en.wikipedia.org/wiki/Swap_space)and[memory](https://en.wikipedia.org/wiki/Random_access_memory)status.

![Number of processors or are user and green cores. This has 3 cores. 76.2 Total memory used by processes in green bars. Total CPU usage for core 1. e are low priority, 1 2 3 Mem are kernel threads Load avera e: Uptime: 1 day, 1024 74 ON099MB] ](../../media/DevOps-Terminal-Bash-Others-image1.png)

![Process owner. PID 17391 8081 8052 6157 8065 Process Ids. 8073 8074 8075 8077 8076 8082 Niceness or the user-space priority of processes. Ranges from -20 (highest) to 19 (lowest.) MEM 3.8 55: 25. 2.6 3.8 1.9 1.3 13:31. 1.1 4.3 1.3 4.3 3.8 0.3 3.8 0.3 3.8 4.9 3.8 8.8 3.8 3.8 Total amount of virtual memory requested by processes. Not all may be in use. Resident memory usage or what currently being used by process( I PRI 20 20 20 20 20 30 30 30 20 20 20 SHR 55844 584 504 572 584 584 584 584 584 584 TIME+ oe joe -oot joe joe joe joe 1 o VIRT 1435M 435M 719M 310M 719M 435M 435M 435M 435M 435M 435M 285M 285M 100M 32448 100M 285M 285M 285M 285M 285M 285M 142 . s s R R s R s s s s 5. 7 4 1:09. 0:52. 0:30. 0:31. 0:31. o. 0:25. •14. 0:09. 38 10 05 52 85 82 62 44 62 99 63 Command simplescr simplescr gea ry /us r/bin/ gea ry simplescr simplescr simplescr simplescr simplescr simplescr ](../../media/DevOps-Terminal-Bash-Others-image2.png)

<https://peteris.rocks/blog/htop>

## glances

Glancesis a cross-platform monitoring tool which aims to present a large amount of monitoring information through a curses or Web based interface. The information dynamically adapts depending on the size of the user interface.

pip install glances

pip install 'glances[action,browser,cloud,cpuinfo,docker,export,folders,gpu,graph,ip,raid,snmp,web,wifi]'

glances -w

<https://github.com/nicolargo/glances>

## Interactive Filter

Searching the command history can be tedious. While both bash and zsh feature Ctrl+R keybinding, it only shows one substitution at a time. What is more, you need to enter the exact text that you used before. Since this is quite a common operation, once you start using the command line, it looks like a fine place for improvement.

Interactive filters, like[fzy](https://github.com/jhawthorn/fzy),[percol](https://github.com/mooz/percol),[peco](https://github.com/peco/peco)or[fzf](https://github.com/junegunn/fzf)help you with filtering long lines of text. This can either be the aforementioned command history, all the lines of code in a project directory, or a list of filenames generated byfind .. The general idea here is to present you first with all the lines available and then rely on fuzzy finding algorithms to filter out everything that doesn't match.

For example, binding Ctrl+R to fzf shows you a list of the most recent commands, which you can navigate up and down using arrows, or you can typegitto only show commands that feature Git somewhere inside.

Plus, you can make your interactive filter available inside your programmable text editor. This way, you will have unified searching capabilities between your shell and your editor.

## Others

<https://github.com/google/zx>
