#!/bin/bash

current_path=$(pwd)
cd Start_game

function check_directory {
    
    # ================================================ Mustafa - Train Station Part============= 
    if [[ $PWD == "${current_path}/Start_game/look_in_your_dog_bed" ]]; then
            echo "you find your ticket have a breakfast"
            
    fi 
    if [[ $PWD == "${current_path}/Start_game/look_in_your_pijamas" ]]; then
        echo "There is nothing here!"
        cd ${current_path}/Start_game
            
    fi 
    if [[ $PWD == "${current_path}/Start_game/look_under_your_bed" ]]; then
        echo "There is nothing here!"
        cd ${current_path}/Start_game
            
    fi 

    if [[ $PWD == "${current_path}/Start_game/look_in_your_dog_bed/powercoders_breakfast" ]]; then
        echo "You will have your breakfast in Powercoders, So go to the railway station and get train !"
        cd ${current_path}/Start_game/look_in_your_dog_bed/powercoders_breakfast
    fi 

    if [[ $PWD == "${current_path}/Start_game/look_in_your_dog_bed/powercoders_breakfast/train_A" ]]; then
        echo "You are in the wrong train, so change your train"
        cd ${current_path}/Start_game/look_in_your_dog_bed/powercoders_breakfast

    fi

    if [[ $PWD == "${current_path}/Start_game/look_in_your_dog_bed/powercoders_breakfast/train_C" ]]; then
        echo "You are in the wrong train, so change your train"
        cd ${current_path}/Start_game/look_in_your_dog_bed/powercoders_breakfast
    fi

    if [[ $PWD == "${current_path}/Start_game/look_in_your_dog_bed/powercoders_breakfast/train_B" ]]; then
        echo "Yeah, Your are in right 
        ____
        |DD|____T_
        |_ |_____|<
        @-@-@-oo\  to the POWERCODERS !"

    fi

}

function custom_cd {
    builtin cd "$@" && check_directory
}

alias cd='custom_cd'