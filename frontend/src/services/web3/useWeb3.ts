import { useEffect, useState } from "react";
import Web3 from "web3";
import { Contract } from "web3-eth-contract"; // 컨트랙트 타입
import { contractABI } from "./Abi";

const useWeb3 = () => {
  const [web3, setWeb3] = useState<Web3 | undefined>(undefined);
  const [tokenContract, setTokenContract] = useState<Contract>();

  const getWeb3 = async () => {
    try {
      if (window.ethereum) {
        setWeb3(new Web3(window.ethereum as any));
      }
    } catch (e) {
      console.log(e);
    }
  };

  

  useEffect(() => {
    if (!web3) getWeb3();
    else {
        const getToken = (networkId: number) => {
            if (!web3) return;
            const instance = new web3.eth.Contract(contractABI,  "0x69C26b333BD49CB7e74F0D1D8e79fACfeF179A6d");
            setTokenContract(instance);
            };
        (async () => {
        const networkId: number = await web3.eth.net.getId();
        getToken(networkId);
        })();
    }
  }, [web3]);

  return { web3, tokenContract};
};

export default useWeb3;