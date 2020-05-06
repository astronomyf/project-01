# Project-01
Personal school project for WDM's javascript course.

# Informazioni generali
Il manager imposta un valore di X settimane, ovvero per quante volte dovrà essere stampata una lista di prodotti. Ogni settimana equivale a N secondi che vengono impostati sempre dal manager. Ogni settimana arrivano Y prodotti (generati randomicamente da un array di prodotti), per ogni prodotto viene impostato uno stato, un controllo (check), una data di scadenza, un ID etc.

# Idee
Una lista settimanale è rappresentata da un **array di oggetti**. Ogni oggetto è un prodotto che ha delle proprietà, generalizzate da un classe chiamata **Prodotto**. La lista viene periodicamente aggiornata ogni volta che finisce una settimana e ne inizia un'altra. 

Ci sarà quindi un ciclo principale che durerà N secondi e si ripeterà per X settimane. 

### Prodotti
Utilizzare un file in formato JSON come sorta di database (oppure un Array per semplificare) di nomi di prodotti e varie informazioni, es: nome, categoria, peso, costo. In seguito, una volta creato l'oggetto Prodotto grazie alla classe Prodotti si aggiungerà lo stato, la data di scandenza, l'ID e i check. 

Ogni settimana vengono generati X prodotti che si aggiungono all'array LISTA SETTIMANALE, contemporaneamente una funzione stabilisce quali prodotti rimuovere dallo stesso array in base alla scadenza o al numero di settimane che è stato sullo scaffale.

# To-dos
* [-] Creare classe generica per prodotti
  * Nome
  * Stato
  * Checks
  * Costo (?) 
  * Peso
  * ID
  * Data scadenza
* [] Creare lista prodotti (Array)
* [X] Creare funzione per estrarre un prodotto a caso da array
* [] Funzione per avere un unico ID 
* [] Funzione per generare data di scadenza
* [] Funzione per aggiungere zeri (es. 001 o 01) davanti a ID del prodotto
* [] Funzione per formattare la data
* [] Funzione per generare output dei prodotti
  * Deve avere padding che sono caratteri configurabili! 
* [] Creare un config object settabile dal manager con le info riguardanti il programma e la durata

