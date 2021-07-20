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
            20 hp damage.
        `,
        hp: -20,
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

const steal = {
    id: 'steal',
    title: 'Choose what you steal',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'steal.jpeg',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        You find yourself at a party in the King's Castle after receiving an invitation.
        On your way to the bathroom, you notice a room full of gold. You know that you are
        behind on your house payments and could use the extra money for food and clothes. 
        What is your next move?
    `,
    choices: [{
        id: 'take',
        description: 'Fill your pockets',
        result: 'You fit what you can in your pockets and walk out casually, gaining 60 gold coins',
        hp: 0,
        gold: 60
    }, {
        id: 'leave',
        description: 'Walk away',
        result: `You keep walking to the bathroom and go back to enjoy the party. Unfortunately, 
        you do not gain any gold.
        `,
        hp: 0,
        gold: 0
    }, {
        id: 'rich',
        description: 'Fill a garbage bag',
        result: `You are able to fill a garbage bag full of gold and act like you are taking out the trash
                from the party. You go home and find yourself rich, you gained 200 gold coins.
        `,
        hp: 35,
        gold: 200
    }]
};

const quests = [
    army, 
    steal,
    princess,
];

export default quests;