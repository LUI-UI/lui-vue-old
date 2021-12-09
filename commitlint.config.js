module.exports = {
  extends: ['@commitlint/config-conventional']
}

// https://www.conventionalcommits.org/en/v1.0.0/#summary

//scope: herhangi bir commit title kullanilirken scope(kapsam?) belirtilebilir
//or: "build(web-server): web server updated..."
//values: init,runner,watcher,config,web-server,proxy,etc.

//build: build configurasyonu guncellendiginde
// chore: grunt benzeri task runnerlar guncellendiginde.
// ci: continious integration ve deploy servislerinde degisiklikler yapildiginda
// docs: dokumantasyon ile ilgili degisiklikler
// feat: yeni bir ozellik eklendiginde
// perf: performans iyilestirmeleri yapildiginda
// fix: bug fix oldugunda
// refactor: refactor edildiginde,
// revert: revert(git) yapilan degisiklikler
// test: test yazildiginda, test refactor edildiginde
// style: formatlama, indentation, eksik parantez benzeri degisikliklerde
