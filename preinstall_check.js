const isUsingNpm = process.env.npm_config_git !== undefined;

if (isUsingNpm) {
  // throw `Use Yarn instead of npm`;
  console.log('Yarn usage not forced!');
}
