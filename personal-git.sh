#!/bin/bash

# per this, https://gist.github.com/jexchan/2351996
# when I restart my computer, I need to reassociate my personal github ssh key

## TODO make this idempotent
## grep ssh-add -l for jsegal205
## add task to run this on startup.
## store passphrase in keychain so I don't have to type it.

ssh-add ~/.ssh/id_rsa_jsegal205

# enter passphrase
