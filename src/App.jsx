import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import './styles/global.scss'
import PublishForm from './components/PublishForm'
import Search from './components/Search'
import Wallet from './components/Wallet'
import DataWallet from './components/DataWallet'
import Header from './components/Header'
import Label from './components/Form/Label'
import Footer from './components/Footer'
import Button from './components/Button'
import styles from './App.module.scss'
import { MenuBar, MenuContext } from './components/Menubar'
import { WalletContext } from './components/WalletContext'
import { NetworkSelector } from './components/NetworkSelector'
import { generateWallet } from './myWeb3'

export default function App() {
    const [nextToDisplay, setNextToDisplay] = useState('Home')
    const [network, setNetwork] = useState('mainnet')

    function chooseDisplay() {
        switch (nextToDisplay) {
            case 'Manage':
                console.log('Will display Manage now')
                return <DataWallet />
            case 'Explore':
                console.log('Will display Search now')
                return <Search />
            case 'Wallet':
                console.log('Will display Wallet now')
                return <Wallet />
            case 'home':
                console.log('Will display get Started now')
                return <Wallet />
            default:
                return <Wallet />
        }
    }

    function getWallet() {
        let seed = localStorage.getItem('mnemonic')
        console.log('Seed - ', seed)
        let wallet = generateWallet(seed)
        console.log(wallet)
        return wallet
    }

    return (
        <WalletContext.Provider value={{ wallet: getWallet(), network }}>
            <div className={styles.app}>
                <Header />

                <div className={styles.container}>
                    <div className={styles.navbar}>
                        <MenuBar nextToDisplay={setNextToDisplay} />
                    </div>
                    <div className={styles.networkbar}>
                        <NetworkSelector setNetwork={setNetwork} />
                    </div>
                </div>
                <div className={styles.content}>{chooseDisplay()}</div>
                <Footer />
            </div>
        </WalletContext.Provider>
    )
}
