console.log("Digite o nome e a idade do Herói e selecione qual será o Tipo dele (Guerreiro, Mago, Monge ou Ninja)")


class heroi {
    constructor(nameHero, ageHero, typeHero){
        this.nameHero = nameHero
        this.ageHero = ageHero
        this.typeHero = typeHero
        this.heroAtack = this.atack (typeHero)
    }

    writeGretting(){
        console.log(`OLá, ${this.nameHero}!`)
    }
    writeAtack(){
        console.log(`O ${this.typeHero} atacou usando ${this.heroAtack}!`)
    }

    atack(type){
        let heroAtack
        if(type === "Guerreiro"){
            heroAtack = "espada"
        }else if(type === "Mago"){
            heroAtack = "magia"
        }else if(type === "Ninja"){
            heroAtack = "shuriken"
        }else if(type === "Monge"){
            heroAtack = "artes marciais"
        }else{
            return "Digite corretamente o Tipo ho Herói"
        }
        return heroAtack
    }


    }


    let heroInformations = new heroi("Tzu", "22", "Ninja")

    heroInformations.writeGretting()
    heroInformations.writeAtack()
