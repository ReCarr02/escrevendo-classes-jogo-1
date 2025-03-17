console.log("Digite o nome e a idade do Herói e selecione qual será o Tipo dele (Guerreiro, Mago, Monge ou Ninja)")


class heroi {
    constructor(nameHero, ageHero, typeHero){
        this.nameHero = nameHero
        this.ageHero = ageHero
        this.typeHero = typeHero
        this.heroAttack = this.attack (typeHero)
    }

    writeGretting(){
        console.log(`OLá, ${this.nameHero}!`)
    }
    writeAttack(){
        console.log(`O ${this.typeHero} atacou usando ${this.heroAttack}!`)
    }

    attack(type){
        let heroAttack
        if(type === "Guerreiro"){
            heroAttack = "espada"
        }else if(type === "Mago"){
            heroAttack = "magia"
        }else if(type === "Ninja"){
            heroAttack = "shuriken"
        }else if(type === "Monge"){
            heroAttack = "artes marciais"
        }else{
            return "Digite corretamente o Tipo ho Herói"
        }
        return heroAttack
    }


    }


    let heroInformations = new heroi("Tzu", "22", "Ninja")

    heroInformations.writeGretting()
    heroInformations.writeAttack()
