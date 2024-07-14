var sentences = [
    'so fat not even Dora can explore her',
    'so  fat I swerved to miss her and ran out of gas',
    'so smelly she put on Right Guard and it went left',
    'so fat she hasn’t got cellulite, she’s got celluheavy',
    'so fat she don’t need no internet – she’s already world wide',
    'she is like a championship ring, everybody puts a finger in her',
    'so hair her armpits look like Don King in a headlock',
    'so classless she could be a Marxist utopia',
    'so fat she can hear bacon cooking in Canada',
    'so fat she won “The Bachelor” because she all those other bitches',
    'so stupid she believes everything that Brian Williams says',
    'so ugly she scared off Flavor Flav',
    'is like Domino’s Pizza, one call does it all',
    'is twice the man you are',
    'is like Bazooka Joe, 5 cents a blow',
    'is like an ATM, open 24/7',
]

export default function genSen() {
    var str = sentences[Math.floor(Math.random() * 10)];
    return str.length > 34 ? str.slice(0,32) + "..." : str
}