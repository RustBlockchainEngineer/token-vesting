import React, { useEffect, useState } from 'react';
import {
  Steps,
  Button,
  Input,
  Form,
  Select,
} from 'antd';
import { useWallet } from '@solana/wallet-adapter-react';
import moment from 'moment';
import {} from '../../actions';
import BN from 'bn.js';
import { AccountInfo, Connection, PublicKey } from '@solana/web3.js';
import { getFilteredProgramAccounts } from '@solana/spl-name-service';
import { Link } from 'react-router-dom';

export const Besting = () => {
  const connection = useConnection();
  const wallet = useWallet();
  const userTokenAccounts = useUserAccounts();

  const [storeID, setStoreID] = useState('');
  
  return (
    <>
      {
        <div>
          hello
        </div>
      }
    </>
  );
};

