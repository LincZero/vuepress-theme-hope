import { readdirSync } from "node:fs";
import { request } from "node:https";
import { resolve } from "node:path";

import ora from "ora";

const packagesDir = resolve(process.cwd(), "packages");
const packages = readdirSync(packagesDir);

const sync = async (): Promise<void> => {
  const npmmirrorSpinner = ora("Syncing npmmirror.com").start();

  await Promise.all(
    packages.map((packageName) =>
      import(`../packages/${packageName}/package.json`, {
        assert: { type: "json" },
      }).then(
        ({
          default: content,
        }: {
          default: Record<string, unknown> & { name: string };
        }) =>
          new Promise<void>((resolve) => {
            const req = request(
              new URL(
                `https://registry-direct.npmmirror.com/-/package/${content.name}/syncs`,
              ),
              {
                method: "PUT",
                headers: {
                  // eslint-disable-next-line @typescript-eslint/naming-convention
                  "Content-Length": 0,
                },
              },
            );

            req.write("");

            req.on("close", () => {
              resolve();
            });

            req.end();
          }),
      ),
    ),
  );

  npmmirrorSpinner.succeed();

  ora("Release complete").succeed();
};

await sync();
