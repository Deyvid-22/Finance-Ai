import { TransactionsColumns } from "./_columns";
import { AddTransactionButton } from "../_components/add-transaction-button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import NavBar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";

export default async function Transactions() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transactions.findMany({
    where: {
      userId,
    },
  });

  const userCanAddTransaction = await canUserAddTransaction();

  return (
    <>
      <NavBar />
      <div className="p-6 space-y-6">
        <div className="flex w-full justify-between items-center p-6">
          <h1>Transações</h1>
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        </div>
        <DataTable
          columns={TransactionsColumns}
          data={JSON.parse(JSON.stringify(transactions))}
        />
      </div>
    </>
  );
}
