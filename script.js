let SwordArray = [];
let ShardArray = {"CommonShard": 0, "UncommonShard": 0, "RareShard": 0, "EpicShard": 0, "LegendaryShard": 0, "GodlyShard": 0, "TotalShard" : 0}

let SwordDisplay = document.getElementById("SwordDisplay")
let ShardDisplay = document.getElementById("ShardDisplay")

let DismantleButton = document.getElementById("DismantleButton")
let CraftButton = document.getElementById("CraftButton")
let ResetButton = document.getElementById("ResetButton")
let AddSwordButton = document.getElementById("AddSwordButton")
let AddShardButton = document.getElementById("AddShardButton")


function dismantle() {
  if (SwordArray.length === 0) {
    alert("You have no sword to dismantle")
    return
  }
    console.log("SwordArray before dismantle")
    console.log(SwordArray)
  for (let i = 0; i < SwordArray.length; i++) {
      if (SwordArray[i] === "common") {
        let ShardNumber = Math.floor((Math.random() *3) +1)
        for (let v = 0; v < ShardNumber; v++) {
          let Chance = Math.floor((Math.random() *100))
          if (Chance < 50) {
            ShardArray.CommonShard = ShardArray.CommonShard + 1
            ShardArray.TotalShard = ShardArray.TotalShard + 1
          } else {
            ShardArray.UncommonShard = ShardArray.UncommonShard + 1
            ShardArray.TotalShard = ShardArray.TotalShard + 1
          }
        }
      }
      
        if (SwordArray[i] === "uncommon") {
        let ShardNumber = Math.floor((Math.random() *3) +1)
        for (let v = 0; v < ShardNumber; v++) {
          let Chance = Math.floor((Math.random() *100))
          if (Chance < 55) {
            ShardArray.UncommonShard = ShardArray.UncommonShard + 1
            ShardArray.TotalShard = ShardArray.TotalShard + 1
          } else {
            ShardArray.RareShard = ShardArray.RareShard + 1
            ShardArray.TotalShard = ShardArray.TotalShard + 1
          }
        }
      }
      
      if (SwordArray[i] === "rare") {
        let ShardNumber = Math.floor((Math.random() *3) +1)
        for (let v = 0; v < ShardNumber; v++) {
          let Chance = Math.floor((Math.random() *100))
          if (Chance < 65) {
            ShardArray.RareShard = ShardArray.RareShard + 1
            ShardArray.TotalShard = ShardArray.TotalShard + 1
          } else {
            ShardArray.EpicShard = ShardArray.EpicShard + 1
            ShardArray.TotalShard = ShardArray.TotalShard + 1
          }
        }
      }
      
      if (SwordArray[i] === "epic") {
        let ShardNumber = Math.floor((Math.random() *3) +1)
        for (let v = 0; v < ShardNumber; v++) {
          let Chance = Math.floor((Math.random() *100))
          if (Chance < 75) {
            ShardArray.EpicShard = ShardArray.EpicShard + 1
            ShardArray.TotalShard = ShardArray.TotalShard + 1
          } else {
            ShardArray.LegendaryShard = ShardArray.LegendaryShard + 1
            ShardArray.TotalShard = ShardArray.TotalShard + 1
          }
        }
      }
      
        if (SwordArray[i] === "legendary") {
        let ShardNumber = Math.floor((Math.random() *3) +1)
        for (let v = 0; v < ShardNumber; v++) {
          let Chance = Math.floor((Math.random() *100))
          if (Chance < 85) {
            ShardArray.LegendaryShard = ShardArray.LegendaryShard + 1
            ShardArray.TotalShard = ShardArray.TotalShard + 1
          } else {
            ShardArray.GodlyShard = ShardArray.GodlyShard + 1
            ShardArray.TotalShard = ShardArray.TotalShard + 1
          }
        }
      }
  }
  console.log("Shard ammount result from dismantling SwordArray")
  console.log(ShardArray)
  SwordArray = []
  updateSwordDisplay()
  updateShardDisplay()
}

function push(type, number) {
    for (let i = 0; i < number; i++) {
        SwordArray.push(type)
    }
}

function craft() {
  if (ShardArray.CommonShard < 10 && ShardArray.UncommonShard < 10 && ShardArray.RareShard < 15 && ShardArray.EpicShard < 15 && ShardArray.LegendaryShard < 20 && ShardArray.GodlyShard < 20) {
    alert("You don't have enough shards to craft anything")
    return
  }

  if (ShardArray.GodlyShard >= 25) {
    let AvailableShardForCraft = (Math.floor(ShardArray.GodlyShard/25)) * 25
    push("godly", AvailableShardForCraft/25)
    ShardArray.GodlyShard = ShardArray.GodlyShard - AvailableShardForCraft
  }

  if (ShardArray.LegendaryShard >= 20) {
    let AvailableShardForCraft = (Math.floor(ShardArray.LegendaryShard/20)) * 20
    push("legendary", AvailableShardForCraft/20)
    ShardArray.LegendaryShard = ShardArray.LegendaryShard - AvailableShardForCraft
  }

  if (ShardArray.EpicShard >= 15) {
    let AvailableShardForCraft = (Math.floor(ShardArray.EpicShard/15)) * 15
    push("epic", AvailableShardForCraft/15)
    ShardArray.EpicShard = ShardArray.EpicShard - AvailableShardForCraft
  }

  if (ShardArray.RareShard >= 15) {
    let AvailableShardForCraft = (Math.floor(ShardArray.RareShard/15)) * 15
    push("rare", AvailableShardForCraft/15)
    ShardArray.RareShard = ShardArray.RareShard - AvailableShardForCraft
  }

  if (ShardArray.UncommonShard >= 10) {
    let AvailableShardForCraft = (Math.floor(ShardArray.UncommonShard/10)) * 10
    push("uncommon", AvailableShardForCraft/10)
    ShardArray.UncommonShard = ShardArray.UncommonShard - AvailableShardForCraft
  }

  if (ShardArray.CommonShard >= 10) {
    let AvailableShardForCraft = (Math.floor(ShardArray.CommonShard/10)) * 10
    push("common", AvailableShardForCraft/10)
    ShardArray.CommonShard = ShardArray.CommonShard - AvailableShardForCraft
  }
    console.log("Newly crafter swords from ShardArray")
    console.log(SwordArray)
    console.log("Shards left after crafting ShardArray")
    console.log(ShardArray)
    updateSwordDisplay()
    updateShardDisplay()
}

