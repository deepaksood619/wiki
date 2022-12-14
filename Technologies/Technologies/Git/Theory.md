# Theory

Created: 2017-10-03 21:33:41 +0500

Modified: 2021-10-05 16:19:48 +0500

---

## Submodule

Mounting one repository inside another.

A submodule is a repository embedded inside another repository. The submodule has its own history; the repository it is embedded in is called a superproject.

## Git Bisect

git-bisect - Use binary search to find the commit that introduced a bug

## git pull origin master from a different branch

This command directly fetch and merge the changes from origin to ECBC-master and than merges to the current branch. So we don't have to perform following steps-

- git pull
- git checkout master
- git pull (For fast forwarding the branch)
- git checkout form-validations
- git merge master

## Rebase

<https://dev.to/gonedark/a-closer-look-at-git-rebase>

Rebasing is the process of modifying the base commit from which series of commits stem

## Bringing a branch up to date

For some,git rebasefalls on themagicend of the spectrum for Git commands. Yet, if we break down the actions taken bygit rebasewe can understand the magic.

While atreeis the goto analogy when visualizing Git commands, I findvideo editingalso helps describegit rebase.

In the case of bringing astalebranch up to date, let's consider the following tree progression.

![Visual of commit tree during git rebase](../../media/Technologies-Git-Theory-image1.png)

Starting with the full tree, we have astalebranch (in red) off amasterbranch. If we zoom in, we see the branch isstalebecause it's missing the recent commits frommaster(in blue).

When we rungit rebase, it first willrewindboth branches back to the first point when their commit history matches (in gray). From this point,git rebasewillfast-forwardthrough the commits on themasterbranch and apply them to thestalebranch. Finally,git rebasereplaysthe commits from thestalebranch.

The resulting tree is as if you just created a new branch offmasterand made your commits. In doing so,git rebasefacilitates a clean merge.

Just remember to alwaysgit branch backupbefore you rebase. Then, after the rebase, you cangit diff backupto make sure it went well. If something does go awry, you can justgit reset --hard backupand start over.

![ON FROJECT5 Α 8ΕΑΙ)ΠΠΙ 6R,9PH REE TOEL. ΜΙ. HNDOkEl)E/T? NO ΙOΕΑ .1)STYEMORlZE T-E5E 5HElL ca•MVHNDS ΤΥΡΕ π-ΙΕΓ1 ΙΡ ERROR5 5AVE ELElJHET DELETE MD A c-opy. ](../../media/Technologies-Git-Theory-image2.png)

## .git folder

