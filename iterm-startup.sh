# /bin/bash

echo '== updating oh_my_zsh =='
env ZSH=$ZSH /bin/sh $ZSH/tools/upgrade.sh

echo '== updating brew =='
brew update

echo '== upgrading brew =='
brew upgrade

echo '== updating asdf plugins =='
asdf plugin update --all

echo '== brew cleanup =='
brew cleanup

clear
