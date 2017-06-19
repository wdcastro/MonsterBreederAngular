export class Monster{
  owner:string;
  name:string;
  level:number;
  species:string;
  pictureUrl:string;
  experience:number;
  expToNext:number;

  hunger:number = 5;
  maxhunger:number = 5;
  health:number = 5;
  hungerstrike:number = 0;
  healthstrike:number = 0;

  hp:number;
  atk:number;
  def:number;
  spd:number;
  eva:number;

  hpgrowth:number;
  atkgrowth:number;
  defgrowth:number;
  spdgrowth:number;
  evagrowth:number;

  constructor(name:string, owner:string){
    this.newMonster(name);
    this.owner = owner;
  }

  loadMonster(monster:any){
    this.name = monster.name;
    this.owner = monster.owner;
    this.level = monster.level;
    this.species = monster.species;
    this.pictureUrl = monster.pictureUrl;
    this.experience = monster.experience;
    this.expToNext = monster.expToNext;

    this.hp = monster.hp;
    this.atk = monster.atk;
    this.def = monster.def;
    this.spd = monster.spd;
    this.eva = monster.eva;

    console.log("hp:"+this.hp+", atk:"+ this.atk+", def:"+ this.def+", spd:"+ this.spd+", eva:"+this.eva);

    this.hpgrowth = monster.hpgrowth;
    this.atkgrowth = monster.atkgrowth;
    this.defgrowth = monster.defgrowth;
    this.spdgrowth = monster.spdgrowth;
    this.evagrowth = monster.evagrowth;

    console.log("hp growth:"+this.hpgrowth+", atk growth:"+ this.atkgrowth+", def growth:"+ this.defgrowth+", spd growth:"+ this.spdgrowth+", eva growth:"+this.evagrowth);
  }


  newMonster(name:string){
    this.name = name;
    this.level = 1;
    this.species = "Electric Mouse";
    this.pictureUrl = "";
    this.experience = 0;
    this.expToNext = 1000;

    this.hp = 10 + Math.floor((Math.random()*4) -2 );
    this.atk = 10 + Math.floor((Math.random()*4) -2 );
    this.def = 10 + Math.floor((Math.random()*4) -2 );
    this.spd = 10 + Math.floor((Math.random()*4) -2 );
    this.eva = 10 + Math.floor((Math.random()*4) -2 );

    console.log("hp:"+this.hp+", atk:"+ this.atk+", def:"+ this.def+", spd:"+ this.spd+", eva:"+this.eva);

    this.hpgrowth = Math.floor((Math.random()*3) +1 );
    this.atkgrowth = Math.floor((Math.random()*3) +1 );
    this.defgrowth = Math.floor((Math.random()*3) +1 );
    this.spdgrowth = Math.floor((Math.random()*3) +1 );
    this.evagrowth = Math.floor((Math.random()*3) +1 );

    console.log("hp growth:"+this.hpgrowth+", atk growth:"+ this.atkgrowth+", def growth:"+ this.defgrowth+", spd growth:"+ this.spdgrowth+", eva growth:"+this.evagrowth);

  }

  levelUp(){
    this.level++;
    this.expToNext = Math.floor(this.expToNext * 1.25);
    this.experience = 0;
    this.hp += Math.floor((Math.random()*this.hpgrowth)+1);
    this.atk += Math.floor((Math.random()*this.atkgrowth)+1);
    this.def += Math.floor((Math.random()*this.defgrowth)+1);
    this.spd += Math.floor((Math.random()*this.spdgrowth)+1);
    this.eva += Math.floor((Math.random()*this.evagrowth)+1);
    console.log("hp:"+this.hp+", atk:"+ this.atk+", def:"+ this.def+", spd:"+ this.spd+", eva:"+this.eva);

  }

  getHungry(){
    if(this.hunger === 0){
      if(this.hungerstrike < 4){
        this.hungerstrike++;
        alert(this.name + " is hungry");
      } else {
        alert(this.name + " has left in hunger");
      }
    } else {
      this.hunger--;
    }
  }

  getLessHungry(){
    this.hunger++;
    if(this.hunger > this.maxhunger){
      this.hunger = this.maxhunger;
      if(this.hungerstrike > 0){
        this.hungerstrike--;
      }
    }
  }

  setOwner(owner:string){
    this.owner = owner;
  }

  setName(name:string){
    this.name = name;
  }

}
