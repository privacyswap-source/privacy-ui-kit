import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const T = styled.p`
  color: #FFFFFF;
  display: none;
  ${({ theme }) => theme.mediaQueries.nav} {
    display: block;
  }
`

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          // size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          // size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          <img src='/wallet.png' alt="" style={{height:"2rem",width:"2rem",margin:" 0 1rem  0 0"}} />
         <T>Connect Wallet</T> 
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
