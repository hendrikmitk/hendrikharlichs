---
title: Speed up your workflow using Git aliases
created: 2023-11-07
updated:
summary: What was that neat Git command from the other day again? The power of complex but often cumbersome Git commands, always at your fingertips with the help of Git aliases.
draft: false
---

<script>
  import Callout from '$lib/components/Callout.svelte'
</script>

Being todays most popular version control system, Git is one of the most important tools in modern software development. Whether in a day-to-day software development job or as an open source contributor, there is almost no way around Git when collaborating on projects in a team.

When you often perform specific Git operations (and you are a command line type of person), you will find yourself typing the same commands over and over again. This is where Git aliases come to the rescue! Git aliases can be set up in different ways. Let's take a look at the two most common ones.

## Git configuration file

Git offers an in-built alias functionality right out-of-the-box. Git aliases live in Git configuration files and are created using the `git config` command. Let's create some simple examples to get an idea!

```sh
git config --global alias.br branch
git config --global alias.sw switch
git config --global alias.ls 'log --oneline'
```

This would add the following to your global Git configuration file (probably located in `~/.gitconfig`):

```
[alias]
	br = branch
	sw = switch
	ls = log --oneline
```

<Callout>As with other configuration values, aliases can be created in a <strong>local</strong> or <strong>global</strong> scope.</Callout>

Now, when you want to use the `git branch` command to have all branches listed, you only need to type `git br`. Hence, the command `git sw -c new-branch` could be used to create a new branch.

Changing an alias is done by simply setting it again. Let's say we want our `git br` alias to list both local and remote branches by default using the `-a` option. We simply overwrite the alias like this:

```sh
git config --global alias.br 'branch -a'
```

To delete an alias we use the `git config` command with the `--unset` option.

```sh
git config --global --unset alias.sw
```

The Git configuration file would look like this after these two changes:

```
[alias]
	br = branch -a
	ls = log --oneline
```

Of course, the same result could be achieved by directly changing the Git configuration file in your favorite text editor or IDE, which is often easier and faster (especially when editing multiple aliases).

### Advanced aliases

One of the downsides is that simple aliases cannot handle parameters such as a commit message. Thankfully, Git allows us to escape from an alias to a shell using the `!` bang. This opens up a whole new world of possibilities for our aliases!

Commit early, commit often, they say. So you will probably use the following commands fairly often:

```sh
git add .
git commit -m 'Some commit message'
```

Using advanced Git aliases, this could be done with a snappy "**a**dd **a**ll, **c**ommit with **m**essage" alias:

```sh
git aacm 'Some commit message'
```

We achieve this by wrapping our Git command in an "anonymous" Bash function. This gives us access to command line variables and shell extensions plus we can use `&&` to chain multiple Git commands. So, we take `$1` – the first parameter passed to the command – which is our commit message, and concatenate the two commands `git add` and `git commit` within a Bash function:

```sh
git config --global alias.aacm '!f() { git add . && git commit -m "$1"; }; f'
```

<Callout>By spawning a shell you can also utilize <code>|</code> (pipes), <code>grep</code> and other Unix commands.</Callout>

This is what the Git configuration file with our advanced `aacm` alias now looks like:

```
[alias]
	aacm = "!f() { git add . && git commit -m \"$1\"; }; f"
```

## Bash or Zsh config

A different approach to using advanced Git aliases is to use Bash or Zsh aliases. Depending on which shell you’re using, these aliases live in the `.bashrc` or `.zshrc` file and comply with this syntax.

```sh
alias alias_name="command_to_run"
```

While we have _extended_ the `git` program with additional commands in the [Git configuration file](#git-configuration-file) approach, this is not possible using Bash or Zsh aliases. Here we have to come up with new and unique command names for our Git aliases. One simple and common solution is to prefix the commands appropriately, in our case with `git*` or just `g*`. This is what the example from the beginning would look like in a bashrc:

```
alias gbr='git branch'
alias gsw='git switch'
alias gls='git log --oneline'
```

A major advantage of Bash or Zsh aliases is that not only `git` commands can be used, but also all other command line tools installed on the system. These can also be combined with each other.

However, Bash or Zsh aliases do not accept parameters, but a function can be called just like an alias. So our "**a**dd **a**ll, **c**ommit with **m**essage" alias will become a `gaacm` function in our `.bashrc`:

```
gaacm() {
  git add . && git commit -m "$1"
}
```

With a growing number of aliases, remembering the purpose of each one becomes harder. You can use the `type` command in Bash and the `which` command in Zsh to peek at what an alias does.

```bash
#!/bin/bash
type gsw # This will print "gsw is aliased to `git switch'"
```

```sh
#!/bin/zsh
which gsw # This will print "gsw: aliased to git switch"
```

<Callout type="warning">Since aliases in the Git configuration file are subcommands of the <code>git</code> command, peeking at what an alias does only works with Bash or Zsh aliases!</Callout>

## Roundup

Git aliases are definitely super convenient and make working on the command line much easier. However, you should always keep the original command in mind! You may struggle to understand the official documentation if you become too comfortable with your aliases. Not to mention you're pretty much screwed if you have to work on a system where your beloved aliases are not available.
