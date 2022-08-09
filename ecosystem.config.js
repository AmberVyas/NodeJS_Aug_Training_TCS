module.exports = {
  apps : [{
    name   : "Edureka_NodeJS_Training",
    script : "./server.mjs",
    instances : 4,
    max_memory_restart : "60M",
    env : {
      port : 6000
    }
  }]
}
