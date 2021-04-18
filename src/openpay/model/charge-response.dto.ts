export class ChargeResponseDTO{
    id:string;
    amount: number;
    authorization?: string;
    method: string;
    operation_type: string;
    transaction_type: string;
    status: string;
    currency: string;
    creation_date: string;
    operation_date: string;
    due_date: string;
    description: string;
    error_message?: string;
    order_id: string;
    customer_id: string;
    payment_method: Record<string, any>;
}