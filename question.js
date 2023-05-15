const params = (new URL(document.location)).searchParams;
const cid = params.get("cid");
const iid = params.get("iid");
const gameName = params.get("gamename");

console.log(`gname=${gameName} cid: ${cid}, iid: ${iid}`);

document.getElementById("root").textContent = `q: ${JSON.parse(localStorage.getItem(gameName)).content[cid].colItems[iid].question}`;