function updateSwordDisplay() {
  let commonSwordAmount = SwordArray.filter(x => x==="common").length
  let uncommonSwordAmount = SwordArray.filter(x => x==="uncommon").length
  let rareSwordAmount = SwordArray.filter(x => x==="rare").length
  let epicSwordAmount = SwordArray.filter(x => x==="epic").length
  let legendarySwordAmount = SwordArray.filter(x => x==="legendary").length
  let godlySwordAmount = SwordArray.filter(x => x==="godly").length
  SwordDisplay.innerHTML ="Inventory : <br>" + SwordArray.toString() + "<br>"
  SwordDisplay.innerHTML = SwordDisplay.innerHTML + "Common swords : " + commonSwordAmount + " Uncommon swords : " + uncommonSwordAmount + " Rare swords : " + rareSwordAmount + " Epic swords : " + epicSwordAmount + " Legendary swords : " + legendarySwordAmount + " Godly swords : " + godlySwordAmount + "</br>"
}

function updateShardDisplay() {
  ShardDisplay.innerHTML = "Common Shards : " + ShardArray.CommonShard + "<br>Uncommon Shards : " + ShardArray.UncommonShard + "<br>Rare Shards : " + ShardArray.RareShard + "<br>Epic Shards : " + ShardArray.EpicShard + "<br>Legendary Shards : " + ShardArray.LegendaryShard + "<br>Godly Shards : " + ShardArray.GodlyShard
}

updateShardDisplay()
updateSwordDisplay()

DismantleButton.addEventListener("click", dismantle)
CraftButton.addEventListener("click", craft)

ResetButton.addEventListener("click", function() {
  SwordArray = []
  ShardArray.CommonShard = 0
  ShardArray.UncommonShard = 0
  ShardArray.RareShard = 0
  ShardArray.EpicShard = 0
  ShardArray.LegendaryShard = 0
  ShardArray.GodlyShard = 0
  updateShardDisplay()
  updateSwordDisplay()
})

AddSwordButton.addEventListener("click", function() {
  if (document.getElementById("AddCommonSwordInput").value >0) {
    push("common", document.getElementById("AddCommonSwordInput").value)
  }
  if (document.getElementById("AddUncommonSwordInput").value >0) {
    push("uncommon", document.getElementById("AddUncommonSwordInput").value)
  }
  if (document.getElementById("AddRareSwordInput").value >0) {
    push("rare", document.getElementById("AddRareSwordInput").value)
  }
  if (document.getElementById("AddEpicSwordInput").value >0) {
    push("epic", document.getElementById("AddEpicSwordInput").value)
  }
  if (document.getElementById("AddLegendarySwordInput").value >0) {
    push("legendary", document.getElementById("AddLegendarySwordInput").value)
  }
  if (document.getElementById("AddGodlySwordInput").value >0) {
    push("godly", document.getElementById("AddGodlyInput").value)
  }
  updateShardDisplay()
  updateSwordDisplay()
})

AddShardButton.addEventListener("click", function() {
  if (document.getElementById("AddCommonShardInput").value >0) {
    ShardArray.CommonShard = ShardArray.CommonShard + Number(document.getElementById("AddCommonShardInput").value)
  }
  if (document.getElementById("AddUncommonShardInput").value >0) {
    ShardArray.UncommonShard = ShardArray.UncommonShard + Number(document.getElementById("AddUncommonShardInput").value)
  }
  if (document.getElementById("AddRareShardInput").value >0) {
    ShardArray.RareShard = ShardArray.RareShard + Number(document.getElementById("AddRareShardInput").value)
  }
  if (document.getElementById("AddEpicShardInput").value >0) {
    ShardArray.EpicShard = ShardArray.EpicShard + Number(document.getElementById("AddEpicShardInput").value)
  }
  if (document.getElementById("AddLegendaryShardInput").value >0) {
    ShardArray.LegendaryShard = ShardArray.LegendaryShard + Number(document.getElementById("AddLegendaryShardInput").value)
  }
  if (document.getElementById("AddGodlyShardInput").value >0) {
    ShardArray.GodlyShard = ShardArray.GodlyShard + Number(document.getElementById("AddGodlyShardInput").value)
  }
  updateShardDisplay()
  updateSwordDisplay()
})