import fs from "fs";

const dir = "./dist";

// Clean the dist folder for a fresh build
// Comment out this line and it works!
fs.readdirSync(dir).forEach((f) => fs.rmSync(`${dir}/${f}`));

// Simulate running a build which taks ~5s
new Promise((resolve) => {
  setTimeout(() => {
    fs.writeFileSync(`${dir}/_redirects`, "/ /test 200!");
    fs.writeFileSync(
      `${dir}/index.html`,
      "<h1>❌ Redirects don't work :(</h1>"
    );
    fs.writeFileSync(`${dir}/test.html`, "<h1>✅ Redirects work :)</h1>");
    resolve();
  }, 5000);
});
