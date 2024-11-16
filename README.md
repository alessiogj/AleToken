# Progetto Hardhat - AleToken

Questo progetto rappresenta un'applicazione completa utilizzando Hardhat per sviluppare, testare e distribuire un token ERC-20 chiamato `AleToken`. Include il contratto intelligente, script di deployment, moduli Ignition e test dettagliati per garantire la funzionalità.

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

## Come iniziare

Esegui i seguenti comandi per esplorare le funzionalità del progetto:

### 1. Installa le dipendenze

Assicurati di aver installato le dipendenze necessarie:

```shell
npm install
```

### 2. Visualizza la guida dei comandi

```shell
npx hardhat help
```

### 3. Esegui i test

Esegui i test per verificare che tutto funzioni correttamente:

```shell
npx hardhat test
```

Puoi anche generare un report dettagliato sul consumo di gas durante i test:

```shell
REPORT_GAS=true npx hardhat test
```

### 4. Avvia una blockchain locale

Per testare i contratti su una blockchain simulata:

```shell
npx hardhat node
```

### 5. Deployment del contratto

#### Con uno script manuale

Distribuisci il contratto sulla rete locale:

```shell
npx hardhat run scripts/deploy.js --network localhost
```

#### Con il modulo Ignition

```shell
npx hardhat ignition deploy ./ignition/modules/AleTokenModule.js --network localhost
```

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

## Requisiti

- Node.js e npm installati sul tuo sistema.
- Hardhat configurato nel progetto.
- Configurazione di rete (es. localhost o Goerli).

---

## Supporto

Se hai bisogno di aiuto, visita la [documentazione ufficiale di Hardhat](https://hardhat.org/).