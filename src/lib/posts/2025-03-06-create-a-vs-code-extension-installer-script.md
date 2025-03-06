---
title: Create a VS Code extension installer script
created: 2025-03-06
updated:
summary: Automate the backup and installation of VS Code extensions using its command-line interface and a simple Bash script. A lightweight alternative to extension sync tools like Settings Sync.
draft: false
---

<script>
  import Callout from '$lib/components/Callout.svelte'
</script>

Every now and then, you find yourself in a situation where you have to set up a new computer – either because you change jobs or because your old machine has stopped working. For VS Code, which I use for private side projects and as a secondary IDE alongside PhpStorm in my everyday work, I would (among other things) like to transfer the installed extensions.

I recently stumbled across what I think is a very charming way to transfer your VS Code extensions using Visual Studio Code's [built-in command-line interface](https://code.visualstudio.com/docs/editor/command-line) and a dash of Bash scripting.

<Callout type="warning">There is a VS Code extension called <a href="https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync" target="_blank">Settings Sync</a>, which allows you to keep not only the extensions but rather all kind of VS Code configurations, such as settings, snippets, and the like, synchronized across different devices using GitHub Gist. Obviously, this is the much easier way. However, I don't like to give such extensions access to my GitHub account, and I also don't need the full range of features of the extension.</Callout>

You can access VS Code's command-line interface using the `code` command. The `--list-extensions` argument lists, well, extensions – specifically, the ones installed. Extensions can be installed via the argument (you guessed it) `--install-extension <ext>`. Use just a little Bash to create a tiny installer script for the installed VS Code extensions:

```sh
code --list-extensions | xargs -L 1 echo code --install-extension > install_vscode_extensions.sh
```

The result is a file like this, which can then be executed on the new machine:

```sh
# install_vscode_extensions.sh
code --install-extension angular.ng-template
code --install-extension esbenp.prettier-vscode
code --install-extension github.copilot
code --install-extension github.copilot-chat
code --install-extension ms-azuretools.vscode-docker
code --install-extension svelte.svelte-vscode
```

If an extension is no longer available (or no longer available under the specified identifier), it is automatically skipped; no dedicated error handling is required.

To ensure that you can easily restore your extensions on a new machine if your computer suddenly breaks down, you should consider running the install script regularly as part of your backup routine.

<Callout type="error">If <code>code</code> is not recognized as an internal or external command, the OS cannot find the VS Code binary on its path. On macOS, you then need to manually run the <b>Shell Command: Install 'code' command in PATH</b> command in the command palette.</Callout>
