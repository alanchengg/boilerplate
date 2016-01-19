# Boilerplate Project

------
## Introduction

The base of the boilerplate project revolves around ruby for middleman and node for some javascript fun times. Middleman manages the modules, which are more or less like pre-cursers to web components.

Node is used to manage front end packages, and scripts to make compiling, and writing code easier.

* Ruby
  * [Windows](https://www.ruby-lang.org/en/downloads/)
  * [Mac via HomeBrew](http://brew.sh/)
    * `$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
    * `$ brew install ruby`
  * [Mac via RVM](https://rvm.io/)
    * `gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
`
    * `$ \curl -sSL https://get.rvm.io | bash -s stable`
    * restart
    * `rvm list known` and pick which version you wish to install
* [Middleman](https://middlemanapp.com/)
  * `$ gem install middleman`
* [Node.js](https://nodejs.org/en/)

-----
## How to use

You can write HTML/CSS straight up and use middleman to manage live previewing. The next step up us to include ruby partials to pull in static or repeating content to save yourself time, and starting you off on the idea of web components and how they can help.