.
|-- COMMIT_EDITMSG
|-- FETCH_HEAD
|-- HEAD
|-- ORIG_HEAD
|-- branches
|-- config
|-- description
|-- hooks
| |-- applypatch-msg
| |-- commit-msg
| |-- post-commit
| |-- post-receive
| |-- post-update
| |-- pre-applypatch
| |-- pre-commit
| |-- pre-rebase
| |-- prepare-commit-msg
| `-- update
|-- index
|-- info
|`-- exclude
|-- logs
| |-- HEAD
| `-- refs
|-- objects
`-- refs
|-- heads
|-- remotes
|-- stash
`-- tags

<https://git-scm.com/docs/gitrepository-layout>

## Git Merge Commit

git merge commit is used when two branches are added to master with interleaving commits. So doing git log shows all the commits in chronological order with different branches commit interleaved.

Doing git reset on a merge commit will roll back all the commits of that merge commit which are interleaved between other branches commit.

When there is no merge commit it's called **Fast Forward Merge.**

[Fast forward merge](https://kolosek.com/git-merge/#fastforwardmerge)is a type of merge that doesn't create a commit, instead, it updates the branch pointer to the last commit.

## Git is an event sourcing system

Event sourcing system have two components - current state of the systems and logs for the event that has happened. Replaying all the events from the logs can give any state of the system at any time.

Other example of event sourcing system is accounting systems.

## Git ignore already tracked files

- **git update-index --skip-worktree**

## --skip-worktreeis the flag which means the files should change locally

That is,Use the command when you want to modify files managed by Git locally (or updated automatically) but you do not want Git to manage that change.

Because the command is to prevent local changes from being managed by Git,we will use the command in most cases.

$ git update-index --skip-worktree path/to/file #Exclude from the management of Git

$ git ls-files -v | grep ^S #Confirming

git ls-files shows all files managed by git.

-vcheck the file being ignored.

--skip-worktreeis displayed withS.

$ git update-index --no-skip-worktree path/to/file #Restore to the management of Git

- **git update-index --assume-unchanged**

## --assume-unchangedis the flag which means the files should not change locally

In other words, it is used whenignore files that you do not need to change locally (or should not change).

--assume-unchangedis used when you want to speed up Git's behavior by ignoring unnecessary files.

Also, since it is an idea to ignore local changes,git reset - hardcommand will delete local changes.

$ git update-index --assume-unchanged path/to/file #Exclude from the management of Git

$ git ls-files -v | grep ^h #Confirming

assume-unchangedis displayed with h

$ git update-index --no-assume-unchanged path/to/file #Restore to the management of Git

## gitattributes

The.gitattributesfile allows you to specify the files and paths attributes that should be used by git when performing git actions, such asgit commit, etc.

In other words git automatically saves the file according to the attributes specified, every time a file is created or saved.

One of these attributes is theeol(end of line) and is used to configure the line endings for a file. This article will now dive deeper into how to configure the line endings, so every developer uses the same value when using different machines / OSes across the repository.

## 7 Rules of great Git commit message

1. [Separate subject from body with a blank line](https://chris.beams.io/posts/git-commit/#separate)

2. [Limit the subject line to 50 characters](https://chris.beams.io/posts/git-commit/#limit-50)

3. [Capitalize the subject line](https://chris.beams.io/posts/git-commit/#capitalize)

4. [Do not end the subject line with a period](https://chris.beams.io/posts/git-commit/#end)

5. [Use the imperative mood in the subject line](https://chris.beams.io/posts/git-commit/#imperative)

6. [Wrap the body at 72 characters](https://chris.beams.io/posts/git-commit/#wrap-72)

7. [Use the body to explainwhatandwhyvs.how](https://chris.beams.io/posts/git-commit/#why-not-how)

## References

<https://kolosek.com/git-merge/#fastforwardmerge>

<https://dev.to/neshaz/git-merge-vs-git-rebase-5134>

<https://chris.beams.io/posts/git-commit/#seven-rules>

## Git Branches

Branches in Git are incredibly lightweight as well. They are simply pointers to a specific commit -- nothing more. This is why many Git enthusiasts chant the mantra:

branch early, and branch often

Because there is no storage / memory overhead with making many branches, it's easier to logically divide up your work than have big beefy branches.

When we start mixing branches and commits, we will see how these two features combine. For now though, just remember that a branch essentially says "I want to include the work of this commit and all parent commits."

Git checkout -b bugFix

Git branch -f three C2

Git branch -f <branch_name> <where_to_move>

## Git Merging

The first method to combine work that we will examine isgit merge. Merging in Git creates a special commit that has two unique parents. A commit with two parents essentially means "I want to include all the work from this parent over here and this one over here,andthe set of all their parents."

1. **Checkout the branch where you want the commits to merge.**

2. **Use command git merge <branch_name> from where you want commits to merge to the branch**

Git checkout -b bugFix

Git commit

Git checkout master

Git commit

Git merge bugFix

## Git Rebase

The second way of combining work between branches isrebasing.Rebasing essentially takes a set of commits, "copies" them, and plops them down somewhere else.

While this sounds confusing, the advantage of rebasing is that it can be used to make a nice linear sequence of commits. The commit log / history of the repository will be a lot cleaner if only rebasing is allowed.

Git checkout -b bugFix

Git commit

Git checkout master

Git commit

Git checkout bugFix

Git rebase master

## Forwarding the branch

Git rebase master bugFix

Git rebase <changes_where_to_add> <changes_from_where_to_add>

## Git interactive rebase

All interactive rebase means is using therebasecommand with the-ioption.

If you include this option, git will open up a UI to show you which commits are about to be copied below the target of the rebase. It also shows their commit hashes and messages, which is great for getting a bearing on what's what.

When the interactive rebase dialog opens, you have the ability to do 3 things:

a.  Reorder commit

b.  Omit commits

c.  Squash commits

Git rebase <branch-name> -i

## Moving around in Git

1. **HEAD**

HEAD is the symbolic name for the currently checked out commit -- it's essentially what commit you're working on top of.

HEAD always points to the most recent commit which is reflected in the working tree. Most git commands which make changes to the working tree will start by changing HEAD.

## Detaching HEAD

Detaching HEAD just means attaching it to a commit instead of a branch.

2. **Relative Refs**
    - Moving upwards one commit at a time with^ (Caret Operator)
    - Moving upwards a number of times with~<num>

Git checkout bugFix^ (parent of bugFix)

Git checkout HEAD^ (parent of current HEAD)

Git checkout HEAD~4

## Branch Forcing

You can directly reassign a branch to a commit with the-foption.

Git branch -f master HEAD~3 (moves (by force) the master branch to three parents behind HEAD.)

## Reversing Changes in Git

And just like committing, reversing changes in Git has both a low-level component (staging individual files or chunks) and a high-level component (how the changes are actually reversed). Our application will focus on the latter.

There are two primary ways to undo changes in Git -- one is usinggit resetand the other is usinggit revert. We will look at each of these in the next dialog

## Git Reset

git resetreverts changes by moving a branch reference backwards in time to an older commit. In this sense you can think of it as "rewriting history;"git resetwill move a branch backwards as if the commit had never been made in the first place.

## Git reset HEAD~1

## Git Revert

While reseting works great for local branches on your own machine, its method of "rewriting history" doesn't work for remote branches that others are using.

In order to reverse changes andshare those reversed changes with others, we need to usegit revert. Let's see it in action

git revert HEAD

Weird, a new commit plopped down below the commit we wanted to reverse. That's because this new commitC2'introduceschanges-- it just happens to introduce changes that exactly reverses the commit ofC2.

With reverting, you can push out your changes to share with others.

## Cherry Pick

git cherry-pick <Commit1> <Commit2> <...>

It's a very straightforward way of saying that you would like to copy a series of commits below your current location (HEAD).

## Locally stacked commits

## Problem -

Here's a development situation that often happens: I'm trying to track down a bug but it is quite elusive. In order to aid in my detective work, I put in a few debug commands and a few print statements.

All of these debugging / print statements are in their own commits. Finally I track down the bug, fix it, and rejoice!

Only problem is that I now need to get mybugFixback into themasterbranch. If I simply fast-forwardedmaster, thenmasterwould get all my debug statements which is undesirable. There has to be another way...

Git checkout master

Git cherry-pick bugFix

Or

Git rebase master -i

Git rebase -i overHere

## Juggling commits

Here's another situation that happens quite commonly. You have some changes (newImage) and another set of changes (caption) that are related, so they are stacked on top of each other in your repository (aka one after another).

The tricky thing is that sometimes you need to make a small modification to an earlier commit. In this case, design wants us to change the dimensions ofnewImageslightly, even though that commit is way back in our history!!

We will overcome this difficulty by doing the following:

- We will re-order the commits so the one we want to change is on top withgit rebase -i
- We willcommit --amendto make the slight modification
- Then we will re-order the commits back to how they were previously withgit rebase -i
- Finally, we will move master to this updated part of the tree to finish the level (via the method of your choosing)

Git rebase -i master

Git commit --amend

Git rebase -i master

Git checkout master

Git merge C3''

Or

Git rebase caption master

## Using Cherry-pick

Git checkout master

Git cherry-pick C2

Git commit --amend

Git cherry-pick C3

## Git Tags

Git tag v1 C1

Git tag v2 C2

## Git Describe

Git describe can help you get your bearings after you've moved many commits backwards or forwards in history; this can happen after you've completed a git bisect (a debugging search) or when sitting down at a coworkers computer who just got back from vacation.

git has a command todescribewhere you are relative to the closest "anchor" (aka tag).

git describe <ref>

Where<ref>is anything git can resolve into a commit. If you don't specify a ref, git just uses where you're checked out right now (HEAD).

The output of the command looks like:

<tag>_<numCommits>_g<hash>

Wheretagis the closest ancestor tag in history,numCommitsis how many commits away that tag is, and<hash>is the hash of the commit being described.

## Specifying Parents in merge commit (Using Modifiers)

Like the~modifier, the^modifier also accepts an optional number after it.

Rather than specifying the number of generations to go back (what~takes), the modifier on^specifies which parent reference to follow from a merge commit. Remember that merge commits have multiple parents, so the path to choose is ambiguous.

Git will normally follow the "first" parent upwards from a merge commit, but specifying a number with^changes this default behavior.

Git checkout master^

![co Here we have a merge commit. If we checkout masterA without the modifier, we will follow the first parent after the merge commit. (In our visuals, the first parent is positioned directly above the merge comnit.) git checkout masterA Easy -- this is what we are all used master to. ](../../media/Technologies-Git-Theory-image3.png)

Git checkout master^2

![Now let's try specifying the second parent instead. .. git checkout masterA2 See? We followed the other parent upwards. master ](../../media/Technologies-Git-Theory-image4.png)

![modifiers can The a commit tree very powerful : make moving around git checkout HEAD---; git checkout HEADA2; git checkout HEAD---2 Lightning fast! co master ](../../media/Technologies-Git-Theory-image5.png)

![Even crazier, these modifiers can be chained together! Check this out: git checkout HEAD-AZ-2 The same movement as before, command. but all in one master ](../../media/Technologies-Git-Theory-image6.png)

Creating Branch

Git branch bugWork HEAD~^2~

## Remote Commands

1. **Git clone**

2. **Git fetch**

git fetchperforms two main steps, and two main steps only. It:

- downloads the commits that the remote has but are missing from our local repository, and...
- updates where our remote branches point (for instance,o/master)

git fetchessentially brings ourlocalrepresentation of the remote repository into synchronization with what theactualremote repository looks like (right now).

3. **Git pull**

4. **Git push**

## Diverged history

![Now if we rebase before pushing instead... co C? master* o/master co git fetch; git rebase o/master; git push Boom! We updated our local representation of the remote with git fetc , rebased our work to reflect the new changes in the remote, and then pushed them with git push master ](../../media/Technologies-Git-Theory-image7.png)

## Git pull --rebase; git push

## Feature Branches Push and Pull

![Merging feature branches Now that you're comfortable with fetching, pulling, and pushing, lets put these skills to the test with a new workflow. It's common for developers on big projects to do all their work on feature branches (off of master ) and then integrate that work only once it's ready. This is similar to the previous lesson (where side branches get pushed to the remote), but here we introduce one more step. Some developers only push and pull when on the ster branch -- that way maste always stays updated to what is on the remote . So for this workflow we • integrating feature • pushing and pulling combine two things: branch work onto ster , and from the remote ](../../media/Technologies-Git-Theory-image8.png)

## Remote Tracking

Another way to set remote tracking on a branch is to simply use thegit branch -uoption. Running

git branch -u o/master foo

will set thefoobranch to tracko/master. Iffoois currently checked out you can even leave it off:

git branch -u o/master

Git checkout -b side o/master

## Colon refspec

![Remember , ourc will understand: is any location that git git push origin fooA:master Woah! That's a pretty trippy command but it git resolved fooA into a makes sense - location, uploaded whatever commits that weren't present yet on the remote, and then updated destination. co master o/master C? O) co master ](../../media/Technologies-Git-Theory-image9.png)

Git push origin <source>:<destination>

<https://learngitbranching.js.org>

<https://www.freecodecamp.org/news/git-for-professionals>
