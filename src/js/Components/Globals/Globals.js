"use strict";

const Globals = {
  dom: {
    //width: window.innerWidth || document.documentElement.clientWidth,
    // height: window.innerHeight || document.documentElement.clientHeight,
    // tile: document.querySelector(".tile"),
    // tile_score: tile.firstElementChild,
    // tile_streak: tile.firstElementChild.nextElementSibling,
    blocksWrap: document.querySelector(".wrap--blocks"),
    gameWidth: document.querySelector(".wrap--gameBoard").clientWidth,
    gameHeight: document.querySelector(".wrap--gameBoard").clientHeight,
    timerWrap: document.querySelector(".wrap--timer"),
    timerElement: document.querySelector(".timer"),
    startButton: document.querySelector(".start"),
    pauseButton: document.querySelector(".pause"),
    score: document.querySelector(".score--title"),
    streak: document.querySelector(".streak--title"),
    syncStreakScoreWrap: document.querySelector(".wrap--syncStreakScore")
  },
  game: {
    // grid_x: 0,
    // grid_y: 0,
    tile_x: 0,
    tile_y: 0,
    syncLength: 0,
    syncCount: 0,
    flashColor: "",
    allBlocks: [],
    droppedBlocks: [],
    replacedBlocks: [],
    droppedBlocks: [],
    replacedBlocks: [],
    game_over: false,
    paused: false,
    playerScore: 0,
    beatCount: 0,
    startSync: 0,
    syncCount: 0,
    powerupCount: 0,
    syncLength: 0,
    syncStreakCount: 0,
    currentStreak: 0
  },
  music: {
    audio: document.querySelector(".audio__player"),
    bpm: [1500, 880]
  }
};

export default Globals;
