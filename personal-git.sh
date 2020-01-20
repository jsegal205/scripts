#!/bin/bash

# per this, https://gist.github.com/jexchan/2351996
# when I restart my computer, I need to reassociate my personal github ssh key

# use Automator to run shell script on login
# https://stackoverflow.com/questions/6442364/running-script-upon-login-mac

echo ${ssh-add -l} | grep --quiet "jsegal205"
if [ $? = 1 ]; then
  # 1 === the echo didn't return anything
  ssh-add -K ~/.ssh/id_rsa_jsegal205 # -K to save password in keychain
fi
