# Progetto Hardhat - AleToken

Questo progetto rappresenta un'applicazione completa utilizzando Hardhat per sviluppare, testare e distribuire un token `ERC-20` chiamato `AleToken`. Include il contratto intelligente, script di deployment, moduli Ignition e test dettagliati per garantire la funzionalità.

## Cosa è incluso

1. **Contratto ERC-20**:
   - Implementa tutte le funzionalità dello standard ERC-20.
   - Consente trasferimenti, approvazioni e gestione del saldo dei token.

2. **Script di Deployment**:
   - Uno script per distribuire il contratto sulla blockchain locale o su reti pubbliche come Goerli.

3. **Test Completi**:
   - Test automatizzati per verificare ogni funzione del contratto.

4. **Modulo Ignition**:
   - Un modulo per il deployment modulare del contratto.

5. **Configurazione Hardhat**:
   - Configurazione per eseguire i test e il deployment su diverse reti.

---

## Struttura del Progetto

- **`contracts/AleToken.sol`**: Il contratto del token AleToken.
- **`scripts/deploy.js`**: Script per distribuire il contratto.
- **`test/AleToken.test.js`**: Test automatizzati per il contratto.
- **`ignition/modules/AleTokenModule.js`**: Modulo per la distribuzione con Ignition.
- **`hardhat.config.js`**: Configurazione del progetto Hardhat.

---

## Funzionalità del Contratto

- **ERC-20 Standard**:
  - `transfer`: Trasferisce token a un destinatario.
  - `approve`: Approva un'allocazione per un altro account.
  - `transferFrom`: Trasferisce token utilizzando un'allocazione approvata.
  - `balanceOf`: Visualizza il saldo di un account.
  - `totalSupply`: Mostra la quantità totale di token in circolazione.

- **Sicurezza**:
  - Solo il proprietario può creare nuovi token.
  - Controlli per saldi e indirizzi validi.

---

## Supporto

Se hai bisogno di aiuto, visita la [documentazione ufficiale di Hardhat](https://hardhat.org/).
