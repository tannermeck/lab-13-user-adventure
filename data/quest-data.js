const army = {
    id: 'army',
    title: 'Lord Farquaads Army',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'army.jpeg',
    description: `
        You sneak into a tunnel in attempt to kill Lord Farquaad, but find yourself surrounded by
        knights in the commands.
    `,
    choices: [{
        id: 'surrender',
        description: 'Plead your cause and surrender',
        result: `
            Lord Farquaad accepts your surrender, however, he commands that you fight with his army
            and serve his leadership. You are given 35 gold coins as token and no damage was done.
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'slay',
        description: 'Attackkk!!!',
        result: `
            You are able to defeat the most fierce soldier in the Farquaad army and Lord Farquaad 
            surrenders to you 50 gold coins as settlement. However, you have been badly hurt with 
            30 hp damage.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'escape',
        description: 'Attempt to escape',
        result: `
            Running for the gate that has been closed, you are trapped and surrounded,
            broughten to your knees and hanged for treason. You have received 50 hp damage.
        `,
        hp: -50,
        gold: 0
    }]
};

const princess = {
    id: 'princess',
    title: 'Attempt to Save the Princess',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'princess.jpeg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You have been assigned to save the princess from a castle surrounded 
        with guards, a mote, and a draw bridge. The bridge is down during the day,
        but raised at night. When will you make your attempt to save her?
    `,
    choices: [{
        id: 'midnight',
        description: 'Wait for nightfall',
        result: `
            You are able to steal 20 gold coins from the wagon outside the castle that was left
            unattended. While attempting to swim into the castle, you now realize they have piranhas
            in the water and you are very badly injured with 45 hp damage.
        `,
        hp: -45,
        gold: 20
    }, {
        id: 'lunch',
        description: 'Sneak in while the guards eat lunch',
        result: `
            You run across the draw bridge and find that everyone is eating lunch at the 
            main entrance of the castle. Your cover has been blown, but the guards are too 
            full to chase you down. You escape without harm, but did not find any gold.
        `,
        hp: 0,
        gold: 0
    }, {
        id: 'sunrise',
        description: 'At dawn',
        result: `
            While waiting overnight, you heard the guards partying all night, drinking, laughing, 
            and now very quiet. You are able to take a boat across the moat unheard and SAVE the 
            princess from the castle. You are awarded 90 gold coins by her father.
        `,
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'A Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    army, 
    treasure,
    princess,
];

export default quests;