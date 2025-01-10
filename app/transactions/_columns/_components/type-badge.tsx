import { Badge } from "@/app/_components/ui/badge";
import { Transactions, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionsTypeBadgeProps {
  transactions: Transactions;
}

export function TransactionsTypeBadge({
  transactions,
}: TransactionsTypeBadgeProps) {
  if (transactions.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted text-primary hover:bg-muted font-bold">
        <CircleIcon className="fill-primary mr-2" size={12} />
        Deposito
      </Badge>
    );
  }
  if (transactions.type === TransactionType.EXPENSE) {
    return (
      <Badge className="text-danger bg-danger bg-opacity-10 hover:bg-muted font-bold">
        <CircleIcon className=" mr-2 fill-danger" size={12} />
        Deposito
      </Badge>
    );
  }

  return (
    <Badge className="text-white bg-white bg-opacity-10 hover:bg-muted font-bold">
      <CircleIcon className=" mr-2 fill-white" size={12} />
      Deposito
    </Badge>
  );
}
