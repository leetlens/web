import { data } from "./data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // for (const user of data) {
  //   console.log(`Creating user with question_id: ${user.question_id}`);
  //   await prisma.user.create({
  //     data: user,
  //   });
  // }

  console.log("Data seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
