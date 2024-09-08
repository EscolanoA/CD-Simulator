let SwordArray = [];
let ShardArray = {"CommonShard": 0, "UncommonShard": 0, "RareShard": 0, "EpicShard": 0, "LegendaryShard": 0, "GodlyShard": 0, "TotalShard" : 0}

function dismantle() {
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
}

function push(type, number) {
    for (let i = 0; i < number; i++) {
        SwordArray.push(type)
    }
}

function craft() {
    for (let i = 0; i < ShardArray.TotalShard; i++) {
        if (ShardArray.CommonShard >= 10) {
            push("common", 1)
            ShardArray.CommonShard = ShardArray.CommonShard - 10
            ShardArray.TotalShard = ShardArray.TotalShard - 10
        }
        if (ShardArray.UncommonShard >= 10) {
            push("uncommon", 1)
            ShardArray.UncommonShard = ShardArray.UncommonShard - 10
            ShardArray.TotalShard = ShardArray.TotalShard - 10
        }
        if (ShardArray.RareShard >= 15) {
            push("rare", 1)
            ShardArray.RareShard = ShardArray.RareShard - 15
            ShardArray.TotalShard = ShardArray.TotalShard - 15
        }
        if (ShardArray.EpicShard >= 15) {
            push("epic", 1)
            ShardArray.EpicShard = ShardArray.EpicShard - 15
            ShardArray.TotalShard = ShardArray.TotalShard - 15
        }
        if (ShardArray.LegendaryShard >= 20) {
            push("legendary", 1)
            ShardArray.LegendaryShard = ShardArray.LegendaryShard - 20
            ShardArray.TotalShard = ShardArray.TotalShard - 20
        }
        if (ShardArray.GodlyShard >= 25) {
            push("godly", 1)
            ShardArray.GodlyShard = ShardArray.GodlyShard - 25
            ShardArray.TotalShard = ShardArray.TotalShard - 25
        }
    }
    console.log("Newly crafter swords from ShardArray")
    console.log(SwordArray)
    console.log("Shards left after crafting ShardArray")
    console.log(ShardArray)
}

push("common", 29)
push("uncommon", 20)
push("rare", 32)
push("epic", 41)
push("legendary", 17)

//dismantle()

//craft()