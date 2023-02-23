const fs = require('fs')
const { url } = require('inspector')
const getVersion = () => {
    const packageJson = fs.readFileSync('./package.json')
    const packageData = JSON.parse(packageJson)
    return packageData.version
}
const boo = require('./utils/boo')
const yargs = require('yargs');

// define the command-line arguments using yargs
yargs.command('install <packages...>', 'Install one or more packages', (yargs) => {
  yargs.option('install-on', {
    describe: 'Specify the installation directory',
    type: 'string',
    demandOption: false,
  });
  yargs.option('silent', {
    describe: 'Run the installation silently',
    type: 'boolean',
    demandOption: false,
  });
  yargs.option('no-admin', {
    describe: 'Do not require administrator privileges',
    type: 'boolean',
    demandOption: false,
  });
})
.command('remove <packages...>', 'Remove one or more packages')
.command('update', 'Update all installed packages')
.command('upgrade', 'Upgrade all installed packages')
.command('download <url...>', 'Unofficially git clone!')
.command('boo', `Let Hu Tao's ghost spook you! Boooo!!`)

// Parse the command-line arguments
const argv = yargs.argv;
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣄⣴⡤⢦⣀⣼⢟⣾⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⡿⠋⢸⣶⠈⠙⠻⣷⣶⣶⡖⠒⠒⠒⠒⠲⢦⣤⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠋⠀⢀⡼⢳⣦⡤⠀⠀⢹⣿⡀⠀⠀⠀⠀⠀⠙⣿⣿⡿⠛⢻⡆⠀⠀⠀⠀⠀⠀⣀⡀⢀⣴⠧⠀⠀
⠀⠀⠀⠀⠀⠀⡔⢆⠀⣴⣾⣿⣿⣤⢿⣿⣧⣾⣿⠿⠒⠉⠉⠙⡟⣦⠤⡀⠀⠀⠀⣿⠿⢰⠂⢻⣗⠒⡄⠀⠀⣠⠊⡱⠃⡨⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠇⢀⡼⣿⣿⣿⡿⠃⢸⠖⠋⠁⠀⠀⠒⢆⠀⠀⡇⢈⢦⠗⣦⠀⠸⣇⢀⢸⡄⠤⢉⣷⠿⠿⢿⠃⠘⣀⣈⡇⠀⠀⠀⠀
⠀⠤⠤⠤⠔⣲⠗⠉⢘⣿⡿⠟⢳⠀⢠⠀⠀⢀⣀⣀⠈⠒⠒⠒⠓⢋⡴⠛⠐⠒⠲⢿⡟⠙⠺⣗⠀⢹⠀⠀⠘⠺⢦⠟⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣴⣿⣷⠀⠀⢸⠇⠀⠀⠸⣄⠈⣶⣾⠙⣿⣿⣿⣶⣶⣿⣯⠁⠀⠀⠀⠀⠀⢸⣿⣶⡿⠋⣿⡿⣷⣶⣶⡶⠦⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣼⣿⣿⣿⡄⠀⠸⡄⡠⠔⠒⣻⣧⣬⣉⡿⠛⠋⠉⠉⠉⠉⠉⠉⠉⠉⢻⡉⠀⠙⠛⠛⠿⡿⣿⣿⣿⣾⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣼⠋⠉⢀⣣⣁⣀⣀⣹⣜⣦⣴⣿⣿⣿⡏⠀⠀⣀⠀⢄⡀⣀⠀⠀⠀⠀⢀⢳⠀⠀⠀⠀⠀⠙⢿⣿⣟⣼⠟⢦⡀⠀⠀⠀⠀⠀⠀⠀
⡾⢿⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠸⣧⣀⣀⠬⠷⡶⣿⣦⠀⠀⢧⠀⠀⢄⠘⡆⠀⠀⠙⢿⣇⠀⠑⡄⠀⠀⠀⠀⠀⠀
⠃⠠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⣧⠀⠀⠀⢻⡏⠙⠦⣴⣿⣶⡿⠿⣤⣼⡀⠀⢀⠀⢡⠀⠀⠀⠀⠈⠓⠦⢴⣀⣀⡀⠀⠀⠀
⡆⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⡟⠋⢸⡇⢸⢁⣳⡀⠀⠀⠹⡄⠚⢻⣇⣙⣿⠀⠈⢳⣧⠀⢸⠀⢸⡷⢤⣀⠐⠤⣤⡤⠤⠤⠚⠋⠀⠀⠀
⡇⠀⠀⢻⣿⣿⣿⣿⠟⠋⢁⡟⠀⠀⣧⣿⢿⡿⢿⠦⣀⠐⢾⠒⠊⠛⠋⠉⠀⠀⣸⠃⠀⢸⡀⠘⣿⣔⠈⠙⢷⡛⠛⠒⠀⠀⠀⠀⠀⠀
⣷⡀⠀⠀⠛⢿⣯⣡⣤⡶⢛⡇⠀⠀⠸⣷⡀⠻⡾⠃⠈⠙⠚⠓⠂⠀⠀⠀⢀⡴⠃⠀⢀⣿⣿⣄⡹⡌⠙⢦⡀⠙⣄⠀⠀⠀⠀⠀⠀⠀
⠹⣿⡗⣒⠒⠒⠛⠉⠀⠀⣼⣷⠀⠀⠀⠹⣷⠀⠀⠀⢀⣠⡤⠒⠒⢲⠐⠶⠭⢴⠆⢀⣾⣿⢿⠁⠉⠛⠦⠀⣈⠑⠚⠧⡀⠀⠀⠀⠀⠀
⡆⠈⢿⣿⣷⡀⠀⠀⠀⣼⠉⠘⣆⠘⣦⣀⠙⢇⠀⠀⠈⢿⠀⠀⠀⣸⠀⠀⣠⢋⣠⠞⣿⢻⣿⠀⠀⠀⠀⠀⠈⠓⢤⡀⠙⢦⡀⠀⠀⠀
⠸⡀⠀⠙⢿⣿⣦⡀⢠⣇⠀⠀⢸⣦⡘⣿⣿⣿⣷⣄⠀⠀⠀⠀⠚⠁⣠⠾⣷⡏⠀⢰⣻⣿⠛⡄⠀⠀⠀⠀⠀⠀⠀⠈⠑⠦⣬⣷⢤⣀
⠀⡇⠀⠀⠈⠻⣿⣿⣾⡿⠀⢀⡼⢁⠙⢮⣻⣿⡟⠻⢿⣶⢤⣀⣠⢼⣗⣼⡿⠀⢀⣿⣡⣿⣶⣾⣶⡶⣶⡶⠋⠿⠓⢦⡀⠀⠀⠉⠙⠛
⠀⡇⠀⠀⠀⠀⠈⠻⣿⣧⣴⡫⠞⠁⢀⠞⠉⠛⢿⡀⢰⣿⣿⣿⣣⣴⠟⡸⠁⢀⣾⣿⣿⣿⣿⣿⣯⡼⡋⠀⠀⠀⠀⠀⠹⣄⠀⠀⠀⠀
⠀⠃⠀⠀⠀⠀⠀⣠⠼⠋⠁⠀⢀⡴⢏⠀⠀⠀⠀⣷⣿⣿⣿⣿⡿⠁⢠⠃⣠⡿⠋⣹⣿⣿⣿⣿⢟⡜⠁⢧⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀
⢠⣃⡠⠤⡄⢠⣾⢕⠃⠀⣠⠖⢿⣷⡘⣧⠀⠀⠀⣼⣿⠿⣿⡟⠀⡀⣼⣾⠋⠀⠀⢹⣿⣿⠟⢁⡞⠀⠀⠘⠃⠀⠀⠀⠀⠀⣿⡀⠀⠀
⠀⠀⠀⠀⡇⣾⠃⢸⠀⡰⠁⠀⠀⣿⣿⣿⣷⡀⣰⡟⠁⢠⣿⣴⡟⠀⣏⠙⡀⠀⣠⣿⣿⣿⠀⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⠁⠀⠀
⠀⠀⢀⠜⠀⣿⣤⠸⡀⢇⠀⢀⡜⠁⠙⢿⣿⣿⡿⠁⠀⣾⣏⢻⡇⠀⣿⣻⡇⢀⣿⣿⣿⡏⢠⣿⡆⠀⠀⢠⣾⠀⠀⣷⢀⣿⡏⠀⠈⢦
⡤⠖⠁⠀⠀⠀⠀⠀⠙⢄⠉⠛⣲⠟⠁⠀⣿⣿⣿⣿⠿⣟⣿⣌⡃⠀⢿⣿⣿⣿⣿⣿⢻⡇⣼⣿⡇⢀⣴⡿⠃⠀⠀⡿⢈⣿⠓⢤⡀⠘
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⡗⢉⠁⠀⠀⢀⣿⣿⠋⠁⠀⠈⢿⣿⣿⡄⣿⠉⠁⠘⣿⠇⣸⣧⣿⣿⣧⣾⡏⠀⠀⠀⠀⣿⣿⣿⠀⠀⠙⢆

Hu Tao Package Manager v${getVersion()}
`)
// print the parsed arguments
if (argv._[0] == 'boo') {
  boo()
}
console.log('>>>>>> DEBUG INFO <<<<<<')
console.log('Command:', argv._[0]);
console.log('Subcommand:', argv._[1]);
console.log('Packages to install:', argv.packages);
console.log('Clone target:', argv.url?.[Object.keys(argv.url)[0]])
console.log('Install on:', argv['install-on']);
console.log('Silent mode:', argv.silent);
console.log('No admin mode:', argv.noadmin);