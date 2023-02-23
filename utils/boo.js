const quotes = [
    {quote: "Wanna come over for tea?", description: "Hu Tao chatting about Wangsheng Funeral Parlor"},
    {quote: "One client, two clients, three clients!", description: "Hu Tao chatting about customers"},
    {quote: `Hu as in "Who put me in this coffin?" and Tao as in "I can't geT OUt!" Hehe... No, not funny?`, description: "Hu Tao talking about her name"},
    {quote: '♪Silly-churl, billy-churl, silly-billy hilichurl. Frilly-churl, willy-churl, frilly-willy hilichurl♪ Ah, hehe...', description: "More about Hu Tao"}
]
function boo() {
    const rand = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(`

    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠄⠀⠠⠤⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠓⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⠶⠛⠋⠀⠀⠀⣦⡀⠈⡄⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀⠘⢿⣿⡷⠈⠃⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⢀⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠁⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⢠⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⡀⠀⠀⡴⠁⢀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠣⡉⠉⡠⠔⠉⢡⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢄⠈⠣⢀⠠⡄⠀⠀⠀⠀⠀
    ⠀⠈⠉⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠁⠒⠠⠚⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢡⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⡄⠀⠀⠀⠀⠀⠀⠈⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⢄⠀⠀⠀⠀⠀⠀⠉⠢⢄⣀⣀⣀⡀⠤⡄
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠢⠄⣀⡀⠀⠀⠀⠀⠀⣀⡠⠔⠊⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀      

    ${rand.quote}
    - ${rand.description}                                                                                                                         
    `)
}
module.exports = boo