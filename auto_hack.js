/** @param {NS} ns **/
export async function main(ns) {
  // Get the hostname of the current server
  const target = ns.getHostname();
  //Loop the script forever
  while (true) {
    //Run weaken if server security is above minimum
    if (ns.getServerSecurityLevel(target) > ns.getServerMinSecurityLevel(target)) {
      await ns.weaken(target);
    //Run grow if server money is below max
    } else if (ns.getServerMoneyAvailable(target) < ns.getServerMaxMoney(target)) {
      await ns.grow(target);
    //Run grow if neither weaken or grow need to be run
    } else {
      await ns.hack(target);
    }
    // Sleep for a short duration to prevent exceeding the maximum execution time
    await ns.sleep(1000); // Sleep for 1 second before starting the loop again
  }
}
