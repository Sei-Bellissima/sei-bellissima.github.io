var runList = [ "Sal Story", "Sal Brawl", "Rook Story", "Rook Brawl", "Smith Story", "Smith Brawl" ];
var prestigeList = [ "Story Mode", "Prestige 0", "Prestige 1", "Prestige 2", "Prestige 3", "Prestige 4", "Prestige 5", "Prestige 6", "Prestige 7" ];
var toDoList = [ "read the dialogue and do the morally right thing, always", "just murder everyone. No negotiations", "negotiate as much as I can",
               "use all shills on buying items and cards, not grafts", "figure out some random gimmick to base my deck around",
               "fail as many quests as I can" ];
var mutatorsList = [ "play without any enabled", "play with three random ones", "play with three that I choose, and three that are random", "go down the list and click EVERY SINGLE MUTATOR once" ];

function generateRun() {
    var chosenRun = runList[Math.floor(Math.random() * runList.length)],
        chosenPrestige = prestigeList[Math.floor(Math.random() * prestigeList.length)],
        chosenToDo = toDoList[Math.floor(Math.random() * toDoList.length)],
        chosenMutators = mutatorsList[Math.floor(Math.random() * mutatorsList.length)];
    document.getElementById("runType").value = chosenRun;
    document.getElementById("difficulty").value = chosenPrestige;
    document.getElementById("whatToDo").value = chosenToDo;
    document.getElementById("mutators").value = chosenMutators;
}