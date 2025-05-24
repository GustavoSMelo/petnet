enum EUltimatesFire {
    FireStorm = "FireStorm",
    Fireball = "Fireball",
    FireDance = "FireDance",
    Warmth = "Warmth",
    Ember = "Ember",
}

enum EUltimatesFireDescription {
    FireStorm = "Ataque que o pet\nfaz um combo de arranhao\n causando muito dano",
    Fireball = "Ataque que o pet\n recusa comer, causando\n muita tristeza",
    FireDance = "Ataque que o pet\n faz um combo de mordidas\n causando muito dano",
    Warmth = "Defesa abraca o dono\n causando muito o \n status de fofura",
    Ember = "Ataque que o pet faz\n atacando o bixinho de \n pelucia, muito perigoso",
}

enum EUltimatesWater {
    Surf = "Surf",
    Tsunami = "Tsunami",
    Bubblegun = "Bubblegun",
    WaterCut = "WaterCut",
    Rain = "Rain",
}

enum EUltimatesWaterDescription {
    Surf = "Ataque onde o pet brinca\nNa agua, deixando \n o dia mais animado",
    Tsunami = "Ataque onde seu amigo(a)\nJoga toda a agua no chao\ncausando grande desastre",
    Bubblegun = "Meio de defesa, que\n O pet joga agua para\n evitar o banho",
    WaterCut = "Tremedeira causado\n pelo banho aumentando\n a resistencia a agua",
    Rain = "Buff que o pet\n fica na chuva para \n mostrar rebeldia",
}

enum EUltimatesShock {
    Shock = "Shock",
    Discharge = "Discharge",
    ThunderTemp = "ThunderTemp",
    LightSpear = "LightSpear",
    Tesla = "Tesla",
}

enum EUltimatesShockDescription {
    Shock = "Defesa que o pet\n realiza atraves de \n brinquedos",
    Discharge = "Buff que o pet melhora\n sua propria forca",
    ThunderTemp = "Ataque que o pet \n puxa o fio do PC causando \n muito dano de odio",
    LightSpear = "Ataque divino, \n onde o pet joga um objeto\n muito longe",
    Tesla = "Ataque que o pet\n pula em cima do PC pedindo\ncarinho, muito efetivo",
}

enum EUltimatesGhost {
    GhostOrb = "GhostOrb",
    DOTS = "DOTS",
    Haunting = "Haunting",
    SpookyJump = "SpookyJump",
    Jumpscare = "Jumpscare",
}

enum EUltimatesGhostDescription {
    GhostOrb = "Ataque surpresa onde o \ndono acorda no meio da noite\n e ve apenas os olhos do pet",
    DOTS = "Metodo de defesa onde o \npet aparece em fotos como \num easter egg",
    Haunting = "Defesa que faz o pet olhar\n fixamente para um unico \nlugar, causando medo",
    SpookyJump = "Ataque surpresa que \n o pet da um pulo \n sem motivos",
    Jumpscare = "Atk Crit que o pet\n aparece do nada, causando\n medo onde ele apareceu",
}

enum EUltimatesFairy {
    HappyBeam = "HappyBeam",
    LifeDance = "LifeDance",
    Decepti0n = "Decepti0n",
    Heal = "Heal",
    AuroraVeil = "AuroraVeil",
}

enum EUltimatesFairyDescription {
    HappyBeam = "Ataque de fofura com parentes \n causando felicidade em todos \n os comodos",
    LifeDance = "Danca junto com o dono \n causando um buff na vida \n muito alto",
    Decepti0n = "Buff que deixa o pet invisivel \n causando o status de \n maluquisse no dono",
    Heal = "Ataque surpresa que o pet \n faz carinho no dono \n healando o dono",
    AuroraVeil = "Buff surpresa que faz \n o pet estar em um momento \n perfeito para uma foto",
}

enum EUltimatesPlant {
    Growth = "Growth",
    LeafDance = "LeafDance",
    LeafCut = "LeafCut",
    FlowerSing = "FlowerSing",
    LotusBloom = "LotusBloom",
}

enum EUltimatesPlantDescription {
    Growth = "Ataque que o pet realiza\nquando esta entidado, pulando em voce\n para dizer o quao pesado ele ficou",
    LeafDance = "Buff realizado quando o pet\ndanca com folhas, causando \no status de fofura",
    LeafCut = "Contra-ataque efetivo quando\num pet esta com ciumes do outro \ndividindo a atencao do dono",
    FlowerSing = "Buff realizado quando o pet \nimita o dono cantando \nsendo muito fofo",
    LotusBloom = "Ataque poderoso que suja toda a casa\n porem efetivo contra todos\n os inimigos",
}

enum EUltimatesIce {
    Blizzard = "Blizzard",
    Icebreak = "Icebreak",
    Freezing = "Freezing",
    Tranquility = "Tranquility",
    IceRain = "IceRain",
}

enum EUltimatesIceDescription {
    Blizzard = "Grande ataque de gelo onde o pet \nnao deixa fazer carinho, \ncausando um dano imenso de gelo",
    Icebreak = "Ataque que o pet te abraca \nem um dia de frio \n conseguindo quebrar o gelo",
    Freezing = "Ataque que o pet foge\nde seus abraco \ncausando muita tristeza",
    Tranquility = "Meio de defesa que o pet \nse encolhe para fugir do frio \ncausando o status de fofura",
    IceRain = "Meio de defesa que o pet \nnao gosta de visita, sendo \nleal apenas ao seu dono",
}

interface ICanvasTCG {
    petName: string;
    ultimate:
        | EUltimatesFairy
        | EUltimatesFire
        | EUltimatesGhost
        | EUltimatesPlant
        | EUltimatesShock
        | EUltimatesWater
        | EUltimatesIce;
    def: number;
    atk: number;
    magic: number;
}

interface ICanvasTCGForm extends ICanvasTCG {
    cardType: "Water" | "Fire" | "Plant" | "Shock" | "Ghost" | "Fairy" | "Ice";
    ultimateDescription: string;
    imagePath: string;
}

export {
    type ICanvasTCG,
    type ICanvasTCGForm,
    EUltimatesFairy,
    EUltimatesFairyDescription,
    EUltimatesFire,
    EUltimatesFireDescription,
    EUltimatesGhost,
    EUltimatesGhostDescription,
    EUltimatesPlant,
    EUltimatesPlantDescription,
    EUltimatesShock,
    EUltimatesShockDescription,
    EUltimatesWater,
    EUltimatesWaterDescription,
    EUltimatesIce,
    EUltimatesIceDescription,
};
