import react from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Header = () => {

    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleWallet = () => {
      activateBrowserWallet();
    }

    return (
        <div id="header">
        <Link to='/' id='logo'>NINJA Marketplace</Link>

        <div id="link-containers">
          <a>Ninja mint</a>
          <a>Opensea</a>
          <a>Community</a>
          <a>Ninja Dojo</a>

          <button id="connect-wallet" onClick={handleWallet} >{!account ? 'Connect Wallet' : account}</button>
        </div>
      </div>
    );
}

export default Header;
