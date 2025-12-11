// Define players by category
const players = {
    A: ['Yusuf', 'Zubair'],    // Best players
    B: ['Malik', 'Adnan'],     // Good players
    C: ['Junaid', 'Ammar'],    // Average players
    D: ['Faizan', 'Umar']      //  players
};

// Fisher-Yates shuffle function
function shuffle(array) {
    let arr = [...array]; // Create copy
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Generate balanced teams
function generateTeams() {
    let team1 = [];
    let team2 = [];
    
    // For each category, shuffle and split players
    Object.keys(players).forEach(category => {
        const shuffled = shuffle(players[category]);
        team1.push({name: shuffled[0], category: category});
        team2.push({name: shuffled[1], category: category});
    });
    
    return {team1, team2};
}


document.querySelector('#generateBtn').addEventListener('click', function() {
    const {team1, team2} = generateTeams();
    
    let html = `
        <div class="teams-container">
            <div class="team">
                <h2>Team 1</h2>
                <ul>
                    ${team1.map(player => `<li><strong>${player.category}:</strong> ${player.name}</li>`).join('')}
                </ul>
            </div>
            <div class="team">
                <h2>Team 2</h2>
                <ul>
                    ${team2.map(player => `<li><strong>${player.category}:</strong> ${player.name}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    document.querySelector('#results').innerHTML = html;
});
