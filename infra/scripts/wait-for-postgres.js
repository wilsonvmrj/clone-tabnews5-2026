const { exec } = require("node:child_process");

async function check_postgres() {
  await exec(
    "docker exec postgres-dev pg_isready --host localhost",
    handleReturn,
  );
  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      check_postgres();
      return;
    }
    console.log("🟢 Postgres pronto e aceitando conexões!");
  }
}

process.stdout.write("\n\n🔴 Aguardando postgres aceitar conexões\n\n");
check_postgres();
