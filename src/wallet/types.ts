export interface WalletData {
  icon: string;
  currency: string;
  address: string;
  transaction: {
    icon: string;
    id: string;
    confirmIcon: string;
  };
}

export interface NFTDepositProps {
  amount: string;
  approximateUSD: string;
}
