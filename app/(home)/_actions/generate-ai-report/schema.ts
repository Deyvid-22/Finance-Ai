import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { isMatch } from "date-fns";
import { z } from "zod";

export const generateReportShema = z.object({
  month: z.string().refine((value) => isMatch(value, "MM")),
});

export type GenerateAiReportShema = z.infer<typeof generateReportShema>;
