# rsync / rclone

Created: 2018-04-16 14:31:01 +0500

Modified: 2022-04-24 11:47:09 +0500

---

## Rsync Algorithm

Used for reducing the cost of a file transfer by avoiding the transfer of blocks that are already at the destination.

Use Case - Streaming file Sync

## rsyncis a utility for efficiently transferring and synchronizing files across computer systems, by checking the timestamp and size of files. It is commonly found on [Unix-like](https://en.wikipedia.org/wiki/Unix-like) systems and functions as both a [file synchronization](https://en.wikipedia.org/wiki/File_synchronization) and [file transfer](https://en.wikipedia.org/wiki/File_transfer) program. The rsync algorithm is a type of [delta encoding](https://en.wikipedia.org/wiki/Delta_encoding), and is used for minimizing network usage.[Zlib](https://en.wikipedia.org/wiki/Zlib) may be used for additional compression,  and [SSH](https://en.wikipedia.org/wiki/Secure_Shell) or [stunnel](https://en.wikipedia.org/wiki/Stunnel) can be used for data security

Rsync is typically used for synchronizing files and directories between two different systems. For example, if the commandrsync local-file user@remote-host:remote-fileis run, rsync will use SSH to connect asusertoremote-host.Once connected, it will invoke the remote host's rsync and then the two programs will determine what parts of the file need to be transferred over the connection.

Rsync can also operate in a [daemon](https://en.wikipedia.org/wiki/Daemon_(computer_software)) mode, serving and receiving files in the native rsync protocol (using the "rsync://" syntax).

## Commands

alias cp='rsync -aP'

-P for a progress bar

rsync [OPTION]... SRC [SRC]... DEST

rsync -zvr source.png ~/Desktop/dest.png

-z for compression

-v for verbose

-r for recursive

## rclone

Rclone*("rsync for cloud storage")*is a command line program to sync files and directories to and from different cloud storage providers.

1. azure blob storage

2. amazon s3

## Commands

rclone config

rclone lsd remote:

rclone mkdir remote:container

rclone ls remote:container

rclone sync /home/local/directory remote:container

# copy from local to remote

rclone --config s3.conf copy --no-traverse remote:example-postgres-backup/`date +%Y-%m-%d`/$dump_file.tar.gz .

# copy from remote to local

rclone copy --no-traverse . remote:ubuntu@52.220.109.7:/home/ubuntu/sources/example/media/images/deployment_photos

<https://rclone.org>

## BackBlaze

b2 authorize-account

b2 list-buckets

b2 upload-file TimeMachineBackupDeepak Documents.zip Documents.zip

<https://www.backblaze.com/b2/docs/quick_command_line.html>
